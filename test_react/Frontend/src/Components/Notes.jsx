import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteModal from './NoteModal';

function Notes({ onLogout }) {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Convert audio to text using Web Speech API
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = async (event) => {
          const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

          await createNote({
            title: 'Audio Note',
            content: transcript,
            isAudioNote: true
          });
        };

        recognition.start();
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const createNote = async (noteData) => {
    try {
      await axios.post('http://localhost:5000/api/notes', noteData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization:  `Bearer ${localStorage.getItem('token')}`}
      });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.map(note => (
          <div
            key={note._id}
            className="bg-white p-4 rounded-lg shadow cursor-pointer"
            onClick={() => {
              setSelectedNote(note);
              setShowModal(true);
            }}
          >
            <h3 className="font-bold mb-2">{note.title}</h3>
            <p className="text-gray-600 truncate">{note.content}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note._id);
                }}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 flex gap-2">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`${
            isRecording ? 'bg-red-500' : 'bg-blue-500'
          } text-white p-4 rounded-full hover:opacity-90`}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
      </div>

      {showModal && (
        <NoteModal
          note={selectedNote}
          onClose={() => {
            setShowModal(false);
            setSelectedNote(null);
          }}
          onSave={async (updatedNote) => {
            try {
              await axios.patch(
                `http://localhost:5000/api/notes/${selectedNote._id}`,
                updatedNote,
                {
                  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
              );
              fetchNotes();
              setShowModal(false);
              setSelectedNote(null);
            } catch (error) {
              console.error('Error updating note:', error);
            }
          }}
        />
      )}
    </div>
  );
}

export default Notes;
import './App.css'


function App() {
  var imageUrl = 'https://plus.unsplash.com/premium_photo-1686255006386-5f58b00ffe9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D';

  return (
    <>
      <ShowImage name="Image:-" url={imageUrl}> </ShowImage>
      {/* <ShowImage name="Nitesh" age="20"> </ShowImage> */}
    </>
  )
}

function ShowImage({name,url}) {
  return (
    <>

      <h1>{name}</h1>
      <img src={url} width="500px" height="500px"></img>
      {/* <p> {props.name}</ p>
      <p>{props.age}</p> */}
  </>
  )
}

export default App

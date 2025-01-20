//------------- By DOM -------------------

// let rootEl = document.getElementById('root');

// let h1=document.createElement('h1');
// h1.innerText = "welcome to code baithak";

// rootEl.append(h1);

//------------ By react DOM -----------------

let rootEl = document.getElementById('root');//banane ka kaam DOM ka
// let h1= React.createElement('h1', {id:"sam",className:"vohra"},"Welcome to code baithak 2");//class ni className ayga react me
// for nesting:-
// let h2= React.createElement('div', {id:"sam",className:"vohra"},React.createElement('div',{},React.createElement('h1',{},"welcomeee")));
// dikhane ka kaam reactDOM ka
let root=ReactDOM.createRoot(rootEl);
// root.render(h2);

//----------------------------------------------
let h1 = <div>
        <div>
            <h1>hello bhaii</h1>
        </div>
</div>
root.render(h1);


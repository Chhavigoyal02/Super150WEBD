


let buttons=document.querySelectorAll('button');

let input = document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click',function(e){
        let buttonText= e.target.innerText;
        if(buttonText === 'C'){
            input.value='';
        }
        else if(buttonText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value='Invalid Syntax';
            }
        }
        else{
            input.value += buttonText;
        }
    })
}

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string=string=='' ? '0' : string;
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch(error){
                document.querySelector('input').value="Syntax Error(Press AC)";
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string='';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.id == 'plusMinus'){
            string=string(-eval(string));
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
let string = "";
const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".input");


Array.from(buttons).forEach(function(button){
        button.addEventListener("click",function(e){
            if(e.target.innerHTML == "="){
                string = eval(string);
                input.value = string;
            }
            else if(e.target.innerHTML == "Clear"){
               string = "";
               input.value = string;
            }
            else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
            }
        })
    })
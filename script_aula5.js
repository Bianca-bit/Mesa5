// let h1 = document.querySelector("h1");
// console.log(h1);
// h1.style.color = "#401179";
// h1.style.textAlign = "center";

/* function acionou(){
     alert("clicou")

     let body = document.querySelector("body");
     console.log(body);
     body.style.backgroundColor = "rgb(19, 19, 19)"

     let h1 = document.querySelector("h1");
     console.log(h1);
     h1.style.backgroundColor = "rgb(19, 19, 19)"
     h1.style.color = "rgb(170, 170, 170)";
     h1.style.borderColor = "black";

     let item  = document.querySelector("item");
     console.log(h1);

     item.style.backgroundColor = "rgb(19, 19, 19)"
     h1.style.color = "rgb(170, 170, 170)";
     h1.style.borderColor = "black";
   
}*/

//let body = document.querySelector("body");




function alteraTemaComToggle(){

    
    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");
    let cards = document.querySelectorAll(".item");
    
    body.classList.toggle("darkmode1");
    h1.classList.toggle("darkmode2");
    
    for(let card of cards){
        card.classList.toggle("darkmode2");
        card.classList.toggle("darkmode3");
    }
}
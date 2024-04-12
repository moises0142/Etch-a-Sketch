body= document.querySelector("body");

askUserButton = document.createElement("button")
askUserButton.textContent="Click to change grid layout."
askUserButton.classList.add("button1");
body.appendChild(askUserButton);

squares256= document.createElement("div")
body.appendChild(squares256);
squares256.className="containerOf256Div";



const arrayOf256Square = [];
for(let i = 0; i<256; i++){
    arrayOf256Square.push(i);
}

arrayOf256Square.forEach(function(el){
    let div = document.createElement("div");
    div.className= ("div "+el);
    div.setAttribute("id","modificationsToSquares");
    div.innerHTML= ""; 
    squares256.appendChild(div);

});

let divModifications = document.querySelectorAll("#modificationsToSquares");

divModifications.forEach((div) =>{
    div.addEventListener("mouseover", ()=>{
        div.style.background = "blue";
    });
});

askUserButton.addEventListener("click", () =>{

    body.removeChild(squares256);
    let userInput = prompt("enter one number you would like the number of\
    rows and columns to be.");
    if(userInput < 100 ){}
    let newGridLayoutNumber = [] ;

    arrayOf256Square.forEach(function(el){
        let div = document.createElement("div");
        div.className= ("div "+el);
        div.setAttribute("id","modificationsToSquares");
        div.innerHTML= ""; 
        squares256.appendChild(div);
    
    });



});

let body= document.querySelector("body");

let askUserButton = document.createElement("button")
askUserButton.textContent="Click to change grid layout.";
askUserButton.classList.add("button1");
body.appendChild(askUserButton);

squaresContainer= document.createElement("div")
body.appendChild(squaresContainer);
squaresContainer.className="containerOfDiv";



let size=16;
let rowOfSquares=[]

fillRow(size);

function fillRow(fillSize){
    rowOfSquares=[];
    for(let i = 0; i<fillSize; i++){

        rowOfSquares.push(i);
    }
}

rowOfSquares.forEach(createAllTheDivForRow)

function createAllTheDivForRow(el){
    let i = 0;
    while(i<size){
        let rowDiv = document.createElement("div");
        rowDiv.className=("rowDiv"+el);
        rowDiv.classList.toggle("rowDivStyle");
        rowDiv.setAttribute("id", "modificationsToSquares");
        squaresContainer.appendChild(rowDiv);
        i++;
    }
}



let divModifications = document.querySelectorAll("#modificationsToSquares");

divModifications.forEach(addColorToDiv);

function addColorToDiv(el){
    el.style.width = 100 * (1/size)+"%";

    el.addEventListener("mouseover", ()=>{
        function randomRgb() {
            return 'rgb(' + (Math.random() * 360)+','+(Math.random() * 360)
            +','+(Math.random() * 360) + ')';
        }
        el.style.backgroundColor  =  randomRgb();
    });
}



askUserButton.addEventListener("click", () =>{

    while (squaresContainer.hasChildNodes()) {
        squaresContainer.removeChild(squaresContainer.firstChild);
      }
    size = prompt("enter one number you would like the number of\
    rows and columns to be.");
    if(size < 100){
        fillRow(size);
        rowOfSquares.forEach(createAllTheDivForRow)
        console.log(rowOfSquares)
        let divModifications = document.querySelectorAll("#modificationsToSquares");
        divModifications.forEach(addColorToDiv);
        
    }


});

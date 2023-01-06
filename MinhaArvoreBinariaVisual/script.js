defaultNode = document.querySelector("#teste");
input = document.querySelector("#input")
esquerda = document.querySelector("#esquerda");
direita = document.querySelector("#direita");

function add(){
    newNode = defaultNode.cloneNode();
    newNode.innerHTML = 20;
    esquerda.appendChild(newNode);

    newNode = defaultNode.cloneNode();
    newNode.innerHTML = 30;
    direita.appendChild(newNode);
}

function add(){
    newNode = defaultNode.cloneNode();
    newNode.innerHTML = input.value;

    if(input.value >= defaultNode.value){
        direita.appendChild(newNode);
    }else{
        esquerda.appendChild(newNode);
    }
}





/*
function add(){
    newNode = defaultNode.cloneNode();
    newNode.innerHTML = 10;
    defaultNode.appendChild(newNode);
}
*/

/*
var styleArray = {"height": "80px",
    "width": "80px",
    "border": "5px red solid",
    "border-radius": "80px",
    "text-align": "center",
    "line-height": "90px",
    "margin": "auto",
    "margin-left": "20px"};
*/

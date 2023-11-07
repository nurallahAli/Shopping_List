let shoppingList = ["Milk", "Fruit", "Vegetables", "Cereal", "Cheese"];

let Purchases = ["Eggs", "Chicken", "Bread", "Rice", "Pasta",];


window.onload = _ => Zumkaufen()


function dispalyList(arr) {
 // let itemList = "<div id="list" class="list"></div>";
    let itemList = document.getElementById("list");
  
    itemList.innerHTML = "";

    for(let j = 0; j < arr.length; j++){
        itemList.innerHTML += Item(arr[j]);
    }
};

function Zumkaufen(){
    dispalyList(shoppingList)
}

function Gekauft() {
    dispalyList(Purchases)
};
function Add(){
    let inputValue = document.getElementById("it").value
    if(inputValue === ""){
        alert("In Vale Value")
    }else{
        shoppingList.unshift(inputValue)   
    }
    Zumkaufen()
}
function Remove(event){
    shoppingList.splice(shoppingList.indexOf(event.target.id), 1)
    Purchases.splice(Purchases.indexOf(event.target.id), 1)
      Zumkaufen()
}
function AddTo (event) {
    shoppingList.splice((event.target.id), 1)
    Purchases.unshift((event.target.id))
    Gekauft(event)
}
function Edit (event) {
  let editList = prompt("Give Mi Your Edit")
  console.log(editList) 
 if(shoppingList[shoppingList.indexOf(event.target.id)] === event.target.id){
    shoppingList[shoppingList.indexOf(event.target.id)] = editList;
 }else if(Purchases[Purchases.indexOf(event.target.id)] === event.target.id){
    Purchases[Purchases.indexOf(event.target.id)] = editList;
 }
    Zumkaufen()
};

function Item(element) {
    return `
    <div class="child">
        <span>${element}</span>
            <div class="btn">
                <button id="${element}" onclick="Remove(event)">
                    <i class="fa-solid fa-trash one"id="${element}"></i>
                </button>
                <button id="${element}" onclick="Edit(event)">
                    <i class="fa-solid fa-pen-to-square two"id="${element}"></i>
                </button>
                <button id="${element}" onclick="AddTo(event)">
                    <i class="fa-solid fa-check three"id="${element}"></i>
                </button>
            </div>
    </div>`
};







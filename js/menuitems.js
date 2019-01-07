//Menu items
function getMenuItems() {
  let menuitem = [
    "Home",
    "Login",
    "Register",
    "Update User",
    "Order",
    "Logout"
  ];

  function menuUL(array) {
    // Create the list element:
    let list = document.createElement("ul");
    list.setAttribute("id", "menubar");
    list.setAttribute("class", "menubar");
   
    for (let i = 0; i < array.length; i++) {
     
     
      // Create the list item:
      let itemText = array[i];
      let item = document.createElement("li");
      let aItem = document.createElement("a");
      aItem.appendChild(document.createTextNode(itemText));

      item.setAttribute("id", itemText.replace(/\s/g, "").toLowerCase());
      item.setAttribute("onclick", "setActive(this.id)");

    
         // Set its contents:
      item.appendChild(aItem);

      // Add it to the list:
      list.appendChild(item);
 

     
    }

    //Return the constructed list:
    return list;
  }
  // Add the contents of options[0] to #foo:
  document.getElementById("navdiv").appendChild(menuUL(menuitem));
}

//GET Pizza Bases
function getPizzaBase() {
  let pizzabase = [
    { description: "Pequiena", price: 5.0 },
    { description: "Media", price: 8.0 },
    { description: "Grande", price: 10.0 }
  ];

  //let arraFromJson = JSON.parse(pizzabase);

  function baselist(array) {
    // Create the list element:

    let form = document.createElement("form");
    form.setAttribute("id", "pizzabasefomr");
    let fragment = document.createDocumentFragment();
    let btnIngredinetes = document.createElement("input");
    let qntText = document.createElement("input");
    qntText.setAttribute('type','text');
    qntText.setAttribute('style','width:45px;')
    btnIngredinetes.setAttribute("type", "button");
    btnIngredinetes.setAttribute("value", "Ingredientes >");
    btnIngredinetes.setAttribute("onclick", "getIngredients()");
    fragment.appendChild(btnIngredinetes);

    for (let x in array) {
      //  alert(array[x].price);
      let item = document.createElement("input");
      form.appendChild(document.createTextNode(array[x].description));
      item.setAttribute("type", "radio");
      item.setAttribute("name", "base");
      item.setAttribute("value", array[x].price);
      form.appendChild(item);

      form.appendChild(document.createElement("br"));
    }

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createTextNode("Quantidade: "));
    form.appendChild(qntText);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(fragment);

    //Return the constructed list:
    return form;
  }
  // Add the contents 
  document.getElementById("formdiv").appendChild(baselist(pizzabase));
}

//GET Ingredients
function getIngredients() {
  let ingredients = [
    "Molho de Tomate",
    "Mozzarella",
    "Parmesão",
    "Gorgonzola",
    "Queijo da Serra",
    "Fiambre",
    "Presunto",
    "Chouriço",
    "Pepperoni",
    "Ananás",
    "Maçã",
    "Banana"
  ];

  document.getElementById("pizzabasefomr").classList.add("hide");
  let element = document.getElementById("formdiv");
  let fragment = document.createDocumentFragment();
  let btnConcluir = document.createElement("input");
  btnConcluir.setAttribute("type", "button");
  btnConcluir.setAttribute("value", "Concluir >");

  ingredients.forEach(function(ingredient) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", ingredient);
    let label = document.createTextNode(ingredient);
    fragment.appendChild(checkbox);
    fragment.appendChild(label);
    fragment.appendChild(document.createElement("br"));
    fragment.appendChild(btnConcluir);
  });
  // Add the contents of
  element.appendChild(fragment);
}

function startTest() {
  // alert('Function started');

  console.log("DOOOOM LOADED");

}

getIngredients();

function fstart() {
  startTest();
  getMenuItems();
  getPizzaBase();
}

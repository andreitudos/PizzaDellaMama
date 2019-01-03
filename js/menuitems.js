function getMenuItems(){
    var menuitem = [
        'Home',
        'Login',
        'Register',
        'Update User',
        'Order',
        'Logout',
    ];
    
    function menuUL(array) {
    // Create the list element:
  // Create the list element:
  let list = document.createElement('ul');
  list.setAttribute('id','menubar');
  list.setAttribute('class', 'menubar');

  for(let i = 0; i < array.length; i++) {
      // Create the list item:
      let itemText = array[i];
      let item = document.createElement('li');
      let aItem = document.createElement('a');
     
      item.setAttribute('id', (itemText.replace(/\s/g, "")).toLowerCase());
      item.setAttribute('onclick','setActive(this.id)');


      // Set its contents:
      item.appendChild(document.createTextNode(aItem));
      // item.appendChild(aItem);

      // Add it to the list:
      list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}
    
    // Add the contents of options[0] to #foo:
    document.getElementById('navdiv').appendChild(menuUL(menuitem));
}

function setActive(itemID) {
  let item = document.getElementById(itemID);
  let text = document.getElementsByClassName("activo")[0];
  let divId = document.getElementById(itemID).id+'div';
 // alert(item.id);
 //text = 'homediv';
//alert(text);

  if (text) {
    document.getElementById(text.id).classList.remove("activo");
    document.getElementById(text.id+'div').classList.add("hide");
   // document.getElementById(text.id+'div').classList.remove("pagediv");
   console.log(text.id+'; ' + divId);
   }
   
    item.classList.add("activo");
    document.getElementById(divId).classList.remove("hide");
}

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
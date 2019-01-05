function setActive(itemID) {
  let item = document.getElementById(itemID);
  let text = document.getElementsByClassName("activo")[0];
  let divId = document.getElementById(itemID).id + "div";
  let hdiv = document.getElementById("homediv").className.trim();

  if (text) {
    document.getElementById(text.id).classList.remove("activo");
    document.getElementById(text.id + "div").classList.add("hide");
  }

  if (hdiv === "pagediv") {
    document.getElementById("homediv").classList.add("hide");
  }

  item.classList.add("activo");
  document.getElementById(divId).classList.remove("hide");
}

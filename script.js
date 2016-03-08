var i;
function image_click(sender){
  document.getElementById('overlay-container').style.display = "block";
  document.getElementById('password').value = "";
  i = sender;
  // overlay.style.display = "block";
  // sender.style.display = "none";
}

function check(){
  if(i.id == document.getElementById('password').value){
    i.style.display = "none"}
  else alert("Неверный пароль");
  document.getElementById('overlay-container').style.display = "none";
}

function overlayHide(sender){
    document.getElementById('overlay-container').style.display = "none";

}

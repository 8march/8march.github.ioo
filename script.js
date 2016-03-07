var i;
function image_click(sender){
  document.getElementById('overlay').style.display = "block";
  document.getElementById('password').value = "";
  i = sender;
  // overlay.style.display = "block";
  // sender.style.display = "none";
}

function check(){
  if(i.id == document.getElementById('password').value){
    i.style.display = "none"}
  else alert("не угадали)))");
  document.getElementById('overlay').style.display = "none";
}

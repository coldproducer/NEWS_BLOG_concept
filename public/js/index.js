var btn = document.querySelector('#loadmore')
var currentItem = 2;
function loadmore(){
  let boxes1 = [...document.querySelectorAll('.news__1')];
  let boxes2 = [...document.querySelectorAll('.news__2')];
  for ( var i = currentItem; i < currentItem + 1; i++){
    boxes1[i].style.display = 'block';
    boxes2[i].style.display = 'block';
  }
  currentItem +=1;
  if(currentItem >= boxes1.length ){
    btn.style.display = 'none'
  }
}

function openFullMenu(){
  let box1 = document.getElementById("another_page");
  if (box1.style.display !=="block"){
    box1.style.display = "block";
  }
  else{
    box1.style.display = "none";
  }

}

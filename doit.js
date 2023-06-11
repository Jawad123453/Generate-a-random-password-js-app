let r1=document.getElementById("random_1");
let r2=document.getElementById("random_2");
let r3=document.getElementById("random_3");
let r4=document.getElementById("random_4");

// let main_class=document.getElementsByClassName(".holder");


function onc(){
  r1.textContent=random(length);
  r2.textContent=random(length);
  r3.textContent=random(length);
  r4.textContent=random(length);
  // document.main_class.style.color="blue";
}
function random(){
  return (Math.random() + 1).toString(36).substring(2);
};
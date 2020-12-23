var speed = 1; //時間あたりに移動するpx量です。デフォルトでは1pxにしていますが、自由に変えてください
var interval = 100; //移動する間隔です。デフォルトでは0.1秒おきにしていますが、自由に変えてください
var scrollTop = document.body.scrollTop;




//ナビゲーションタブ
const nav_items =[]
for(let i=1; i <= 6; i++){
nav_items.push(document.getElementById(`nav_item${i}`))}

//ナビゲーションタブ「ホバー時」
const nav_hoverAreas =[]
for(let i=1; i <= 6; i++){
nav_hoverAreas.push(document.getElementById(`active_navItem${i}`))}

const nav_bg = document.getElementById("nav_bg")
const nav_overlay = document.getElementById("nav_overlay")


const nav_mousehover = () =>{
for(let i=0; i <=5; i++) {
nav_items[i].addEventListener("mouseenter", function (event) {
remove_all();
 nav_hoverAreas[i].classList.add('active');
 nav_overlay.classList.add('nav_overlay_active');
 nav_bg.style.height="830px";
}, false);
}
}


const remove_active = () =>{
for(let i=0; i <=5; i++) {
nav_hoverAreas[i].addEventListener("mouseleave", function (event) {
remove_all();
nav_hoverAreas[i].classList.remove('active');
 nav_bg.style.height="140px";
 nav_bg.style.minHeight="0px";
 nav_overlay.classList.remove('nav_overlay_active');
}, false);
    }
}


const remove_all = () =>{
for(let i=0; i <=5; i++) {
nav_hoverAreas[i].classList.remove('active');}}



nav_mousehover();
remove_active();

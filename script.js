const tambahBtn = document.getElementById("tambahbtn");

const resetBtn = document.getElementById("resetbtn");

const kurangBtn = document.getElementById("tambahbtn");

const demo= document.getElementById("demo"); 
let hitung =0;

tambahBtn.onclick = function (){
    demo.innerHTML =hitung++;
}
kurangBtn.onclick = function (){
    demo.innerHTML =hitung--;
}
resetBtn.onclick = function (){
    demo.innerHTML =0;
}

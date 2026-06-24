function calculatePrice() {

let area = document.getElementById("area").value;
let type = document.getElementById("type").value;

if(area === ""){
document.getElementById("result").innerHTML =
"Podaj powierzchnię";
return;
}

let total = area * type;

document.getElementById("result").innerHTML =
"Szacunkowa cena: od " +
total.toLocaleString() +
" zł";

}

var sell = 100;
var addMoney = prompt("Telefonni sotib olishga qancha pulingiz bor?:");
var buy = document.createElement("h1");
document.body.append(buy);
document.body.style.backgroundColor = "yellow";

if (addMoney >= sell) {
  console.log("Telefonni sotib olishga yetarli.");
  buy.append("Telefonni sotib olishga yetarli.");
} else {
  console.log("Kechirasiz! Pulingiz yetmaydi!");
  buy.append("Kechirasiz! Pulingiz yetmaydi!");
}
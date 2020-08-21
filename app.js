let salt = 0
let shaker = {
  name: "shaker",
  count: 1,
  baseMult: 1,
  upgradeMult: 1,
  mult: 1,
  price: 10
}
let film = {
  name: "film",
  count: 0,
  multperBuy: 1,
  baseMult: 0,
  upgradeMult: 1,
  gen: 0,
  price: 50,
  inflation: 1.2
}

let canon = {
  name: "canon",
  count: 0,
  multperBuy: 5,
  baseMult: 0,
  upgradeMult: 1,
  gen: 0,
  price: 100,
  inflation: 1.3
}

let team = {
  name: "team",
  count: 0,
  multperBuy: 25,
  baseMult: 0,
  upgradeMult: 1,
  gen: 0,
  price: 200,
  inflation: 1.4
}

let troll = {
  name: "troll",
  count: 0,
  multperBuy: 500,
  baseMult: 0,
  upgradeMult: 1,
  gen: 0,
  price: 1000,
  inflation: 1.5
}

let politics ={
  name: "politics",
  count: 0,
  multperBuy: 1000000,
  baseMult: 0,
  upgradeMult: 1,
  gen: 0,
  price: 4790000,
  inflation: 1.1
}

let totalgen = 0

function mine(){
  salt += shaker.mult
  drawScore()
}

function buy(object){
  if(salt >= object.price ){
    salt -= object.price
    object.count++
    object.baseMult += object.multperBuy
    object.gen = object.upgradeMult*object.baseMult
    object.price = Math.floor(Math.pow(object.price, object.inflation))
    drawUpgrade(object)
    drawScore()
    }
}

function buyShaker(){
  if(salt >= shaker.price ){
  salt -= shaker.price
  shaker.count++
  shaker.baseMult++
  shaker.mult = shaker.upgradeMult*shaker.baseMult
  shaker.price = Math.floor(Math.pow(shaker.price, 1.1))
  }
  else{
    alert("Not enough Salt!")
  }
  drawShaker()
  drawScore()
}

function autoSalt(){
  salt += film.gen + canon.gen
  // salt += film.gen
  // salt += film.gen
  // salt += film.gen
  drawScore()
}

setInterval(autoSalt, 1000)


function drawUpgrade(object){
  document.getElementById(`${object.name}Count`).innerText = `Count: ${object.count}`
  document.getElementById(`${object.name}Gen`).innerText = `Currently Generating:  ${object.gen} S/S`
  document.getElementById(`${object.name}Price`).innerText = ` $${object.price}`

}

function drawShaker(){
  document.getElementById("shakerCount").innerText = `Count: ${shaker.count}`
  document.getElementById("shakerMult").innerText = `Currently Multiplying Your Clicks by: ${shaker.mult}`
  document.getElementById("shakerPrice").innerText = `$${shaker.price}`
}

function drawScore(){
  totalgen = film.gen + canon.gen +troll.gen +team.gen
  document.getElementById("saltCount").innerText = `Salt: ${salt}`
  document.getElementById("saltPS").innerText = `Salt/Second: ${totalgen} S/S`
}
drawScore()
drawUpgrade(film)
drawUpgrade(canon)
drawUpgrade(troll)
drawUpgrade(team)
drawUpgrade(politics)
drawShaker()


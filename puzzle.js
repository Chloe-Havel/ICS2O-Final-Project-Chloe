
var rows = 3
var columns = 3

var currTile
var otherTile //blank tile

var turns = 0

// var imgOrder = ["1" "2" "3" "4" "5" "6" "7" "8" "9"]
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]

window.onload = function() {
  for (let r=0; r < rows; r++) {
    for (let c=0; c < columns; c++) {

      //img id="0-0" src="1.jpg"
      let tile = document.createElement("img")
      tile.id = r.toString() + "-" + c.toString()
      tile.src = imgOrder.shift() + ".jpg"

      //Drag function 
      tile.addEventListener("dragstart", dragStart)  //clike an image and you can drag it
      tile.addEventListener("dragover", dragOver)    // being able to move the img when it is cliked 
      tile.addEventListener("dragenter", dragEnter)  //dragging the img onto a differnt one 
      tile.addEventListener("dragleavre", dragLeave) //dragging the img and leaving the img on another one
      tile.addEventListener("drop", dragDrop)        //drag an img over a differn't one an ddrop the img
      tile.addEventListener("dragend", dragEnd)      //after drang and drop, swap the two tiles

      document.getElementById("bard").append(tile)

      }
  }
}

function dragStart() {
  currTile = this // this refers to the img tile being dragged
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
}

function dragLeave() {

}

function dragDrop() {
  otherTile = this // this refers to the img tile being dropped on
}

function dragEnd() {
  if(!otherTile.src.includes("3.jpg")) {
    return
  }

  let currCoords = currTile.id.split("-") //ex) "0-0" -> ["0", "0"]
  let r = parseInt(currCoods[0])
  let c = parseInt(currCoords[1])
}


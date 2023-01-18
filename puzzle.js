
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
      tile.addEventListener("dragstart", dragStart)
      tile.addEventListener("dragover", dragOver)
      tile.addEventListener("dragenter", dragEnter)
      tile.addEventListener("dragleavre", dragLeave)
      tile.addEventListener("drop", dragDrop)
      tile.addEventListener("dragend", dragEnd)

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
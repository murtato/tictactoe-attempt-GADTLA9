var turn = "X"
var tiles = document.getElementsByClassName('tile')	

// loop through the tiles and add click handlers
// to each one
for (var i=0; i < tiles.length; i++) {
	tiles[i].addEventListener('click', callback)
}

function callback (event) {
	event.target.innerHTML = turn
	winCheck()

	// change turn
	if (turn === "X")
		turn = "O"
	else
		turn = "X"

	// disable double-clicking
	event.target.removeEventListener('click', callback)
}

function winCheck () {
	var win = false
	var winCombos = [
		[0,1,2], // across
		[3,4,5],
		[6,7,8],
		[0,3,6], // down
		[1,4,7],
		[2,5,8],
		[0,4,8], // diagonal
		[6,4,2]
	]

	winCombos.forEach(function (combo) {
		var tile1 = tiles[combo[0]].innerHTML
		var tile2 = tiles[combo[1]].innerHTML
		var tile3 = tiles[combo[2]].innerHTML

		if (tile1 === tile2 && tile2 === tile3  && tile1 !== ' ') {
			win = true
			alert("Player " + turn + " Wins!")

			// Disable game after win
			for (var i=0; i < tiles.length; i++) {
				tiles[i].removeEventListener('click', callback)
			}
		}
	})

	// check for tie
	if (win)
		return true

	var tie = true
	for (var i=0; i < tiles.length; i++) {
		if (tiles[i].innerHTML === ' ')
			tie = false
	}
	if (tie)
		alert("Tie Game!")

}

// Reset game board
document.getElementById('reset').addEventListener('click', function (e) {
	for (var i=0; i < tiles.length; i++) {
		tiles[i].innerHTML = ' '
		tiles[i].addEventListener('click', callback)
	}
})

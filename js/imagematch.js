/* 
 * Project: Image Match Game JavaScript 
 * Author:  Simon Prickett
 * Date:    2014 
 * URL:     http://github.com/simonprickett/imagematch/
 */

var imageMatch = {
	tiles: [ '1', '2', '3', '4', 
		     '5', '6', '7', '8', 
		     '1', '2', '3', '4', 
		     '5', '6', '7', '8'
		    ],
    tilesPerRow: 4,

	newGame: function() {
		var n = 0,
			gameBoard = document.getElementById('gameboard'),
			tilesHtml = '';

		// Randomize image tile array
		imageMatch.shuffleTiles();

		// Generate new tiles
		for (n = 1; n <= this.tiles.length; n++) {
			tilesHtml += '<div id="tile' + n + '" class="gametile facedown" data-image="' + this.tiles[n - 1] + '"></div>';
		}

		gameBoard.innerHTML = tilesHtml;

		// Set click handler for tile
		for (n = 1; n <= this.tiles.length; n++) {
			document.getElementById('tile' + n).addEventListener('click', imageMatch.tileClicked);
		}
	},

	shuffleTiles: function() {
		// TODO imageMatch.tiles = ;
		return;
	},

	tileClicked: function(e) {
		console.log('hello');
		e.target.className = e.target.className.replace('facedown', 'img' + e.target.dataset.image);
		if (imageMatch.gameOver()) {
			alert('Game over!');
			imageMatch.newGame();
		}
	},

	gameOver: function() {
		return document.getElementsByClassName('facedown').length == 0;
	}
};

window.onload = function() {
	imageMatch.newGame();
}
let GameStart = {
	setBlacks: function () {
		this.setPawns(2, "Black");
	},
	setPawns: function (row, colour) {
		y = row;

		for (x = 1; x <= GameBoard.width; x++) {
			pawn = new Pawn(x, y, colour);
			Main.BlackPieces.push(pawn);
			console.log(pawn);
		}
	},
};

let GameStart = {
	setBlacks: function () {
		this.setPawns(2, "Black");
	},
	setBlacks: function () {
		x = 1;
		for (i = 1; i <3 ; i++) {
			this.setRooks(1, "Black");	
			x = x + 7;
		}
	},

	setPawns: function (row, colour) {
		y = row;

		for (x = 1; x <= GameBoard.width; x++) {
			pawn = new Pawn(x, y, colour);
			Main.BlackPieces.push(pawn);
			console.log(pawn);
		}
	},
	setRooks: function (row, colour) {
		y = row;

		for (a = 1; a < 2 ; a++) {
			rook = new Rook(x, y, colour);
			Main.BlackPieces.push(rook);
			console.log(rook);
		}
	},
};

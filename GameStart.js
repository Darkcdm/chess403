let GameStart = {
	setBlacks: function () {
		this.setPawns(2, "Black");
		this.setBishop(1, 3, "Black");
		this.setBishop(1, 6, "Black");
		this.setKnight(1, 2, "Black");
		this.setKnight(1, 7, "Black");
		this.setQueen(1, 4, "Black");
		this.setKing(1, 5, "Black");
		this.setPawns(7, "White");
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
	setBishop: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 3) {
			bishop = new Bishop(x, y, colour);
			Main.BlackPieces.push(bishop);
			console.log(bishop);
		} else if (y == 1 && x == 6) {
			bishop = new Bishop(x, y, colour);
			Main.BlackPieces.push(bishop);
			console.log(bishop);
		}
	},
	setKnight: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 2) {
			knight = new Knight(x, y, colour);
			Main.BlackPieces.push(knight);
			console.log(knight);
		} else if (y == 1 && x == 7) {
			knight = new Knight(x, y, colour);
			Main.BlackPieces.push(knight);
			console.log(knight);
		}
	},
	setQueen: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 4) {
			queen = new Queen(x, y, colour);
			Main.BlackPieces.push(queen);
			console.log(queen);
		}
	},
	setKing: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 5) {
			king = new King(x, y, colour);
			Main.BlackPieces.push(king);
			console.log(king);
		}
	},
};

let GameStart = {
	setBlacks: function () {
		this.setPawns(2, "Black");
		this.setBishop(1, 3, "Black");
		this.setBishop(1, 6, "Black");
		this.setKnight(1, 2, "Black");
		this.setKnight(1, 7, "Black");
		this.setQueen(1, 4, "Black");
		this.setKing(1, 5, "Black");
		this.setRook(1, 1, "Black");
		this.setRook(1, 8, "Black");
	},
	setWhites: function () {
		this.setPawns(7, "White");
		this.setBishop(8, 3, "white");
		this.setBishop(8, 6, "White");
		this.setKnight(8, 2, "White");
		this.setKnight(8, 7, "White");
		this.setQueen(8, 4, "White");
		this.setKing(8, 5, "White");
		this.setRook(8,1, "White");
		this.setRook(8, 8, "White");
	},
	setPawns: function (row, colour) {
		y = row;

		for (x = 1; x <= GameBoard.width; x++) {
			pawn = new Pawn(x, y, colour);
			Main.BlackPieces.push(pawn);
			console.log(pawn);
		}
	},
	setRooks: function (row, collum, colour) {
		y = row;
		x = collum;

		
		if (y == 1 && x == 1 || y == 1 && x == 8) {
			rook = new Rook(x, y, colour);
			Main.BlackPieces.push(rook);
			console.log(rook);
		} else if (y == 8 && x == 1 || y == 8 && x == 8) {
			rook = new Rook(x, y, colour);
			Main.BlackPieces.push(rook);
			console.log(rook);
		}
	},
	setBishop: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 3 || y == 1 && x == 6) {
			bishop = new Bishop(x, y, colour);
			Main.BlackPieces.push(bishop);
			console.log(bishop);
		} else if (y == 8 && x == 3 || y == 8 && x == 6) {
			bishop = new Bishop(x, y, colour);
			Main.BlackPieces.push(bishop);
			console.log(bishop);
		}
	},
	setKnight: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 2 || y == 1 && x == 7) {
			knight = new Knight(x, y, colour);
			Main.BlackPieces.push(knight);
			console.log(knight);
		} else if (y == 8 && x == 2 || y == 8 && x == 7) {
			knight = new Knight(x, y, colour);
			Main.BlackPieces.push(knight);
			console.log(knight);
		}
	},
	setQueen: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 4 || y == 8 && x == 4) {
			queen = new Queen(x, y, colour);
			Main.BlackPieces.push(queen);
			console.log(queen);
		}
	},
	setKing: function (row, collum, colour) {
		y = row;
		x = collum;

		if (y == 1 && x == 5 || y == 8 && x == 5) {
			king = new King(x, y, colour);
			Main.BlackPieces.push(king);
			console.log(king);
		}
	},
};

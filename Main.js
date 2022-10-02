let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	ActiveCell: [],
	ActiveButton: [],
	test(test) {
		this.ActiveButton = test;
	},
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameStart.setWhites();
		GameBoard.render(body);
	},
	playPiece: function (piece, cell) {
		//check if player is playing the same cell
		if (cell != this.ActiveCell) {
			//checking if there even is an active cell so far
			if (this.ActiveCell.length != 0) {
				GameBoard.paintCellDefault(this.ActiveCell);
			}
			this.switchActiveCell(cell);
			GameBoard.paintSelectCell(this.ActiveCell);
		}
	},
	switchActiveCell(cell) {
		this.ActiveCell = cell;
	},
};

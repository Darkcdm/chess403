let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	ActiveCell: [],
	ActiveButton: [],
	PaintedCell: [],
	switchActiveCell(cell) {
		this.ActiveCell = cell;
	},
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameStart.setWhites();
		GameBoard.render(body);
	},

	selectPiece: function (piece, cell) {
		GameBoard.resetAllPaints();
		//check if player is playing the same cell
		if (cell != this.ActiveCell) {
			//checking if there even is an active cell so far
			if (this.ActiveCell.length != 0) {
				GameBoard.paintCellDefault(this.ActiveCell);
			}
			this.switchActiveCell(cell);

			if (this.ActiveCell.piece != null) {
				GameBoard.paintSelectCell(this.ActiveCell);
			}

			if (piece != null) {
				piece.showLegalMoves();
			}
		}
	},
};

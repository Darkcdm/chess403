class King {
	constructor(startX, startY, Colour) {
		this.X = startX;
		this.Y = startY;
		this.Colour = Colour;

		this.Symbol = "K";
}
	checkLegalMove(startX, startY, Colour, CellID) {
		this.X = startX;
		this.Y = startY;
		this.Colour = Colour;
		desiredX = CellID[x];
		desiredY = CellID[y];
		Main.playPiece(piece, cell);

		if (cell.id = CellID){
			if(desiredX == this.X + 1 || desiredX == this.X && desiredY != this.Y || desiredX == this.X -1 || desiredY == this.Y +1 || desiredY == this.Y && desiredX != this.X ||  desiredY == this.Y-1){
				if(GameBoard.cell.piece == null){
					console.log("legal move");
				} else{
					if(GameBoard.cell.piece.Colour == this.Colour){
						console.log("you cant kill your alies");
					}
					else{
						console.log("you can kill your enemy");
					}
				}
			}
			else{
				console.log("ilegal move")
			}
		}
	}
	move(desiredX, desiredY) {
		GameBoard.pieceID(desiredX, desiredY);
	}
}
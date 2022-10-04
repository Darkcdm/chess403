class Pawn {
	constructor(startX, startY, Colour) {
		this.X = startX;
		this.Y = startY;
		this.Colour = Colour;
		this.untouched = true;

		if (this.Colour == "Black") {
			this.velocity = 1;
		} else {
			this.velocity = -1;
		}

		this.Symbol = "P";
	}
	checkLegalMove(desiredX, desiredY) {}
	showLegalMoves() {
		let vector = this.velocity;

		let desiredX = this.X;
		let desiredY = this.Y + vector;

		let cellID = Pairing.getID(desiredX, desiredY);

		let cell = document.getElementById(cellID);

		GameBoard.paintPossibleMoves(cell);

		if (this.untouched) {
			vector = vector * 2;

			let desiredX = this.X;
			let desiredY = this.Y + vector;

			let cellID = Pairing.getID(desiredX, desiredY);

			let cell = document.getElementById(cellID);

			GameBoard.paintPossibleMoves(cell);
		}
	}
	updateCoords(ID) {
		coords = Pairing.getCoords(ID);
		this.X = coords[0];
		this.Y = coords[1];
	}
	move() {}
}

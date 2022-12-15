class Pawn {
	constructor(startX, startY, Colour) {
		this.X = startX;
		this.Y = startY;
		this.Colour = Colour;
		this.untouched = true;
		this.legalMoves = [];

		if (this.Colour == "Black") {
			this.velocity = 1;
		} else {
			this.velocity = -1;
		}

		this.calculateLegalMoves();

		this.Symbol = "P";
	}
	checkLegalMove(desiredX, desiredY) {}
	calculateLegalMoves() {
		let vector = this.velocity;

		let desiredX = this.X;
		let desiredY = this.Y + vector;

		let cellID = Pairing.getID(desiredX, desiredY);

		this.legalMoves.push(cellID);

		if (this.untouched) {
			vector = vector * 2;

			let desiredX = this.X;
			let desiredY = this.Y + vector;

			let cellID = Pairing.getID(desiredX, desiredY);

			this.legalMoves.push(cellID);
		}
	}
	showLegalMoves() {
		for (let i = 0; i < this.legalMoves.length; i++) {
			let cell = document.getElementById(this.legalMoves[i]);
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

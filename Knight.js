class Knight {
	constructor(startX, startY, Colour) {
		this.X = startX;
		this.Y = startY;
		this.Colour = Colour;
		
		this.Symbol = "Kn";
	}
	showLegalMoves() {
		//check piece
		if (this.Symbol == "Kn")
			console.log("Yo soy Knight");


	}


	checkLegalMove(desiredX, desiredY) {
		//check, jestli je na hrací ploše
		if (this.X > 8 || this.X < 1){
			console.log("Mimo hrací pole na ose x");
		}
		else if (this.Y > 8 || this.Y < 1) {
			console.log("Mimo hrací pole na ose y");
		}
	}
	move() {}
}

/*if (this.X > 8 || this.X < 1){
	console.log("Mimo hrací pole na ose x");
}
else if (this.Y > 8 || this.Y < 1) {
	console.log("Mimo hrací pole na ose y");
}*/
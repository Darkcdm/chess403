let GameBoard = {
	width: 8,
	height: 8,

	gameArea: document.createElement("table"),

	render: function (body) {
		console.log("rendering");
		for (y = 1; y <= this.height; y++) {
			console.log("Creating Row");
			row = document.createElement("tr");
			for (x = 1; x <= this.width; x++) {
				console.log("creating cell");
				//even row
				if (y % 2 == 0) {
					if (x % 2 == 0) {
						cell = this.createCell(x, y, "white");
					} else {
						cell = this.createCell(x, y, "black");
					}
				}
				//odd row
				else {
					if (x % 2 == 0) {
						cell = this.createCell(x, y, "black");
					} else {
						cell = this.createCell(x, y, "white");
					}
				}
				row.appendChild(cell);
			}
			this.gameArea.appendChild(row);
		}
		console.log("chessboard created");
		//div = document.getElementsByClassName("div");
		console.log(body);
		console.log(this.gameArea);
		document.getElementById("body").appendChild(this.gameArea);
	},
	createCell: function (x, y, colour,) {
		cellID = Pairing.getID(x, y);

		piece = this.checkIfOccupied(cellID);

		cell = document.createElement("td");
		button = document.createElement("button");

		if (piece == null) {
			button.innerHTML = "*";
		} else {
			cell.piece = piece;
			button.innerHTML = piece.Symbol + "<br>" + piece.Colour;

			console.log("Setting piece...: " + piece.Symbol);
		}

		cell.id = Pairing.getID(x, y);
		cell.colour = colour;
		cell.innerHTML = "[" + x + ", " + y + "] <br> " + colour + "<br>" + cell.id;

		cell.appendChild(button);
		return cell;
	},
	checkIfOccupied: function (cellID) {
		//check BlackPieces
		for (i = 0; i < Main.BlackPieces.length; i++) {
			piece = Main.BlackPieces[i];
			pieceID = Pairing.getID(piece.X, piece.Y);

			if (pieceID === cellID) {
				return piece;
			}
		}
		//check whitePieces
		for (i = 0; i < Main.WhitePieces.length; i++) {
			piece = Main.WhitePieces[i];
			pieceID = Pairing.getID(piece.X, piece.Y);

			if (pieceID === cellID) {
				return piece;
			}
		}
		return null;
	},
	test: function (body) {
		console.log("Test");
		console.log(body);
	},
};

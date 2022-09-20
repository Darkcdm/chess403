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
						cell = this.createCell(x, y, "black");
					} else {
						cell = this.createCell(x, y, "white");
					}
				}
				//odd row
				else {
					if (x % 2 == 0) {
						cell = this.createCell(x, y, "white");
					} else {
						cell = this.createCell(x, y, "black");
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
	createCell: function (x, y, colour) {
		cell = document.createElement("td");

		cell.innerHTML = "[" + x + ", " + y + "] <br> " + colour;

		return cell;
	},
	test: function (body) {
		console.log("Test");
		console.log(body);
	},
};

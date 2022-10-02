let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	ActiveCell: [],
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameStart.setWhites();
		GameBoard.render(body);
	},
};

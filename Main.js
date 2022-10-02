let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	ActiveButton: [],
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameStart.setWhites();
		GameBoard.render(body);
	},
};

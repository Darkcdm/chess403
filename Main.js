let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameStart.setWhites();
		GameBoard.render(body);
	},
};

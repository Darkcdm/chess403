let Main = {
	body: [],
	BlackPieces: [],
	WhitePieces: [],
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameBoard.render(body);
	},
};

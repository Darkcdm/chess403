let Main = {
	body: [],
	BlackPieces: [],
	start: function (body) {
		//this.body = body;
		GameStart.setBlacks();
		GameBoard.render(body);
	},
};

require("jquery-ui");

module.exports = {
	initRisks: function() {
		$("input:radio").checkboxradio();
		$(".risks").controlgroup({
			direction: "vertical"
		});

	}
}
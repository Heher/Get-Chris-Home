$(document).ready(function() {
	var selection_links = $(".selection a");

	selection_links.on('click', function(event) {
		event.preventDefault();

		var selected_link = $(event.target);
		var name = selected_link.text().toLowerCase();
		var selected_field = $(".selection-field" + "." + name);

		var active_link = $(".selection a.selected");
		var active_field = $(".selection-field.selected");

		active_link.removeClass("selected");
		active_field.removeClass("selected");

		selected_link.addClass("selected");
		selected_field.addClass("selected");
	});
});
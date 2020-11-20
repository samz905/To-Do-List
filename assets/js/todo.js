//check off li's after clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
})

//click on X to delete entry
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
})

//add new entry from input
$("input").on("keypress", function(event) {
	if(event.which == 13) {
		var todoEntry = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoEntry + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input").fadeToggle();
})
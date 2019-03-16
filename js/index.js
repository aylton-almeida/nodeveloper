//Animação texto inicial
$('#section1').on("mouseenter mouseleave", (e)=>{
	let size = e.type === "mouseenter"? 3 : 2.5;
	$('.main-title').animate({fontSize: size + "em"});
	$('.main-subtitle').animate({	fontSize: (size == 3? 1.8 : 1.5) + "em"});
})

//Scroll animation
$('.scrollTo').click(function() {
	let section = $(this).attr("href");
	if ($(section).length) {
		let offSet = $(section).offset().top;
		$('html,body').animate({
			scrollTop: offSet
		}, 500)
	}
	return false;
})

//Change active link when scrolling
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
		let x = $("[id^='section']")
		console.log(typeof x);
		console.log($(x[1]).offset().top);
    if ($(x[1]).offset().top == scroll) {
			console.log("ok");
    }
});

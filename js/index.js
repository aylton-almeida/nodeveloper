//Animação texto inicial
$('#section1').on("mouseenter mouseleave", (e)=>{
	let size = e.type === "mouseenter"? 3 : 2.5;
	$('.main-title').animate({fontSize: size + "em"});
	$('.main-subtitle').animate({	fontSize: (size == 3? 1.8 : 1.5) + "em"});
})

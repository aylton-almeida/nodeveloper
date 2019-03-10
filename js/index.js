$('#block1').on("mouseenter mouseleave", (e)=>{
	let size = e.type === "mouseenter"? "103% 103%" : "100% 100%";
	$('#block1').css("background-size", size);
})
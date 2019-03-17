//Animação texto inicial
$('#section1').on("mouseenter mouseleave", function(e) {
  let size = e.type === "mouseenter" ? 3 : 2.5;
  $('.main-title').animate({
    fontSize: size + "em"
  });
  $('.main-subtitle').animate({
    fontSize: (size == 3 ? 1.8 : 1.5) + "em"
  });
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
})

//Change active link when scrolling
$(window).scroll(function(event) {
  $('.scrollTo').each((i, obj) => {
    let sectionID = $(obj).attr('href');
    if ($(sectionID).visible(true)) {
      $(obj).addClass('active');
    }else {
    	$(obj).attr('class', 'nav-link scrollTo');
    }
  })
});

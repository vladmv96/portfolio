
jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').blur();
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });
 
jQuery(document).ready(function() {
$("nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

         top = $(id).offset().top - 99;

         $('body,html').animate({scrollTop: top}, 800);

    });
});

$(document).ready(function(){
    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $($.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.bot').fadeIn();
    } else {
        $('.bot').fadeOut();
    }

});

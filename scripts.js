$('.project-flex').mouseover(function (e) {
    imageData = $(this).attr('data-hover');
    $('.project-video').attr('src' , imageData);
    $('.project-video').addClass('full-opacity');
});

$('.project-flex').mouseout(function (e) {
    $('.project-video').attr('src' , '');
    $('.project-video').removeClass('full-opacity');
});
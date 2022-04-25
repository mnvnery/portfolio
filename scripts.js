$('.project-flex').mouseover(function (e) {
    imageData = $(this).attr('data-hover');
    linkColor = $(this).attr('data-link');
    $('.project-video').attr('src' , imageData);
    $('.project-video').addClass('full-opacity');
    $(this).css('color', linkColor);
});

$('.project-flex').mouseout(function (e) {
    $('.project-video').attr('src' , '');
    $('.project-video').removeClass('full-opacity');
    $('.project-flex').css('color', 'black');
});
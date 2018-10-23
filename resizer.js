var resize = function() {
    let scalar = $(window).height() / 1080.0;

    scalar = Math.max(.4, scalar);

    $("#content").css("zoom", scalar);
}

$(document).ready(resize);
$(window).resize(resize);
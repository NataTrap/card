
let no = $('.btn-no');
let yes = $('.btn-yes');
let isClick = false


yes.click(function () {
    if (!isClick) {
        $('.image-1').hide()
        $('.header-text').hide()
        $('.image-2').show()
        $('.header-text-two').show()
        yes.hide()
        no.hide()
        isClick = true;
    } else {
        $('.image-no').hide()
        $('.header-no-text').hide()
        $('.hospital').show()
        $('.hospital-text').show()
        yes.hide()
        no.hide()
    }
});




no.click(function () {
    if (!isClick) {
        $('.image-1').hide();
        $('.header-text').hide()
        $('.header-no-text').show()
        $('.image-no').show();
        isClick = true;
    }else {
        no.css('background', '#FF5D8F');
        $('.image-no').hide()
        $('.header-no-text').hide()
        $('.b').show()
        $('.b-text').show()
        yes.hide();
        no.hide();
    }
});


















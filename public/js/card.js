$(document).ready(function(){
    let cards = $('.card');
    $('.card').each(function(index, element) {
        $(this).attr('id', 'card'+index);
    });
    $('.card-top').each(function(index, element) {
        $(this).attr('id', 'card-top'+index);
    });
    $('.card-title').each(function(index, element) {
        $(this).attr('id', 'card-title'+index);
    });
    $('.card-bottom').each(function(index, element) {
        $(this).attr('id', 'card-bottom'+index);
    });
    cards.on('click', contentCard);
});


function contentCard() {
    let card = $(this);
    let title = card.children('.card-title');
    let content = card.children('.card-content');
    content.children('.titleClick').text(title.text());
    content.css('display', 'block');
    $(this).off('click');
}

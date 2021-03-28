
$(document).ready(function(){
    $('p').each(function(index, element) {
        $(this).attr('id', 'p'+index);
    });
    $('h2').each(function(index, element){
        $(this).attr('id', 'titre'+index);
    })
    $('img').each(function(index, element){
        $(this).attr('id', 'img'+index);
    });
    $('.section').each(function(index, element){
        $(this).attr('id', 'section'+index);
    });
    $('.card').each(function(index, element){
        $(this).attr('id', 'card'+index);
    });
    $('.content-slider').each(function(index, element){
        $(this).attr('id', 'carousel'+index);
    });
    $('.mask').each(function(index, element){
        $(this).attr('id', 'carousel-content'+index);
    });
});

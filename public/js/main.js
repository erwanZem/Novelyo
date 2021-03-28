
$(document).ready(function(){
    $('p').each(function(index, element) {
        $(this).attr('id', 'p'+index);
    });
    $('div').each(function(index, element){
        $(this).attr('id','div'+index);
    });
    $('h2').each(function(index, element){
        $(this).attr('id', 'sous-titre'+index);
    })
    $('img').each(function(index, element){
        $(this).attr('id', 'img'+index);
    });
});

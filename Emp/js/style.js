$(document).ready(function() { 
    $('.Animes').addClass('animate bounceInDown');
    $('.cobe').addClass('pronto bounceInDown');
});

var $doc = $('html, body');
$('a').click(function() { //identificando que somente quando clicar vai deslizar
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top // deixando deslizar lentamente o scroll para a div que vc clicou no menu.
    }, 1000); // 500 = Velocidade do Scroll
    return false;
});

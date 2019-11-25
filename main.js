// Mostra il menù hamburger quando clicco sull'icona dell'hamburger
$(".header-right i").click(function() {
    $('.hamburger-menu').show();
});
// Nascondo il menù hamburger quando clicco sulla X delmenù humburger
$('.hamburger-menu i').click(function() {
    $('.hamburger-menu').hide();
})

// Faccio in modo che facendo resize del browser e il menù mobile è ancora aperto ritorna automaticamente il menù desktop
$(window).resize(function(){

       if ($(window).width() > 1000) {

            $('.hamburger-menu').hide();

       }

});

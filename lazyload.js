$(document).ready(function(){
    lazyload();
});
$(window).scroll(function(){
    lazyload();
})
function lazyload(){
    $('[data-src]').each(function(){
        if(isScrolledIntoView($(this))){
            $(this).attr('data-src');
            $(this).attr('src', $(this).attr('data-src'));
            $(this).removeAttr("data-src");
        }
    });
}
function isScrolledIntoView(elem){
    let $elem = $(elem);
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
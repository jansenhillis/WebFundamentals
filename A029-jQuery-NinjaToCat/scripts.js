$("img").click( function() {
    console.log('alt-src: ', $(this).attr('alt-src')); 

    $(this).attr("src", $(this).attr('alt-src'));
});
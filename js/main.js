jQuery(document).ready(function($) {

    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });
    });
});

function addItemToList() {
    var input = document.getElementById('input');
    if (input.value !== "") {
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
    }
}



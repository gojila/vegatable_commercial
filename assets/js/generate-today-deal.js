ap_list_functions_loaded.push(function(){
    if($('#carousel-3340885346').parents('.tab-pane').length)
    {
        if(!$('#carousel-3340885346').parents('.tab-pane').hasClass('active'))
        {
            var width_owl_active_tab = $('#carousel-3340885346').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-3340885346').width(width_owl_active_tab);
        }
    }
    $('#carousel-3340885346').owlCarousel({
        items :             1,
        itemsDesktop :      [1200,1],
        itemsDesktopSmall : [992,1],
        itemsTablet :       [768,1],
        itemsMobile :       [576,1],
        itemsCustom :       false,
        singleItem :        false,       // true : show only 1 item
        itemsScaleUp :      false,
        slideSpeed :        200,        //  change speed when drag and drop a item
        paginationSpeed :   800,       // change speed when go next page
        autoPlay :          true,       // time to show each item
        stopOnHover :       false,
        navigation :        true,
        navigationText :    ["&lsaquo;", "&rsaquo;"],
        scrollPerPage :     false,
        pagination :        false,       // show bullist
        paginationNumbers : false,       // show number
        responsive :        true,
        responsiveRefreshRate : 0,
        lazyLoad :          false,
        lazyFollow :        false,       // true : go to page 7th and load all images page 1...7. false : go to page 7th and load only images of page 7th
        lazyEffect :        "fade",
        autoHeight :        false,
        mouseDrag :         true,
        touchDrag :         true,
        addClassActive :    true,
        direction:          false,
        afterInit: OwlLoaded,
        afterAction : SetOwlCarouselFirstLast,
    });

    var number_item = $('.owl-featured .owl-item').length;
      if($('.ApProductCarousel').hasClass('owl-featured'))
      {
       $('.owl-featured .owl-next').empty();
       $('.owl-featured .owl-prev').empty();
       $('.owl-featured .owl-next').append($('.owl-featured .owl-item.active').next().find('.product-thumbnail').html());
       $('.owl-featured .owl-prev').append($('.owl-featured .owl-item').last().find('.product-thumbnail').html());

       var delay_value = 800;

       $('.owl-featured .owl-next').click(function(){

        ChangeImageNavigation(number_item);
       });

       $('.owl-featured .owl-prev').click(function(){
        ChangeImageNavigation(number_item);

       });

       var index_active = $('.owl-featured .owl-item.active').index();
       var check_change;
       $('.owl-featured .owl-item').hover(function(){
        check_change = setInterval(function(){
         if(index_active != $('.owl-featured .owl-item.active').index())
         {
          ChangeImageNavigation(number_item)
          index_active = $('.owl-featured .owl-item.active').index();
         }
        },500);

       },function(){
        clearInterval(check_change);
       });

        var check_change_autoplay;
        check_change_autoplay = setInterval(function(){
         if(index_active != $('.owl-featured .owl-item.active').index())
         {
          ChangeImageNavigation(number_item)
          index_active = $('.owl-featured .owl-item.active').index();
         }
        },200);
      }
});

function ChangeImageNavigation(number_item)
{
    $('.owl-featured .owl-next').empty();
    $('.owl-featured .owl-prev').empty();
    if($('.owl-featured .owl-item.active').index() == 0)
    {
        $('.owl-featured .owl-next').append($('.owl-featured .owl-item.active').next().find('.product-thumbnail').html());
        $('.owl-featured .owl-prev').append($('.owl-featured .owl-item').last().find('.product-thumbnail').html());
    }
    else if($('.owl-featured .owl-item.active').index() == number_item-1)
    {
        $('.owl-featured .owl-next').append($('.owl-featured .owl-item').first().find('.product-thumbnail').html());
        $('.owl-featured .owl-prev').append($('.owl-featured .owl-item.active').prev().find('.product-thumbnail').html());
    }
    else
    {
        $('.owl-featured .owl-next').append($('.owl-featured .owl-item.active').next().find('.product-thumbnail').html());
        $('.owl-featured .owl-prev').append($('.owl-featured .owl-item.active').prev().find('.product-thumbnail').html());
    }
}
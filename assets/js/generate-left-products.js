ap_list_functions.push(function(){
    if($('#carousel-2035752113').parents('.tab-pane').length)
    {
        if(!$('#carousel-2035752113').parents('.tab-pane').hasClass('active'))
        {
            var width_owl_active_tab = $('#carousel-2035752113').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-2035752113').width(width_owl_active_tab);
        }
    }
	$('#carousel-2035752113').imagesLoaded( function() {
		$('#carousel-2035752113').owlCarousel({
			items :             1,
			itemsDesktop :      [1200,1],
			itemsDesktopSmall : [992,2],
			itemsTablet :       [768,2],
			itemsMobile :       [576,1],
			itemsCustom :       false,
			singleItem :        false,       // true : show only 1 item
			itemsScaleUp :      false,
			slideSpeed :        200,        //  change speed when drag and drop a item
			paginationSpeed :   800,       // change speed when go next page
			autoPlay :          false,       // time to show each item
			stopOnHover :       false,
			navigation :        false,
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
	});
});
function OwlLoaded(el){
    el.removeClass('owl-loading').addClass('owl-loaded').parents('.owl-row').addClass('hide-loading');
    if ($(el).parents('.tab-pane').length && !$(el).parents('.tab-pane').hasClass('active'))
        el.width('100%');
};
export function GenerateNewProduct(){
    if($('#carousel-3001774242').parents('.tab-pane').length)
    {
        if(!$('#carousel-3001774242').parents('.tab-pane').hasClass('active'))
        {
            var width_owl_active_tab = $('#carousel-3001774242').parents('.tab-pane').siblings('.active').find('.owl-carousel').width();
            $('#carousel-3001774242').width(width_owl_active_tab);
        }
    }
	$('#carousel-3001774242').imagesLoaded( function() {
		$('#carousel-3001774242').owlCarousel({
			items :             4,
			itemsDesktop :      [1200,3],
			itemsDesktopSmall : [992,3],
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
}



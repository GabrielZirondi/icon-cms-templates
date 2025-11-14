/* ----------------------------------------------------------------------
    jQuery Plugin - Option
---------------------------------------------------------------------- */
$( function() {
	'use strict';

	/* ----------------------------------------------------------------------
		Sticky
	---------------------------------------------------------------------- */
	var header = $( '#header' );
	$( window ).on( 'scroll', function() {
		if ($( this ).scrollTop() > 250 ) {
			header.sticky( {
				topSpacing: 0,
				zIndex: 300
			} );
			header.addClass( 'sticked' );
		} else {
			header.unstick();
			header.removeClass( 'sticked' );
		}
	} );

	/* ----------------------------------------------------------------------
		SmoothScroll
	---------------------------------------------------------------------- */
	var scroll = new SmoothScroll( '.smooth-scroll a[href*="#"]', {
		speed: 500,
		offset: 150
	} );

	/* ----------------------------------------------------------------------
		Back to Top
	---------------------------------------------------------------------- */
	var backtotop = $( '#back-to-top' );
	$( window ).on( 'scroll', function() {
		if ($( this ).scrollTop() > 100 ) {
			backtotop.fadeIn();
		} else {
			backtotop.fadeOut();
		}
	} );
	backtotop.on( 'click', 'a', function() {
		$( 'html, body' ).animate( {
			scrollTop: 0
		}, 600 );
		return false;
	} );

	/* ----------------------------------------------------------------------
		Animated (Waypoint)
	---------------------------------------------------------------------- */
	$( '.animated' ).css( 'opacity', '0' );
	$( '.animated' ).waypoint( function( direction ) {
		$( this.element ).css( 'opacity', 1 );
		$( this.element ).addClass( $( this.element ).data( 'animation' ) );
	}, {
		offset: '90%'
	} );

	/* ----------------------------------------------------------------------
		Nivo Lightbox
	---------------------------------------------------------------------- */
	$( '.nivo-lightbox' ).nivoLightbox( {
		effect: 'fadeScale'
	} );

	$( '.nivo-lightbox-video' ).nivoLightbox( {
		effect: 'fade'
	} );

	/* ----------------------------------------------------------------------
		End
	---------------------------------------------------------------------- */

} );

$( window ).on( 'load', function() {

	/* ----------------------------------------------------------------------
		Masonry
	---------------------------------------------------------------------- */
	$( '.masonry' ).masonry( {
		itemSelector: '.masonry-item'
	} );

	/* ----------------------------------------------------------------------
		End
	---------------------------------------------------------------------- */
} );



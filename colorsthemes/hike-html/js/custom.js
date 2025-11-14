/* ----------------------------------------------------------------------
    jQuery Plugin - Option
---------------------------------------------------------------------- */
$( function() {
	'use strict';

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
		Hero Static
	---------------------------------------------------------------------- */

	// Caption Position
	$( '.dsct-position' ).each( function() {
		$( this ).css( {
			top: $( this ).data( 'top' ),
			bottom: $( this ).data( 'bottom' ),
			left: $( this ).data( 'left' ),
			right: $( this ).data( 'right' ),
			'z-index': $( this ).data( 'zindex' ),
			opacity: '1'
		} );
	} );

	/* ----------------------------------------------------------------------
		Jarallax
	---------------------------------------------------------------------- */

	// object-fit-images
	objectFitImages();

	// Jarallax
	$( '.jarallax' ).jarallax( {
		speed: 0.8,
		videoStartTime: 0,
		videoVolume: 0 // from 0 to 100
	} );

	/* ----------------------------------------------------------------------
		Left Menu
	---------------------------------------------------------------------- */
	$( '[data-toggle="offcanvas"]' ).on( 'click', function() {
		$( '.offcanvas-row' ).toggleClass( 'active' );
		return false;
	} );

	/* ----------------------------------------------------------------------
		End
	---------------------------------------------------------------------- */

} );

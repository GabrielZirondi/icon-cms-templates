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
		Owl Carousel
	---------------------------------------------------------------------- */
	$( '.owl-carousel' ).owlCarousel( {
	items: 1,
	loop: true,
	animateOut: 'slideOutDown',
	animateIn: 'flipInX',
	nav: false,
	autoplay: true,
	autoplayTimeout: 9000,
	autoplayHoverPause: true
	} );

	/**
	 * Owl Slider Dot with aria-label
	 * See: https://stackoverflow.com/questions/41818880/owl-carousel-2-2-dots-with-aria-label
	 */
	$( '.owl-carousel' ).each( function() {
		$( this ).find( '.owl-dot' ).each( function( index ) {
			$( this ).attr( 'aria-label', index + 1 );
		} );
	} );

	/* ----------------------------------------------------------------------
		End
	---------------------------------------------------------------------- */

} );

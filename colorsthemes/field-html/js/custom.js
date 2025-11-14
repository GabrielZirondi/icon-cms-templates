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
		Bg Parallax
	---------------------------------------------------------------------- */
	$( window ).on( 'scroll', function() {
		$( '.bgparallax-black' ).parallax( '50%', 0.1 );
		$( '.bgparallax-black2' ).parallax( '50%', 0.1 );
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
		End
	---------------------------------------------------------------------- */

} );

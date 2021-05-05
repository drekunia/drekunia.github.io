$( document ).ready( function() {
$( '#contact-nav' ).on( 'click', function() {
  $.getScript( '../js/contactEmailAjax.js', function() {
      console.log('contactEmailAjax.js loaded.')
  } );
} ) } )
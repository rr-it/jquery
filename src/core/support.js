define( [
	"../var/document",
	"../var/support"
], function( _document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
// result: not Safari 8
support.createHTMLDocument = !( window.safari !== undefined && +( /Version\/(\d+)/i.exec( window.navigator.userAgent )[ 1 ] ) === 8 );

return support;
} );

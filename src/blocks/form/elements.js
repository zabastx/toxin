$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).text( ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + '₽' );
      }
    });
    $( "#amount" ).text( $( "#slider-range" ).slider( "values", 0 ) +
      "₽ - " + $( "#slider-range" ).slider( "values", 1 ) + '₽' );
  } );

let liked = false;
let likes = 10;

  $(".like-btn").click(() => {
    if (liked) {
      $(".like-btn").css({
        border: '1px solid rgba(31, 32, 65, 0.25)',
        color: 'rgba(31, 32, 65, 0.25)'
      });
      $(".mi-icons").text('favorite_border');
      liked = false;
      likes--;
      $(".like-txt").text(likes);
    }
    else {
      $(".like-btn").css({
        border: '1px solid #BC9CFF',
        color: '#BC9CFF'
      });
      $(".mi-icons").text('favorite');
      liked = true;
      likes++;
      $(".like-txt").text(likes);
    }
  })
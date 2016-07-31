// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function renderArtile( art ) {
  let $input = $('input').val();
  let $div = $('div');
  // var $album = $('<li class="album">');
  let $p = $('<p>')
  $p.text(art.lead_paragraph);
  // var $img = $('<img>').attr('src', album.artworkUrl100)
  // render the image
  // $album.append( $name );
  // $album.append($img);
  // $container.append( $album );
$div.append($p)
}

function getAlbums() {
  $.getJSON('/articles').done(function( article ) {
    article.response.docs.forEach(function( art ) {
      renderArtile( art );
    })
  })
}

$(function() {


  getAlbums();
})


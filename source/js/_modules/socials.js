$(document).ready(function() {
  var like = $('.like-link');
  var list = $('.links__socials');
  var showHide = function(){
  	if(list.hasClass('active')){
  		list.animate({marginLeft: "-43"}, 300, function() {
  			list.removeClass('active');
  		});
  	}else{
  		list.animate({marginLeft: "0"}, 300, function() {
  			list.addClass('active');
  		});
  }
  };
  like.on('click', function(event) {
  	event.preventDefault();
  	showHide();
  });

});
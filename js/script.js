(function($) {
	$('.color li').click(function() {
		$('.color li').removeClass('active');
		$(this).addClass('active')
		var a = $(this).index();
		$('.choose-color').val(a);
	});
	$('.read-more').click(function() {
		$('.list').toggleClass('active');
	});

	var clicks = 0;
	var a = $('.photos').children('li').length;

	$('.right').click(function() {
		if (clicks == (a - 1)) {
			clicks = -1;
		}
		clicks++;

		$('.photos').animate({
			marginLeft: -280 * clicks + 'px',
		}, 400);
		return (clicks);
	});
	$('.left').click(function() {

		if (clicks == 0) {
			clicks = a;
		}
		clicks--;

		$('.photos').animate({
			marginLeft: -280 * clicks + 'px',
		}, 400);
		return (clicks);
	});
	$(function() {
		$('input, select').styler();
	});
})(jQuery);
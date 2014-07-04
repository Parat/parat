(function($){
	var paratPath = 'http://221.200.1.146:8080/';

	$(document).ready(function() {
		$('#small img').prop('src', paratPath + 'video3.mjpg');

		$('a[href="#large"]').on('show.bs.tab', function (e) {			
			var largeVideo = $('#large img');

			if (largeVideo && largeVideo.prop('src') === location.href) {
				largeVideo.prop('src', paratPath + 'video2.mjpg');	
				$(this).off('show.bs.tab');
			}
		});
	});

})(jQuery);


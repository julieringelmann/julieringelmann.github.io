(function ($) {
	"use strict";
	$(document).on('ready', function () {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		// $('#contact-form').find('input,textarea').jqBootstrapValidation({
		// 	preventSubmit: true,
		// 	submitError: function ($form, event, errors) {
		// 		// additional error messages or events
		// 	},
		// 	submitSuccess: function ($form, event) {
		// 		event.preventDefault();

		// 		var submit = $('#contact-form submit');
		// 		var ajaxResponse = $('#contact-response');

		// 		var name = $("input#cname").val();
		// 		var email = $("input#cemail").val();
		// 		var message = $("textarea#cmessage").val();

		// 		$.ajax({
		// 			type: 'POST',
		// 			url: '/contact-me',
		// 			dataType: 'json',
		// 			data: {
		// 				name: name,
		// 				email: email,
		// 				message: message,
		// 				token: 'AE7873692D25C978AD93C53179428',
		// 				phone: ''
		// 			},
		// 			cache: false,
		// 			beforeSend: function (result) {
		// 				$('#submit-btn').html('<i class="fa fa-cog fa-spin"></i> Wait...');
		// 			},
		// 			success: function (result) {
		// 				if (result.sendstatus == 1) {
		// 					ajaxResponse.html(result.message);
		// 					$form.fadeOut(500);
		// 				} else {
		// 					ajaxResponse.html(result.message);
		// 				}
		// 			}
		// 		});
		// 	}
		// });

	});

})(jQuery);
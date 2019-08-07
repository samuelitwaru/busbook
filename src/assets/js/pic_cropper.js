var avatar;
var image;
var input;
var $modal;
var cropper;

window.addEventListener('DOMContentLoaded', function(){
	image = document.getElementById('image');
	input = $('#logo');
	$modal = $('#modal');
	avatar = document.getElementById('_logo');

	input.on('change', function (e) {
		var files = e.target.files;
		var done = function (url) {
			input.value = '';
			image.src = url;
			$modal.modal('show');
		};

		var reader;
		var file;
		var url;

		if (files && files.length > 0) {
			file = files[0];

			if (URL) {
				done(URL.createObjectURL(file));
			} else if (FileReader) {
				reader = new FileReader();
				reader.onload = function (e) {
				done(reader.result);
			};
			
			reader.readAsDataURL(file);
			
			}
		}

	});	
	

	$modal.on('shown.bs.modal', function () {
		cropper = new Cropper(image, {
			  aspectRatio: 1,
			  viewMode: 1,
		});
	}).on('hidden.bs.modal', function () {
		cropper.destroy();
		cropper = null;
	});

	document.getElementById('crop').addEventListener('click', function () {
		var initialAvatarURL;
		var canvas;
	
		$modal.modal('hide');
	
		if (cropper) {
		  canvas = cropper.getCroppedCanvas({
			width: 160,
			height: 160,
		  });

		  initialAvatarURL = avatar.src;
		  avatar.src = canvas.toDataURL();
		}
	});

	avatar.onclick = function(){input.trigger('click')}

})
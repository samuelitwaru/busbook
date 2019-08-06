var avatar;
var image;
var inputs;
var $modal;
var cropper;

window.addEventListener('DOMContentLoaded', function(){
	image = document.getElementById('image');
	inputs = $('.input');
	$modal = $('#modal');

	for(var i=0; i < inputs.length; i++) {
		input = inputs[i]
		input.addEventListener('change', function (e) {
			var files = e.target.files;
			var done = function (url) {
				input.value = '';
				image.src = url;
				$modal.modal('show');
			};
			var reader;
			var file;
			var url;

			avatar = document.getElementById('_'+event.target.id);
			console.log(avatar)

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
	}

	$modal.on('shown.bs.modal', function () {
		cropper = new Cropper(image, {
			  aspectRatio: 1,
			  viewMode: 3,
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
		  console.log()
		  initialAvatarURL = avatar.src;
		  avatar.src = canvas.toDataURL();
		}
	});

	var images = $('#_img1, #_img2');
	for (var i=0; i<images.length; i++){
		var img = images[i];
		console.log(img)
		var input = $('#'+img.id.replace("_", ""));
		console.log(input)
		//img.onclick = function(){input.trigger('click')}
	}
})
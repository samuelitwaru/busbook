function readURL(input, file, label, label_val) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(file).attr('src', e.target.result).width(150).height(150);
            $(label).html(label_val);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

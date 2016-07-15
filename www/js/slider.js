require("jquery-ui");

module.exports = {
	appendsliderto: function(container) {
		likert_slider_div(container);
	}
}


function likert_slider_div(container) {
    var slider_div = $('<div class="slider-container"></div>');
    var label_begin = $('<div class="label_box label_begin">Not at all</div>');
    var label_end = $('<div class="label_box label_end">Very much</div>');
    var likert_slider = $('<div class="slider"></div>');


    //console.log('user slider.js');

    likert_slider.slider({
        min: 1,
        max: 7,
        step: 1,
        value: 4,
        slide: function(event, ui) {
        	$('#slider_text').val(ui.value);
        },
        change: function(event, ui) {
        	$('#slider_text').val(ui.value);
        }
    })
    .each(function() {
    	var opt = $(this).data()['ui-slider'].options;
    	//var opt = opt;
    	console.log('data', opt);

    	var vals = opt.max - opt.min;

    	for(var i = 0; i <= vals; i++) {

    		var el = $('<label>' + (i + opt.min) + '</label>').css('left', (i/vals*100) + '%');

    		$(this).append(el);
    	}
    });

    slider_div.append(label_begin, likert_slider, label_end);

    var slider_form = likert_slider_form();

    container.append(slider_div,slider_form);

    //return slider_div;
}

function likert_slider_form() {
	var action = "save_input.php";
	var slider_form = $('<form id="likert_slider_form" name="likert_slider_form" action="' + action + '" method="post"></form>');
	var student_data = $('<input type="hidden" name="student_data" data-student="">');
	var slider_text = $('<input type="text" name="slider_text" id="slider_text">');
	var submit = $('<input type="submit" value="Sumit">');

	slider_form.append(student_data, slider_text, submit);


	return slider_form;
}

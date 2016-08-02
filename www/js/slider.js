require("jquery-ui");

module.exports = {
	appendsliderto: function(container) {
		likert_slider_div(container);
	}
}

var DEFAULT_SLIDER_VALUE = 4;

function likert_slider_div(container) {
    var slider_div = $('<div class="slider-container col-md-12"></div>');
    var label_begin = $('<div class="label_box label_begin">Not at all</div>');
    var label_end = $('<div class="label_box label_end">Very much</div>');
    var likert_slider = $('<div class="slider"></div>');

    //console.log('user slider.js');

    likert_slider.slider({
        min: 1,
        max: 7,
        step: 1,
        value: DEFAULT_SLIDER_VALUE,
        slide: function(event, ui) {
        	$('#slider_text').val(ui.value);
        },
        change: function(event, ui) {
        	$('#slider_text').val(ui.value);
        }
    })
    .each(function() {
    	var opt = $(this).data()['ui-slider'].options;
    	//console.log('data', opt);

    	var vals = opt.max - opt.min;

    	for(var i = 0; i <= vals; i++) {
    		var el = $('<label>' + (i + opt.min) + '</label>').css('left', (i/vals*100) + '%');
    		$(this).append(el);
    	}
    });

    slider_div.append(label_begin, likert_slider, label_end);
    var slider_div_container = $('<div class="row"></div>');
    slider_div_container.append(slider_div);

    container.append(slider_div_container, likert_slider_submit());
}


function likert_slider_submit() {
    //var submit = $('<input type="submit" name="submit_input" value="Submit" ')
    var slider_text = $('<input type="text" name="slider_text" id="slider_text" style="display:none">');
    var submit_btn = $('<button id="submit_btn" type="button" class="btn btn-primary">Submit</button>');
    var submit_div = $('<div class="row"></div>');
    slider_text.val(DEFAULT_SLIDER_VALUE);

    submit_div.append(slider_text, submit_btn);
    return submit_div;
}

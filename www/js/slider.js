require("jquery-ui");

module.exports = {
	appendsliderto: function(container) {
		likert_slider_div(container);
	}
}

var DEFAULT_SLIDER_VALUE = 4;

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

    var slider_form_div = $('<div class="slider_form_container"></div>');

    slider_form_div.append(likert_slider_form());

    container.append(slider_div,slider_form_div);
}

function likert_slider_form() {
	var action = "save_input.php";
    //var action = "";
	var slider_form = $('<form id="likert_slider_form" name="likert_slider_form" action="' + action + '" method="post"></form>');
	var studentingroup_id = $('<input type="hidden" name="studentingroup_id" id="studentingroup_id" value="">');
    var assigned_group = $('<input type="hidden" name="assigned_group" id="assigned_group" value="">');
    var activity_id = $('<input type="hidden" name="activity_id" id="activity_id" value="">');
	var slider_text = $('<input type="text" name="slider_text" id="slider_text" style="display:none">');
	var submit = $('<input type="submit" name="submit_input" value="Sumit">');

    slider_text.val(DEFAULT_SLIDER_VALUE);
	slider_form.append(studentingroup_id, activity_id, assigned_group, slider_text, submit);

	return slider_form;
}

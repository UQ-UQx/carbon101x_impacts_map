require("jquery-ui");

module.exports = {
/*    
	appendsliderto: function(container) {
		likert_slider_div(container);
	}
*/
    initSlider: function(slider_div, slider_text, scale) {
        var defaultValue = (parseInt(scale) + 1)/ 2; 
        createSlider(slider_div, slider_text, scale, defaultValue);
        //console.log('scale', scale);
        sliderSetValue(slider_text, defaultValue);
    }
}

function createSlider(slider_div, slider_text, scale, defaultValue) {
    console.log('slider_div', slider_div);
    slider_div.slider({
        min: 1,
        max: scale,
        step: 1,
        value: defaultValue,
        slide: function(event, ui) {
            sliderSetValue(slider_text, ui.value);
        },
        change: function(event, ui) {
            sliderSetValue(slider_text, ui.value);
        }
    });
}

function sliderSetValue(slider_text, value) {
    slider_text.val(value);
}

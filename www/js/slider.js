require("jquery-ui");

module.exports = {
    initSlider: function(slider_div, slider_ui, slider_text, scales) {
        createSlider(slider_div,  slider_text, scales);
        createSliderLabels(slider_ui, scales);
    }
}

function createSliderLabels(slider_ui, scales) {
    var oneBig = 100 / (scales.length -1);

    $.each(scales, function(key, value) {
        var w = oneBig;
        if(key === 0|| key === scales.length-1) {
            w = oneBig/2;
        }
        var li = $("<li style='width: " + w + "%'>" + value + "</li>");
        slider_ui.append(li);
    });
}


function createSlider(slider_div, slider_text, scales) {
    var defaultValue = (scales.length -1) * 100 / 2;
    sliderSetValue(slider_text, defaultValue);

    slider_div.slider({
        min: 0,
        max: 100* (scales.length -1),
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

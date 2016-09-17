// As JQuery will be used for majority of our JS code, you can attach it to the global scope
// Along with helpers such as mathJS and underscoreJS
global.$ = global.jQuery = require("jquery");
global.math = require('mathjs');
global.d3 = require("d3");
global._ = require("underscore");

// Any special library you want to use can be installed through npm and imported into the specifc files.
// Most of these may not need variables attached in order to use them, see their documentation.
require('bootstrap');
require('twbs-pagination');
require("blueimp-file-upload");
var d3_geoprojection = require("d3-geo-projection");
var topojson = require('topojson');

// Files that you create can also be included in any JS file, 
// however their path has to be specified as they are not part of NPM
//var risks = require('./key_risks.js');

$(document).ready(function(){

	var region_name, impact_risks;
	console.log('a', region_name, 'b', impact_risks);

/*
	var path = d3.geoPath();
	var projection = myp.geoAitoff();
	path.area();
*/

	var width = 600,
	    height = 300;

	var options = [
		{name: "Natural Earth", projection: d3_geoprojection.geoNaturalEarth()}	  
	];

	options.forEach(function(o) {
		o.projection.rotate([0,0]).center([0,0]);
	});

	var i =0, n = options.length -1;

	var projection = options[i].projection;

	var path = d3.geoPath().projection(projection);

	var graticule = d3.geoGraticule();

	var svg = d3.select('#fordatamaps').append('svg')
			.attr("width", width)
			.attr("height", height);

	svg.append('path')
		.datum(graticule)
		.attr('id', 'graticule')
		.attr('d', path);

	svg.on({
          "mousemove": function() {
            var mouse = d3.mouse(svg.node());
            tooltip.classed("hidden", false).attr("style", "left:"+(mouse[0]+50)+"px;top:"+(mouse[1]+50)+"px").html("Sea");
          },
          "mouseout":  function() { tooltip.classed("hidden", true); },
          "click":  function() { alert("Clicked! Sea"); },
        });


	var tooltip = d3.select("fordatamaps").append("div").attr("class", "tooltip hidden");

	var continents;

	d3.json("Assets/continent-geo.json", function(error, world) {
	  var countries = topojson.feature(world, world.objects.countries);

	  //feature collections only have type, id, and name so i would not sitck properties in there but i dont think its invalid!
	  //http://geojson.org/geojson-spec.html#introduction
	  var asia = {type: "FeatureCollection", name: "Asia", color: "#ffbb78", id:1, features: countries.features.filter(function(d) { return d.properties.continent=="Asia"; })};
	  var africa = {type: "FeatureCollection", name: "Africa", color: "#2ca02c", id:2, features: countries.features.filter(function(d) { return d.properties.continent=="Africa"; })};
	  var europe = {type: "FeatureCollection", name: "Europe", color: "#ff7f0e", id:3, features: countries.features.filter(function(d) { return d.properties.continent=="Europe"; })};
	  var na = {type: "FeatureCollection", name: "North America", color: "#1f77b4", id:4, features: countries.features.filter(function(d) { return d.properties.continent=="North America"; })};
	  var sa = {type: "FeatureCollection", name: "South America", color: "#d62728", id:5, features: countries.features.filter(function(d) { return d.properties.continent=="South America"; })};
	  var antarctica = {type: "FeatureCollection", name: "Antarctica", color: "#98df8a", id:6, features: countries.features.filter(function(d) { return d.properties.continent=="Antarctica"; })};
	  var oceania = {type: "FeatureCollection", name: "Oceania", color: "#aec7e8", id:7, features: countries.features.filter(function(d) { return d.properties.continent=="Oceania"; })};
	  var sevenseas = {type: "FeatureCollection", name: "Small Islands", color: "#ffbb78", id:8, features: countries.features.filter(function(d) { return d.properties.continent=="Seven seas (open ocean)"; })};

	  continents = [asia,africa,europe,na,sa,antarctica,oceania,sevenseas];

	  //var continent = g.selectAll(".continent").data(continents);
	  var continent = svg.selectAll(".continent").data(continents);

	  continent.enter().insert("path")
	      .attr("class", "continent")
	      .attr("d", path)
	      .attr("id", function(d,i) { return d.id; })
	      .attr("title", function(d,i) { return d.name; })
	      .style("fill", function(d,i) { return d.color; });

	  continent
	    .on("mousemove", function(d,i) {
	      var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
	        tooltip
	          .classed("hidden", false)
	          .attr("style", "left:"+(mouse[0]+50)+"px;top:"+(mouse[1]+50)+"px")
	          .html(d.name);
	          d3.event.stopPropagation();
	      })
	      .on("mouseout",  function(d,i) {
	        tooltip.classed("hidden", true);
	        d3.event.stopPropagation();
	      })
	      .on('click', function(d,i){ alert('Clicked!: ' + d['name'] ); d3.event.stopPropagation(); });
	});
	
    $('.risks').on("change", ".radio input[type='radio']", function() {
    	var risk_id = $(this).val();
    	console.log('changed ', risk_id);
    	init_risk_info(risk_id);


    });


    region_name = 'Africa';
	impact_risks = get_impact_risks(region_name);
	if(impact_risks == null) {
		console.log('Region did not find, please check the region name.');
	}
	else {
		init_risks(impact_risks);
	}

	function get_impact_risks(region_name) {
		var impact_risks = null;

		for(var i = 0; i < risk_details.length; i++) {
			if(risk_details[i]['name'] == region_name) {
				impact_risks = risk_details[i]['risks'];
				break;
			}
		}
		return impact_risks;
	}

	function init_risks(impact_risks) {
		console.log('init_risks', impact_risks);

		var risks_div = $('div.risks');

		//Empty risks_div
		risks_div.empty();

		// Add items
		for(var i = 0; i < impact_risks.length; i++) {
			var id = impact_risks[i]['id'];
			var name = impact_risks[i]['name'];

			var risk_item = $('<div class="radio"><label><input type="radio" name="risk" id="' + id + '" value="' + id + '">' + name + '</label></div>');
			risks_div.append(risk_item);
		}
	}


	function init_risk_info(risk_id) {
		var risk_info = get_risk_info(risk_id);
		console.log('risk info', risk_info);

		//Init risk_level
		//Present
		var present_value = risk_info['level']['present'];
		var present_width = (present_value * 10) + '%'; 
		$('#present_level').attr('aria-valuenow', present_value).css('width', present_width);
		//Degree 2
		var degree2_value = risk_info['level']['degree2'];
		var degree2_width = (degree2_value * 10) + '%'; 
		$('#degree2_level').attr('aria-valuenow', degree2_value).css('width', degree2_width);
		//Degree 4
		var degree4_value = risk_info['level']['degree4'];
		var degree4_width = (degree4_value * 10) + '%'; 
		$('#degree4_level').attr('aria-valuenow', degree4_value).css('width', degree4_width);

		//Init risk_details
		//var basepath = 'Assets/' + region_name + '/';
		//Detail title
		var title_img = 'Assets/' + region_name + '/' + risk_info['icon'];
		$('#title_img').attr('src', title_img);
		$('#title_img').attr('alt', risk_info['name']);
		$('#title_text').text(risk_info['name']);
		//Climatic drivers
		var basepath = 'Assets/Climate drivers/'
		//Empty driver_img_container
		$('.driver_img_container').empty();
		for(var i = 0; i < risk_info['climatic_drivers'].length; i++) {
			var img_url = basepath + risk_info['climatic_drivers'][i]['img_file'];
			var img_text = risk_info['climatic_drivers'][i]['title'];
			var driver_img = $('<img src="' + img_url + '" class="driver_img" alt="' + img_text + '">');
			var driver_span = $('<span class="driver_tooltip">' + img_text + '<span>');
			var driver_div = $('<div class="driver_img_div"></div>');
			driver_div.append(driver_img, driver_span);
			$('.driver_img_container').append(driver_div);
		}
		//Detail facts
		$('.details_facts ul').empty();
		for(var i = 0; i < risk_info['key_facts'].length; i++) {
			var fact_item = $('<li>' + risk_info['key_facts'][i] + '</li>');
			$('.details_facts ul').append(fact_item);
		} 
		//Detail sources
		$('.details_facts ol').empty();
		for(var i = 0; i < risk_info['sources'].length; i++) {
			//console.log(risk_info['sources'][i]);
			var source_item = $('<li>' + risk_info['sources'][i] + '</li>');
			$('.details_sources ol').append(source_item);
		}
	}

	function get_risk_info(risk_id) {
		for(var i = 0; i < impact_risks.length; i++) {
			if(impact_risks[i]['id'] == risk_id) {
				return impact_risks[i]; 
			}
		}
		return null;
	}
});


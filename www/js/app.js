// As JQuery will be used for majority of our JS code, you can attach it to the global scope
// Along with helpers such as mathJS and underscoreJS
global.$ = global.jQuery = require("jquery");
//global.math = require('mathjs');
global.d3 = require("d3");
//global._ = require("underscore");

// Any special library you want to use can be installed through npm and imported into the specifc files.
// Most of these may not need variables attached in order to use them, see their documentation.
//require('bootstrap');
//require('twbs-pagination');
//require("blueimp-file-upload");
var d3_geo = require("d3-geo");
var d3_geoprojection = require("d3-geo-projection");
var topojson = require('topojson');

// Files that you create can also be included in any JS file,
// however their path has to be specified as they are not part of NPM
//var risks = require('./key_risks.js');

$(document).ready(function(){
	var region_name, impact_risks;

	//var map_div = $('#worldmap');
	make_map('#worldmap', 'large');
	make_map('#smallmap', 'small');


    $('.risks').on("change", ".radio input[type='radio']", function() {
    	$active_div = $(this).closest('div');
    	$active_div.addClass('active');
    	$active_div.siblings('div').removeClass('active');
    	var risk_id = $(this).val();
    	init_risk_info(risk_id);
    	$('#risk_level').removeClass('hidden');
    	$('#risk_details').removeClass('hidden');
    });

    $('#smallmap').dblclick(function() {
    	$('#risk_level').addClass('hidden');
    	$('#risk_details').addClass('hidden');
    	$('#key_impact_risks').addClass('hidden');
    	$('#smallmap').addClass('hidden');
    	$('#worldmap').removeClass('hidden');
    });

	function large_map_clicked(region, color) {
		console.log('large_map_clicked', region, color);
		region_name = region;

		$('#risk_details').css('border-color', color);

		$('#worldmap').addClass('hidden');
		$('#smallmap').removeClass('hidden');
		$('#key_impact_risks').removeClass('hidden');
	
		impact_risks = get_impact_risks(region_name);
		if(impact_risks == null) {
			console.log('Region did not find, please check the region name.');
		}
		else {
			init_risks(impact_risks);
		}
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

	// Draw map
	function make_map(map_div, option) {

		var width = $(map_div).width();
		var height = Math.round(width/960*611);

		var svg = d3.select(map_div).append("svg")
				.attr("width", width)
				.attr("height", height);

		var svgrect = svg.append("rect")
				.attr("class", "svgrect")
				.attr("width", "100%")
				.attr("height", "100%");

	    var scale;
		if(option =='large') {
			scale = 180;
		}
		if(option == 'small') {
			scale = 55;
		}
		var projection = d3_geoprojection.geoCylindricalStereographic().scale(scale).translate([width/2, height/2]);
		var path = d3_geo.geoPath().projection(projection);
		var graticule = d3_geo.geoGraticule();

		svg.append("path")
			.datum(graticule)
			.attr('id', 'graticule')
			.attr('d', path);

		var regions, region;
		d3.json("Assets/region-geo.json", function(error, world) {
			if(error) {
				console.log(error);
			}
		var countries = topojson.feature(world, world.objects.countries);

		var asia = {type: "FeatureCollection", name: "Asia", id:1, clsname: "asia",
		  			features: countries.features.filter(function(d) { return d.properties.continent=="Asia"; })};
		var africa = {type: "FeatureCollection", name: "Africa", id:2, clsname: "africa",
					features: countries.features.filter(function(d) { return d.properties.continent=="Africa"; })};
		var europe = {type: "FeatureCollection", name: "Europe", id:3, clsname: "europe",
					features: countries.features.filter(function(d) { return d.properties.continent=="Europe"; })};
		var na = {type: "FeatureCollection", name: "North America", id:4, clsname: "na",
					features: countries.features.filter(function(d) { return d.properties.continent=="North America"; })};
		var sa = {type: "FeatureCollection", name: "Central and South America", id:5, clsname: "sa", 
					features: countries.features.filter(function(d) { return d.properties.continent=="South America"; })};
		var antarctica = {type: "FeatureCollection", name: "Polar Regions", id:6, clsname: "polar",
					features: countries.features.filter(function(d) { return d.properties.continent=="Antarctica"; })};
		var greenland =  {type: "FeatureCollection", name: "Polar Regions", id:7, clsname: "polar",
					features: countries.features.filter(function(d) { return d.properties.continent=="Polar Regions"; })};
		var australasia = {type: "FeatureCollection", name: "Australasia", id:8, clsname: "australasia",
					features: countries.features.filter(function(d) { return d.properties.continent=="Oceania"; })};
		var ocean = {type: "FeatureCollection", name: "The Ocean", id:9, clsname: "svgrect",
					features: countries.features.filter(function(d) { return d.properties.continent=="Seven seas (open ocean)"; })};

		regions = [asia, africa, europe, na, sa, antarctica, greenland, australasia, ocean];	

		region = svg.selectAll(".regions").data(regions);

		//Insert path
		var insertregion = region.enter().insert("path")
			.attr("class", function(d,i) { return "regions " + d.clsname; })
			.attr("d", path)
			.attr("id", function(d,i) { return d.id; })
			.attr("title", function(d,i) { return d.name; });
		   	
			if(option=='large') {
			  //Insert region name
				svg.selectAll(".region-label").data(regions)
					.enter()
					.append("text")
			  	.attr("class", 'region-label')
			  	.attr("transform", function(d) {
			  		var centroid = path.centroid(d);
			  		return "translate(" + centroid + ")"; })
			  	.attr('dy', ".35em")
			  	.text(function(d) {
			  		return d.name; });

			  //Insert Textbox for small islands
			   var smallIslands = [{name: "Small Islands"}];
			   var small_island = svg.selectAll('g.smallislands')
			   		.data(smallIslands)
			   		.enter().append("g")
			   		.attr("class", "smallislands")
			   		.attr("transform", function() {
			   			return "translate(" + width*0.05 + "," + height*0.7 + ")";
			   		}); 		   	
			   	var small_island_box = small_island.append("rect")
			   		.attr("class", "smallislands_box")
			   		.attr("width", width * 0.15)
			   		.attr("height", height * 0.12);
			   	var small_island_text = small_island.append("text")
			   		.attr("class", 'region-label')
			   		.attr("x", width * 0.15/2 )
			   		.attr("y", height * 0.12/2)
			   		.attr("dy", ".35em")
			   		.text(function(d) { return d.name; });

				svg.on({
			          "click":  function() {
			          	var color = d3.select(svgrect[0][0]).style('fill');
			          	//var lighter_color = d3.rgb(color).brighter().toString();
			          	large_map_clicked('The Ocean', color); 
			          },
			        });
				region.on({
					  "click": function(d, i) {
					  	var color = d3.select(region[0][i]).style('fill');
			          	//var lighter_color = d3.rgb(color).brighter(2).toString();
					  	large_map_clicked(d['name'], color);
					  	d3.event.stopPropagation();
					  }, 
				});
				small_island_box.on({
					  "click": function(d, i) {
					  	console.log(d);
					  	var color = d3.select(small_island_box[0][i]).style("fill");
			          	//var lighter_color = d3.rgb(color).brighter().toString();
					  	large_map_clicked(d.name, color);
					  	d3.event.stopPropagation();
					  }, 
				});
			}
		});
	}

});



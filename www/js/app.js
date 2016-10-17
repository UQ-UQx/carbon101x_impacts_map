// As JQuery will be used for majority of our JS code, you can attach it to the global scope
// Along with helpers such as mathJS and underscoreJS
global.$ = global.jQuery = require("jquery");
//global.math = require('mathjs');
global.d3 = require("d3");
//global._ = require("underscore");

// Any special library you want to use can be installed through npm and imported into the specifc files.
// Most of these may not need variables attached in order to use them, see their documentation.
require('bootstrap');
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
	make_large_map('#worldmap');
	//make_map('#smallmap', 'small');


    $('.risks').on("change", ".radio input[type='radio']", function() {
    	$active_div = $(this).closest('div');
    	$active_div.addClass('active');
    	$active_div.siblings('div').removeClass('active');
    	var risk_id = $(this).val();
    	init_risk_info(risk_id);
    	$('#risk_level').removeClass('hidden');
    	$('#risk_details').removeClass('hidden');
    });

    $('#smallmap').click(function() {
    	$('#risk_level').addClass('hidden');
    	$('#risk_details').addClass('hidden');
    	$('#key_impact_risks').addClass('hidden');
    	$('#smallmap').addClass('hidden');
    	$('#worldmap').removeClass('hidden');
    });

    d3.select(window).on("resize", resize);

    function resize() {
    	console.log('resizeing');

		var heightRatio = 611/960;
		var scaleRatio = 153/960;

    	if(!$("#worldmap").hasClass('hidden')) {
    		console.log('worldmap');

			var margin = {top: 10, left: 10, bottom: 10, right: 10};		
			var width = $("#worldmap").width() - margin.left - margin.right;
			var height = Math.round(width * heightRatio);
			var scale = Math.floor(width * scaleRatio);

			//Change svg size
    		var svg = d3.select("#worldmap svg")
    			.attr("width", width)
    			.attr("height", height);

    		console.log('svg', svg);

    		//Change scale and projection
    		var projection = d3_geoprojection.geoCylindricalStereographic().scale(scale).translate([width/2, height/2]);

    		var path = d3_geo.geoPath().projection(projection);
    		console.log('path_new', path);

    		svg.select('#graticule').attr('d', path);
    		svg.selectAll('.regions').attr('d', path);
    		svg.selectAll('.region-label')
    			.attr("transform", function(d) {
					var centroid = path.centroid(d);
					return "translate(" + centroid + ")"; });

    		svg.selectAll('g.smallislands')
				.attr("transform", function() {
					return "translate(" + width*0.05 + "," + height*0.7 + ")";
				}); 

			svg.select('.smallislands_box')		   	
				.attr("width", width * 0.15)
				.attr("height", height * 0.12);

			svg.select('.smallisland-label')
				.attr("x", width * 0.15/2 )
				.attr("y", height * 0.12/2);

			svg.select('rect.svgrect')
				.attr("width", "100%")
				.attr("height", "100%");

    	}

    	if(!$("#smallmap").hasClass('hidden')) {
    		console.log('smallmap');
			var margin = {top: 2, left: 0, bottom: 2, right: 0};		
			var width = $("#smallmap").width() - margin.left - margin.right;
			var height = Math.round(width * heightRatio);
			var scale = Math.floor(width * scaleRatio);

			//Change svg size
    		var svg = d3.select("#smallmap svg")
    			.attr("width", width)
    			.attr("height", height);

    		//Change scale and projection
    		var projection = d3_geoprojection.geoCylindricalStereographic().scale(scale).translate([width/2, height/2]);

    		var path = d3_geo.geoPath().projection(projection);

    		svg.select('#graticule').attr('d', path);
    		svg.selectAll('.regions').attr('d', path);

    		svg.selectAll('g.smallislands')
    			.attr("transform", function() {
						return "translate(" + width*0.05 + "," + height*0.7 + ")";
				}); 
			svg.select('.smallislands_box_small')		   	
				.attr("width", width * 0.15)
				.attr("height", height * 0.12);
			svg.select('.smallislands-label-small')
				.attr("x", width * 0.15/2)
				.attr("y", height * 0.12/2);
 
			svg.select('rect.svgrect_small')
				.attr("width", "100%")
				.attr("height", "100%");
    	}

    }

	function large_map_clicked(region, color) {
		console.log('large_map_clicked', region, color);
		region_name = region;

		$('#risk_details').css('border-color', color);

		$('#worldmap').addClass('hidden');
		$('#smallmap').removeClass('hidden');
		make_small_map('#smallmap', region, color);
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
		if( present_value == 'Unknown') {
			var present_width = '100%';
			$('#present_level').css('width', present_width);
		}
		else {
			var present_width = (present_value * 10) + '%';
			$('#present_level').attr('aria-valuenow', present_value).css('width', present_width);			
		}
		var present_color = '';
		var present_text = '';
		switch(present_value) {
			case 1:
			case 2:
				present_color = 'SpringGreen';
				present_text = 'Very low';
				break;
			case 3:
			case 4:
				present_color = '#DDDD00';
				present_text = 'Low';
				break;
			case 5:
			case 6:
				present_color = 'Orange';
				present_text = 'Medium';
				break;
			case 7:
			case 8:
				present_color = 'Red';
				present_text = 'High';
				break;
			case 9:
			case 10:
				present_color = 'DarkRed';
				present_text = 'Very high';
				break;
			case 'Unknown':
				present_color = 'LightGrey';
				present_text = 'Unknown';
				break;
		}
		$('#present_level').attr('aria-valuetext', present_text).css('background', present_color).text(present_text);

		//Degree 2
		var degree2_value = risk_info['level']['degree2'];
		if( degree2_value == 'Unknown') {
			var degree2_width = '100%';
			$('#degree2_level').css('width', degree2_width);
		}
		else {
			var degree2_width = (degree2_value * 10) + '%';
			$('#degree2_level').attr('aria-valuenow', degree2_value).css('width', degree2_width);
		}
		var degree2_color = '';
		var degree2_text = '';
		switch(degree2_value) {
			case 1:
			case 2:
				degree2_color = 'SpringGreen';
				degree2_text = 'Very low';
				break;
			case 3:
			case 4:
				degree2_color = '#DDDD00';
				degree2_text = 'Low';
				break;
			case 5:
			case 6:
				degree2_color = 'Orange';
				degree2_text = 'Medium';
				break;
			case 7:
			case 8:
				degree2_color = 'Red';
				degree2_text = 'High';
				break;
			case 9:
			case 10:
				degree2_color = 'DarkRed';
				degree2_text = 'Very high';
				break;
			case 'Unknown':
				degree2_color = 'LightGrey';
				degree2_text = 'Unknown';
				break;
		}
		$('#degree2_level').attr('aria-valuetext', degree2_text).css('background', degree2_color).text(degree2_text);

		//Degree 4
		var degree4_value = risk_info['level']['degree4'];
		if( degree4_value == 'Unknown') {
			var degree4_width = '100%';
			$('#degree4_level').css('width', degree4_width);
		}
		else {
			var degree4_width = (degree4_value * 10) + '%';
			$('#degree4_level').attr('aria-valuenow', degree4_value).css('width', degree4_width);
		}
		var degree4_color = '';
		var degree4_text = '';
		switch(degree4_value) {
			case 1:
			case 2:
				degree4_color = 'SpringGreen';
				degree4_text = 'Very low';
				break;
			case 3:
			case 4:
				degree4_color = '#DDDD00';
				degree4_text = 'Low';
				break;
			case 5:
			case 6:
				degree4_color = 'Orange';
				degree4_text = 'Medium';
				break;
			case 7:
			case 8:
				degree4_color = 'Red';
				degree4_text = 'High';
				break;
			case 9:
			case 10:
				degree4_color = 'DarkRed';
				degree4_text = 'Very high';
				break;
			case 'Unknown':
				degree4_color = 'LightGrey';
				degree4_text = 'Unknown';
				break;
		}
		$('#degree4_level').attr('aria-valuetext', degree4_text).css('background', degree4_color).text(degree4_text);

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
		$('.details_sources ol').empty();
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

	// Draw large map
	function make_large_map(map_div) {

		var margin = {top: 10, left: 10, bottom: 10, right: 10};		
		var width = $(map_div).width() - margin.left - margin.right;
		var heightRatio = 611/960;
		var scaleRatio = 153/960;
		var height = Math.round(width * heightRatio);
		var scale = Math.floor(width * scaleRatio);
//		console.log(heightRatio, scaleRatio, height, scale);

		var svg = d3.select(map_div).append("svg")
				.attr("width", width)
				.attr("height", height);

		var svgrect = svg.append("rect")
				.attr("class", "svgrect")
				.attr("width", "100%")
				.attr("height", "100%");

		var projection = d3_geoprojection.geoCylindricalStereographic().scale(scale).translate([width/2, height/2]);
		var path = d3_geo.geoPath().projection(projection);
		console.log('path_origin', path);
		var graticule = d3_geo.geoGraticule();

		svg.append("path")
			.datum(graticule)
			.attr('id', 'graticule')
			.attr('d', path);

		var regions, region;
		d3.json("www/js/region-geo.json", function(error, world) {
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
						features: countries.features.filter(function(d) { return d.properties.continent=="South America" || d.properties.continent=="Central America"; })};
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
				.attr("class", 'smallisland-label')
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
		});
	}

	// Draw small map
	function make_small_map(map_div, regionname, color) {
		$(map_div).empty();

		var margin = {top: 2, left: 0, bottom: 2, right: 0};		
		var width = $(map_div).width() - margin.left - margin.right;
		var heightRatio = 611/960;
		var scaleRatio = 153/960;
		var height = Math.round(width * heightRatio);
		var scale = Math.floor(width * scaleRatio);

		var svg = d3.select(map_div).append("svg")
				.attr("width", width)
				.attr("height", height);

		var svgrect = svg.append("rect")
				.attr("class", "svgrect_small")
				.attr("width", "100%")
				.attr("height", "100%");

		var projection = d3_geoprojection.geoCylindricalStereographic().scale(scale).translate([width/2, height/2]);
		var path = d3_geo.geoPath().projection(projection);
		var graticule = d3_geo.geoGraticule();

		svg.append("path")
			.datum(graticule)
			.attr('id', 'graticule')
			.attr('d', path);

		var regions, region;
		d3.json("www/js/region-geo.json", function(error, world) {
			if(error) {
				console.log(error);
			}
			var countries = topojson.feature(world, world.objects.countries);

			var asia = {type: "FeatureCollection", name: "Asia", id:1, clsname: "asia_small", selected: false,
			  			features: countries.features.filter(function(d) { return d.properties.continent=="Asia"; })};
			var africa = {type: "FeatureCollection", name: "Africa", id:2, clsname: "africa_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Africa"; })};
			var europe = {type: "FeatureCollection", name: "Europe", id:3, clsname: "europe_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Europe"; })};
			var na = {type: "FeatureCollection", name: "North America", id:4, clsname: "na_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="North America"; })};
			var sa = {type: "FeatureCollection", name: "Central and South America", id:5, clsname: "sa_small", selected: false, 
						features: countries.features.filter(function(d) { return d.properties.continent=="South America" || d.properties.continent=="Central America"; })};
			var antarctica = {type: "FeatureCollection", name: "Polar Regions", id:6, clsname: "polar_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Antarctica"; })};
			var greenland =  {type: "FeatureCollection", name: "Polar Regions", id:7, clsname: "polar_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Polar Regions"; })};
			var australasia = {type: "FeatureCollection", name: "Australasia", id:8, clsname: "australasia_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Oceania"; })};
			var ocean = {type: "FeatureCollection", name: "The Ocean", id:9, clsname: "svgrect_small", selected: false,
						features: countries.features.filter(function(d) { return d.properties.continent=="Seven seas (open ocean)"; })};

			regions = [asia, africa, europe, na, sa, antarctica, greenland, australasia, ocean];	

			region = svg.selectAll(".regions").data(regions);

			//Insert path
			var insertregion = region.enter().insert("path")
				.attr("class", function(d,i) { return "regions " + d.clsname; })
				.attr("d", path)
				.attr("id", function(d,i) { return d.id; })
				.attr("title", function(d,i) { return d.name; })
				.style("fill", function(d,i) { 
					if(d.name == regionname) {
						return color;
					}
					else {
						return 'lightgrey';
					}
				});;

			if(regionname == "The Ocean") {
				console.log(d3.select(svgrect[0][0]));
				d3.select(svgrect[0][0]).style("fill", color);
			}

			var smallIslands = [{name: "Small Islands"}];
			var small_island = svg.selectAll('g.smallislands')
					.data(smallIslands)
					.enter().append("g")
					.attr("class", "smallislands")
					.attr("transform", function() {
						return "translate(" + width*0.05 + "," + height*0.7 + ")";
					}); 		   	
			var small_island_box = small_island.append("rect")
				.attr("class", "smallislands_box_small")
				.attr("width", width * 0.15)
				.attr("height", height * 0.12)
				.style("fill", function(d, i) {
					if(d.name == regionname) { return color; }
					else { return 'lightgrey'; }
				})
				.style("fill-opacity", function(d,i) {
					if(d.name == regionname) { return 0.7; }
					else { return 0; }
				});	
			var small_island_text = small_island.append("text")
				.attr("class", 'smallislands-label-small')
				.attr("x", width * 0.15/2)
				.attr("y", height * 0.12/2)
				.attr("dy", ".35em")
				.text(function(d) { return d.name; })
				.style("fill-opacity", function(d,i) {
					if(d.name == regionname) { return 0.7; }
					else { return 0; }
				});	
			 
		});
		
	}

});



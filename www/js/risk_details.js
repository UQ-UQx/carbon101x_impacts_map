var risk_details = [
	//Africa
	{
		'code': '',
		'name': 'Africa',
		'risks': [
			//Risk: Biodiversity loss
			{
				'id': 'biodiversity_loss',
				'name': 'Biodiversity loss',
				'level': {
					'present': 7,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'biodiversity-loss.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
					{
						'title': 'Sea surface temperature',
						'img_file': 'sea-surface-temperature.png', 
					},
				],
				'key_facts':[
					'Africa contains about one-fifth of all known species of plants, mammals, and birds in the world, as well as one-sixth of amphibians and reptiles<sup>1</sup>.',
					'Organisms are habitat specific – as climate change causes changes in habitats (through warming, sea level rise, and changes in precipitation), the abundance, distribution and composition of some species will inevitably also change. Higher rates of disease outbreaks and species extinction are expected as atmospheric temperatures increase<sup>2</sup>.',
					'Changes in species distribution have already been observed as a result of the historic warming trend. For example, in Madagascar, reptiles and amphibians are moving to higher altitudes where the temperature is cooler<sup>3</sup>.',
					'Under a 3°C warming scenario, 20 – 50% of species in South Africa face extinction, including 25 – 60% mammals, 30 – 40% birds and 15 – 70% butterflies<sup>4</sup>.',
				],
				'sources': [
					'UNEP (2008). <i>Africa Atlas of our Changing Environment</i>, Nairobi, Kenya.',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
					'Raxworthy, CJ, RG Pearson, N Rabibisoa, AM Rakotondrazafy, JB Ramanamanjato, AP Raselimanana, S Wu, RA Nussbaum & DA Stone (2008). <i>Extinction vulnerability of tropical montane endemism from warming and upslope displacement: a preliminary appraisal for the highest massif in Madagascar</i>, Global Change Biology, 14(8), pp. 1703-1720.',
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
				] 
			},

			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 9
				},
				'icon': 'reduced-crop-productivity.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature (drought)',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Reduced crop productivity (associated with heat and drought stress) will have strong adverse effects on regional, national, and household livelihood and food security, especially given increased pest and disease damage and flood impacts on food system infrastructure.',
					'Sharp declines of 5 – 10% in crop yield are projected in tropical regions in Africa under a 2°C warming scenario<sup>1</sup>.',
					'Agricultural yields could decline by 15 – 35% under a 4°C warming scenario<sup>1</sup>',
				],
				'sources': [
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
				] 
			},

			//Risk: Degradation of coral reefs and loss of fisheries	
			{
				'id': 'fisheries',
				'name': 'Degradation of coral reefs and loss of fisheries',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'degradation-of-corals-and-loss-of-fisheries.png',
				'climatic_drivers': [
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
					{
						'title': 'Damaging cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Sea surface temperature',
						'img_file': 'sea-surface-temperature.png', 
					},
				],
				'key_facts':[
					'Increased sea surface temperature and ocean acidification make coral reefs significantly more vulnerable to bleaching and mortality events.',
					'A global warming increase of more than 2°C will eliminate two thirds of the Earth’s coral-dominated reef ecosystems<sup>1</sup>.',
					'Coral reefs currently account for 20 – 25% of fish harvested in Africa. However, degradation of coral reefs will result in loss of fishery stocks – under a warming scenario of ~3°C, the ability of reef systems to provide food for coastal populations decreases by 80% by 2100<sup>2</sup>.',
					'Coastal countries of West Africa will experience a significant negative impact from climate change. Under a warming scenario of ~3°C by 2050, the annual landed value of fish for that region is estimated to decline by 21%, resulting in a nearly 50% decline in fisheries-related employment and a total annual loss of US$311 million to the region’s economy<sup>3</sup>.',
				],
				'sources': [
					'Frieler, K, M Meinshausen, A Golly, M Megel, K Lebek, D Donner & O Hoegh-Guldberg (2013). ‘Limiting global warming to 2°C is unlikely to save most coral reefs’, <i>Nature Climate Change</i>, 3, pp.165-170.',
					'Hoegh-Guldberg, O, H Hoegh-Guldberg, J Veron, A Green, ED Gomez, JEN Lough, M King, Ambariyanto, L Hansen, J Cinner, G Dews, G Russ, HZ Schuttenberg, EL Peñaflor, CM Eakin, TRL Christensen, M Abbey, F Areki, RAKosaka, A Tewfik & J Oliver (2009). <i>The Coral Triangle and Climate Change: Ecosystems, People and Societies at Risk</i>: <a href="https://goo.gl/kRCnyl" target="_blank">Link</a>',
					'Lam, V, W Cheung, W Swartz & RU Sumaila (2012). ‘Climate change impacts on fisheries in West Africa: Implications for economic, food and nutritional security’, <i>African Journal of Marine Science</i>, 34(1), pp.103-117.',
				] 
			},

			//Risk: Vector- and waterborne diseases	
			{
				'id': 'disease',
				'name': 'Vector- and water-borne diseases',
				'level': {
					'present': 7,
					'degree2': 9,
					'degree4': 9
				},
				'icon': 'disease.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'The incidence and geographic range of vector- and water-borne diseases is expected to increase due to changes in the mean and variability of temperature and precipitation, particularly along the edges of their distribution.',
					'40 – 60 million more people will be exposed to malaria in Africa under a 2°C warming scenario<sup>1</sup>.',
					'  Up to 80 million more people could be exposed to malaria in Africa under a 4°C warming scenario<sup>1</sup>.',
				],
				'sources': [
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
				] 
			},

			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 3,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'water-scarcity.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},					
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
				],
				'key_facts':[
					'Compounded stress on water resources facing significant strain from overexploitation and degradation at present and increased demand in the future, with drought stress exacerbated in drought-prone regions of Africa.',
					' Potentially a 20 – 30% decrease in water availability in some vulnerable regions in Southern Africa under a 2°C warming scenario<sup>1</sup>.',
					'Potentially a 30 – 50% decrease in water availability in Southern Africa under a 4°C warming scenario<sup>1</sup>.',
				],
				'sources': [
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
				] 
			},
		]
	},

	//Europe
	{
		'code': '',
		'name': 'Europe',
		'risks': [
			//Risk: Coastal and river basin floods
			{
				'id': 'floods',
				'name': 'Coastal and river basin floods',
				'level': {
					'present': 5,
					'degree2': 6,
					'degree4': 8
				},
				'icon': 'coastal-and-river-basin-floods.png',
				'climatic_drivers': [
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
				],
				'key_facts':[
					'Climate change will increase the economic losses and number of people affected by flooding in river basins and coasts, driven by increasing urbanization, increasing sea levels, coastal erosion, and peak river discharges.',
					'River floods are currently the most common natural disaster in Europe, resulting in large economic losses through direct damage to infrastructure, property and agricultural land. Global warming is expected to increase the magnitude and frequency of extreme precipitation events, which may lead to more intense and frequent floods. Under a warming scenario of 2.5°C (without adaptation), the increase in direct economic damage from river floods is projected to be approximately 7.7 billion euros<sup>1</sup>.',
					' The number of people in Europe annually affected by coastal floods in the reference year (1995) is estimated to be 36,000. Under a warming scenario of 2.5°C (without adaptation), the number of people affected annually by flooding is projected to increase to 775,000 people. The British Isles, Central Europe North, and Southern Europe are the areas potentially most affected by coastal floods<sup>1</sup>.',
				],
				'sources': [
					'Ciscar, JC, A Iglesias, L Feyen, L Szabo, D Van Regemorter, B Amelung, R Nicholls, P Watkiss, OB Christensen, R Dankers, L Garrote, CM Goodess, A Hunt, A Moreno, J Richards & A Soria (2011). ‘Physical and economic consequences of climate change in Europe’. <i>Proceedings of the National Academy of Sciences of the United States of America, 108, pp.2678-2683</i>.',
				] 
			},

			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'water-scarcity.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
				],
				'key_facts':[
					'Water availability will be significantly reduced in Europe as a result of the warming and drying trends, and extreme heat events that climate change will bring to Europe. Combined with increased water demand (e.g. for irrigation, energy and industry, domestic use) and with reduced water drainage and runoff as a result of increased evaporative demand, water scarcity will become a defining resource challenge.',
					'Water availability and crop yields in southern Europe are expected to decline by 20% with a 2°C increase in global temperatures<sup>1</sup>.',
					'In Southern Europe, serious droughts could occur once every 10 years under a 3°C warming scenario<sup>1</sup>.',
				],
				'sources': [
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
				] 
			},		

			//Risk: Extreme heat events
			{
				'id': 'extreme_heat',
				'name': 'Extreme heat events',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'extreme-heat-events.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},				
				],
				'key_facts':[
					'As the global atmospheric temperature increases, so too will the frequency and magnitude of extreme heat events in Europe.',
					'Extreme heat events cause economic losses; impact on health and well-being, labour productivity, crop production, and air quality; and increase the risk of wildfires in southern Europe and in the Russian boreal region.',
					'Under a warming scenario of 2.5°C, the annual increase in human mortality (caused by heat and without acclimatization) is estimated at 60,000<sup>1</sup>.',
				],
				'sources': [
					' Ciscar, JC, A Iglesias, L Feyen, L Szabo, D Van Regemorter, B Amelung, R Nicholls, P Watkiss, OB Christensen, R Dankers, L Garrote, CM Goodess, A Hunt, A Moreno, J Richards & A Soria (2011). ‘Physical and economic consequences of climate change in Europe’. <i>Proceedings of the National Academy of Sciences of the United States of America, 108, pp.2678-2683</i>.',
				] 
			}
		]
	},

	//Asia
	{
		'code': '',
		'name': 'Asia',
		'risks': [
			//Risk: Heat-related human mortality
			{
				'id': 'human_mortality',
				'name': 'Heat-related human mortality',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'heat-related-human-mortality.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},					
				],
				'key_facts':[
					'Warmer atmospheric temperatures, as well as an increase in extreme temperature events, will increase the risk of heat-related mortality.',
					'In addition to mortality, extreme heat events cause economic losses; impact on health and well-being, labour productivity, crop production, and air quality; and increase the risk of wildfires.',
					'Under a ~2.8°C warming scenario, climate change is expected to contribute to an additional 143,000 heat-related deaths in people aged 65+ by 2050, in Asia alone<sup>1</sup>.',
				],
				'sources': [
					'World Health Organisation (2014). <i>Quantitative risk assessment of the effects of climate change on selected causes of death, 2030s and 2050s</i>. <a href="https://goo.gl/ZBnDoH" target="_blank">Link</a>',
				] 
			},

			//Risk: Water and food scarcity
			{
				'id': 'waterscarcity',
				'name': 'Water and food scarcity',
				'level': {
					'present': 3,
					'degree2': 5,
					'degree4': 7
				},
				'icon': 'water-and-food-scarcity.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},		
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
				],
				'key_facts':[
					'Increased average temperature and extreme heat events—combined with a drying trend—will increase the risk of water shortages, crop failure and lower crop production in Asia<sup>1</sup>. This has implications for food security.',
					'Global warming between ~2°C and 4°C will reduce agricultural yield over a large area of Asia. In Southeast Asia, land productivity is expected to decline by 18 – 32%<sup>2</sup>.',
					'Under a global warming scenario of 2°C, some parts of the Lower Mekong Basin (a major ‘food bowl’ covering regions of Vietnam, Thailand, Cambodia and Laos) could see local annual average temperature increases of 4 - 6°C. This will see major shifts in the distribution of suitable growing areas, with a net loss in yields of some staple crops such as maize<sup>3</sup>.',
				],
				'sources': [
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
					'Iglesias, A, S Quiroga & A Diz (2011). ‘Looking into the future of agriculture in a changing climate’, <i>European Review of Agricultural Economics</i>, 38(3), pp.427-447.3.ICEM, 2013. <i>USAID Mekong ARCC Climate Change Impact and Adaptation Study for the Lower Mekong Basin: Main Report</i>. <a href="http://www.mekongarcc.net/resource" target="_blank">Link</a>.',
					'ICEM (2013). <i>USAID Mekong ARCC Climate Change Impact and Adaptation Study for the Lower Mekong Basin: Main Report</i>. <a href=" http://www.mekongarcc.net/resource">Link</a>.',
				] 
			},			
			//Risk: Exacerbated poverty and inequalities	
			{
				'id': 'poverty_inequalities',
				'name': 'Exacerbated poverty and inequalities',
				'level': {
					'present': 7,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'Exacerbated-poverty-and-inequalities.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Disruption of basic services such as water supply, sanitation, energy provision, and transportation systems will have implications for local economies and “strip populations of their assets and livelihoods”. Such impacts are not expected to be evenly spread among regions and cities, sectors of the economy, or socioeconomic groups; they tend to reinforce existing inequalities<sup>1</sup>.',
					'Asia is predominantly agrarian, with 58% of its population living in rural areas, of which 81% are dependent on agriculture for their livelihoods. This dependence on natural resources makes rural livelihoods particularly vulnerable to climate variability (e.g. temperature, heat waves, precipitation)<sup>1</sup>.',
					'In a low crop productivity scenario, producers in food exporting countries (such as Indonesia, the Philippines, and Thailand) would benefit from global food price rises and reduced poverty, while countries such as Bangladesh would experience a net increase in poverty of approximately 15% by 2030<sup>2</sup>.',
				],
				'sources': [
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
					'Hertel, TW, MB Burke & DB Lobell (2010). ‘The poverty implications of climate-induced crop yield changes by 2030’, <i>Global Environmental Change</i>, 20(4), pp. 577-585.'
				] 
			},			
			//Risk: Coral reef decline		
			{
				'id': 'reef_decline',
				'name': 'Coral reef decline',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 9
				},
				'icon': 'coral-reef-decline.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
				],
				'key_facts':[
					'Asia supports around 40% of the world’s coral reefs, mostly in the “coral triangle” in Southeast Asia. Independent of climate change, human pressures such as coastal deforestation, aquaculture and agriculture, water pollution, and over-exploitation of marine life have severely degraded these reef ecosystems – 40% of coral reefs and mangroves have been lost in Southeast Asia over the past 40 years<sup>1</sup>. These pressures make coral reefs less resilient to climate-related impacts such as acidification and bleaching events.',
					'Global warming of more than 2°C will eliminate most coral dominated reef systems<sup>1</sup>.',
					'Oceans absorb CO<sub>2</sub> from the atmosphere, reducing the greenhouse effect and potential global warming experienced by the Earth. However, this increase in CO<sub>2</sub> is altering the ocean chemistry, making it more acidic. This makes it harder for marine calcifying organisms (such as corals, molluscs and crustaceans) to form their skeletons and shells, and results in slower coral reef growth (or net loss) and weakening of reef ecosystems<sup>1</sup>. As atmospheric CO<sub>2</sub> concentration continues to increase, the impacts of ocean acidification will worsen.'
				],
				'sources': [
					' Hoegh-Guldberg, O, H Hoegh-Guldberg, J Veron, A Green, ED Gomez, JEN Lough, M King, Ambariyanto, L Hansen, J Cinner, G Dews, G Russ, HZ Schuttenberg, EL Peñaflor, CM Eakin, TRL Christensen, M Abbey, F Areki, RAKosaka, A Tewfik & J Oliver (2009). <i>The Coral Triangle and Climate Change: Ecosystems, People and Societies at Risk</i>: <a href="https://goo.gl/kRCnyl" target="_blank">Link</a>',
				] 
			},			
			//Risk: Species extinctions
			{
				'id': 'species_extinctions',
				'name': 'Species extinctions',
				'level': {
					'present': 3,
					'degree2': 5,
					'degree4': 7
				},
				'icon': 'extinction-of-mountaintop-species.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
				],
				'key_facts':[
					'Up to 50% of Asia’s total biodiversity is at risk due to climate change<sup>1</sup>.',
					'As climate change causes changes in habitats (through warming, drying and changes in precipitation), the abundance, distribution and composition of some species will inevitably also change. For example, the boreal forests of North Asia will move further north (to cooler latitudes) as global temperatures increase<sup>1</sup>.',
					'A doubling of present atmospheric CO<sub>2</sub> concentrations (which represents a further ~3°C warming) is expected to result in extinctions of 133–2,835 plants species and 10–213 vertebrates in Indo-Burma, and 105–1,522 plants and 5–77 vertebrates in China<sup>2</sup>.',
				],
				'sources': [
					'IPCC (2007). <i>Climate Change 2007: Impacts, Adaptation and Vulnerability. Contribution of Working Group II to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://goo.gl/Mk5lM8" target="_blank">Link</a>',
					'Malcolm, JR, C Liu, RP Neilson, L Hansen & L Hannah (2006). ‘Global warming and extinctions of endemic species from biodiversity hotspots’, <i>Conservation Biology</i>, 20(2), pp.538–548.',
				] 
			},			
		]
	},

	//Polar Regions
	{
		'code': '',
		'name': 'Polar Regions',
		'risks': [
			//Risk: Threats to freshwater, marine and terrestrial ecosystems
			{
				'id': 'threat_ecosystems',
				'name': 'Threats to freshwater, marine and terrestrial ecosystems',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'threats-to-freshwater-marine-terrestrial-ecosystems.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Snow cover',
						'img_file': 'snow-cover.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
				],
				'key_facts':[
					'Global warming is most pronounced in the Arctic, altering the extent, thickness and duration of sea ice. This endangers the habitat and existence of polar bears by giving them less time to hunt during the winter. A 2.8°C warming has been projected to cause up to a 68% reduction in polar bear habitat by 2100<sup>1</sup>.',
					'Under a 4-degree scenario, around half of Arctic tundra will be lost<sup>2</sup>. A decline in natural habitats is likely to reduce the populations of reindeers, lemmings and caribous, as deciduous shrubs replace mosses and lichens in the Arctic<sup>3</sup>.',
					'Increased frequency of thawing-freezing events during winter can create denser snow layers, restricting access to vegetation for Arctic herbivores. This negatively impacts herbivore populations, which in turn will negatively impact on carnivore populations that prey upon these herbivores<sup>4</sup>.',
					'Vulnerable marine species will have a reduced spatial extent as they move closer to the Poles. This is expected to alter the marine species composition of zooplankton, which can impact some fish and shellfish populations<sup>3</sup>.',
				],
				'sources': [
					'Durner, G, D Douglas, R Nielson, S Amstrup, T McDonald, I Stirling, M Mauritzen, EW Born, Ø Wiig, E DeWeaver, MC Serreze, SE Belikov, MM Holland, J Maslanik, J Aars & A Derocher (2009). ‘Predicting 21st‐century polar bear habitat distribution from global climate models’, <i>Ecological Monographs</i>, 79(1), pp.25-58.',
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
					'Callaghan, TV, LO Björn, Y Chernov, T Chapin, TR Christensen, B Huntley, RA Ims, M Johansson, D Jolly, S Jonasson, N Matveyeva, N Panikov, W Oechel, G Shaver, J Elster, H Henttonen, K Laine, K Taulavuori, E Taulavuori & C Zöckler (2004). ‘Biodiversity, Distributions and Adaptations of Arctic Species in the Context of Environmental Change’, <i>Ambio</i>, 33(7), pp.404-17.',
					'Storeheier, PV, BEH Van Oort, MA Sundset & SD Mathiesen (2003). ‘Food intake of reindeer in winter’, <i>The Journal of Agricultural Science</i>, 141(1), pp.93-101.',
				] 
			},

			//Risk: Reduced health and wellbeing of Arctic residents
			{
				'id': 'arctic_residents',
				'name': 'Reduced health and wellbeing of Arctic residents',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'reduced-health-and-wellbeing-of-arctic-residents.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Snow cover',
						'img_file': 'snow-cover.png', 
					},					
				],
				'key_facts':[
					'Extreme weather events, such as storms, blizzards and inundation, are expected to become more frequent in a warmer climate. This can cause severe threats to human life and loss of access to critical supplies and services for rural or isolated communities.',
					'Changes in animal and plant populations in the Arctic can negatively impact remote and indigenous populations who depend on natural resources for livelihoods and food security<sup>1,2</sup>.',
					'Harmful algal blooms (HABs), whose biotoxins can be a serious health hazard to humans or animals (resulting in paralysis or death), are increasing globally and expected to increase in the Arctic. HABs are influenced directly by climate change-related factors such as temperature, winds, currents, nutrients, and runoff<sup>3</sup>.',
					'Changes in the physical environment has resulted in a reduced livelihood and food security, and indigenous Arctic communities have been forced to re-locate as a consequence of reduced soil stability from thawing of permafrost. This has lead to an increasingly high number of suicides in the Arctic, especially amongst indigenous youth<sup>1,4</sup>.',
				],
				'sources': [
					'Durkalec, A, C Furgal, M Skinner & T Sheldon (2015), ‘Climate change influences on environment as a determinant of Indigenous health: Relationships to place, sea ice, and health in an Inuit community’, <i>Social Science & Medicine</i>, 136-137, pp. 17-26.',
					'Tyler, NJC, JM Turi, MA Sundset, K Strøm Bull, MN Sara, E Reinert, N Oskal, C Nellemann, JJ McCarthy, SD Mathiesen, ML Martello, OH Magga, GK Hovelsrud, I Hanssen-Bauer, IMG Eira, NI Eira & RW Corell (2007), ‘Saami reindeer pastoralism under climate change: Applying a generalized framework for vulnerability studies to a sub-arctic social–ecological system’, <i>Global Environmental Change</i>, 17(2), pp.191-206.',
					'Epstein, P & D Ferber (2011). <i>Changing Planet, Changing Health: How the Climate Crisis Threatens Our Health and What We Can Do About It</i>, University of California Press.',
					'Rynor, B (2012), ‘Climate change poses health threats in Arctic’, <i>Canadian Medical Association Journal</i>, 184(1), pp.333-34.',
				] 
			},			
		]
	},

	//Small Islands
	{
		'code': '',
		'name': 'Small Islands',
		'risks': [
			//Risk: Loss of livelihoods, coastal settlements, and economic stability
			{
				'id': 'loss',
				'name': 'Loss of livelihoods, coastal settlements, and economic stability',
				'level': {
					'present': 3,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'loss-of-livelihoods-coastal-settlements-economic-stability.png',
				'climatic_drivers': [
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
					{
						'title': 'Cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Small island economies are more vulnerable to sea level rise compared to other geographical areas, as most of the population and infrastructure is located in coastal zones. For example, in the Maldives, 50% to 80% of the land area is less than 1 metre above sea level.',
					'A 1m rise in sea level “would render some island countries uninhabitable”<sup>1</sup>. It is projected that the Earth is already locked in to reach 1m sea level rise by 2100.',
					'Sea level rise, in combination with more frequent extreme weather events, will cause immediate threat to human lives and loss of settlements and livelihood opportunities. Adaptation to these events are estimated to be extremely costly, where the cost of protection in relation to GDP are the highest in the world for some small island nations<sup>2,3</sup>.',
					'In the Caribbean, it’s estimated that a 1m rise in sea level will place 49% to 60% of tourist resort properties at risk of beach erosion damage. This would potentially transform the competitive position and sustainability of coastal tourism destinations in the region<sup>4</sup>.',
				],
				'sources': [
					'IPCC (1990). <i>Climate Change: The IPCC Impacts Assessment. Contribution of Working Group II to the First Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://goo.gl/k25fCz" target="_blank">Link</a>',
					'Betzold, C (2015), ‘Adapting to climate change in small island developing states’, <i>Climatic Change</i>, 133(3), pp.481-489.',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',				
					'Scott, D, MC Simpson & R Sim (2012). ‘The vulnerability of Caribbean coastal tourism to scenarios of climate change related sea level rise’, <i>Journal of Sustainable Tourism</i>, 20(6), pp.883-898.',
				] 
			},
			//Risk: Decline of coral reef ecosystems
			{
				'id': 'decline_coral',
				'name': 'Decline of coral reef ecosystems',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'decline-of-coral-reef-ecosystems.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
					{
						'title': 'Sea surface temperature',
						'img_file': 'sea-surface-temperature.png', 
					},
				],
				'key_facts':[
					'Atolls and coral reefs are highly threatened by increased sea surface temperatures. Thermal stress results in coral bleaching and reduced reef calcification rates, which reduce reef functionality and viability of living reef systems. Reef bleaching events have already become more severe and frequent, and are expected to increase in the future<sup>1</sup>.',
					'More frequent severe weather events are expected in the future. Strong winds and storm surges can cause severe damage on coral reefs and cause long term implications on coral reef productivity.',
					'A 2.8°C warming is likely to increase average sea surface temperatures by 1.8-2.3°C by 2100<sup>2</sup>, and will pose a risk to 99% of all current coral reefs by 2100<sup>3</sup>. This being said, increased sea surface temperatures may also result in suitable conditions for coral reefs in new areas<sup>1</sup>.',
				],
				'sources': [
					'Descombes, P, MS Wisz, F Leprieur, V Parravicini, C Heine, SM Olsen, D Swingedouw, M Kulbicki, D Mouillot & L Pellissier (2015), ‘Forecasted coral reef decline in marine biodiversity hotspots under climate change’, <i>Global Change Biology</i>, 21(7), pp.2479–2487.',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',					
					'Schleussner, CF, TK Lissner, EM Fischer, J Wohland, M Perrette, A Golly, J Rogelj, KChilders, J Schewe, K Frieler, M Mengel, W Hare & M Schaeffer (2016). ‘Differential climate impacts for policy-relevant limits to global warming: the case of 1.5 °C and 2 °C’, <i>Earth System Dynamics</i>, 7(2), pp.327-351.',
				] 
			},			
		]
	},


	//Australasia
	{
		'code': '',
		'name': 'Australasia',
		'risks': [
			//Risk: Coral reef decline
			{
				'id': 'coral_reef_decline',
				'name': 'Coral reef decline',
				'level': {
					'present': 4,
					'degree2': 8,
					'degree4': 10
				},
				'icon': 'coral-reef-decline.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Damaging cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
				],
				'key_facts':[
					'Assuming a “business-as-usual” scenario (which represent warming of ~2.8°C by 2100), more than 95 percent of Australian reefs will be rated as threatened by 2050, including most of the Great Barrier Reef<sup>1</sup>.',
					'When corals are exposed to higher than normal seawater temperatures during the warm season, their algal symbiosis is disrupted, leading to a phenomenon known as bleaching. This physiological symptom of stress is followed by large-scale mortality if temperatures are high enough or exposure long enough.',
					'Under a warming scenario of 2°C by 2100, annual bleaching is projected to occur. Given that the recovery time from a severe bleaching-induced mortality event is at least 10 years, these models suggest that reefs are likely to be dominated by non-coral organisms such as macroalgae by 2050<sup>2</sup>.',
					'Ocean acidification threatens coral reef survival by reducing corals’ ability to build their skeletons. This impedes their ability to withstand physical disturbances from storms, and means they have less energy to respond to stress and disease.',
					'Predictions suggest an increase in the frequency of severe weather events, which could lead to more serious physical damage, with less time between events to recover. The most immediate impact is coral breakage, dislocation and degradation from wind and waves. Heavy rainfall events also lead to flood plumes, exposing inshore coral reefs to freshwater inundations and nutrient overload.',
				],
				'sources': [
					'Burke, L, K Reytar, M Spalding & A Perry (2011). <i>Reefs at Risk Revisited</i>. <a href="http://pdf.wri.org/reefs_at_risk_revisited.pdf" target="_blank">Link</a>',
					'IPCC (2007). <i>Climate Change 2007: Impacts, Adaptation and Vulnerability. Contribution of Working Group II to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://goo.gl/Mk5lM8" target="_blank">Link</a>',
				] 
			},
			//Risk: Biodiversity loss
			{
				'id': 'biodiversity_loss',
				'name': 'Biodiversity loss',
				'level': {
					'present': 3,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'biodiversity-loss.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
					{
						'title': 'Snow cover',
						'img_file': 'snow-cover.png', 
					},
				],
				'key_facts':[
					'Changes in the physical environment affect physiological processes and behaviours in plants and animals, such as photosynthesis, water use efficiency, migration and reproduction.',
					'Species that have a narrow ‘ecological niche’ (the specific place an organism has in an ecosystem, including its habitat requirements) are most vulnerable to changes in climatic conditions. For example, modelling shows that 100% of the bioclimates of Acacia species will disappear in Australia with a 2°C warming<sup>1</sup>.',
					'One of the most vulnerable Australian ecosystems is the alpine zone because of loss of snow cover, invasions by exotic species, and changed species interactions<sup>2</sup>. This is also true of New Zealand – it has been estimated that 3°C of warming would result in the loss of 80% of discrete alpine areas in New Zealand, and extinction of 200-300 species of native vascular plants<sup>3</sup>.',
				],
				'sources': [
					' Pouliquen-Young, O & P Newman (2000). <i>The implications of Climate Change for Land-Based Nature Conservation Strategies 1996-1999: Final Report to Environment Australia.</i>',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
					' Hallow, SRP & AF Mark (2003). ‘Climate-change effects on alpine plant biodiversity: a New Zealand perspective on quantifying the threat’, <i>Arctic Antarctic and Alpine Research</i>, 35(2), pp.248-254.',
				] 
			},			
			//Risk: Heat-related human morbidity and mortality		
			{
				'id': 'human_morbidity_mortality',
				'name': 'Heat-related human morbidity and mortality',
				'level': {
					'present': 4,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'heat-related-human-mortality.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
				],
				'key_facts':[
					'As the global atmospheric temperature increases, so too will the frequency, duration and magnitude of extreme heat events in Australia.',
					'In addition to mortality, extreme heat events cause economic losses; impact on health and well-being, labour productivity, crop production, and air quality; and increase the risk of wildfires.',
					'Climate change has already had an impact on extreme heat events in Australia. For example, research shows that climate change tripled the odds of heatwaves occurring during the 2012/13 summer<sup>1</sup>. The average intensity of heat waves increased by at least 1°C in most Australian capital cities between the periods of 1950-1980 and 1981-2011<sup>1</sup>.',
					'Morbidity and mortality is expected to increase as the global warming trend continues. For example, a threefold increase in heat-related deaths is projected for Sydney by 2100 under a ~3.4°C, assuming no adaptation<sup>2</sup>.',
				],
				'sources': [
					'Hughes, L, E Hanna & J Fenwick (2016). <i>The Silent Killer: Climate Change and the Health Impacts of Extreme Heat</i>. <a href="https://goo.gl/PYAaDA" target="_blank">Link</a>',
					'Gosling, SN, GR McGregor & JA Lowe (2009). ‘Climate change and heat-related mortality in six cities. Part 2: climate model evaluation and projected impacts from changes in the mean and variability of temperature with climate change’, <i>International Journal of Biometeorology</i>, 53(1), pp.31-51.',
				] 
			},			
		]
	},
	
	
	//North America
	{
		'code': '',
		'name': 'North America',
		'risks': [
			//Risk: Wildfire damage
			{
				'id': 'wildfire_damage',
				'name': 'Wildfire damage',
				'level': {
					'present': 7,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'wildfire-damage.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
				],
				'key_facts':[
					'Wildfire risk depends on a number of factors, including temperature, soil moisture, and the presence of trees, shrubs and other potential fuel. Warmer temperatures and drier conditions increase the chances of a fire starting, or help a burning fire spread.',
					'Wildfires in the western United States have been increasing in frequency and duration since the mid-1980s (comparisons are between 1970-1986 and 1986-2003), occurring nearly four times more often, burning more than six times the land area, and lasting almost five times as long. These changes are strongly associated with increased spring and summer temperatures and an earlier spring melt<sup>1</sup>.',
					'For every 1°C of temperature increase, a 200-400% increase in wildfire area burned is expected in western North American regions<sup>2</sup>. The IPCC estimates that North America will warm by 2-4°C by 2100 (relative to 1986-2005 baseline period)<sup>3</sup>.',
				],
				'sources': [
					' Westerling, AL, HG Hidalgo, DR Cayan, TW Swetnam (2006). ‘Warming and earlier spring increase Western US forest wildfire activity’, <i>Science</i>, 313(5789), pp.940-943.',
					'National Research Council (2011). <i>Climate Stabilization Targets: Emissions, Concentrations, and Impacts over Decades to Millennia</i>. <a href="https://goo.gl/i0hV1X" target="_blank">Link</a>',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
				] 
			},
			//Risk: Heat-related human mortality
			{
				'id': 'human_mortality',
				'name': 'Heat-related human mortality',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'heat-related-human-mortality.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
				],
				'key_facts':[
					'As the global atmospheric temperature increases, so too will the frequency, duration and magnitude of extreme heat events.',
					'Extreme heat presently kills more people in the United States than any other weather-related event<sup>1</sup>.',
					'A warming scenario of ~3.4°C is projected to increase exposure to extreme heat by 260% in the United States (modelling based on SRES A2 scenario, assuming constant population)<sup>2</sup>.',
					'A study of Chicago shows that severe heat waves akin to the 1995 event (which was responsible for ~700 deaths and unprecedented in the city’s 123-year-old weather records) could occur every second year by the end of the century under a warming scenario of ~1.8°C<sup>3</sup>.',
					'In addition to mortality, extreme heat events cause economic losses; impact on health and well-being, labour productivity, crop production, and air quality; and increase the risk of wildfires.',
				],
				'sources': [
					'Centers for Disease Control & Prevention (2012). <i>Climate Change and Extreme Heat Events</i>. <a href="https://goo.gl/8IqA5o"target="_blank">Link</a>',
					'Jones, B, BC O’Neill, L McDaniel, S McGinnis, LO Mearns, C Tebaldi (2015). ‘Future population exposure to US heat extreme’, <i>Nature Climate Change</i>, 5(7), pp.652-655.',
					'Hayhoe, K, S Sheridan, L Kalstein & S Greene (2010). ‘Climate change, heat waves, and mortality projections for Chicago’, <i>Journal of Great Lakes Research</i>, 36, pp.65-73.',
				] 
			},			
			//Risk: Urban floods	
			{
				'id': 'urban_floods',
				'name': 'Urban floods',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'urban-floods.png',
				'climatic_drivers': [
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
					{
						'title': 'Damaging cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
				],
				'key_facts':[
					'Climate change is expected to increase the frequency and intensity of cyclones (such as Hurricane Katrina in 2005) and extreme precipitation events in North America, increasing the risk of flooding in urban areas.',
					'In the United States, the annual average cost of flooding is presently US$2.7 billion<sup>1</sup>. It has been estimated that these damage losses will increase to US$7 (under ~1.8°C warming scenario) to US$19 billion (under ~3.4°C warming scenario) annually by 2100 depending on emission scenario and economic growth rate<sup>2</sup>.',
					'In Canada, floods are presently the costliest natural disaster in terms of property damage<sup>3</sup>.',
					'A study of the Fraser Basin (Vancouver, Canada) shows that if sea level rise were to reach 1 metre by 2100 (a likely outcome under 4°C of warming), the number of buildings damaged or destroyed by river floods would more than double<sup>4</sup>.',
				],
				'sources': [
					'Changnon, SA (2008). ‘Assessment of flood losses in the United States’, <i>Journal of Contemporary Water Research & Education</i>, 138(1), pp.38–44.',
					'Ntelekos, AA, M Oppenheimer, JA Smith & AJ Miller (2008). ‘Urbanization, climate change and flood policy in the United States’, <i>Climatic Change</i>, 103(3), pp.597-616.',
					'Public Safety Canada (2015). <i>Floods</i>. <a href="https://www.publicsafety.gc.ca/cnt/mrgnc-mngmnt/ntrl-hzrds/fld-eng.aspx" target="_blank">Link</a>',
					'Fraser Basin Council (2016). <i>Lower Mainland Flood Management Strategy: Phase 1 Summary Report</i>. <a href="https://goo.gl/Cn0hOL" target="_blank">Link</a>',
				] 
			},			
		]
	},
	

	//Central and South America
	{
		'code': '',
		'name': 'Central and South America',
		'risks': [
			//Risk: Water availability, flooding and landslides
			{
				'id': 'water_availability',
				'name': 'Water availability, flooding and landslides',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'water-availability-flooding-landslides.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Drying trend',
						'img_file': 'drying-trend.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
					{
						'title': 'Snow cover',
						'img_file': 'snow-cover.png', 
					},
				],
				'key_facts':[
					'Small tropical glaciers in the Andes are expected to disappear completely, even with only +1˚C change. Andean glaciers have shrunk at an increasing rate since the 1970s, especially smaller, lower-altitude glaciers<sup>1</sup>. Initially, smaller glaciers can lead to flooding as they lose their ability to absorb large precipitation events. As they disappear, reduced melt-water runoff threatens the water supply of 50 million people<sup>2</sup>.',
					'Water shortages in Bolivia have led to social and economic stress by threatening livelihoods<sup>3</sup>.',
					'Under a 2˚C warming scenario, climate change projections for the Lempa River basin (one of the largest basins in Central America) predict increased evaporation and reduced precipitation by 2070-2099, implying a 13% reduction of inflows to major reservoirs in this system<sup>4</sup>.',
					'Climate change could contribute to a 70% rise in the projected number of people with severe difficulties in accessing safe water. Around 40 million people may be at risk of reduced water supply for human consumption, hydro-power and agriculture in 2020, rising to 50 million in 2050 through the predicted melting of tropical Andean glaciers between 2010 and 2050. The cities of Quito, Lima and La Paz are likely to be most affected<sup>2</sup>.',
				],
				'sources': [
					'Rabatel, A, B Francou, A Soruco, J Gomez, B Cáceres, JL Ceballos, R Basantes, M Vuille, JE Sicart, C Huggel, M Scheel, Y Lejeune, Y Arnaud, M Collet, T Condom, G Consoli, V Favier, V Jomelli, R Galarraga, P Ginot, L Maisincho, J Mendoza, M Ménégoz, E Ramirez, P Ribstein, W Suarez, M Villacis & P Wagnon (2013). ‘Current state of glaciers in the tropical Andes: a multi-century perspective on glacier evolution and climate change’, <i>The Cryosphere</i>, 7, pp.81-102.',
					'Stern, NH (2007). <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au" target="_blank">Link</a>',
					'Climate & Development Knowledge Network (2014). <i>The IPCC’s Fifth Assessment Report Executive Summary: What’s in it for Latin America?</i> <a href="https://goo.gl/pnaoAc" target="_blank">Link</a>',
					'Maurer EP, JC Adam & AW Wood (2009). ‘Climate model based consensus on the hydrologic impacts of climate change to the Rio Lempa basin of Central America’, <i>Hydrology and Earth System Sciences</i>, 13(2), pp.183-194.',
				] 
			},
			//Risk: Coral reef bleaching
			{
				'id': 'coral_reef',
				'name': 'Coral reef bleaching',
				'level': {
					'present': 7,
					'degree2': 9,
					'degree4': 9
				},
				'icon': 'coral-reef-bleaching.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Ocean acidification',
						'img_file': 'ocean-acidification.png', 
					},
				],
				'key_facts':[
					'Increased sea surface temperature and ocean acidification make coral reefs significantly more vulnerable to bleaching and mortality events. Bleaching occurs when corals are exposed to higher than normal seawater temperatures during the warm season, which disrupts their algal symbiosis. This physiological symptom of stress is followed by large-scale mortality if temperatures are high enough or exposure long enough.',
					'By 2030, climate-related threats are projected to be high along the mainland coast from Mexico to Colombia, due to the confluence of thermal stress and acidification threats. Under a “business-as-usual” scenario (which correlates to ~2.8˚C warming by 2100), climate-related threats are projected to push the proportion of reefs at risk to 90 percent in 2030, and up to 100 percent by 2050, with about 85 percent at high, very high, or critical levels<sup>1</sup>.',
					'Under a 4˚C warming scenario, complete collapse of the Mesoamerican coral reef is expected along the coasts of Belize, Honduras, and Guatemala. In Belize alone, the annual value of reefs is US $359 million annually in tourism, fisheries and coastal protection<sup>2</sup>.',
				],
				'sources': [
					'Burke, L, K Reytar, M Spalding & A Perry (2011). <i>Reefs at Risk Revisited</i>. <a href="http://pdf.wri.org/reefs_at_risk_revisited.pdf" target="_blank">Link</a>',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
				] 
			},			
			//Risk: Decreased food production	
			{
				'id': 'decreased_food',
				'name': 'Decreased food production',
				'level': {
					'present': 7,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'decreased-food-production.png',
				'climatic_drivers': [
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
					{
						'title': 'Carbon dioxide fertilization',
						'img_file': 'carbon101x-CO2fertilization-01.png', 
					},
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
				],
				'key_facts':[
					'There will be large spatial variability in the climate impacts on food production. For example, in south-eastern South America, where rainfall is expected to increase in response to climate change, average food productivity could be sustained or increased until the mid-century. Whereas in Central America and part of the Andean region, temperature increases and reduced rainfall is expected to reduce productivity and threaten local food security<sup>1</sup>.',
					'In the Amazon region, warming of ~3.8˚C (correlating with a 30% decline in precipitation) is predicted to reduce soybean yields soybean yields by 44% by 2050<sup>2</sup>.',
					'2˚C of warming could result in a 6-20% decrease in maximum catch potential of fish and invertebrates along most South and Central American coastal waters. For some some areas this yield reduction could be as high as 21-50%, while the southernmost areas may experience increases in catch potential<sup>3</sup>.',
				],
				'sources': [
					'Marengo JA, SC Chou, RR Torres, A Giarolla, LM Alves & A Lyra (2014). <i>Climate change in Central and South America: Recent trends, future projections, and impacts on regional agriculture</i>. CCAFS Working Paper no. 73. <a href="https://goo.gl/wBqc9w" target="_blank">Link</a>',
					'Lapola, DM, R Schaldach, J Alcamo, A Bondeau, S Msangi, JA Priess, R Silvestrini & BS Soares (2011). ‘Impacts of Climate Change and the End of Deforestation on Land Use in the Brazilian Legal Amazon’, <i>Earth Interactions</i>, 15, pp.1-29.',
					'IPCC (2014). <i>AR5 Synthesis Report</i>. <a href="http://ar5-syr.ipcc.ch/topic_futurechanges.php" target="_blank">Link</a>',
				] 
			},			
			//Risk: Increases in vector-borne disease  	
			{
				'id': 'vector_borne_disease  ',
				'name': 'Increases in vector-borne disease',
				'level': {
					'present': 9,
					'degree2': 'Unknown',
					'degree4': 'Unknown'
				},
				'icon': 'vector-borne diseases.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Precipitation',
						'img_file': 'precipitation.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Vector-borne diseases will spread to new altitudes and latitudes across the region, due to change in average and extreme temperature and rainfall.<sup>1</sup>',
					'Vector-borne diseases affected by climate change around Central and South America include malaria, dengue, yellow fever, leishmaniasis. For example, malaria has appeared the Andes and dengue in Central America and Southern South America, where they have not previously been found. This change in distribution is strongly linked to the climate variability that has already occurred in recent decades.<sup>2</sup>',
					'Little is known about how frequency and ranges of vector-borne diseases will continue to change under future climate scenarios. This uncertainty represents a significant risk to human populations.<sup>1</sup>',
				],
				'sources': [
					'Climate & Development Knowledge Network (2014). <i>The IPCC’s Fifth Assessment Report Executive Summary: What’s in it for Latin America?</i> <a href="https://goo.gl/pnaoAc" target="_blank">Link</a>',
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',					
				] 
			},			
		]
	},


	//The Ocean
	{
		'code': '',
		'name': 'The Ocean',
		'risks': [
			//Risk: Mortality of large fauna 
			{
				'id': 'large_fauna',
				'name': 'Mortality of large fauna ',
				'level': {
					'present': 3,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'mortality-of-large-fauna.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Hypoxia',
						'img_file': 'hypoxia.png', 
					},
				],
				'key_facts':[
					'Warmer temperatures in the Pacific regions could reduce the number of male sea turtle offspring and threaten turtle populations. The sex of sea turtle hatchlings is dependent on temperature, with warmer temperatures increasing the number of female sea turtles – this creates an imbalance in the reproductive capacity of the species.',
					'Excessive concentrations of nutrients in coastal waters have in some areas resulted in decreased oxygen concentrations, commonly referred to as hypoxia. Hypoxia can pose a serious threat to marine ecosystems, and can, together with increased ocean temperatures, result in “dead zones”, where yields are lower than what can be explained by nutrient loading alone<sup>1</sup>.',
					'Increased temperatures have reduced the extent of Antarctic sea ice during winter, which in turn is believed to have resulted in significant reduction of krill. Krill is one of the major food sources for many large marine fauna, including the blue whale and penguins. Reduced populations of species at the bottom of the food web can therefore cause significant implications for predators<sup>2</sup>.',
					'A 4°C increase by 2100, combined with associated ocean acidification, has been linked to a significant reduction in tropical juvenile shark survival rates, with survival rates decreasing by up to 44%<sup>2</sup>.',
				],
				'sources': [
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
					'Rosa, R, M Baptista, VM Lopes, MR Pegado, JR Paula, K Trübenbach, MC Leal, R Calado & T Repolho (2014). ‘Early-life exposure to climate change impairs tropical shark survival’, <i>Proceedings. Biological Sciences/The Royal Society</i>, 281(1793), pp.1-7.',
				] 
			},
			//Risk: Coastal inundation and habitat loss
			{
				'id': 'habitat_loss',
				'name': 'Coastal inundation and habitat loss',
				'level': {
					'present': 5,
					'degree2': 7,
					'degree4': 9
				},
				'icon': 'coastal-inundation-and-habitat-loss.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Damaging cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Sea level rise can increase the damage caused by storms because mean water level (the base level for storm effects) is higher, waves can attack higher on the shore profile, and coastal erosion often is accelerated, bringing structures nearer the shoreline and potentially removing protection offered by dunes and other protective features.',
					'Global mean sea level is likely to rise by 0.44 metres to 0.74 metres by 2081–2100 (relative to 1986–2005)<sup>1</sup>.',
					'Sea level rise, flooding and storm activity will lead to the inundation of multiple small and, critically, low-lying islands in the region, especially in the Indonesian and Philippine archipelagos, with Indonesia projected to lose 2,000 small islands by 2030 (it’s worth noting that less than half of Indonesia’s >13,500 islands are inhabited)<sup>2</sup>.',
					'Coastal habitats, such as wetlands and mangroves, will be reduced as a result of sea level rise and coastal inundation. In addition to these primary impacts of climate change, further habitat loss is expected as a result of the relocation of human populations in low-lying coastal regions into the hinterland. In some areas, such as the Indo-Malaysian islands (which may be affected by 7 to 48 million sea level rise refugees), species are more vulnerable to these secondary effects<sup>3</sup>.',
				],
				'sources': [
					'IPCC (2013). <i>Climate Change 2013: The Physical Science Basis. Contribution of Working Group I to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg1/" target="_blank">Link</a>',
					'CENTRA Technology, Inc. Scitor Corporation (2010). <i>Southeast Asia: The Impact of Climate Change to 2030: Geopolitical Implications</i>. <a href="https://www.hsdl.org/?abstract&did=24131" target="_blank">Link</a>',
					' Wetzel, FT, D Kissling, H Beissmann & DJ Penn (2012). ‘Future climate change driven sea-level rise secondary consequences from human displacement for island biodiversity’, <i>Global Change Biology</i>, 18(9), pp.2707-2719.',
				] 
			},			
			//Risk: Reduced livelihoods and increased		
			{
				'id': 'reduced_livelihoods',
				'name': 'Reduced livelihoods and increased poverty',
				'level': {
					'present': 5,
					'degree2': 9,
					'degree4': 10
				},
				'icon': 'reduced-livelihoods-and-increased-poverty.png',
				'climatic_drivers': [
					{
						'title': 'Warming trend',
						'img_file': 'warming-trend.png', 
					},
					{
						'title': 'Damaging cyclones',
						'img_file': 'cyclones.png', 
					},
					{
						'title': 'Extreme temperature',
						'img_file': 'extreme-temperature.png', 
					},
					{
						'title': 'Sea level rise',
						'img_file': 'seal-level-rise.png', 
					},
					{
						'title': 'Extreme precipitation',
						'img_file': 'extreme-precipitation.png', 
					},
				],
				'key_facts':[
					'Changes in ocean temperature and chemistry will result in changed distribution and abundance of fish, resulting in some areas being ‘winners’ and others being ‘losers’. While increased sea surface temperatures and acidity will reduce production in existing coral reefs, the higher latitude fisheries have so far benefited from increased ocean temperatures.',
					'Many small island economies are dependent on coral reefs for food and livelihood, meaning reduced coral reef productivity will have severe consequences in these regions.',
					'Increased atmospheric temperatures of 2 – 5.4°C have been projected to cause a 19 – 29% reduction in large fish catch in the North Pacific, while the total primary production in the same region is estimated to reduce by 10 – 20%<sup>1</sup>.',
				],
				'sources': [
					'IPCC (2014). <i>Climate Change 2014: Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/" target="_blank">Link</a>',
				] 
			},			
		]
	}
];

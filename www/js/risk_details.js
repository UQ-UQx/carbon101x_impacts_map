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
					'UNEP, 2008. <i>Africa Atlas of our Changing Environment</i>, Nairobi, Kenya.',
					'IPCC, 2014. <i>Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>. <a href="https://www.ipcc.ch/report/ar5/wg2/">https://www.ipcc.ch/report/ar5/wg2/</a>',
					'Raxworthy, CJ, RG Pearson, N Rabibisoa, AM Rakotondrazafy, JB Ramanamanjato, AP Raselimanana, S Wu, RA Nussbaum & DA Stone, 2008. <i>Extinction vulnerability of tropical montane endemism from warming and upslope displacement: a preliminary appraisal for the highest massif in Madagascar</i>, Global Change Biology, 14(8), pp. 1703-1720.',
					'Stern, NH, 2007. <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au">https://goo.gl/PxI2Au</a>'
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
					'Stern, NH, 2007. <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au">https://goo.gl/PxI2Au</a>',
					'IPCC, 2014. <i>Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change:</i> <a href="https://www.ipcc.ch/report/ar5/wg2/">https://www.ipcc.ch/report/ar5/wg2/</a>',
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
					'Coastal countries of West Africa will experience a significant negative impact from climate change. Lam et al. (2012) projected that, under a warming scenario of ~3°C by 2050, the annual landed value of fish for that region is estimated to decline by 21%, resulting in a nearly 50% decline in fisheries-related employment and a total annual loss of US$311 million to the region’s economy<sup>3</sup>.',
				],
				'sources': [
					'Frieler, K, M Meinshausen, A Golly, M Megel, K Lebek, D Donner & O Hoegh-Guldberg, 2013. ‘Limiting global warming to 2°C is unlikely to save most coral reefs’, <i>Nature Climate Change</i>, 3, pp.165-170.',
					'Hoegh-Guldberg, O, H Hoegh-Guldberg, J Veron, A Green, ED Gomez, JEN Lough, M King, Ambariyanto, L Hansen, J Cinner, G Dews, G Russ, HZ Schuttenberg, EL Peñaflor, CM Eakin, TRL Christensen, M Abbey, F Areki, RAKosaka, A Tewfik & J Oliver, 2009. <i>The Coral Triangle and Climate Change: Ecosystems, People and Societies at Risk</i>: <a href="https://goo.gl/kRCnyl">https://goo.gl/kRCnyl</a>',
					'IPCC, 2014. <i>Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>: <a href="https://www.ipcc.ch/report/ar5/wg2/">https://www.ipcc.ch/report/ar5/wg2/</a>',
				] 
			},

			//Risk: Vector- and waterborne diseases	
			{
				'id': 'disease',
				'name': 'Vector- and waterborne diseases',
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
					'Stern, NH, 2007. <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au">https://goo.gl/PxI2Au</a>',
					'IPCC, 2014. <i>Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>: <a href="https://www.ipcc.ch/report/ar5/wg2/">https://www.ipcc.ch/report/ar5/wg2/</a>',
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
					'Stern, NH, 2007. <i>The Economics of Climate Change: The Stern Review</i>. <a href="https://goo.gl/PxI2Au">https://goo.gl/PxI2Au</a>',
					'IPCC, 2014. <i>Impacts, Adaptation, and Vulnerability. Part B: Regional Aspects. Contribution of Working Group II to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change</i>: <a href="https://www.ipcc.ch/report/ar5/wg2/">https://www.ipcc.ch/report/ar5/wg2/</a>',
				] 
			},
		]
	},
	
	//Europe
	{
		'code': '',
		'name': 'Europe',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//Asia
	{
		'code': '',
		'name': 'Asia',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//Australia
	{
		'code': '',
		'name': 'Australasia',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//North America
	{
		'code': '',
		'name': 'North America',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//Central and South America
	{
		'code': '',
		'name': 'Central and South America',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//Polar Regions
	{
		'code': '',
		'name': 'Polar Regions',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//Small Islands
	{
		'code': '',
		'name': 'Small Islands',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	},
	//The Ocean
	{
		'code': '',
		'name': 'The Ocean',
		'risks': [
			//Risk: Reduced crop productivity
			{
				'id': 'productivity',
				'name': 'Reduced crop productivity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
			//Risk: Adverse effects on livestock
			{
				'id': 'livestock',
				'name': 'Adverse effects on livestock',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Loss of fisheries		
			{
				'id': 'fisheries',
				'name': 'Loss of fisheries',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Undernutrition		
			{
				'id': 'undernutrition',
				'name': 'Undernutrition',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Water scarcity	
			{
				'id': 'waterscarcity',
				'name': 'Water scarcity',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},			
			//Risk: Disease
			{
				'id': 'disease',
				'name': 'Disease',
				'level': {
					'present': 0,
					'degree2': 0,
					'degree4': 0
				},
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			}
		]
	}
];

/*
var risk_details = [
	{
		'id': '',
		'name': '',
		'risks': [
			{
				'id': '',
				'name': '',
				'level': [
					'present': 0,
					'degree2': 0,
					'degree4': 0
				],
				'icon': '',
				'climatic_drivers': [
					{
						'title': '',
						'img_file': '', 
					}
				],
				'key_facts':[
				],
				'sources': [
				] 
			},
		]
	}
];
*/
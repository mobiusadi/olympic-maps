// app/(tabs)/index.tsx - DEBUGGING TEST WITH EMBEDDED DATA

import { LocationData } from '../types';

// --- We have disabled the JSON import and embedded the data directly for this test ---
// import incidentsData from '../data/incidents_data.json';
// const locationsData: LocationData[] = incidentsData as LocationData[];

const locationsData: LocationData[] = [
  {
      "id": 0,
      "latitude": 36.34,
      "longitude": 140.45,
      "coordinates": {
          "latitude": 36.34,
          "longitude": 140.45
      },
      "location_name": "Japan, Ibaraki Prefecture",
      "country": "Japan",
      "year": 2011,
      "event_date": "2011-09-21 00:00:00",
      "description": "A sodium-sulfur BESS fire occurred at Mistubishi Material Corp's Tsukuba plant",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 1,
      "latitude": 21.66,
      "longitude": -157.92,
      "coordinates": {
          "latitude": 21.66,
          "longitude": -157.92
      },
      "location_name": "US, HI, Kahuku",
      "country": "USA",
      "year": 2012,
      "event_date": "2012-08-01 00:00:00",
      "description": "The BESS, co-located with a 30 MW wind farm, caught fire.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 2,
      "latitude": 35.1981,
      "longitude": -111.6513,
      "coordinates": {
          "latitude": 35.1981,
          "longitude": -111.6513
      },
      "location_name": "US, AZ, Flagstaff",
      "country": "USA",
      "year": 2012,
      "event_date": "2012-11-26 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 3,
      "latitude": 48.1168,
      "longitude": -123.4352,
      "coordinates": {
          "latitude": 48.1168,
          "longitude": -123.4352
      },
      "location_name": "US, WA, Port Angeles",
      "country": "USA",
      "year": 2013,
      "event_date": "2013-07-03 00:00:00",
      "description": "The hybrid solar + wind + storage system caught fire inside Landing Mall.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 4,
      "latitude": 42.9997,
      "longitude": -88.0778,
      "coordinates": {
          "latitude": 42.9997,
          "longitude": -88.0778
      },
      "location_name": "US, WI, Franklin",
      "country": "USA",
      "year": 2016,
      "event_date": "2016-08-10 00:00:00",
      "description": "S&C Electric was assembling a BESS at its facility.  The batteries were not operating nor connected to a power source/load when the partially assembled lithium ion system caught fire, starting in one of the DC power and control compartments of a battery rack and then propagating. Fire suppression and containment systems were not yet functional, but propgation was limited to one container with water cooling. The fire extinguished in a few hours. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 5,
      "latitude": 37.5412,
      "longitude": 112.3389,
      "coordinates": {
          "latitude": 37.5412,
          "longitude": 112.3389
      },
      "location_name": "China, Shanxi",
      "country": "China",
      "year": 2017,
      "event_date": "2017-03-07 00:00:00",
      "description": "BESS containers caught fire. The same site experienced another failure and fire 8 months later. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 6,
      "latitude": 35.4333,
      "longitude": 126.7,
      "coordinates": {
          "latitude": 35.4333,
          "longitude": 126.7
      },
      "location_name": "South Korea, North Jeolla, Gochang",
      "country": "South Korea",
      "year": 2017,
      "event_date": "2017-08-02 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 7,
      "latitude": 50.7833,
      "longitude": 4.3167,
      "coordinates": {
          "latitude": 50.7833,
          "longitude": 4.3167
      },
      "location_name": "Belgium, Drogenbos",
      "country": "Belgium",
      "year": 2017,
      "event_date": "2017-11-11 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 8,
      "latitude": 37.5412,
      "longitude": 112.3389,
      "coordinates": {
          "latitude": 37.5412,
          "longitude": 112.3389
      },
      "location_name": "China, Shanxi",
      "country": "China",
      "year": 2017,
      "event_date": "2017-12-21 00:00:00",
      "description": "BESS containers caught fire. The same site experienced a failure and fire 8 months prior. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 9,
      "latitude": 35.8617,
      "longitude": 127.9175,
      "coordinates": {
          "latitude": 35.8617,
          "longitude": 127.9175
      },
      "location_name": "South Korea, North Gyeongsang, Gyeongsan",
      "country": "South Africa",
      "year": 2018,
      "event_date": "2018-05-02 00:00:00",
      "description": "BMS system Error. ",
      "root_cause": "BMS Design failure(insulation distance)",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 10,
      "latitude": 34.7933,
      "longitude": 126.6967,
      "coordinates": {
          "latitude": 34.7933,
          "longitude": 126.6967
      },
      "location_name": "South Korea, South Jeolla, Yeongam",
      "country": "South Africa",
      "year": 2018,
      "event_date": "2018-06-02 00:00:00",
      "description": "BMS System Error",
      "root_cause": "BMS System Error",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 11,
      "latitude": 35.97,
      "longitude": 126.8,
      "coordinates": {
          "latitude": 35.97,
          "longitude": 126.8
      },
      "location_name": "South Korea, North Jeolla, Gunsan",
      "country": "South Africa",
      "year": 2018,
      "event_date": "2018-06-15 00:00:00",
      "description": "Due to poor construction (such as condensation or water leakage)",
      "root_cause": "Poor construction",
      "failed_element": "Deterioration of insulation due to environmental factors",
      "image_url": null
  },
  {
      "id": 12,
      "latitude": 34.54,
      "longitude": 126.59,
      "coordinates": {
          "latitude": 34.54,
          "longitude": 126.59
      },
      "location_name": "South Korea, South Jeolla, Haenam",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-07-12 00:00:00",
      "description": "Due to poor construction (such as condensation or water leakage)",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 13,
      "latitude": 35.43,
      "longitude": 128.67,
      "coordinates": {
          "latitude": 35.43,
          "longitude": 128.67
      },
      "location_name": "South Korea, South Gyeongsang, Geochang",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-07-21 00:00:00",
      "description": "BMS System Error ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 14,
      "latitude": 36.48,
      "longitude": 127.29,
      "coordinates": {
          "latitude": 36.48,
          "longitude": 127.29
      },
      "location_name": "South Korea, Sejong",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-07-28 00:00:00",
      "description": "Occurred in the process of supplying electricity for the commissioning of ESS, presumption of operator negligence,",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 15,
      "latitude": 36.96,
      "longitude": 127.7,
      "coordinates": {
          "latitude": 36.96,
          "longitude": 127.7
      },
      "location_name": "South Korea, Chungcheongbuk-do, Yeongdong",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-09-01 00:00:00",
      "description": "poor construction (deterioration of insulation due to poor construction such as condensation or water leakage)",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 16,
      "latitude": 36.73,
      "longitude": 126.13,
      "coordinates": {
          "latitude": 36.73,
          "longitude": 126.13
      },
      "location_name": "South Korea, Chungcheongnam, Taean",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-09-07 00:00:00",
      "description": " Negligence of the operator & construction defects during construction, ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 17,
      "latitude": 33.3617,
      "longitude": 126.5292,
      "coordinates": {
          "latitude": 33.3617,
          "longitude": 126.5292
      },
      "location_name": "South Korea, Jeju",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-09-14 00:00:00",
      "description": "Not tested before use,_x000D_\nBattery burnout due to poor BMS",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 18,
      "latitude": 37.28,
      "longitude": 127.11,
      "coordinates": {
          "latitude": 37.28,
          "longitude": 127.11
      },
      "location_name": "South Korea, Gyeonggi, Yongin",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-10-18 00:00:00",
      "description": "Occured during performance test,_x000D_\nOccurred only 6 days after the Close Safety Diagnosis was carried out, presumed to be a fire caused by PCS breakage,",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 19,
      "latitude": 36.89,
      "longitude": 128.6,
      "coordinates": {
          "latitude": 36.89,
          "longitude": 128.6
      },
      "location_name": "South Korea, North Gyeongsang, Yeongju",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-11-12 00:00:00",
      "description": "Occred even after passing Close Safety Diagnosis. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 20,
      "latitude": 36.82,
      "longitude": 127.15,
      "coordinates": {
          "latitude": 36.82,
          "longitude": 127.15
      },
      "location_name": "South Korea, South Chungcheong, Cheonan",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-11-12 00:00:00",
      "description": "No description",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 21,
      "latitude": 36.61,
      "longitude": 128.17,
      "coordinates": {
          "latitude": 36.61,
          "longitude": 128.17
      },
      "location_name": "South Korea, Gyeongsangbuk-do, Mungyeong",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-11-21 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 22,
      "latitude": 35.43,
      "longitude": 128.67,
      "coordinates": {
          "latitude": 35.43,
          "longitude": 128.67
      },
      "location_name": "South Korea, South Gyeongsang, Geochang",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-11-22 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 23,
      "latitude": 37.14,
      "longitude": 128.21,
      "coordinates": {
          "latitude": 37.14,
          "longitude": 128.21
      },
      "location_name": "South Korea, North Chungcheong, Jecheon",
      "country": "South Africa",
      "year": 2018,
      "event_date": "2018-12-17 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 24,
      "latitude": 37.44,
      "longitude": 129.17,
      "coordinates": {
          "latitude": 37.44,
          "longitude": 129.17
      },
      "location_name": "South Korea, Gangwon, Samcheok",
      "country": "South Korea",
      "year": 2018,
      "event_date": "2018-12-22 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 25,
      "latitude": 35.33,
      "longitude": 129.03,
      "coordinates": {
          "latitude": 35.33,
          "longitude": 129.03
      },
      "location_name": "South Korea, South Gyeongsangnam, Yangsan",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-01-14 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 26,
      "latitude": 34.35,
      "longitude": 126.74,
      "coordinates": {
          "latitude": 34.35,
          "longitude": 126.74
      },
      "location_name": "South Korea, South Jeolla, Wando",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-01-14 00:00:00",
      "description": "No description",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 27,
      "latitude": 35.61,
      "longitude": 126.88,
      "coordinates": {
          "latitude": 35.61,
          "longitude": 126.88
      },
      "location_name": "South Korea, North Jeolla, Jangsu",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-01-15 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 28,
      "latitude": 35.55,
      "longitude": 129.32,
      "coordinates": {
          "latitude": 35.55,
          "longitude": 129.32
      },
      "location_name": "South Korea, Ulsan",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-01-21 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 29,
      "latitude": 45.37,
      "longitude": -122.77,
      "coordinates": {
          "latitude": 45.37,
          "longitude": -122.77
      },
      "location_name": "US, OR, Tualatin",
      "country": "USA",
      "year": 2019,
      "event_date": "2019-04-11 00:00:00",
      "description": "A fire broke out during a new product test of six large lithium ion batteries at a warehouse.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 30,
      "latitude": 33.6283,
      "longitude": -112.3522,
      "coordinates": {
          "latitude": 33.6283,
          "longitude": -112.3522
      },
      "location_name": "US, AZ, Surprise",
      "country": "USA",
      "year": 2019,
      "event_date": "2019-04-19 00:00:00",
      "description": "The cause was found to be an internal cell defect, which initiated a cascading thermal runaway event. Alarms and the clean agent fire suppression system activated but was not capable of preventing or stopping cascading thermal runaway in a BESS. Three hours after thermal runaway was intiated, firefighters opened a door to the battery container, agitating accumulated flammable gases and allowing the gases to contact a heat source or spark. Minutes later, an explosion occurred, injuring several firefighters. ",
      "root_cause": "Manufacturing",
      "failed_element": "Cell/Module",
      "image_url": null
  },
  {
      "id": 31,
      "latitude": 36.33,
      "longitude": 128.37,
      "coordinates": {
          "latitude": 36.33,
          "longitude": 128.37
      },
      "location_name": "South Korea, North Gyeongsang, Chilgok",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-05-04 00:00:00",
      "description": "_x000D_\nA fire occurred during operation after LG Chem's self-inspection and reinforcement measures such as software upgrades.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 32,
      "latitude": 35.61,
      "longitude": 126.88,
      "coordinates": {
          "latitude": 35.61,
          "longitude": 126.88
      },
      "location_name": "South Korea, North Jeolla, Jangsu",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-05-26 00:00:00",
      "description": "Wasn't reported to the fire department",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 33,
      "latitude": 36.68,
      "longitude": 126.83,
      "coordinates": {
          "latitude": 36.68,
          "longitude": 126.83
      },
      "location_name": "South Korea, Yesan",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-08-30 00:00:00",
      "description": "The battery charging rate was increased_x000D_\nfrom 70 % to 95 %, and a fire occurred 2 _x000D_\ndays later.",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 34,
      "latitude": 48.7667,
      "longitude": 2.3833,
      "coordinates": {
          "latitude": 48.7667,
          "longitude": 2.3833
      },
      "location_name": "France, Vitry-sur-Seine",
      "country": "France",
      "year": 2019,
      "event_date": "2019-09-16 00:00:00",
      "description": "A small explosion occurred.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 35,
      "latitude": 37.38,
      "longitude": 128.39,
      "coordinates": {
          "latitude": 37.38,
          "longitude": 128.39
      },
      "location_name": "South Korea, Pyeongchang",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-09-24 00:00:00",
      "description": "Battery thermal runaway occured after battery abuse from repeated overcharging and discharging, as confirmed in the EMS _x000D_\nlog record.",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 36,
      "latitude": 36.23,
      "longitude": 128.42,
      "coordinates": {
          "latitude": 36.23,
          "longitude": 128.42
      },
      "location_name": "South Korea, Gunwi",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-09-29 00:00:00",
      "description": "Smoke of an unknown cause occurred in _x000D_\nbatteries (Rack#3, Module#9) and _x000D_\nbattery internal fire occurred as a result _x000D_\nof BMS investigation.",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 37,
      "latitude": 35.07,
      "longitude": 127.75,
      "coordinates": {
          "latitude": 35.07,
          "longitude": 127.75
      },
      "location_name": "South Korea, Hadong",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-10-21 00:00:00",
      "description": "A sudden deterioration in insulation _x000D_\nperformance first occurred on BSC#1, _x000D_\nfollowed by a gradual deterioration on _x000D_\nthe other side (BSC#2), resulting in a fire .",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of Plant",
      "image_url": null
  },
  {
      "id": 38,
      "latitude": 35.23,
      "longitude": 128.87,
      "coordinates": {
          "latitude": 35.23,
          "longitude": 128.87
      },
      "location_name": "South Korea, Gimhae",
      "country": "South Korea",
      "year": 2019,
      "event_date": "2019-10-27 00:00:00",
      "description": "In the EMS log record, the voltage _x000D_\ndeviation of each battery inside the _x000D_\nbattery rack continuously increases, _x000D_\nresulting in thermal runaway.",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 39,
      "latitude": -27.468982,
      "longitude": 153.023446,
      "coordinates": {
          "latitude": -27.468982,
          "longitude": 153.023446
      },
      "location_name": "Australia, Brisbane",
      "country": "Australia",
      "year": 2020,
      "event_date": "2020-03-17 00:00:00",
      "description": "A battery on the fifth floor of a Griffith University building caught fire. An explosion occured, injuring one firefighter. The fire was extinguished in 2 hours. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 40,
      "latitude": 34.54,
      "longitude": 126.59,
      "coordinates": {
          "latitude": 34.54,
          "longitude": 126.59
      },
      "location_name": "South Korea, Haenam",
      "country": "South Africa",
      "year": 2020,
      "event_date": "2020-05-27 00:00:00",
      "description": "The BESS at a solar + storage facility caught fire. The South Korean government had implemented an upper limit of SOC of 90% for outdoor installations at the beginning of the year, but it was confirmed that the company had continued to operate with an upper limit of SOC of 95% as before. The cause is suspected to be battery deterioration due to overcharging or BMS error.",
      "root_cause": "Manufacturing",
      "failed_element": "Cell/Module",
      "image_url": null
  },
  {
      "id": 41,
      "latitude": 53.4,
      "longitude": -2.9833,
      "coordinates": {
          "latitude": 53.4,
          "longitude": -2.9833
      },
      "location_name": "UK, Liverpool",
      "country": "UK",
      "year": 2020,
      "event_date": "2020-09-15 00:00:00",
      "description": "An explosion occurred before emergency responders were notified. The fire department arrived and contained the fire, which was limited to one out of the three containers, and confirmed end of incident two days later. ",
      "root_cause": "Manufacturing",
      "failed_element": "Cell/Module",
      "image_url": null
  },
  {
      "id": 42,
      "latitude": 42.7917,
      "longitude": 1.4833,
      "coordinates": {
          "latitude": 42.7917,
          "longitude": 1.4833
      },
      "location_name": "France, Ariege, Perles-et-Castelet",
      "country": "France",
      "year": 2020,
      "event_date": "2020-12-01 00:00:00",
      "description": "The substation has 500 kWh of batteries and 1 MW - 10s of supercapacitors. The supercapacitors were not involved in the cause of failure, which happened during acceptance testing. The investigation found that rack #2 suddenly discharged into rack #3, and the current passed through only modules #1 to #7 of rack #3. The insulation resistance of rack #2 fell below the safety threshold and neared short circuit for rack #3. The investigation report provides a hypothesis of two faults resulting in failure: an electrical connection failed and came into contact with the metal frame, and an insulation fault between the busbar connecting a module to the BPU box, which may have caused an electric arc upstream of the fuse. The container was destroyed. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 43,
      "latitude": 36.23,
      "longitude": 128.42,
      "coordinates": {
          "latitude": 36.23,
          "longitude": 128.42
      },
      "location_name": "Gogyeong-myeon, Gyeongsangbuk-do, South Korea",
      "country": "South Korea",
      "year": 2021,
      "event_date": "2021-03-11 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 44,
      "latitude": 35.96,
      "longitude": 128.93,
      "coordinates": {
          "latitude": 35.96,
          "longitude": 128.93
      },
      "location_name": "South Korea, YoungCheon City",
      "country": "South Korea",
      "year": 2021,
      "event_date": "2021-03-11 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 45,
      "latitude": 36.6,
      "longitude": 126.66,
      "coordinates": {
          "latitude": 36.6,
          "longitude": 126.66
      },
      "location_name": "South Korea, Hongseong",
      "country": "South Korea",
      "year": 2021,
      "event_date": "2021-04-06 00:00:00",
      "description": "No description",
      "root_cause": "Operation",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 46,
      "latitude": -19.25,
      "longitude": 146.8167,
      "coordinates": {
          "latitude": -19.25,
          "longitude": 146.8167
      },
      "location_name": "Australia, Bohle Plains",
      "country": "Australia",
      "year": 2021,
      "event_date": "2021-04-07 00:00:00",
      "description": "A fire broke out during commissioning of Tesla Powerpacks.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 47,
      "latitude": 39.9,
      "longitude": 116.4,
      "coordinates": {
          "latitude": 39.9,
          "longitude": 116.4
      },
      "location_name": "China, Beijing",
      "country": "China",
      "year": 2021,
      "event_date": "2021-04-16 00:00:00",
      "description": "A fire broke out at a BESS located on the roof of a shopping mall. An explosion occurred, killing two firefighters and injuring a third. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 48,
      "latitude": 43.9578,
      "longitude": -83.9586,
      "coordinates": {
          "latitude": 43.9578,
          "longitude": -83.9586
      },
      "location_name": "US, MI, Standish",
      "country": "USA",
      "year": 2021,
      "event_date": "2021-04-19 00:00:00",
      "description": "Sparks were seen coming out of a BESS container. A fire broke out, and was limited to one container.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 49,
      "latitude": -22.2754,
      "longitude": 166.4582,
      "coordinates": {
          "latitude": -22.2754,
          "longitude": 166.4582
      },
      "location_name": "France, New Caledonia, Boulouparis",
      "country": "France",
      "year": 2021,
      "event_date": "2021-07-13 00:00:00",
      "description": "Two BESS containers were destroyed in a fire at a solar + storage facility. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 50,
      "latitude": 52.6667,
      "longitude": 14.05,
      "coordinates": {
          "latitude": 52.6667,
          "longitude": 14.05
      },
      "location_name": "Germany, Neuhardenberg",
      "country": "Germany",
      "year": 2021,
      "event_date": "2021-07-18 00:00:00",
      "description": "A BESS caught fire at a solar + storage facility. Images show the BESS being indoors.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 51,
      "latitude": 41.3117,
      "longitude": -89.0965,
      "coordinates": {
          "latitude": 41.3117,
          "longitude": -89.0965
      },
      "location_name": "US, IL, LaSalle",
      "country": "US",
      "year": 2021,
      "event_date": "2021-07-19 00:00:00",
      "description": "One container at a BESS plant caught fire. The fire was extinguished later the same day. ",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of Plant",
      "image_url": null
  },
  {
      "id": 52,
      "latitude": -37.8136,
      "longitude": 144.9631,
      "coordinates": {
          "latitude": -37.8136,
          "longitude": 144.9631
      },
      "location_name": "Australia, Victoria, Moorabool",
      "country": "Australia",
      "year": 2021,
      "event_date": "2021-07-30 00:00:00",
      "description": "The thermal event started in one Megapack and propagated to another. Two adjacent megapacks were damaged by thermal radiation from the fire. This event occurred during commissioning, when the Megapack was switched to off-line service mode. The resulting  shutdown of telemetry systems, battery cooling system, and battery protection system led to a loss of visibility on the Megapack's condition, alarming, and other prevention/mitigation functionalities.",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 53,
      "latitude": 36.80616,
      "longitude": -121.781212,
      "coordinates": {
          "latitude": 36.80616,
          "longitude": -121.781212
      },
      "location_name": "US, CA, Moss Landing",
      "country": "US",
      "year": 2021,
      "event_date": "2021-09-04 00:00:00",
      "description": "No description",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 54,
      "latitude": 35.53,
      "longitude": 129.31,
      "coordinates": {
          "latitude": 35.53,
          "longitude": 129.31
      },
      "location_name": "South Korea, Nam-gu, Ulsan",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-01-12 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 55,
      "latitude": 36.23,
      "longitude": 128.42,
      "coordinates": {
          "latitude": 36.23,
          "longitude": 128.42
      },
      "location_name": "South Korea, Gunwi-gun, Gyeongsangbuk-do",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-01-17 00:00:00",
      "description": "No description",
      "root_cause": "Manufacturing",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 56,
      "latitude": 36.80616,
      "longitude": -121.781212,
      "coordinates": {
          "latitude": 36.80616,
          "longitude": -121.781212
      },
      "location_name": "US, CA, Moss Landing",
      "country": "US",
      "year": 2022,
      "event_date": "2022-02-13 00:00:00",
      "description": "No description",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 57,
      "latitude": 25.033,
      "longitude": 121.5654,
      "coordinates": {
          "latitude": 25.033,
          "longitude": 121.5654
      },
      "location_name": "Taiwan, Taichung City, Longjing District",
      "country": "Taiwan",
      "year": 2022,
      "event_date": "2022-03-30 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 58,
      "latitude": 33.12,
      "longitude": -117.03,
      "coordinates": {
          "latitude": 33.12,
          "longitude": -117.03
      },
      "location_name": "US, CA, Valley Center",
      "country": "USA",
      "year": 2022,
      "event_date": "2022-04-05 00:00:00",
      "description": "No description",
      "root_cause": "Design",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 59,
      "latitude": 33.3,
      "longitude": -111.84,
      "coordinates": {
          "latitude": 33.3,
          "longitude": -111.84
      },
      "location_name": "US, AZ, Chandler",
      "country": "US",
      "year": 2022,
      "event_date": "2022-04-18 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 60,
      "latitude": 35.39,
      "longitude": 126.89,
      "coordinates": {
          "latitude": 35.39,
          "longitude": 126.89
      },
      "location_name": "South Korea, Jangseong-gun",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-05-02 00:00:00",
      "description": "The battery in a solar plus storage system caught fire.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 61,
      "latitude": 34.0522,
      "longitude": -118.2437,
      "coordinates": {
          "latitude": 34.0522,
          "longitude": -118.2437
      },
      "location_name": "US, CA, Rio Dell",
      "country": "US",
      "year": 2022,
      "event_date": "2022-08-03 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 62,
      "latitude": 37.4563,
      "longitude": 126.7052,
      "coordinates": {
          "latitude": 37.4563,
          "longitude": 126.7052
      },
      "location_name": "South Korea, Incheon",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-09-06 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 63,
      "latitude": 44.428,
      "longitude": -110.5885,
      "coordinates": {
          "latitude": 44.428,
          "longitude": -110.5885
      },
      "location_name": "USA, Wyoming, Yellowstone National Park",
      "country": "USA",
      "year": 2022,
      "event_date": "2022-09-06 00:00:00",
      "description": "Smoke was seen coming from a building housing a solar plus storage system. West Thumb Geyser Basin was closed for 6 days following the incident.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 64,
      "latitude": 36.80616,
      "longitude": -121.781212,
      "coordinates": {
          "latitude": 36.80616,
          "longitude": -121.781212
      },
      "location_name": "US, CA, Moss Landing",
      "country": "USA",
      "year": 2022,
      "event_date": "2022-09-20 00:00:00",
      "description": "Fire in one Megapack unit at PG&E Elkhorn battery facility",
      "root_cause": "Integration, Construction, or Assembly_x000D_\nDesign",
      "failed_element": "Balance of plant_x000D_\nControls",
      "image_url": null
  },
  {
      "id": 65,
      "latitude": 19.0,
      "longitude": 109.5,
      "coordinates": {
          "latitude": 19.0,
          "longitude": 109.5
      },
      "location_name": "China, Hainan",
      "country": "China",
      "year": 2022,
      "event_date": "2022-10-20 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 66,
      "latitude": 35.32,
      "longitude": 126.97,
      "coordinates": {
          "latitude": 35.32,
          "longitude": 126.97
      },
      "location_name": "South Korea, Jeollanam-do, Damyang-gun, Mujeong-myeon, Deokgok-ri",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-12-08 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 67,
      "latitude": 34.78,
      "longitude": 126.83,
      "coordinates": {
          "latitude": 34.78,
          "longitude": 126.83
      },
      "location_name": "South Korea, Jeollanam-do, Yeongam-gun, Geumjeong-myeon",
      "country": "South Korea",
      "year": 2022,
      "event_date": "2022-12-27 00:00:00",
      "description": "No description",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 68,
      "latitude": 40.49,
      "longitude": -79.97,
      "coordinates": {
          "latitude": 40.49,
          "longitude": -79.97
      },
      "location_name": "US, PA, Millvale",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-01-30 00:00:00",
      "description": "Relatively small  battery system in the basement of a commercial building. Batteries were tied to rooftop solar and used to power a kitchen on the main floor.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 69,
      "latitude": 48.8566,
      "longitude": 2.3522,
      "coordinates": {
          "latitude": 48.8566,
          "longitude": 2.3522
      },
      "location_name": "France, Saint-Trivier-sur-Moignans",
      "country": "France",
      "year": 2023,
      "event_date": "2023-03-28 00:00:00",
      "description": "Data center burned down. Data center had a solar + storage system, and lithium ion battery is suspected to be the cause of fire.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 70,
      "latitude": 57.7,
      "longitude": 11.97,
      "coordinates": {
          "latitude": 57.7,
          "longitude": 11.97
      },
      "location_name": "Sweden, Gothenburg, Vastra Frolunda",
      "country": "Sweden",
      "year": 2023,
      "event_date": "2023-04-26 00:00:00",
      "description": "The container was on wheels and was moved from indoors to outdoors when smoke was seen. A cutting extinguisher was used to cool the battery, but several minutes later an explosion occurred. The nearby community was directed to stay indoors and an adjacent building was evacuated during fire fighting activities. Fire propagation to the adjacent building was limited by water from jet pipes and water cannons. The fire was extinguished, but the batteries began smoking again the next day. The battery container was submerged by crane in water in a larger container.",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 71,
      "latitude": 40.9667,
      "longitude": -72.1933,
      "coordinates": {
          "latitude": 40.9667,
          "longitude": -72.1933
      },
      "location_name": "US, NY, East Hampton",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-05-31 00:00:00",
      "description": "A 'smoldering battery' was reported, closing down roads and stopping train service for about an hour until the fire was contained. NextEra reported that an internal sprinkler system contained the fire. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 72,
      "latitude": 41.25,
      "longitude": -74.35,
      "coordinates": {
          "latitude": 41.25,
          "longitude": -74.35
      },
      "location_name": "US, NY, Warwick",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-06-26 00:00:00",
      "description": "This event is one half of a larger simultaneous failure across 2 discrete sites in Warwick, NY. Both sites deployed the new \"Centipede\" model from Powin and both failures seemed to have occuredwithin 24 hours of each other.  The failure appeared to occur during a large storm that affected both sites in Warwick",
      "root_cause": "Design",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 73,
      "latitude": 41.25,
      "longitude": -74.35,
      "coordinates": {
          "latitude": 41.25,
          "longitude": -74.35
      },
      "location_name": "US, NY, Warwick",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-06-27 00:00:00",
      "description": "This event is one half of a larger simultaneous failure across 2 discrete sites in Warwick, NY. Both sites deployed the new \"Centipede\" model from Powin and both failures seemed to have occuredwithin 24 hours of each other. The failure appeared to occur during a large storm that affected both sites in Warwick.",
      "root_cause": "Design_x000D_\nIntegration, Construction, or Assembly",
      "failed_element": "Balance of plant_x000D_\nControls",
      "image_url": null
  },
  {
      "id": 74,
      "latitude": 25.033,
      "longitude": 121.5654,
      "coordinates": {
          "latitude": 25.033,
          "longitude": 121.5654
      },
      "location_name": "Taiwan, Taichung City, Longjing District",
      "country": "Taiwan",
      "year": 2023,
      "event_date": "2023-07-04 00:00:00",
      "description": "Fire was reported in an outdoor storage facility. At least one container with batteries was on fire. The damage area was reported by to ~30 sq. m. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 75,
      "latitude": 44.0,
      "longitude": -76.0,
      "coordinates": {
          "latitude": 44.0,
          "longitude": -76.0
      },
      "location_name": "US, NY, Chaumont",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-07-27 00:00:00",
      "description": "Fire was reported in an outdoor storage facility co-located with solar PV. A shelter-in-place order was issued for the surrounding community within 1 mile of the facility. ",
      "root_cause": "Design",
      "failed_element": "Controls",
      "image_url": null
  },
  {
      "id": 76,
      "latitude": 22.25,
      "longitude": 113.56,
      "coordinates": {
          "latitude": 22.25,
          "longitude": 113.56
      },
      "location_name": "China, Xiangzhou District, Zuhai City",
      "country": "China",
      "year": 2023,
      "event_date": "2023-08-19 00:00:00",
      "description": "Fire fighters used water to extinguish the fire. Later, the battery cabinet suddenly caught fire again. Staff protected by fire fighters used a forklift to transfer each battery cabinet to an outdoor open area for cooling. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 77,
      "latitude": 44.64,
      "longitude": -0.51,
      "coordinates": {
          "latitude": 44.64,
          "longitude": -0.51
      },
      "location_name": "France, Saucats, Barban",
      "country": "France",
      "year": 2023,
      "event_date": "2023-08-22 00:00:00",
      "description": "Fire broke out at an outdoor storage facility. A water curtain was used to prevent propagation. No injuries were reported. Local residents raised concerns about smoke affected nearby cropland and forests. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 78,
      "latitude": 33.12,
      "longitude": -117.03,
      "coordinates": {
          "latitude": 33.12,
          "longitude": -117.03
      },
      "location_name": "US, CA, Valley Center",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-09-18 00:00:00",
      "description": "Fire in one of the containers. This is the 2nd event that this system has experienced, the [https://storagewiki.epri.com/index.php/Failure_Event_-_US,_CA,_Valley_Center_-_5_Apr_2022 first event was on April 5, 2022]",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 79,
      "latitude": -33.8688,
      "longitude": 151.2093,
      "coordinates": {
          "latitude": -33.8688,
          "longitude": 151.2093
      },
      "location_name": "Australia, Queensland, Bouldercombe",
      "country": "Australia",
      "year": 2023,
      "event_date": "2023-09-26 00:00:00",
      "description": "No description",
      "root_cause": "Integration, Construction, or Assembly",
      "failed_element": "Balance of plant",
      "image_url": null
  },
  {
      "id": 80,
      "latitude": 48.8566,
      "longitude": 2.3522,
      "coordinates": {
          "latitude": 48.8566,
          "longitude": 2.3522
      },
      "location_name": "France, Martinique, Saint-Esprit",
      "country": "France",
      "year": 2023,
      "event_date": "2023-09-29 00:00:00",
      "description": "The explosion blew out windows from nearby residential homes and led to an evacuation. Water was used to reduce toxic air emissions and the fire was suppressed with powder and foam within 3 hours. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 81,
      "latitude": 43.49,
      "longitude": -116.53,
      "coordinates": {
          "latitude": 43.49,
          "longitude": -116.53
      },
      "location_name": "USA, ID, Melba",
      "country": "USA",
      "year": 2023,
      "event_date": "2023-10-02 00:00:00",
      "description": "Battery fire at the substation was reported, leading to road closures. The fire was contained and allowed to burn out over 3 days, and air quality testing was conducted by the county. The substation remained operational through the fire.",
      "root_cause": "Design",
      "failed_element": "Balance of Plant",
      "image_url": null
  },
  {
      "id": 82,
      "latitude": 22.03,
      "longitude": 121.53,
      "coordinates": {
          "latitude": 22.03,
          "longitude": 121.53
      },
      "location_name": "Taiwan, Lanyu",
      "country": "Taiwan",
      "year": 2023,
      "event_date": "2023-12-28 00:00:00",
      "description": "A battery cabinet outside the Lanyu Power Plant caught fire. The cause is suspected to be a short circuit that occurred during a grid connection test. The plant's operation was not affected, and the fire was controlled and suppressed after a day._x000D_\n",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 83,
      "latitude": 32.7157,
      "longitude": -117.1611,
      "coordinates": {
          "latitude": 32.7157,
          "longitude": -117.1611
      },
      "location_name": "USA, CA, San Diego",
      "country": "USA",
      "year": 2024,
      "event_date": "2024-05-15 00:00:00",
      "description": "The Gateway Energy Storage Facility was involved in a fire, and water was pumped into the building's fire suppression system to extinguish it. A 600-foot safety barrier was maintained for over 22 hours due to air monitors showing high levels of hydrogen. A drone and unmanned robot were been used to monitor the fire, measure air quality and take temperature readings, and firefighters opened the building once heat was no longer detected. A shelter in place order and an evacuation warning were sent out as a precaution. The fire was declared extinguished the next day, but reignited several times until the fire department left the scene nearly 17 days later. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 84,
      "latitude": 31.8428,
      "longitude": 130.4078,
      "coordinates": {
          "latitude": 31.8428,
          "longitude": 130.4078
      },
      "location_name": "Japan, Kagoshima, Isa",
      "country": "Japan",
      "year": 2024,
      "event_date": "2024-03-27 00:00:00",
      "description": "The BESS of a solar+storage plant caught fire. The BESS was co-located with the 1200 kW Takayanagi Solar Power Plant, Unit 6. Firefighters checked the temperature and opened the door to the building, and an explosion occurred when they tried to use the smoke exhaust system. Four firefighters were injured. The fire was extinguished the next day.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 85,
      "latitude": 33.7456,
      "longitude": -117.8678,
      "coordinates": {
          "latitude": 33.7456,
          "longitude": -117.8678
      },
      "location_name": "US, CA, Santa Ana",
      "country": "USA",
      "year": 2024,
      "event_date": "2024-07-17 00:00:00",
      "description": "A BESS fire occurred in an industrial area, leading to a 1 hour evacuation in the area due to smoke. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 86,
      "latitude": 33.1278,
      "longitude": -117.0722,
      "coordinates": {
          "latitude": 33.1278,
          "longitude": -117.0722
      },
      "location_name": "US, CA, Escondido",
      "country": "USA",
      "year": 2024,
      "event_date": "2024-09-05 00:00:00",
      "description": "One of 24 containers caught fire. Businesses adjacent to the substation or within approximately 0.25 mi were evacuated. A shelter-in-place order was issued for locations farther east. Classes were cancelled at some nearby schools. The fire started at noon on September 5, and was extinguished by 1 AM on September 6. Air quality and water runoff reports were made publicly available after the incident, and found that all readings taken were well below acceptable exposure limits and considered expected readings during a routine structure fire.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 87,
      "latitude": 1.3521,
      "longitude": 103.8198,
      "coordinates": {
          "latitude": 1.3521,
          "longitude": 103.8198
      },
      "location_name": "Singapore",
      "country": "Singapore",
      "year": 2024,
      "event_date": "2024-09-10 00:00:00",
      "description": "An explosion and fire occurred in a lithium ion BESS at a data center owned by Digital Realty. The BESS was located in the battery rooms on the third floor. Four water jets and the sprinkler system were used to contain the fire, and an unmanned firefighting robot was used to cool the batteries. The fire was declared to be under control after 2 days. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 88,
      "latitude": -33.9249,
      "longitude": 18.4241,
      "coordinates": {
          "latitude": -33.9249,
          "longitude": 18.4241
      },
      "location_name": "South Africa, Table Mountain",
      "country": "South Africa",
      "year": 2024,
      "event_date": "2024-10-25 00:00:00",
      "description": "A lithium ion battery system intended as back up energy for cable car operation caught fire. The system was inside a parking garage and was contained within 4 hours.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 89,
      "latitude": 36.80616,
      "longitude": -121.781212,
      "coordinates": {
          "latitude": 36.80616,
          "longitude": -121.781212
      },
      "location_name": "US, CA, Moss Landing",
      "country": "USA",
      "year": 2025,
      "event_date": "2025-01-16 00:00:00",
      "description": "A fire broke out in Vistra's 300 MW / 1200 MWh Phase I BESS plant. Firefighters are using a \"monitor and contain\" approach and allowing the fire to burn itself out. The police issued evacuation orders and closed two nearby roads and a highway, and the local school district closed all schools for one day. The US EPA, the Monterey Bay Air Resources District, and Vistra monitored air quality in and around the fire perimeter and across Monterey County, and found that levels of Hydrogen Fluoride (HF) remained below acute Reference Exposure Level thresholds. Moss Landing Marine Laboratories found elevated levels of nickel, cobalt, and manganese in soil samples at concentrations roughly 100 to 1,000 times higher than normal. _x000D_\nThe Moss Landing site is home to two separately owned BESS systems: PG&E's Elkhorn system, and Vistra's Moss Landing systems (Phase I, II, and III). The Phase I Vistra system experienced an incident in 2021 and came back online in 2022. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 90,
      "latitude": 45.4215,
      "longitude": -75.6972,
      "coordinates": {
          "latitude": 45.4215,
          "longitude": -75.6972
      },
      "location_name": "Canada, ON, Brantford",
      "country": "Canada",
      "year": 2024,
      "event_date": "2024-09-12 00:00:00",
      "description": "A single 40 ft container BESS caught fire. The container was located on the property of a bakery, and the fire did not disrupt the bakery's operations. Firewater runoff from the site impacted a retention pond and a nearby creek. The Ministry of Environment stated that \u00e2\u20ac\u0153the gate at the outfall of the pond was immediately closed, containing the majority of the firewater to the pond. Impacts to the creek are minimal and are not expected to cause adverse effects.\u00e2\u20ac\u009d Cleanup of the pond and disposal of the firewater was to be conducted in accordance with the Environmental Protection Act.",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 91,
      "latitude": 32.81,
      "longitude": -117.11,
      "coordinates": {
          "latitude": 32.81,
          "longitude": -117.11
      },
      "location_name": "US, CA, Kearny Mesa",
      "country": "USA",
      "year": 2024,
      "event_date": "2024-04-29 00:00:00",
      "description": "A safety incident occurred at the Kearny South Energy Storage Facility. The 20 MW / 80 MWh Kearny system consists of the Kearny North Energy Storage Facility and Kearny South Energy Storage Facility, both located at the same substation. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 92,
      "latitude": 51.5074,
      "longitude": 0.1278,
      "coordinates": {
          "latitude": 51.5074,
          "longitude": 0.1278
      },
      "location_name": "England, Essex, Tilbury",
      "country": "UK",
      "year": 2025,
      "event_date": "2025-02-19 00:00:00",
      "description": "A fire occurred in a single BESS container and was extinguished 1 day later. The Thurrock site was still under construction at the time. Firefighters relied on thermal imaging cameras and drones to monitor temperatures and manage the fire, and a water curtain was used to prevent propagation. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": null
  },
  {
      "id": 93,
      "latitude": 57.1497,
      "longitude": -2.099,
      "coordinates": {
          "latitude": 57.1497,
          "longitude": -2.099
      },
      "location_name": "Scotland, Aberdeenshire, Rothienorman",
      "country": "UK",
      "year": 2025,
      "event_date": "2025-02-21 00:00:00",
      "description": "A fire occured at a BESS facility. The fire was extinguished and firefighters left 4 hours after arrival. ",
      "root_cause": "Unknown Cause",
      "failed_element": "Unknown Element",
      "image_url": "https://wpcluster.dctdigital.com/wp-content/uploads/sites/2/2025/02/Fire_Ipsum-Services_Electric-Worksite_Rothienorman_21Feb2025_-7_63776077-253jc3j5v-e1740160430723-620x372.jpg"
  }
]
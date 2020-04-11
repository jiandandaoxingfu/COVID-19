var datas = [{
	"name": "中国",
	"trend": {
		"updateDate": ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "1.27", "1.28", "1.29", "1.30", "1.31", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17", "2.18", "2.19", "2.20", "2.21", "2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8","4.9","4.10"],
		"list": [{
			"name": "确诊",
			"data": [291, 440, 571, 830, 1287, 1975, 2761, 4535, 5997, 7736, 9720, 11821, 14411, 17238, 20471, 24363, 28060, 31211, 34598, 37251, 40235, 42708, 44730, 59882, 63932, 66576, 68584, 70635, 72528, 74279, 75101, 75993, 76392, 77041, 77262, 77779, 78190, 78630, 78959, 79389, 79968, 80174, 80302, 80422, 80565, 80710, 80813, 80859, 80904, 80924, 80955, 80980, 81003, 81021, 81048, 81077, 81116, 81151, 81235, 81300, 81416, 81498, 81600, 81747, 81846, 81960, 82078, 82213, 82341, 82447, 82545, 82631, 82724, 82802, 82875, 82930, 83005, 83071, 83157, 83249,83305,83369]
		}, {
			"name": "疑似",
			"data": [5794, 6973, 9239, 12167, 15238, 17988, 19544, 21558, 23214, 23260, 24702, 26359, 27657, 28942, 23589, 21675, 16067, 13435, 10109, 8969, 8228, 7264, 6242, 5248, 4922, 5206, 5365, 4148, 3434, 2824, 2491, 2358, 2308, 1418, 851, 715, 587, 520, 522, 482, 502, 458, 421, 349, 285, 253, 147, 34, 113, 134, 128, 119, 105, 104, 106, 118, 136, 132, 134, 159, 189, 184, 174, 168, 183, 172, 153, 135, 114, 107, 88, 89, 83, 73]
		}, {
			"name": "治愈",
			"data": [51, 60, 103, 126, 171, 243, 328, 475, 632, 892, 1153, 1542, 2050, 2651, 3283, 3998, 4742, 5915, 6728, 8101, 9425, 10853, 12561, 14387, 16170, 18279, 20673, 22907, 24757, 27353, 29775, 32531, 36157, 39049, 41675, 44518, 47260, 49914, 52109, 53793, 55477, 57143, 58684, 59982, 61567, 62887, 64216, 65649, 67022, 67863, 68799, 69725, 70547, 71284, 71876, 72382, 72841, 73299, 73791, 74196, 74737, 75122, 75600, 75937, 76225, 76415, 76610, 76785, 76984, 77210, 77348, 77450, 77586, 77711]
		}, {
			"name": "死亡",
			"data": [80, 106, 132, 170, 213, 259, 304, 361, 425, 491, 564, 637, 723, 812, 909, 1017, 1114, 1368, 1381, 1524, 1666, 1772, 1870, 2006, 2121, 2239, 2348, 2445, 2595, 2666, 2718, 2747, 2791, 2838, 2873, 2915, 2946, 2984, 3015, 3045, 3073, 3100, 3123, 3140, 3162, 3173, 3180, 3194, 3204, 3218, 3231, 3242, 3250, 3253, 3261, 3267, 3276, 3283, 3287, 3293, 3298, 3301, 3306, 3311, 3314, 3321, 3327, 3331, 3335, 3338, 3340, 3340, 3342, 3344]
		}, {
			"name": "新增确诊",
			"data": [769, 1771, 1459, 1737, 1982, 2102, 2590, 2829, 3235, 3887, 3694, 3151, 3399, 2653, 3073, 2484, 2022, 15153, 5093, 2644, 2009, 2051, 1891, 1751, 825, 892, 399, 649, 416, 517, 411, 440, 329, 430, 579, 206, 128, 120, 143, 145, 103, 46, 45, 20, 31, 25, 11, 18, 27, 29, 39, 35, 84, 65, 116, 82, 102, 147, 99, 114, 118, 135, 128, 106, 98, 86, 93, 78, 73, 55, 75, 66, 86, 92]
		}, {
			"name": "新增疑似",
			"data": [3806, 2077, 3248, 4148, 4812, 5019, 4562, 5173, 5072, 3971, 5328, 4833, 4214, 3916, 4008, 3536, 3342, 2807, 2450, 2277, 1918, 1563, 1432, 1185, 1277, 1614, 1614, 882, 620, 530, 439, 508, 452, 248, 132, 141, 129, 143, 143, 102, 99, 84, 60, 36, 31, 33, 33, 17, 39, 41, 45, 21, 23, 31, 36, 45, 47, 35, 33, 58, 49, 29, 28, 17, 44, 26, 20, 12, 11, 11, 10, 12, 12, 17]
		}, {
			"name": "新增治愈",
			"data": [2, 9, 43, 21, 47, 72, 85, 147, 157, 262, 261, 389, 510, 600, 632, 716, 744, 1173, 1082, 1373, 1324, 1428, 1701, 1826, 1781, 2109, 2394, 2235, 1850, 2596, 2422, 2756, 3626, 2892, 2626, 2843, 2742, 2654, 2195, 1684, 1684, 1666, 1541, 1298, 1585, 1320, 1329, 1433, 1373, 841, 936, 926, 822, 737, 592, 506, 459, 458, 492, 405, 541, 385, 478, 337, 288, 190, 195, 175, 199, 226, 138, 102, 136, 125]
		}, {
			"name": "新增死亡",
			"data": [24, 26, 26, 38, 43, 46, 45, 57, 64, 66, 73, 73, 86, 89, 97, 108, 97, 254, 121, 143, 142, 106, 98, 136, 115, 118, 109, 97, 150, 71, 52, 29, 44, 47, 35, 42, 31, 38, 31, 30, 28, 27, 23, 17, 22, 11, 7, 14, 10, 14, 13, 11, 8, 3, 8, 6, 9, 7, 4, 6, 5, 3, 5, 5, 3, 7, 6, 4, 4, 3, 1, 0, 2, 2]
		}, {
			"name": "新增境外输入",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 16, 24, 3, 4, 2, 10, 6, 3, 7, 16, 12, 20, 12, 34, 39, 41, 45, 39, 74, 47, 67, 54, 54, 44, 30, 48, 35, 35, 29, 18, 25, 38, 32, 59, 61]
		}]
	}
}, {
	"name": "荷兰",
	"trend": {
		"updateDate": ["2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [2, 4, 10, 10, 24, 38, 82, 82, 188, 265, 321, 382, 503, 614, 959, 1135, 1413, 1705, 2051, 2460, 2994, 3631, 4204, 5560, 6412, 7431, 8642, 9762, 10866, 11817, 12667, 13696, 14784, 15821, 16727, 18803, 18926, 19709, 20682, 21903, 23249]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 6, 6, 253, 253, 253, 260, 260, 260, 262, 262, 262, 272, 272, 278, 287]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 4, 5, 5, 12, 20, 24, 43, 58, 76, 106, 136, 179, 276, 356, 434, 547, 639, 771, 865, 1040, 1175, 1341, 1490, 1656, 1867, 1874, 2108, 2255, 2403, 2520]
		}, {
			"name": "新增确诊",
			"data": [2, 2, 6, 0, 14, 14, 44, 0, 106, 77, 56, 61, 121, 111, 155, 17, 278, 292, 346, 409, 534, 637, 573, 811, 852, 1019, 1172, 1159, 1104, 884, 845, 1019, 1083, 1026, 1026, 952, 952, 777, 969, 1213, 152]
		}]
	}
}, {
	"name": "丹麦",
	"trend": {
		"updateDate": ["2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [1, 1, 3, 3, 4, 6, 10, 15, 20, 27, 27, 35, 159, 340, 615, 827, 864, 914, 977, 1057, 1151, 1255, 1326, 1395, 1460, 1591, 1724, 1877, 2163, 2201, 2395, 2724, 3039, 3290, 3573, 3946, 4269, 4369, 4681, 5386, 5402, 5635, 5830]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 57, 57, 73, 73, 77, 971, 1172, 1287, 1379, 1429, 1437, 1621, 1621, 1763, 1892]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 6, 9, 13, 13, 24, 32, 34, 34, 52, 65, 72, 77, 90, 104, 123, 139, 161, 279, 187, 203, 218, 237, 247]
		}, {
			"name": "新增确诊",
			"data": [1, 0, 2, 0, 1, 2, 4, 5, 5, 7, 0, 8, 124, 181, 275, 26, 37, 16, 17, 80, 94, 104, 71, 69, 65, 131, 133, 153, 169, 155, 194, 182, 283, 247, 279, 371, 320, 292, 312, 390, 331, 233, 184]
		}]
	}
}, {
	"name": "挪威",
	"trend": {
		"updateDate": ["2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [1, 4, 7, 17, 19, 32, 34, 72, 90, 136, 157, 176, 227, 400, 703, 1108, 1256, 1331, 1423, 1562, 1758, 1939, 2150, 2262, 2573, 2796, 3041, 3315, 3721, 3981, 4245, 4451, 4635, 4863, 5142, 5370, 5550, 5687, 5762, 5953, 6086, 6162, 6314]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 7, 7, 12, 13, 13, 36, 32, 32, 32, 32, 32, 32, 32, 32]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 6, 7, 7, 7, 7, 10, 12, 14, 14, 19, 22, 26, 32, 39, 44, 50, 59, 62, 71, 76, 89, 101, 108, 113]
		}, {
			"name": "新增确诊",
			"data": [1, 3, 3, 10, 2, 13, 2, 38, 18, 46, 21, 19, 51, 173, 303, 112, 148, 75, 116, 110, 196, 181, 211, 112, 311, 223, 245, 274, 406, 260, 264, 206, 190, 222, 265, 223, 180, 137, 76, 88, 110, 144, 110]
		}]
	}
}, {
	"name": "瑞士",
	"trend": {
		"updateDate": ["2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [1, 1, 1, 6, 6, 24, 27, 46, 66, 81, 210, 228, 281, 337, 476, 645, 815, 1375, 1563, 1680, 2269, 2772, 4222, 5615, 6113, 7014, 8060, 9877, 10897, 11811, 12928, 13213, 14336, 15526, 16605, 17768, 18827, 19606, 20505, 21176, 21657, 22253, 23280, 24046, 24551]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 15, 15, 131, 131, 131, 131, 131, 131, 1530, 1530, 1595, 1595, 1823, 2967, 4013, 4846, 6415, 7298, 8056, 8704, 9800, 10600, 11100]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 13, 11, 13, 19, 21, 43, 56, 56, 60, 98, 122, 153, 191, 231, 231, 264, 300, 433, 488, 536, 591, 666, 724, 765, 821, 895, 948, 1002]
		}, {
			"name": "新增确诊",
			"data": [1, 0, 0, 5, 0, 18, 3, 19, 20, 15, 129, 18, 53, 56, 139, 169, 170, 236, 188, 117, 589, 503, 1107, 1393, 1248, 1001, 586, 1082, 1020, 914, 1117, 1052, 1123, 1201, 701, 1163, 1059, 779, 899, 671, 557, 596, 1027, 766, 500]
		}]
	}
}, {
	"name": "伊朗",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9"],
		"list": [{
			"name": "确诊",
			"data": [28, 43, 61, 95, 141, 245, 388, 593, 978, 1501, 2336, 2922, 3513, 4747, 5823, 6566, 7161, 9000, 10075, 11364, 12729, 13938, 14991, 16169, 17361, 18407, 19644, 20610, 21638, 23094, 24811, 27017, 29406, 32332, 35408, 38309, 41495, 44606, 47593, 50468, 53183, 55743, 58226, 60500, 62589, 64586, 66220, 68192]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 54, 54, 123, 175, 291, 435, 435, 435, 739, 1669, 2134, 2394, 2959, 3276, 3529, 4339, 4590, 4996, 5389, 5710, 5710, 6745, 7635, 7913, 8376, 8913, 9625, 10457, 11133, 11679, 12391, 13911, 14656, 15473, 16711, 17935, 19736, 22011, 24236, 27039, 27039, 32309, 35465]
		}, {
			"name": "死亡",
			"data": [4, 8, 12, 16, 19, 22, 34, 43, 54, 66, 77, 92, 107, 124, 145, 194, 237, 354, 429, 514, 611, 724, 853, 988, 1135, 1284, 1433, 1556, 1685, 1812, 1934, 2077, 2234, 2378, 2517, 2640, 2757, 2898, 3036, 3160, 3294, 3452, 3603, 3739, 3872, 3993, 4110, 4232]
		}, {
			"name": "新增确诊",
			"data": [10, 15, 18, 34, 46, 104, 143, 205, 385, 523, 835, 586, 591, 1234, 1076, 743, 595, 958, 1075, 1289, 1365, 1209, 1053, 1178, 1192, 1046, 1237, 966, 1028, 1411, 1762, 2206, 2389, 2926, 3076, 2901, 3186, 3111, 2987, 2875, 2715, 2560, 2483, 2274, 2089, 1997, 1634, 1972]
		}]
	}
}, {
	"name": "比利时",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9"],
		"list": [{
			"name": "确诊",
			"data": [1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 13, 23, 50, 109, 169, 200, 239, 267, 314, 399, 689, 886, 1085, 1243, 1795, 2257, 2815, 3401, 3743, 4269, 4937, 6235, 7284, 9134, 10836, 11899, 12775, 13964, 15348, 16770, 18431, 19961, 20814, 22194, 23403, 24983, 26667]
		}, {
			"name": "治愈",
			"data": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 31, 165, 204, 204, 350, 350, 350, 350, 675, 858, 1063, 1527, 1696, 2132, 2495, 2872, 3247, 3751, 3986, 4157, 4681, 5164, 5568]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 4, 10, 10, 21, 37, 67, 75, 88, 122, 178, 220, 289, 353, 431, 513, 705, 828, 1011, 1143, 1283, 1447, 1632, 2035, 2240, 2523, 3019]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 5, 10, 27, 59, 60, 31, 39, 28, 47, 85, 133, 197, 172, 185, 309, 462, 568, 586, 342, 526, 668, 1298, 1049, 1850, 1702, 1063, 876, 1189, 1384, 1422, 1661, 1260, 1123, 1380, 1209, 1580, 1684]
		}]
	}
}, {
	"name": "西班牙",
	"trend": {
		"updateDate": ["2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [2, 2, 2, 2, 12, 25, 32, 45, 45, 114, 151, 198, 257, 374, 430, 589, 1024, 1639, 2140, 4334, 6393, 9191, 9942, 11826, 14769, 18077, 24926, 25496, 28768, 35136, 39885, 49515, 57786, 65719, 72469, 80031, 85195, 94417, 102179, 110238, 117710, 126168, 131646, 136675, 140618, 148220, 153222, 158273]
		}, {
			"name": "治愈",
			"data": [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 30, 30, 30, 32, 183, 189, 571, 571, 571, 1028, 1081, 1107, 1107, 2125, 2575, 3355, 3355, 5367, 7015, 9357, 12285, 14709, 16780, 16780, 22647, 26743, 30513, 34219, 38080, 40437, 43208, 48021, 52165, 55668]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 5, 5, 10, 28, 36, 55, 120, 195, 309, 309, 533, 638, 831, 1326, 1381, 1772, 2311, 2696, 3647, 4365, 5138, 5826, 6803, 7340, 8189, 9131, 10096, 11009, 11947, 12641, 13341, 13912, 14792, 15447, 16081]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 0, 0, 10, 13, 7, 13, 0, 69, 37, 47, 59, 117, 56, 159, 435, 615, 501, 125, 350, 1438, 751, 1987, 2943, 3431, 4946, 4964, 4964, 2047, 6584, 7457, 8271, 7933, 8189, 6549, 6398, 9222, 6256, 6256, 7134, 7026, 5478, 5029, 3943, 6278, 5002, 5051]
		}]
	}
}, {
	"name": "瑞典",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.14", "3.15", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [1, 1, 1, 1, 1, 2, 7, 12, 13, 14, 24, 35, 60, 101, 161, 203, 248, 346, 464, 635, 961, 1023, 1191, 1301, 1423, 1639, 1746, 1906, 2016, 2272, 2510, 2840, 3046, 3447, 3700, 4028, 4435, 4947, 5568, 6131, 6443, 7206, 7693, 8419, 8419, 9141, 9685]
		}, {
			"name": "治愈",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 103, 205, 205, 205, 205, 205, 205, 205, 381]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 8, 10, 11, 16, 20, 21, 25, 36, 42, 70, 92, 102, 110, 146, 180, 239, 308, 358, 373, 477, 591, 687, 687, 793, 870]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 0, 0, 0, 1, 5, 5, 1, 1, 10, 11, 25, 41, 60, 42, 45, 98, 118, 171, 147, 62, 168, 110, 144, 200, 123, 160, 110, 256, 238, 296, 240, 401, 253, 328, 407, 512, 621, 563, 365, 376, 487, 726, 726, 722, 544]
		}]
	}
}, {
	"name": "英国",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [9, 9, 13, 13, 13, 15, 19, 23, 35, 40, 51, 85, 87, 163, 206, 273, 319, 321, 456, 596, 1372, 1543, 1950, 2626, 3269, 3983, 5018, 5683, 6650, 8077, 9529, 11658, 14579, 17312, 19522, 22141, 25474, 29857, 34164, 38688, 42479, 48436, 51608, 55957, 60733, 65863, 74605]
		}, {
			"name": "治愈",
			"data": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 18, 18, 18, 18, 18, 19, 19, 19, 65, 65, 65, 65, 65, 65, 65, 65, 142, 150, 151, 151, 171, 179, 179, 191, 205, 215, 229, 229, 332, 345, 357, 588]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 5, 6, 10, 35, 53, 71, 104, 144, 177, 233, 281, 335, 422, 465, 578, 759, 1021, 1228, 1408, 1793, 2357, 2926, 3611, 4320, 4943, 5373, 6171, 7097, 7992, 8974]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 4, 0, 0, 2, 4, 4, 12, 5, 11, 34, 2, 76, 43, 67, 46, 2, 135, 140, 232, 171, 407, 676, 643, 714, 1035, 665, 967, 1427, 1452, 2129, 2921, 2546, 2433, 2619, 3009, 4324, 4244, 4450, 3735, 5903, 3802, 4349, 5492, 4344, 5706]
		}]
	}
}, {
	"name": "意大利",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [76, 124, 229, 322, 400, 650, 888, 1128, 1689, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9220, 10149, 12462, 15385, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80539, 86498, 92472, 97689, 101739, 105792, 110574, 115242, 119827, 124632, 128948, 132547, 135586, 139422, 143626, 147577]
		}, {
			"name": "治愈",
			"data": [0, 1, 1, 1, 1, 40, 45, 46, 50, 83, 149, 276, 276, 523, 523, 622, 724, 1004, 1045, 1258, 1439, 1966, 2335, 2749, 2941, 4025, 4440, 5129, 6072, 7024, 7432, 8326, 9362, 10361, 10950, 12384, 13030, 14620, 15729, 16847, 18278, 19758, 20996, 21815, 22837, 24392, 26491, 28470, 30455]
		}, {
			"name": "死亡",
			"data": [2, 2, 6, 11, 12, 17, 21, 29, 35, 52, 80, 107, 148, 197, 234, 366, 463, 631, 827, 1016, 1266, 1441, 1809, 2158, 2503, 2978, 3405, 4032, 4825, 5476, 6077, 6820, 7503, 8165, 9134, 10023, 10779, 11591, 12428, 13155, 13915, 14681, 15362, 15887, 16523, 17127, 17669, 18279, 18849]
		}, {
			"name": "新增确诊",
			"data": [67, 48, 105, 93, 78, 250, 238, 240, 561, 347, 466, 587, 769, 778, 1247, 1492, 1796, 977, 2313, 2651, 2547, 3497, 3590, 3233, 3526, 4207, 5322, 6986, 6557, 5560, 4789, 5249, 5210, 6153, 5959, 5974, 5217, 4050, 4053, 4782, 4668, 4585, 4805, 4316, 3599, 3039, 3836, 4204, 3951]
		}]
	}
}, {
	"name": "加拿大",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [8, 9, 9, 10, 10, 11, 11, 14, 19, 19, 27, 30, 30, 45, 51, 57, 62, 77, 93, 93, 138, 198, 244, 339, 424, 598, 727, 873, 1333, 1474, 2094, 2792, 3308, 3579, 4633, 5434, 6232, 7312, 8591, 9560, 11131, 12375, 14018, 15425, 16558, 17872, 19279, 20679, 22059]
		}, {
			"name": "治愈",
			"data": [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 112, 112, 112, 226, 354, 466, 466, 1554, 1603, 1906, 2186, 2595, 2847, 3534, 4028, 4548, 4653, 5855]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 8, 9, 12, 13, 21, 25, 26, 30, 36, 53, 59, 63, 80, 101, 112, 161, 208, 234, 277, 322, 377, 435, 517, 557]
		}, {
			"name": "新增确诊",
			"data": [0, 1, 1, 1, 0, 1, 0, 3, 5, 0, 8, 3, 0, 15, 6, 6, 5, 15, 16, 0, 45, 60, 46, 95, 85, 174, 129, 146, 242, 141, 620, 493, 416, 170, 587, 801, 577, 992, 1057, 948, 1400, 1092, 1598, 1513, 1046, 1205, 1382, 1265, 765]
		}]
	}
}, {
	"name": "德国",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [16, 16, 16, 16, 19, 27, 48, 62, 117, 130, 196, 240, 351, 565, 795, 939, 1151, 1224, 1565, 1952, 3353, 3795, 4838, 6012, 9257, 11973, 15320, 18607, 22101, 24254, 28729, 32986, 37323, 43938, 50871, 57695, 58247, 62435, 70985, 77817, 84600, 91159, 96092, 100024, 102453, 107591, 113296, 116801, 122215]
		}, {
			"name": "治愈",
			"data": [1, 1, 1, 1, 14, 14, 15, 15, 16, 16, 16, 16, 17, 17, 17, 18, 18, 18, 18, 25, 46, 46, 46, 49, 49, 73, 115, 180, 180, 266, 266, 453, 3547, 5673, 6658, 8481, 9211, 9211, 17200, 18700, 24498, 24575, 26400, 28700, 28700, 36081, 46300, 52407, 53913]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 7, 8, 12, 13, 24, 28, 44, 47, 83, 94, 112, 130, 206, 267, 342, 433, 480, 541, 682, 917, 1097, 1275, 1444, 1576, 1735, 2012, 2349, 2529, 2767]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 0, 0, 3, 8, 21, 14, 55, 13, 66, 44, 111, 214, 230, 144, 212, 73, 341, 387, 236, 77, 1043, 1174, 1985, 1891, 2993, 3696, 2446, 2499, 6057, 3930, 4332, 4332, 6933, 5229, 3965, 4349, 4805, 6009, 6807, 6365, 4933, 3932, 2330, 4216, 4450, 3505, 4034]
		}]
	}
}, {
	"name": "法国",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [12, 12, 12, 12, 17, 17, 38, 57, 100, 130, 191, 212, 257, 577, 653, 949, 1212, 1606, 1784, 2284, 3661, 4500, 5423, 6633, 7730, 9134, 10995, 12612, 14459, 16018, 19856, 22302, 25233, 29155, 32964, 37575, 40174, 44550, 52827, 57749, 59929, 65197, 90848, 93755, 98010, 110070, 113959, 118781, 125930]
		}, {
			"name": "治愈",
			"data": [4, 4, 4, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 31, 31, 31, 602, 602, 1300, 1587, 1587, 1587, 1587, 3201, 3900, 4948, 5700, 5724, 7132, 7924, 9513, 11053, 12548, 14135, 15572, 16342, 17250, 19523, 21452, 23413, 25195]
		}, {
			"name": "死亡",
			"data": [1, 1, 1, 1, 1, 2, 2, 0, 2, 3, 3, 4, 4, 7, 10, 16, 25, 30, 33, 48, 79, 91, 127, 148, 175, 264, 372, 450, 562, 674, 860, 1100, 1331, 1696, 1995, 2314, 2606, 3024, 3532, 4043, 4514, 6520, 7574, 8093, 8911, 10343, 10887, 12228, 13215]
		}, {
			"name": "新增确诊",
			"data": [0, 0, 0, 0, 5, 0, 21, 19, 43, 30, 61, 21, 45, 320, 76, 296, 263, 394, 178, 500, 785, 839, 923, 1210, 1097, 1404, 1861, 1617, 1847, 1559, 3176, 2446, 2933, 2922, 3809, 4611, 2599, 4376, 7578, 4861, 2116, 5233, 7788, 2902, 5171, 11086, 3881, 4799, 7120]
		}]
	}
}, {
	"name": "美国",
	"trend": {
		"updateDate": ["2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [34, 34, 34, 53, 57, 60, 60, 64, 69, 89, 106, 125, 161, 233, 345, 445, 572, 717, 1010, 1322, 1264, 1678, 3499, 4629, 5894, 9345, 14250, 19624, 22043, 32717, 46332, 53268, 65285, 83507, 101657, 121117, 139675, 161367, 184183, 206207, 236339, 270473, 312076, 334125, 363349, 394182, 425828, 463433, 498674]
		}, {
			"name": "治愈",
			"data": [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 8, 8, 10, 10, 10, 10, 10, 15, 41, 56, 56, 56, 56, 106, 121, 147, 147, 178, 178, 178, 378, 680, 869, 961, 2661, 5595, 6043, 8434, 8861, 9445, 14997, 16848, 19313, 21571, 23292, 25139, 27744]
		}, {
			"name": "死亡",
			"data": [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 6, 9, 11, 14, 17, 19, 22, 26, 31, 38, 36, 41, 62, 90, 97, 150, 205, 260, 278, 409, 552, 696, 926, 1201, 1581, 2010, 2436, 2956, 3606, 4542, 5648, 6889, 8496, 9458, 10755, 12716, 14604, 16504, 18509]
		}, {
			"name": "新增确诊",
			"data": [23, 0, 0, 19, 4, 3, 0, 4, 5, 12, 17, 19, 36, 72, 112, 100, 127, 145, 293, 312, 277, 414, 255, 860, 826, 2769, 5892, 5374, 5374, 6670, 10497, 10054, 12017, 14886, 19253, 20400, 18500, 21692, 21371, 22741, 25508, 28048, 32467, 22768, 26676, 27178, 25493, 28506, 30108]
		}]
	}
}, {
	"name": "韩国",
	"trend": {
		"updateDate": ["2.21", "2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [208, 433, 602, 833, 799, 799, 1595, 2022, 3150, 4212, 4812, 5328, 5766, 6284, 6767, 7134, 7382, 7513, 7755, 7869, 7979, 8086, 8162, 8236, 8320, 8413, 8565, 8652, 8799, 8897, 8961, 9037, 9137, 9241, 9332, 9478, 9583, 9661, 9786, 9887, 9976, 10062, 10156, 10237, 10284, 10331, 10384, 10423, 10450, 10480]
		}, {
			"name": "治愈",
			"data": [12, 18, 18, 22, 22, 22, 24, 24, 26, 31, 34, 41, 88, 108, 108, 130, 166, 247, 247, 333, 510, 714, 714, 1137, 1401, 1540, 1947, 2233, 2612, 2909, 3166, 3507, 3730, 4144, 4528, 4811, 5033, 5228, 5408, 5567, 5828, 6021, 6325, 6325, 6598, 6694, 6776, 6973, 7117, 7243]
		}, {
			"name": "死亡",
			"data": [1, 2, 2, 7, 9, 11, 13, 13, 17, 22, 28, 32, 35, 42, 44, 50, 51, 54, 80, 66, 67, 72, 75, 75, 82, 84, 91, 94, 102, 104, 111, 120, 127, 131, 139, 144, 152, 158, 162, 165, 169, 174, 177, 177, 186, 192, 200, 204, 208, 211]
		}, {
			"name": "新增确诊",
			"data": [142, 256, 256, 161, 214, 13, 571, 571, 813, 586, 476, 516, 438, 518, 483, 367, 248, 131, 242, 114, 110, 107, 76, 74, 84, 93, 152, 87, 147, 98, 64, 76, 100, 104, 91, 146, 105, 78, 125, 101, 89, 86, 94, 81, 47, 47, 53, 39, 27, 30]
		}]
	}
}, {
	"name": "日本",
	"trend": {
		"updateDate": ["2.21", "2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10"],
		"list": [{
			"name": "确诊",
			"data": [93, 105, 132, 144, 156, 164, 186, 210, 230, 239, 254, 268, 284, 317, 348, 407, 454, 522, 582, 640, 690, 726, 787, 818, 835, 880, 923, 962, 1016, 1054, 1101, 1140, 1212, 1313, 1401, 1525, 1724, 1894, 1999, 2233, 2524, 2793, 3142, 3506, 3865, 4092, 4472, 4979, 5553, 6188]
		}, {
			"name": "治愈",
			"data": [23, 24, 24, 26, 27, 32, 40, 41, 42, 42, 43, 46, 48, 48, 69, 76, 80, 101, 102, 118, 123, 135, 144, 144, 144, 144, 215, 215, 215, 215, 215, 285, 301, 310, 359, 372, 372, 372, 424, 424, 472, 505, 514, 514, 575, 575, 622, 632, 685, 714]
		}, {
			"name": "死亡",
			"data": [1, 1, 1, 1, 1, 1, 3, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 9, 12, 15, 19, 21, 22, 24, 28, 29, 32, 33, 35, 36, 41, 42, 43, 45, 47, 52, 55, 56, 59, 66, 71, 73, 78, 83, 93, 97, 98, 105, 108, 120]
		}, {
			"name": "新增确诊",
			"data": [9, 12, 27, 12, 12, 8, 22, 24, 20, 9, 15, 14, 16, 33, 31, 59, 47, 30, 59, 56, 53, 36, 62, 62, 17, 45, 41, 39, 52, 39, 46, 38, 72, 101, 94, 123, 199, 169, 105, 234, 277, 283, 346, 367, 360, 360, 366, 508, 574, 638]
		}]
	}
}]

var data = new Array(datas.length).join(',').split(',').map(d => 0);
var date = ["1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "1.27", "1.28", "1.29", "1.30", "1.31", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17", "2.18", "2.19", "2.20", "2.21", "2.22", "2.23", "2.24", "2.25", "2.26", "2.27", "2.28", "2.29", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8","4.9","4.10"];
var count = 0;

var option = {
	title: {
		text: '部分国家累计确诊数据',

		subtext: '1.20',
		left: "center",
		subtextStyle: {
			fontSize: 25,
			color: 'blue'
		}
	},
	tooltip: {},
	xAxis: {
		name: "人数",
		type: "value",
		data: [],
		min: 0,
		max: 40000
	},
	yAxis: {
		type: "category",
		data: [],
		axisTick: {
			show: false
		},
		nameTextStyle: {
			fontSize: 12
		}
	},
	series: [{
		name: '数量',
		type: 'bar',
		data: data,
		label: {
			normal: {
				show: true,
				position: 'right',
				offset: [5, -2],
				textStyle: {
					color: 'blue',
					fontSize: 13
				}
			}
		}
	}],

	visualMap: {
		orient: 'horizontal',
		left: 'center',
		min: 0,
		max: 10000,
		text: ['', ''],
		dimension: 0,
		inRange: {
			color: ['rgba(255, 0, 0, 0.25)', 'rgba(255, 0, 0, 0.5)', "rgba(255, 0, 0, 0.75)", "rgba(255, 0, 0, 1)"]
		}
	},

};

var interval = setInterval(function() {
	if (count > date.length - 1) {
		window.clearInterval(interval);
		return;
	}
	let data = option.series[0].data.map((d, i) => {
		let index = datas[i].trend.updateDate.indexOf(date[count]);
		if (index >= 0) {
			return datas[i].trend.list[0].data[index];
		} else {
			return d;
		}
	});

	// sort
	let index_data, countries;
	[data, index_data] = sort(data);
	datas = index_data.map( d => datas[d] );
	option.series[0].data = data;
	countries = datas.map( data => data.name );
	option.yAxis.data = countries;

	option.title.subtext = date[count];
	option.xAxis.max = Math.ceil(Math.max(...option.series[0].data) / 20000) * 20000;
	myChart.setOption(option);
	count += 1;
}, 500);


function sort(arr) {
	// 由小到大数组排序，且返回各元素原下标列表
	let index_arr = [];
	let arr_copy = arr.slice(0, arr.length);
	let max = Math.max(...arr) + 1;
	while( index_arr.length < arr.length ) {
		let min = Math.min(...arr);
		let index = arr.indexOf(min);
		index_arr.push(index);
		arr[index] = max;
	}
	arr = index_arr.map( d => arr_copy[d])
	return [arr, index_arr];
}
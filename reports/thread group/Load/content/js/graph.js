/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 6733.0, "series": [{"data": [[0.0, 216.0], [0.1, 217.0], [0.2, 218.0], [0.3, 218.0], [0.4, 221.0], [0.5, 221.0], [0.6, 221.0], [0.7, 222.0], [0.8, 222.0], [0.9, 222.0], [1.0, 223.0], [1.1, 223.0], [1.2, 223.0], [1.3, 224.0], [1.4, 224.0], [1.5, 224.0], [1.6, 224.0], [1.7, 224.0], [1.8, 224.0], [1.9, 225.0], [2.0, 225.0], [2.1, 225.0], [2.2, 225.0], [2.3, 225.0], [2.4, 225.0], [2.5, 226.0], [2.6, 226.0], [2.7, 226.0], [2.8, 226.0], [2.9, 226.0], [3.0, 227.0], [3.1, 227.0], [3.2, 228.0], [3.3, 228.0], [3.4, 228.0], [3.5, 228.0], [3.6, 228.0], [3.7, 228.0], [3.8, 228.0], [3.9, 228.0], [4.0, 229.0], [4.1, 229.0], [4.2, 230.0], [4.3, 230.0], [4.4, 230.0], [4.5, 230.0], [4.6, 230.0], [4.7, 230.0], [4.8, 230.0], [4.9, 230.0], [5.0, 231.0], [5.1, 231.0], [5.2, 231.0], [5.3, 231.0], [5.4, 231.0], [5.5, 231.0], [5.6, 231.0], [5.7, 231.0], [5.8, 231.0], [5.9, 232.0], [6.0, 232.0], [6.1, 232.0], [6.2, 232.0], [6.3, 232.0], [6.4, 232.0], [6.5, 233.0], [6.6, 233.0], [6.7, 233.0], [6.8, 233.0], [6.9, 233.0], [7.0, 233.0], [7.1, 233.0], [7.2, 233.0], [7.3, 233.0], [7.4, 233.0], [7.5, 233.0], [7.6, 233.0], [7.7, 234.0], [7.8, 234.0], [7.9, 234.0], [8.0, 234.0], [8.1, 234.0], [8.2, 235.0], [8.3, 235.0], [8.4, 235.0], [8.5, 235.0], [8.6, 235.0], [8.7, 235.0], [8.8, 235.0], [8.9, 235.0], [9.0, 235.0], [9.1, 235.0], [9.2, 236.0], [9.3, 236.0], [9.4, 236.0], [9.5, 236.0], [9.6, 236.0], [9.7, 236.0], [9.8, 236.0], [9.9, 237.0], [10.0, 237.0], [10.1, 237.0], [10.2, 237.0], [10.3, 237.0], [10.4, 237.0], [10.5, 238.0], [10.6, 238.0], [10.7, 238.0], [10.8, 238.0], [10.9, 238.0], [11.0, 238.0], [11.1, 238.0], [11.2, 238.0], [11.3, 238.0], [11.4, 238.0], [11.5, 238.0], [11.6, 239.0], [11.7, 239.0], [11.8, 240.0], [11.9, 240.0], [12.0, 240.0], [12.1, 240.0], [12.2, 240.0], [12.3, 240.0], [12.4, 240.0], [12.5, 240.0], [12.6, 240.0], [12.7, 240.0], [12.8, 240.0], [12.9, 240.0], [13.0, 240.0], [13.1, 240.0], [13.2, 241.0], [13.3, 241.0], [13.4, 241.0], [13.5, 241.0], [13.6, 241.0], [13.7, 241.0], [13.8, 241.0], [13.9, 241.0], [14.0, 241.0], [14.1, 242.0], [14.2, 242.0], [14.3, 242.0], [14.4, 242.0], [14.5, 242.0], [14.6, 242.0], [14.7, 242.0], [14.8, 242.0], [14.9, 242.0], [15.0, 243.0], [15.1, 243.0], [15.2, 243.0], [15.3, 244.0], [15.4, 244.0], [15.5, 244.0], [15.6, 244.0], [15.7, 244.0], [15.8, 245.0], [15.9, 245.0], [16.0, 245.0], [16.1, 246.0], [16.2, 246.0], [16.3, 246.0], [16.4, 246.0], [16.5, 247.0], [16.6, 247.0], [16.7, 247.0], [16.8, 247.0], [16.9, 247.0], [17.0, 247.0], [17.1, 248.0], [17.2, 248.0], [17.3, 248.0], [17.4, 248.0], [17.5, 248.0], [17.6, 249.0], [17.7, 249.0], [17.8, 249.0], [17.9, 250.0], [18.0, 250.0], [18.1, 250.0], [18.2, 251.0], [18.3, 252.0], [18.4, 252.0], [18.5, 253.0], [18.6, 253.0], [18.7, 253.0], [18.8, 253.0], [18.9, 253.0], [19.0, 253.0], [19.1, 254.0], [19.2, 254.0], [19.3, 254.0], [19.4, 254.0], [19.5, 254.0], [19.6, 254.0], [19.7, 255.0], [19.8, 255.0], [19.9, 255.0], [20.0, 255.0], [20.1, 256.0], [20.2, 256.0], [20.3, 257.0], [20.4, 257.0], [20.5, 257.0], [20.6, 257.0], [20.7, 257.0], [20.8, 258.0], [20.9, 258.0], [21.0, 258.0], [21.1, 259.0], [21.2, 259.0], [21.3, 259.0], [21.4, 259.0], [21.5, 259.0], [21.6, 259.0], [21.7, 259.0], [21.8, 260.0], [21.9, 260.0], [22.0, 261.0], [22.1, 261.0], [22.2, 261.0], [22.3, 261.0], [22.4, 261.0], [22.5, 262.0], [22.6, 262.0], [22.7, 262.0], [22.8, 262.0], [22.9, 262.0], [23.0, 262.0], [23.1, 263.0], [23.2, 264.0], [23.3, 264.0], [23.4, 264.0], [23.5, 265.0], [23.6, 265.0], [23.7, 266.0], [23.8, 266.0], [23.9, 266.0], [24.0, 266.0], [24.1, 267.0], [24.2, 267.0], [24.3, 268.0], [24.4, 268.0], [24.5, 269.0], [24.6, 269.0], [24.7, 269.0], [24.8, 270.0], [24.9, 270.0], [25.0, 272.0], [25.1, 272.0], [25.2, 272.0], [25.3, 274.0], [25.4, 274.0], [25.5, 274.0], [25.6, 275.0], [25.7, 275.0], [25.8, 276.0], [25.9, 276.0], [26.0, 276.0], [26.1, 277.0], [26.2, 277.0], [26.3, 277.0], [26.4, 277.0], [26.5, 278.0], [26.6, 278.0], [26.7, 278.0], [26.8, 279.0], [26.9, 279.0], [27.0, 279.0], [27.1, 279.0], [27.2, 279.0], [27.3, 279.0], [27.4, 279.0], [27.5, 280.0], [27.6, 280.0], [27.7, 280.0], [27.8, 281.0], [27.9, 281.0], [28.0, 281.0], [28.1, 282.0], [28.2, 282.0], [28.3, 282.0], [28.4, 282.0], [28.5, 283.0], [28.6, 283.0], [28.7, 283.0], [28.8, 284.0], [28.9, 284.0], [29.0, 284.0], [29.1, 285.0], [29.2, 285.0], [29.3, 285.0], [29.4, 285.0], [29.5, 286.0], [29.6, 286.0], [29.7, 287.0], [29.8, 288.0], [29.9, 288.0], [30.0, 289.0], [30.1, 289.0], [30.2, 289.0], [30.3, 289.0], [30.4, 290.0], [30.5, 290.0], [30.6, 291.0], [30.7, 292.0], [30.8, 292.0], [30.9, 292.0], [31.0, 292.0], [31.1, 293.0], [31.2, 294.0], [31.3, 294.0], [31.4, 295.0], [31.5, 296.0], [31.6, 297.0], [31.7, 297.0], [31.8, 298.0], [31.9, 298.0], [32.0, 298.0], [32.1, 299.0], [32.2, 299.0], [32.3, 299.0], [32.4, 302.0], [32.5, 302.0], [32.6, 304.0], [32.7, 305.0], [32.8, 305.0], [32.9, 307.0], [33.0, 307.0], [33.1, 308.0], [33.2, 308.0], [33.3, 308.0], [33.4, 310.0], [33.5, 310.0], [33.6, 310.0], [33.7, 311.0], [33.8, 311.0], [33.9, 312.0], [34.0, 313.0], [34.1, 313.0], [34.2, 316.0], [34.3, 316.0], [34.4, 316.0], [34.5, 318.0], [34.6, 319.0], [34.7, 319.0], [34.8, 320.0], [34.9, 321.0], [35.0, 321.0], [35.1, 323.0], [35.2, 323.0], [35.3, 324.0], [35.4, 324.0], [35.5, 325.0], [35.6, 327.0], [35.7, 327.0], [35.8, 329.0], [35.9, 330.0], [36.0, 332.0], [36.1, 336.0], [36.2, 336.0], [36.3, 336.0], [36.4, 337.0], [36.5, 339.0], [36.6, 342.0], [36.7, 342.0], [36.8, 343.0], [36.9, 344.0], [37.0, 345.0], [37.1, 351.0], [37.2, 352.0], [37.3, 352.0], [37.4, 353.0], [37.5, 355.0], [37.6, 356.0], [37.7, 357.0], [37.8, 357.0], [37.9, 362.0], [38.0, 366.0], [38.1, 375.0], [38.2, 378.0], [38.3, 379.0], [38.4, 380.0], [38.5, 380.0], [38.6, 381.0], [38.7, 385.0], [38.8, 386.0], [38.9, 388.0], [39.0, 389.0], [39.1, 390.0], [39.2, 390.0], [39.3, 391.0], [39.4, 391.0], [39.5, 394.0], [39.6, 397.0], [39.7, 400.0], [39.8, 401.0], [39.9, 401.0], [40.0, 403.0], [40.1, 404.0], [40.2, 406.0], [40.3, 406.0], [40.4, 408.0], [40.5, 409.0], [40.6, 409.0], [40.7, 413.0], [40.8, 413.0], [40.9, 415.0], [41.0, 416.0], [41.1, 418.0], [41.2, 419.0], [41.3, 420.0], [41.4, 422.0], [41.5, 425.0], [41.6, 425.0], [41.7, 427.0], [41.8, 431.0], [41.9, 434.0], [42.0, 434.0], [42.1, 436.0], [42.2, 436.0], [42.3, 444.0], [42.4, 447.0], [42.5, 450.0], [42.6, 452.0], [42.7, 460.0], [42.8, 461.0], [42.9, 462.0], [43.0, 468.0], [43.1, 469.0], [43.2, 469.0], [43.3, 476.0], [43.4, 485.0], [43.5, 493.0], [43.6, 493.0], [43.7, 508.0], [43.8, 509.0], [43.9, 509.0], [44.0, 510.0], [44.1, 512.0], [44.2, 517.0], [44.3, 522.0], [44.4, 531.0], [44.5, 534.0], [44.6, 535.0], [44.7, 536.0], [44.8, 537.0], [44.9, 541.0], [45.0, 545.0], [45.1, 548.0], [45.2, 559.0], [45.3, 561.0], [45.4, 567.0], [45.5, 569.0], [45.6, 573.0], [45.7, 573.0], [45.8, 577.0], [45.9, 586.0], [46.0, 635.0], [46.1, 645.0], [46.2, 648.0], [46.3, 655.0], [46.4, 660.0], [46.5, 661.0], [46.6, 663.0], [46.7, 673.0], [46.8, 673.0], [46.9, 679.0], [47.0, 680.0], [47.1, 684.0], [47.2, 687.0], [47.3, 688.0], [47.4, 691.0], [47.5, 700.0], [47.6, 704.0], [47.7, 704.0], [47.8, 708.0], [47.9, 711.0], [48.0, 712.0], [48.1, 717.0], [48.2, 718.0], [48.3, 721.0], [48.4, 743.0], [48.5, 748.0], [48.6, 749.0], [48.7, 795.0], [48.8, 800.0], [48.9, 801.0], [49.0, 807.0], [49.1, 809.0], [49.2, 811.0], [49.3, 814.0], [49.4, 814.0], [49.5, 823.0], [49.6, 831.0], [49.7, 833.0], [49.8, 841.0], [49.9, 845.0], [50.0, 854.0], [50.1, 887.0], [50.2, 899.0], [50.3, 902.0], [50.4, 909.0], [50.5, 920.0], [50.6, 924.0], [50.7, 925.0], [50.8, 932.0], [50.9, 935.0], [51.0, 953.0], [51.1, 958.0], [51.2, 960.0], [51.3, 968.0], [51.4, 968.0], [51.5, 975.0], [51.6, 980.0], [51.7, 980.0], [51.8, 995.0], [51.9, 997.0], [52.0, 1012.0], [52.1, 1012.0], [52.2, 1013.0], [52.3, 1018.0], [52.4, 1020.0], [52.5, 1028.0], [52.6, 1039.0], [52.7, 1040.0], [52.8, 1053.0], [52.9, 1054.0], [53.0, 1055.0], [53.1, 1057.0], [53.2, 1065.0], [53.3, 1067.0], [53.4, 1074.0], [53.5, 1081.0], [53.6, 1082.0], [53.7, 1083.0], [53.8, 1085.0], [53.9, 1085.0], [54.0, 1101.0], [54.1, 1107.0], [54.2, 1108.0], [54.3, 1124.0], [54.4, 1128.0], [54.5, 1133.0], [54.6, 1148.0], [54.7, 1155.0], [54.8, 1166.0], [54.9, 1177.0], [55.0, 1190.0], [55.1, 1193.0], [55.2, 1196.0], [55.3, 1198.0], [55.4, 1199.0], [55.5, 1215.0], [55.6, 1219.0], [55.7, 1225.0], [55.8, 1228.0], [55.9, 1230.0], [56.0, 1230.0], [56.1, 1233.0], [56.2, 1236.0], [56.3, 1241.0], [56.4, 1245.0], [56.5, 1249.0], [56.6, 1261.0], [56.7, 1269.0], [56.8, 1273.0], [56.9, 1274.0], [57.0, 1278.0], [57.1, 1298.0], [57.2, 1299.0], [57.3, 1301.0], [57.4, 1304.0], [57.5, 1309.0], [57.6, 1311.0], [57.7, 1314.0], [57.8, 1315.0], [57.9, 1320.0], [58.0, 1321.0], [58.1, 1338.0], [58.2, 1347.0], [58.3, 1350.0], [58.4, 1362.0], [58.5, 1365.0], [58.6, 1368.0], [58.7, 1373.0], [58.8, 1376.0], [58.9, 1387.0], [59.0, 1387.0], [59.1, 1388.0], [59.2, 1395.0], [59.3, 1404.0], [59.4, 1406.0], [59.5, 1407.0], [59.6, 1409.0], [59.7, 1419.0], [59.8, 1426.0], [59.9, 1429.0], [60.0, 1435.0], [60.1, 1437.0], [60.2, 1439.0], [60.3, 1442.0], [60.4, 1447.0], [60.5, 1448.0], [60.6, 1451.0], [60.7, 1456.0], [60.8, 1460.0], [60.9, 1464.0], [61.0, 1470.0], [61.1, 1471.0], [61.2, 1472.0], [61.3, 1472.0], [61.4, 1475.0], [61.5, 1478.0], [61.6, 1484.0], [61.7, 1485.0], [61.8, 1486.0], [61.9, 1487.0], [62.0, 1489.0], [62.1, 1498.0], [62.2, 1510.0], [62.3, 1519.0], [62.4, 1522.0], [62.5, 1525.0], [62.6, 1526.0], [62.7, 1527.0], [62.8, 1533.0], [62.9, 1549.0], [63.0, 1561.0], [63.1, 1563.0], [63.2, 1563.0], [63.3, 1567.0], [63.4, 1568.0], [63.5, 1571.0], [63.6, 1573.0], [63.7, 1586.0], [63.8, 1588.0], [63.9, 1594.0], [64.0, 1597.0], [64.1, 1599.0], [64.2, 1604.0], [64.3, 1618.0], [64.4, 1625.0], [64.5, 1628.0], [64.6, 1638.0], [64.7, 1640.0], [64.8, 1646.0], [64.9, 1646.0], [65.0, 1666.0], [65.1, 1675.0], [65.2, 1675.0], [65.3, 1678.0], [65.4, 1686.0], [65.5, 1693.0], [65.6, 1698.0], [65.7, 1710.0], [65.8, 1712.0], [65.9, 1714.0], [66.0, 1717.0], [66.1, 1722.0], [66.2, 1723.0], [66.3, 1725.0], [66.4, 1727.0], [66.5, 1732.0], [66.6, 1734.0], [66.7, 1742.0], [66.8, 1745.0], [66.9, 1747.0], [67.0, 1756.0], [67.1, 1757.0], [67.2, 1761.0], [67.3, 1767.0], [67.4, 1768.0], [67.5, 1774.0], [67.6, 1782.0], [67.7, 1782.0], [67.8, 1787.0], [67.9, 1788.0], [68.0, 1792.0], [68.1, 1792.0], [68.2, 1792.0], [68.3, 1813.0], [68.4, 1816.0], [68.5, 1820.0], [68.6, 1822.0], [68.7, 1827.0], [68.8, 1835.0], [68.9, 1836.0], [69.0, 1861.0], [69.1, 1870.0], [69.2, 1877.0], [69.3, 1881.0], [69.4, 1882.0], [69.5, 1883.0], [69.6, 1883.0], [69.7, 1888.0], [69.8, 1894.0], [69.9, 1901.0], [70.0, 1901.0], [70.1, 1917.0], [70.2, 1919.0], [70.3, 1926.0], [70.4, 1939.0], [70.5, 1941.0], [70.6, 1941.0], [70.7, 1954.0], [70.8, 1955.0], [70.9, 1956.0], [71.0, 1964.0], [71.1, 1976.0], [71.2, 1983.0], [71.3, 1987.0], [71.4, 1987.0], [71.5, 1991.0], [71.6, 2009.0], [71.7, 2014.0], [71.8, 2034.0], [71.9, 2040.0], [72.0, 2040.0], [72.1, 2051.0], [72.2, 2073.0], [72.3, 2082.0], [72.4, 2088.0], [72.5, 2092.0], [72.6, 2099.0], [72.7, 2099.0], [72.8, 2101.0], [72.9, 2108.0], [73.0, 2116.0], [73.1, 2121.0], [73.2, 2125.0], [73.3, 2136.0], [73.4, 2137.0], [73.5, 2143.0], [73.6, 2145.0], [73.7, 2156.0], [73.8, 2158.0], [73.9, 2158.0], [74.0, 2166.0], [74.1, 2174.0], [74.2, 2179.0], [74.3, 2189.0], [74.4, 2192.0], [74.5, 2193.0], [74.6, 2194.0], [74.7, 2210.0], [74.8, 2215.0], [74.9, 2216.0], [75.0, 2218.0], [75.1, 2220.0], [75.2, 2234.0], [75.3, 2237.0], [75.4, 2242.0], [75.5, 2245.0], [75.6, 2251.0], [75.7, 2255.0], [75.8, 2256.0], [75.9, 2276.0], [76.0, 2277.0], [76.1, 2280.0], [76.2, 2283.0], [76.3, 2285.0], [76.4, 2288.0], [76.5, 2294.0], [76.6, 2313.0], [76.7, 2319.0], [76.8, 2333.0], [76.9, 2334.0], [77.0, 2370.0], [77.1, 2371.0], [77.2, 2376.0], [77.3, 2385.0], [77.4, 2385.0], [77.5, 2393.0], [77.6, 2394.0], [77.7, 2406.0], [77.8, 2415.0], [77.9, 2421.0], [78.0, 2426.0], [78.1, 2427.0], [78.2, 2430.0], [78.3, 2433.0], [78.4, 2435.0], [78.5, 2454.0], [78.6, 2469.0], [78.7, 2471.0], [78.8, 2471.0], [78.9, 2472.0], [79.0, 2472.0], [79.1, 2476.0], [79.2, 2478.0], [79.3, 2479.0], [79.4, 2480.0], [79.5, 2483.0], [79.6, 2485.0], [79.7, 2486.0], [79.8, 2492.0], [79.9, 2493.0], [80.0, 2494.0], [80.1, 2499.0], [80.2, 2516.0], [80.3, 2516.0], [80.4, 2529.0], [80.5, 2546.0], [80.6, 2552.0], [80.7, 2558.0], [80.8, 2571.0], [80.9, 2577.0], [81.0, 2584.0], [81.1, 2599.0], [81.2, 2604.0], [81.3, 2606.0], [81.4, 2620.0], [81.5, 2621.0], [81.6, 2628.0], [81.7, 2638.0], [81.8, 2638.0], [81.9, 2648.0], [82.0, 2654.0], [82.1, 2677.0], [82.2, 2691.0], [82.3, 2696.0], [82.4, 2697.0], [82.5, 2735.0], [82.6, 2763.0], [82.7, 2766.0], [82.8, 2785.0], [82.9, 2786.0], [83.0, 2790.0], [83.1, 2798.0], [83.2, 2803.0], [83.3, 2817.0], [83.4, 2821.0], [83.5, 2825.0], [83.6, 2829.0], [83.7, 2846.0], [83.8, 2853.0], [83.9, 2861.0], [84.0, 2874.0], [84.1, 2888.0], [84.2, 2892.0], [84.3, 2894.0], [84.4, 2907.0], [84.5, 2915.0], [84.6, 2915.0], [84.7, 2921.0], [84.8, 2922.0], [84.9, 2927.0], [85.0, 2944.0], [85.1, 2954.0], [85.2, 2955.0], [85.3, 2988.0], [85.4, 3003.0], [85.5, 3016.0], [85.6, 3036.0], [85.7, 3072.0], [85.8, 3079.0], [85.9, 3079.0], [86.0, 3085.0], [86.1, 3096.0], [86.2, 3149.0], [86.3, 3159.0], [86.4, 3164.0], [86.5, 3193.0], [86.6, 3208.0], [86.7, 3221.0], [86.8, 3236.0], [86.9, 3248.0], [87.0, 3255.0], [87.1, 3268.0], [87.2, 3271.0], [87.3, 3271.0], [87.4, 3275.0], [87.5, 3283.0], [87.6, 3291.0], [87.7, 3299.0], [87.8, 3306.0], [87.9, 3306.0], [88.0, 3308.0], [88.1, 3316.0], [88.2, 3319.0], [88.3, 3323.0], [88.4, 3334.0], [88.5, 3348.0], [88.6, 3359.0], [88.7, 3365.0], [88.8, 3369.0], [88.9, 3387.0], [89.0, 3401.0], [89.1, 3403.0], [89.2, 3412.0], [89.3, 3419.0], [89.4, 3439.0], [89.5, 3456.0], [89.6, 3458.0], [89.7, 3477.0], [89.8, 3493.0], [89.9, 3495.0], [90.0, 3499.0], [90.1, 3509.0], [90.2, 3517.0], [90.3, 3527.0], [90.4, 3545.0], [90.5, 3551.0], [90.6, 3551.0], [90.7, 3563.0], [90.8, 3564.0], [90.9, 3582.0], [91.0, 3585.0], [91.1, 3607.0], [91.2, 3631.0], [91.3, 3631.0], [91.4, 3633.0], [91.5, 3642.0], [91.6, 3657.0], [91.7, 3669.0], [91.8, 3701.0], [91.9, 3713.0], [92.0, 3736.0], [92.1, 3755.0], [92.2, 3757.0], [92.3, 3760.0], [92.4, 3768.0], [92.5, 3787.0], [92.6, 3788.0], [92.7, 3789.0], [92.8, 3802.0], [92.9, 3835.0], [93.0, 3869.0], [93.1, 3886.0], [93.2, 3905.0], [93.3, 3913.0], [93.4, 3937.0], [93.5, 3949.0], [93.6, 3965.0], [93.7, 3968.0], [93.8, 3969.0], [93.9, 3974.0], [94.0, 3979.0], [94.1, 3983.0], [94.2, 3988.0], [94.3, 3998.0], [94.4, 4027.0], [94.5, 4035.0], [94.6, 4053.0], [94.7, 4064.0], [94.8, 4091.0], [94.9, 4099.0], [95.0, 4103.0], [95.1, 4154.0], [95.2, 4158.0], [95.3, 4175.0], [95.4, 4182.0], [95.5, 4205.0], [95.6, 4207.0], [95.7, 4254.0], [95.8, 4271.0], [95.9, 4297.0], [96.0, 4315.0], [96.1, 4315.0], [96.2, 4318.0], [96.3, 4327.0], [96.4, 4328.0], [96.5, 4347.0], [96.6, 4365.0], [96.7, 4368.0], [96.8, 4405.0], [96.9, 4411.0], [97.0, 4412.0], [97.1, 4427.0], [97.2, 4451.0], [97.3, 4499.0], [97.4, 4502.0], [97.5, 4516.0], [97.6, 4525.0], [97.7, 4539.0], [97.8, 4553.0], [97.9, 4561.0], [98.0, 4622.0], [98.1, 4628.0], [98.2, 4678.0], [98.3, 4679.0], [98.4, 4682.0], [98.5, 4684.0], [98.6, 4711.0], [98.7, 4729.0], [98.8, 4738.0], [98.9, 4753.0], [99.0, 4836.0], [99.1, 4960.0], [99.2, 5184.0], [99.3, 5188.0], [99.4, 5200.0], [99.5, 5243.0], [99.6, 5286.0], [99.7, 5374.0], [99.8, 6725.0], [99.9, 6733.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 324.0, "series": [{"data": [[600.0, 15.0], [700.0, 13.0], [800.0, 15.0], [900.0, 17.0], [1000.0, 20.0], [1100.0, 15.0], [1200.0, 18.0], [1300.0, 20.0], [1400.0, 29.0], [1500.0, 20.0], [1600.0, 15.0], [1700.0, 26.0], [1800.0, 16.0], [1900.0, 17.0], [2000.0, 12.0], [2100.0, 20.0], [2200.0, 19.0], [2300.0, 11.0], [2400.0, 25.0], [2500.0, 10.0], [2600.0, 13.0], [2800.0, 12.0], [2700.0, 7.0], [2900.0, 10.0], [3000.0, 8.0], [3100.0, 4.0], [3200.0, 12.0], [3300.0, 12.0], [3400.0, 11.0], [3500.0, 10.0], [3700.0, 10.0], [3600.0, 7.0], [3800.0, 4.0], [3900.0, 12.0], [4000.0, 6.0], [4100.0, 5.0], [4300.0, 8.0], [4200.0, 5.0], [4400.0, 6.0], [4500.0, 6.0], [4600.0, 6.0], [4700.0, 4.0], [4800.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5200.0, 3.0], [6700.0, 2.0], [200.0, 324.0], [300.0, 72.0], [400.0, 40.0], [500.0, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 185.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 436.0, "series": [{"data": [[0.0, 436.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 185.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 379.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 81.16473317865429, "minX": 1.60318608E12, "maxY": 100.0, "series": [{"data": [[1.60318608E12, 100.0], [1.60318614E12, 81.16473317865429]], "isOverall": false, "label": "Thread Group-Load", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318614E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 223.0, "minX": 1.0, "maxY": 2966.6923076923076, "series": [{"data": [[2.0, 223.0], [3.0, 663.0], [4.0, 272.0], [5.0, 1376.0], [6.0, 995.0], [7.0, 1193.0], [8.0, 1259.3333333333333], [9.0, 1043.3333333333333], [10.0, 852.5], [11.0, 1065.0], [12.0, 630.6666666666666], [13.0, 281.0], [14.0, 235.0], [15.0, 240.0], [16.0, 238.0], [17.0, 253.0], [18.0, 257.0], [19.0, 967.0], [20.0, 1069.5714285714287], [21.0, 548.0], [22.0, 663.0], [23.0, 704.0], [24.0, 391.5], [25.0, 282.0], [26.0, 870.0], [27.0, 621.3333333333334], [28.0, 1475.0], [29.0, 280.0], [30.0, 238.0], [31.0, 651.3333333333334], [33.0, 635.5], [32.0, 974.5714285714287], [35.0, 1426.0], [34.0, 272.3333333333333], [37.0, 342.0], [36.0, 628.5], [39.0, 1395.0], [38.0, 1425.0], [40.0, 812.0], [43.0, 1177.0], [42.0, 906.3333333333333], [45.0, 240.0], [44.0, 1396.6666666666667], [47.0, 1263.75], [46.0, 633.3333333333333], [49.0, 379.0], [48.0, 1110.1666666666667], [51.0, 1025.0], [50.0, 1820.0], [53.0, 1331.75], [52.0, 1258.0], [55.0, 296.0], [54.0, 281.0], [57.0, 899.6666666666667], [56.0, 821.0], [59.0, 281.0], [58.0, 1166.2], [61.0, 1384.857142857143], [60.0, 1215.5], [63.0, 646.75], [62.0, 325.0], [67.0, 279.0], [66.0, 2090.7272727272725], [65.0, 1518.3333333333335], [64.0, 1612.0], [71.0, 822.111111111111], [70.0, 1036.5], [69.0, 689.6], [68.0, 310.6666666666667], [75.0, 1724.3999999999999], [74.0, 1600.3], [73.0, 1388.5833333333335], [72.0, 2817.2], [79.0, 2404.4444444444443], [78.0, 1487.3333333333335], [77.0, 825.4666666666667], [76.0, 332.75], [83.0, 489.0], [82.0, 2966.6923076923076], [81.0, 253.5], [80.0, 1415.1666666666663], [87.0, 1524.0], [86.0, 2226.5], [85.0, 1879.4444444444441], [84.0, 1571.5], [91.0, 1627.0000000000005], [90.0, 1602.2083333333333], [89.0, 1901.3333333333333], [88.0, 1055.4], [95.0, 1335.6153846153845], [94.0, 250.0], [93.0, 1608.3333333333335], [92.0, 1414.8], [99.0, 2037.8], [98.0, 1295.7435897435898], [97.0, 1284.6388888888891], [96.0, 1849.7], [100.0, 1445.802752293578], [1.0, 238.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[83.76399999999992, 1391.4200000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 289.8, "minX": 1.60318608E12, "maxY": 82106.16666666667, "series": [{"data": [[1.60318608E12, 13144.633333333333], [1.60318614E12, 82106.16666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60318608E12, 289.8], [1.60318614E12, 1810.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318614E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1224.094202898551, "minX": 1.60318608E12, "maxY": 1418.2076566125309, "series": [{"data": [[1.60318608E12, 1224.094202898551], [1.60318614E12, 1418.2076566125309]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318614E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1220.1231884057975, "minX": 1.60318608E12, "maxY": 1414.633410672854, "series": [{"data": [[1.60318608E12, 1220.1231884057975], [1.60318614E12, 1414.633410672854]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318614E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 16.923433874709925, "minX": 1.60318608E12, "maxY": 276.70289855072474, "series": [{"data": [[1.60318608E12, 276.70289855072474], [1.60318614E12, 16.923433874709925]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318614E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 216.0, "minX": 1.60318608E12, "maxY": 6733.0, "series": [{"data": [[1.60318608E12, 3316.0], [1.60318614E12, 6733.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60318608E12, 229.50199993371965], [1.60318614E12, 222.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60318608E12, 229.75220002651216], [1.60318614E12, 222.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60318608E12, 229.64099996685982], [1.60318614E12, 222.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60318608E12, 229.0], [1.60318614E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60318608E12, 1171.5], [1.60318614E12, 732.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318614E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 292.0, "minX": 14.0, "maxY": 2051.0, "series": [{"data": [[38.0, 293.0], [50.0, 1488.0], [51.0, 292.0], [52.0, 810.0], [57.0, 327.0], [14.0, 948.5], [59.0, 711.0], [62.0, 1447.5], [66.0, 419.5], [73.0, 431.0], [75.0, 408.0], [77.0, 2051.0], [78.0, 514.0], [84.0, 664.0], [24.0, 1005.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 289.0, "minX": 14.0, "maxY": 2049.0, "series": [{"data": [[38.0, 289.0], [50.0, 1485.5], [51.0, 290.0], [52.0, 803.5], [57.0, 322.0], [14.0, 945.0], [59.0, 708.0], [62.0, 1446.0], [66.0, 414.0], [73.0, 430.0], [75.0, 404.0], [77.0, 2049.0], [78.0, 511.0], [84.0, 663.0], [24.0, 1001.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.966666666666667, "minX": 1.60318608E12, "maxY": 12.7, "series": [{"data": [[1.60318608E12, 3.966666666666667], [1.60318614E12, 12.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318614E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.3, "minX": 1.60318608E12, "maxY": 14.366666666666667, "series": [{"data": [[1.60318608E12, 2.3], [1.60318614E12, 14.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318614E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.3, "minX": 1.60318608E12, "maxY": 14.366666666666667, "series": [{"data": [[1.60318608E12, 2.3], [1.60318614E12, 14.366666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318614E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.3, "minX": 1.60318608E12, "maxY": 14.366666666666667, "series": [{"data": [[1.60318608E12, 2.3], [1.60318614E12, 14.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318614E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


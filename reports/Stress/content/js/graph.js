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
        data: {"result": {"minY": 214.0, "minX": 0.0, "maxY": 8063.0, "series": [{"data": [[0.0, 214.0], [0.1, 215.0], [0.2, 217.0], [0.3, 217.0], [0.4, 218.0], [0.5, 218.0], [0.6, 218.0], [0.7, 219.0], [0.8, 219.0], [0.9, 219.0], [1.0, 219.0], [1.1, 220.0], [1.2, 220.0], [1.3, 220.0], [1.4, 220.0], [1.5, 220.0], [1.6, 220.0], [1.7, 220.0], [1.8, 220.0], [1.9, 220.0], [2.0, 221.0], [2.1, 221.0], [2.2, 221.0], [2.3, 221.0], [2.4, 221.0], [2.5, 221.0], [2.6, 221.0], [2.7, 221.0], [2.8, 221.0], [2.9, 222.0], [3.0, 222.0], [3.1, 222.0], [3.2, 222.0], [3.3, 222.0], [3.4, 222.0], [3.5, 222.0], [3.6, 222.0], [3.7, 222.0], [3.8, 222.0], [3.9, 222.0], [4.0, 222.0], [4.1, 222.0], [4.2, 222.0], [4.3, 222.0], [4.4, 222.0], [4.5, 223.0], [4.6, 223.0], [4.7, 223.0], [4.8, 223.0], [4.9, 223.0], [5.0, 223.0], [5.1, 223.0], [5.2, 223.0], [5.3, 223.0], [5.4, 223.0], [5.5, 223.0], [5.6, 223.0], [5.7, 223.0], [5.8, 223.0], [5.9, 223.0], [6.0, 223.0], [6.1, 223.0], [6.2, 224.0], [6.3, 224.0], [6.4, 224.0], [6.5, 224.0], [6.6, 224.0], [6.7, 224.0], [6.8, 224.0], [6.9, 224.0], [7.0, 224.0], [7.1, 224.0], [7.2, 224.0], [7.3, 224.0], [7.4, 224.0], [7.5, 224.0], [7.6, 225.0], [7.7, 225.0], [7.8, 225.0], [7.9, 225.0], [8.0, 225.0], [8.1, 225.0], [8.2, 225.0], [8.3, 225.0], [8.4, 225.0], [8.5, 225.0], [8.6, 225.0], [8.7, 226.0], [8.8, 226.0], [8.9, 226.0], [9.0, 226.0], [9.1, 226.0], [9.2, 226.0], [9.3, 226.0], [9.4, 226.0], [9.5, 226.0], [9.6, 226.0], [9.7, 226.0], [9.8, 226.0], [9.9, 226.0], [10.0, 226.0], [10.1, 226.0], [10.2, 226.0], [10.3, 226.0], [10.4, 226.0], [10.5, 227.0], [10.6, 227.0], [10.7, 227.0], [10.8, 227.0], [10.9, 227.0], [11.0, 227.0], [11.1, 227.0], [11.2, 227.0], [11.3, 227.0], [11.4, 227.0], [11.5, 227.0], [11.6, 227.0], [11.7, 227.0], [11.8, 227.0], [11.9, 227.0], [12.0, 228.0], [12.1, 228.0], [12.2, 228.0], [12.3, 228.0], [12.4, 228.0], [12.5, 228.0], [12.6, 228.0], [12.7, 228.0], [12.8, 228.0], [12.9, 228.0], [13.0, 228.0], [13.1, 228.0], [13.2, 228.0], [13.3, 228.0], [13.4, 228.0], [13.5, 228.0], [13.6, 229.0], [13.7, 229.0], [13.8, 229.0], [13.9, 229.0], [14.0, 229.0], [14.1, 229.0], [14.2, 229.0], [14.3, 229.0], [14.4, 229.0], [14.5, 229.0], [14.6, 229.0], [14.7, 229.0], [14.8, 229.0], [14.9, 229.0], [15.0, 229.0], [15.1, 229.0], [15.2, 229.0], [15.3, 230.0], [15.4, 230.0], [15.5, 230.0], [15.6, 230.0], [15.7, 230.0], [15.8, 230.0], [15.9, 230.0], [16.0, 230.0], [16.1, 230.0], [16.2, 230.0], [16.3, 230.0], [16.4, 230.0], [16.5, 230.0], [16.6, 230.0], [16.7, 230.0], [16.8, 231.0], [16.9, 231.0], [17.0, 231.0], [17.1, 231.0], [17.2, 231.0], [17.3, 231.0], [17.4, 231.0], [17.5, 231.0], [17.6, 231.0], [17.7, 231.0], [17.8, 231.0], [17.9, 232.0], [18.0, 232.0], [18.1, 232.0], [18.2, 232.0], [18.3, 232.0], [18.4, 232.0], [18.5, 232.0], [18.6, 232.0], [18.7, 232.0], [18.8, 232.0], [18.9, 232.0], [19.0, 232.0], [19.1, 232.0], [19.2, 232.0], [19.3, 232.0], [19.4, 233.0], [19.5, 233.0], [19.6, 233.0], [19.7, 233.0], [19.8, 233.0], [19.9, 233.0], [20.0, 233.0], [20.1, 233.0], [20.2, 233.0], [20.3, 233.0], [20.4, 233.0], [20.5, 233.0], [20.6, 233.0], [20.7, 234.0], [20.8, 234.0], [20.9, 234.0], [21.0, 234.0], [21.1, 234.0], [21.2, 234.0], [21.3, 234.0], [21.4, 234.0], [21.5, 234.0], [21.6, 234.0], [21.7, 234.0], [21.8, 234.0], [21.9, 235.0], [22.0, 235.0], [22.1, 235.0], [22.2, 235.0], [22.3, 235.0], [22.4, 235.0], [22.5, 235.0], [22.6, 235.0], [22.7, 235.0], [22.8, 235.0], [22.9, 236.0], [23.0, 236.0], [23.1, 236.0], [23.2, 236.0], [23.3, 236.0], [23.4, 236.0], [23.5, 236.0], [23.6, 236.0], [23.7, 236.0], [23.8, 237.0], [23.9, 237.0], [24.0, 237.0], [24.1, 237.0], [24.2, 237.0], [24.3, 237.0], [24.4, 237.0], [24.5, 237.0], [24.6, 237.0], [24.7, 237.0], [24.8, 237.0], [24.9, 237.0], [25.0, 237.0], [25.1, 237.0], [25.2, 237.0], [25.3, 238.0], [25.4, 238.0], [25.5, 238.0], [25.6, 238.0], [25.7, 238.0], [25.8, 238.0], [25.9, 238.0], [26.0, 238.0], [26.1, 238.0], [26.2, 239.0], [26.3, 239.0], [26.4, 239.0], [26.5, 239.0], [26.6, 239.0], [26.7, 239.0], [26.8, 239.0], [26.9, 239.0], [27.0, 239.0], [27.1, 240.0], [27.2, 240.0], [27.3, 240.0], [27.4, 240.0], [27.5, 240.0], [27.6, 240.0], [27.7, 240.0], [27.8, 240.0], [27.9, 241.0], [28.0, 241.0], [28.1, 241.0], [28.2, 241.0], [28.3, 241.0], [28.4, 241.0], [28.5, 241.0], [28.6, 241.0], [28.7, 241.0], [28.8, 241.0], [28.9, 241.0], [29.0, 241.0], [29.1, 242.0], [29.2, 242.0], [29.3, 242.0], [29.4, 242.0], [29.5, 243.0], [29.6, 243.0], [29.7, 243.0], [29.8, 243.0], [29.9, 243.0], [30.0, 244.0], [30.1, 244.0], [30.2, 244.0], [30.3, 244.0], [30.4, 244.0], [30.5, 244.0], [30.6, 244.0], [30.7, 244.0], [30.8, 245.0], [30.9, 245.0], [31.0, 245.0], [31.1, 245.0], [31.2, 245.0], [31.3, 245.0], [31.4, 245.0], [31.5, 245.0], [31.6, 246.0], [31.7, 246.0], [31.8, 246.0], [31.9, 246.0], [32.0, 246.0], [32.1, 246.0], [32.2, 246.0], [32.3, 246.0], [32.4, 246.0], [32.5, 246.0], [32.6, 246.0], [32.7, 246.0], [32.8, 246.0], [32.9, 246.0], [33.0, 246.0], [33.1, 246.0], [33.2, 247.0], [33.3, 247.0], [33.4, 247.0], [33.5, 247.0], [33.6, 248.0], [33.7, 248.0], [33.8, 248.0], [33.9, 248.0], [34.0, 248.0], [34.1, 248.0], [34.2, 248.0], [34.3, 248.0], [34.4, 249.0], [34.5, 249.0], [34.6, 249.0], [34.7, 249.0], [34.8, 249.0], [34.9, 249.0], [35.0, 249.0], [35.1, 249.0], [35.2, 249.0], [35.3, 250.0], [35.4, 250.0], [35.5, 250.0], [35.6, 250.0], [35.7, 250.0], [35.8, 250.0], [35.9, 250.0], [36.0, 251.0], [36.1, 251.0], [36.2, 251.0], [36.3, 251.0], [36.4, 251.0], [36.5, 251.0], [36.6, 251.0], [36.7, 251.0], [36.8, 251.0], [36.9, 252.0], [37.0, 252.0], [37.1, 252.0], [37.2, 252.0], [37.3, 252.0], [37.4, 252.0], [37.5, 252.0], [37.6, 252.0], [37.7, 252.0], [37.8, 252.0], [37.9, 253.0], [38.0, 253.0], [38.1, 253.0], [38.2, 253.0], [38.3, 253.0], [38.4, 253.0], [38.5, 253.0], [38.6, 254.0], [38.7, 254.0], [38.8, 254.0], [38.9, 254.0], [39.0, 254.0], [39.1, 254.0], [39.2, 254.0], [39.3, 254.0], [39.4, 255.0], [39.5, 255.0], [39.6, 255.0], [39.7, 255.0], [39.8, 255.0], [39.9, 255.0], [40.0, 255.0], [40.1, 255.0], [40.2, 256.0], [40.3, 256.0], [40.4, 256.0], [40.5, 257.0], [40.6, 257.0], [40.7, 257.0], [40.8, 257.0], [40.9, 257.0], [41.0, 258.0], [41.1, 258.0], [41.2, 259.0], [41.3, 259.0], [41.4, 259.0], [41.5, 259.0], [41.6, 259.0], [41.7, 259.0], [41.8, 259.0], [41.9, 260.0], [42.0, 260.0], [42.1, 260.0], [42.2, 260.0], [42.3, 260.0], [42.4, 261.0], [42.5, 261.0], [42.6, 261.0], [42.7, 261.0], [42.8, 261.0], [42.9, 262.0], [43.0, 262.0], [43.1, 262.0], [43.2, 262.0], [43.3, 262.0], [43.4, 262.0], [43.5, 263.0], [43.6, 263.0], [43.7, 263.0], [43.8, 263.0], [43.9, 263.0], [44.0, 263.0], [44.1, 264.0], [44.2, 264.0], [44.3, 265.0], [44.4, 265.0], [44.5, 265.0], [44.6, 265.0], [44.7, 265.0], [44.8, 265.0], [44.9, 265.0], [45.0, 265.0], [45.1, 265.0], [45.2, 266.0], [45.3, 266.0], [45.4, 266.0], [45.5, 266.0], [45.6, 266.0], [45.7, 266.0], [45.8, 267.0], [45.9, 267.0], [46.0, 267.0], [46.1, 267.0], [46.2, 268.0], [46.3, 268.0], [46.4, 268.0], [46.5, 268.0], [46.6, 268.0], [46.7, 268.0], [46.8, 268.0], [46.9, 269.0], [47.0, 269.0], [47.1, 269.0], [47.2, 269.0], [47.3, 270.0], [47.4, 270.0], [47.5, 270.0], [47.6, 270.0], [47.7, 270.0], [47.8, 271.0], [47.9, 271.0], [48.0, 271.0], [48.1, 271.0], [48.2, 272.0], [48.3, 272.0], [48.4, 272.0], [48.5, 272.0], [48.6, 272.0], [48.7, 272.0], [48.8, 273.0], [48.9, 273.0], [49.0, 273.0], [49.1, 273.0], [49.2, 273.0], [49.3, 273.0], [49.4, 273.0], [49.5, 273.0], [49.6, 274.0], [49.7, 274.0], [49.8, 274.0], [49.9, 275.0], [50.0, 275.0], [50.1, 275.0], [50.2, 275.0], [50.3, 275.0], [50.4, 276.0], [50.5, 276.0], [50.6, 276.0], [50.7, 276.0], [50.8, 276.0], [50.9, 277.0], [51.0, 277.0], [51.1, 277.0], [51.2, 277.0], [51.3, 277.0], [51.4, 277.0], [51.5, 277.0], [51.6, 277.0], [51.7, 277.0], [51.8, 278.0], [51.9, 278.0], [52.0, 279.0], [52.1, 280.0], [52.2, 280.0], [52.3, 280.0], [52.4, 280.0], [52.5, 280.0], [52.6, 281.0], [52.7, 281.0], [52.8, 281.0], [52.9, 281.0], [53.0, 281.0], [53.1, 281.0], [53.2, 282.0], [53.3, 282.0], [53.4, 282.0], [53.5, 282.0], [53.6, 283.0], [53.7, 283.0], [53.8, 283.0], [53.9, 283.0], [54.0, 283.0], [54.1, 284.0], [54.2, 284.0], [54.3, 284.0], [54.4, 285.0], [54.5, 285.0], [54.6, 285.0], [54.7, 286.0], [54.8, 286.0], [54.9, 286.0], [55.0, 286.0], [55.1, 286.0], [55.2, 286.0], [55.3, 287.0], [55.4, 287.0], [55.5, 287.0], [55.6, 287.0], [55.7, 287.0], [55.8, 289.0], [55.9, 290.0], [56.0, 290.0], [56.1, 291.0], [56.2, 291.0], [56.3, 291.0], [56.4, 291.0], [56.5, 291.0], [56.6, 291.0], [56.7, 291.0], [56.8, 292.0], [56.9, 292.0], [57.0, 292.0], [57.1, 292.0], [57.2, 292.0], [57.3, 292.0], [57.4, 292.0], [57.5, 293.0], [57.6, 293.0], [57.7, 293.0], [57.8, 293.0], [57.9, 293.0], [58.0, 294.0], [58.1, 295.0], [58.2, 295.0], [58.3, 295.0], [58.4, 295.0], [58.5, 295.0], [58.6, 296.0], [58.7, 296.0], [58.8, 296.0], [58.9, 296.0], [59.0, 296.0], [59.1, 296.0], [59.2, 297.0], [59.3, 297.0], [59.4, 297.0], [59.5, 297.0], [59.6, 297.0], [59.7, 297.0], [59.8, 297.0], [59.9, 298.0], [60.0, 298.0], [60.1, 299.0], [60.2, 299.0], [60.3, 299.0], [60.4, 300.0], [60.5, 300.0], [60.6, 300.0], [60.7, 300.0], [60.8, 301.0], [60.9, 301.0], [61.0, 301.0], [61.1, 302.0], [61.2, 302.0], [61.3, 303.0], [61.4, 304.0], [61.5, 304.0], [61.6, 304.0], [61.7, 304.0], [61.8, 304.0], [61.9, 305.0], [62.0, 306.0], [62.1, 306.0], [62.2, 306.0], [62.3, 306.0], [62.4, 306.0], [62.5, 307.0], [62.6, 307.0], [62.7, 307.0], [62.8, 307.0], [62.9, 308.0], [63.0, 308.0], [63.1, 309.0], [63.2, 309.0], [63.3, 309.0], [63.4, 310.0], [63.5, 310.0], [63.6, 311.0], [63.7, 311.0], [63.8, 311.0], [63.9, 311.0], [64.0, 311.0], [64.1, 311.0], [64.2, 312.0], [64.3, 312.0], [64.4, 313.0], [64.5, 313.0], [64.6, 313.0], [64.7, 314.0], [64.8, 314.0], [64.9, 314.0], [65.0, 314.0], [65.1, 314.0], [65.2, 316.0], [65.3, 316.0], [65.4, 316.0], [65.5, 316.0], [65.6, 316.0], [65.7, 317.0], [65.8, 317.0], [65.9, 318.0], [66.0, 319.0], [66.1, 319.0], [66.2, 320.0], [66.3, 320.0], [66.4, 321.0], [66.5, 321.0], [66.6, 321.0], [66.7, 322.0], [66.8, 323.0], [66.9, 323.0], [67.0, 324.0], [67.1, 324.0], [67.2, 325.0], [67.3, 326.0], [67.4, 326.0], [67.5, 327.0], [67.6, 327.0], [67.7, 328.0], [67.8, 328.0], [67.9, 328.0], [68.0, 329.0], [68.1, 329.0], [68.2, 330.0], [68.3, 332.0], [68.4, 332.0], [68.5, 334.0], [68.6, 335.0], [68.7, 335.0], [68.8, 335.0], [68.9, 335.0], [69.0, 335.0], [69.1, 336.0], [69.2, 337.0], [69.3, 337.0], [69.4, 339.0], [69.5, 339.0], [69.6, 340.0], [69.7, 340.0], [69.8, 340.0], [69.9, 340.0], [70.0, 341.0], [70.1, 341.0], [70.2, 342.0], [70.3, 342.0], [70.4, 342.0], [70.5, 343.0], [70.6, 343.0], [70.7, 343.0], [70.8, 344.0], [70.9, 344.0], [71.0, 344.0], [71.1, 344.0], [71.2, 346.0], [71.3, 347.0], [71.4, 347.0], [71.5, 348.0], [71.6, 348.0], [71.7, 348.0], [71.8, 349.0], [71.9, 350.0], [72.0, 350.0], [72.1, 350.0], [72.2, 351.0], [72.3, 351.0], [72.4, 351.0], [72.5, 352.0], [72.6, 353.0], [72.7, 354.0], [72.8, 354.0], [72.9, 355.0], [73.0, 356.0], [73.1, 356.0], [73.2, 356.0], [73.3, 356.0], [73.4, 358.0], [73.5, 358.0], [73.6, 358.0], [73.7, 359.0], [73.8, 360.0], [73.9, 360.0], [74.0, 361.0], [74.1, 361.0], [74.2, 362.0], [74.3, 365.0], [74.4, 365.0], [74.5, 366.0], [74.6, 366.0], [74.7, 367.0], [74.8, 368.0], [74.9, 369.0], [75.0, 370.0], [75.1, 370.0], [75.2, 370.0], [75.3, 373.0], [75.4, 377.0], [75.5, 377.0], [75.6, 377.0], [75.7, 378.0], [75.8, 378.0], [75.9, 378.0], [76.0, 378.0], [76.1, 379.0], [76.2, 380.0], [76.3, 380.0], [76.4, 384.0], [76.5, 384.0], [76.6, 385.0], [76.7, 386.0], [76.8, 389.0], [76.9, 390.0], [77.0, 390.0], [77.1, 391.0], [77.2, 392.0], [77.3, 392.0], [77.4, 392.0], [77.5, 393.0], [77.6, 393.0], [77.7, 394.0], [77.8, 394.0], [77.9, 395.0], [78.0, 395.0], [78.1, 397.0], [78.2, 397.0], [78.3, 397.0], [78.4, 398.0], [78.5, 398.0], [78.6, 399.0], [78.7, 400.0], [78.8, 401.0], [78.9, 402.0], [79.0, 403.0], [79.1, 403.0], [79.2, 404.0], [79.3, 405.0], [79.4, 406.0], [79.5, 406.0], [79.6, 406.0], [79.7, 407.0], [79.8, 407.0], [79.9, 409.0], [80.0, 409.0], [80.1, 409.0], [80.2, 409.0], [80.3, 409.0], [80.4, 411.0], [80.5, 414.0], [80.6, 415.0], [80.7, 415.0], [80.8, 415.0], [80.9, 416.0], [81.0, 417.0], [81.1, 417.0], [81.2, 417.0], [81.3, 418.0], [81.4, 418.0], [81.5, 418.0], [81.6, 419.0], [81.7, 419.0], [81.8, 419.0], [81.9, 422.0], [82.0, 422.0], [82.1, 422.0], [82.2, 425.0], [82.3, 429.0], [82.4, 434.0], [82.5, 435.0], [82.6, 438.0], [82.7, 441.0], [82.8, 441.0], [82.9, 441.0], [83.0, 441.0], [83.1, 441.0], [83.2, 441.0], [83.3, 444.0], [83.4, 445.0], [83.5, 446.0], [83.6, 448.0], [83.7, 449.0], [83.8, 449.0], [83.9, 450.0], [84.0, 452.0], [84.1, 453.0], [84.2, 456.0], [84.3, 459.0], [84.4, 460.0], [84.5, 462.0], [84.6, 463.0], [84.7, 465.0], [84.8, 465.0], [84.9, 467.0], [85.0, 471.0], [85.1, 471.0], [85.2, 471.0], [85.3, 474.0], [85.4, 474.0], [85.5, 475.0], [85.6, 480.0], [85.7, 482.0], [85.8, 486.0], [85.9, 487.0], [86.0, 491.0], [86.1, 493.0], [86.2, 495.0], [86.3, 497.0], [86.4, 497.0], [86.5, 499.0], [86.6, 500.0], [86.7, 500.0], [86.8, 509.0], [86.9, 511.0], [87.0, 513.0], [87.1, 514.0], [87.2, 515.0], [87.3, 517.0], [87.4, 517.0], [87.5, 520.0], [87.6, 521.0], [87.7, 526.0], [87.8, 528.0], [87.9, 529.0], [88.0, 529.0], [88.1, 539.0], [88.2, 540.0], [88.3, 541.0], [88.4, 541.0], [88.5, 542.0], [88.6, 544.0], [88.7, 546.0], [88.8, 549.0], [88.9, 550.0], [89.0, 555.0], [89.1, 558.0], [89.2, 564.0], [89.3, 568.0], [89.4, 573.0], [89.5, 577.0], [89.6, 578.0], [89.7, 579.0], [89.8, 582.0], [89.9, 583.0], [90.0, 588.0], [90.1, 598.0], [90.2, 600.0], [90.3, 603.0], [90.4, 611.0], [90.5, 617.0], [90.6, 619.0], [90.7, 620.0], [90.8, 635.0], [90.9, 717.0], [91.0, 756.0], [91.1, 765.0], [91.2, 769.0], [91.3, 776.0], [91.4, 780.0], [91.5, 821.0], [91.6, 844.0], [91.7, 849.0], [91.8, 858.0], [91.9, 877.0], [92.0, 908.0], [92.1, 914.0], [92.2, 928.0], [92.3, 950.0], [92.4, 973.0], [92.5, 975.0], [92.6, 994.0], [92.7, 1003.0], [92.8, 1015.0], [92.9, 1130.0], [93.0, 1135.0], [93.1, 1145.0], [93.2, 1178.0], [93.3, 1179.0], [93.4, 1204.0], [93.5, 1211.0], [93.6, 1275.0], [93.7, 1279.0], [93.8, 1330.0], [93.9, 1343.0], [94.0, 1404.0], [94.1, 1517.0], [94.2, 1584.0], [94.3, 1642.0], [94.4, 1703.0], [94.5, 1728.0], [94.6, 1738.0], [94.7, 1747.0], [94.8, 1750.0], [94.9, 1752.0], [95.0, 1758.0], [95.1, 1762.0], [95.2, 1769.0], [95.3, 1860.0], [95.4, 1865.0], [95.5, 1873.0], [95.6, 1936.0], [95.7, 1993.0], [95.8, 2022.0], [95.9, 2038.0], [96.0, 2072.0], [96.1, 2106.0], [96.2, 2188.0], [96.3, 2271.0], [96.4, 2291.0], [96.5, 2308.0], [96.6, 2449.0], [96.7, 2450.0], [96.8, 2500.0], [96.9, 2526.0], [97.0, 2532.0], [97.1, 2630.0], [97.2, 2723.0], [97.3, 2851.0], [97.4, 2978.0], [97.5, 3010.0], [97.6, 3284.0], [97.7, 3433.0], [97.8, 3455.0], [97.9, 3496.0], [98.0, 3573.0], [98.1, 4228.0], [98.2, 4288.0], [98.3, 4701.0], [98.4, 4824.0], [98.5, 4968.0], [98.6, 5091.0], [98.7, 5660.0], [98.8, 5722.0], [98.9, 5812.0], [99.0, 6114.0], [99.1, 6373.0], [99.2, 6431.0], [99.3, 6474.0], [99.4, 6497.0], [99.5, 6908.0], [99.6, 7144.0], [99.7, 7276.0], [99.8, 7452.0], [99.9, 8063.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 604.0, "series": [{"data": [[600.0, 7.0], [700.0, 6.0], [800.0, 5.0], [900.0, 7.0], [1000.0, 2.0], [1100.0, 5.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 2.0], [1600.0, 1.0], [1700.0, 9.0], [1800.0, 3.0], [1900.0, 2.0], [2000.0, 3.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 3.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 604.0], [3200.0, 1.0], [3400.0, 3.0], [3500.0, 1.0], [4200.0, 2.0], [300.0, 183.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5600.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [400.0, 79.0], [6400.0, 3.0], [6900.0, 1.0], [7100.0, 1.0], [7400.0, 1.0], [7200.0, 1.0], [500.0, 36.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 59.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 868.0, "series": [{"data": [[0.0, 868.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 73.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 59.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.60318566E12, "maxY": 5.925182481751828, "series": [{"data": [[1.60318578E12, 4.815730337078652], [1.60318566E12, 2.0], [1.60318572E12, 5.925182481751828]], "isOverall": false, "label": "Thread Group-Stress", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318578E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 274.5728155339806, "minX": 1.0, "maxY": 1285.543859649123, "series": [{"data": [[2.0, 274.5728155339806], [8.0, 738.0235294117649], [9.0, 626.0270270270271], [10.0, 1285.543859649123], [11.0, 1136.0156250000005], [3.0, 286.34036939313984], [12.0, 866.3055555555555], [13.0, 541.157894736842], [14.0, 280.0], [1.0, 289.0], [4.0, 339.09649122807014], [5.0, 372.1538461538462], [6.0, 526.9411764705883], [7.0, 723.4150943396226]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.403999999999998, 508.6529999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14.7, "minX": 1.60318566E12, "maxY": 52197.666666666664, "series": [{"data": [[1.60318578E12, 42386.38333333333], [1.60318566E12, 666.75], [1.60318572E12, 52197.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60318578E12, 934.5], [1.60318566E12, 14.7], [1.60318572E12, 1150.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318578E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 453.08089887640443, "minX": 1.60318566E12, "maxY": 554.2682481751821, "series": [{"data": [[1.60318578E12, 453.08089887640443], [1.60318566E12, 470.42857142857144], [1.60318572E12, 554.2682481751821]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318578E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 449.68539325842676, "minX": 1.60318566E12, "maxY": 551.0857664233573, "series": [{"data": [[1.60318578E12, 449.68539325842676], [1.60318566E12, 467.1428571428571], [1.60318572E12, 551.0857664233573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318578E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.200000000000002, "minX": 1.60318566E12, "maxY": 10.285714285714286, "series": [{"data": [[1.60318578E12, 3.200000000000002], [1.60318566E12, 10.285714285714286], [1.60318572E12, 4.072992700729929]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318578E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 214.0, "minX": 1.60318566E12, "maxY": 8063.0, "series": [{"data": [[1.60318578E12, 6908.0], [1.60318566E12, 908.0], [1.60318572E12, 8063.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60318578E12, 218.0139998936653], [1.60318566E12, 221.0], [1.60318572E12, 219.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60318578E12, 218.41540004253386], [1.60318566E12, 221.0], [1.60318572E12, 219.43510005235672]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60318578E12, 218.23699994683267], [1.60318566E12, 221.0], [1.60318572E12, 219.2154999345541]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60318578E12, 214.0], [1.60318566E12, 221.0], [1.60318572E12, 217.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60318578E12, 279.0], [1.60318566E12, 429.0], [1.60318572E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318578E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 238.5, "minX": 1.0, "maxY": 776.0, "series": [{"data": [[2.0, 423.5], [8.0, 273.0], [9.0, 271.0], [10.0, 272.0], [11.0, 247.0], [3.0, 392.0], [12.0, 246.0], [13.0, 286.0], [14.0, 277.5], [15.0, 308.0], [16.0, 288.0], [1.0, 776.0], [17.0, 253.0], [18.0, 300.0], [19.0, 378.0], [5.0, 741.0], [6.0, 238.5], [7.0, 456.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 234.5, "minX": 1.0, "maxY": 773.0, "series": [{"data": [[2.0, 420.5], [8.0, 271.0], [9.0, 267.5], [10.0, 268.0], [11.0, 244.0], [3.0, 388.0], [12.0, 242.0], [13.0, 285.0], [14.0, 274.5], [15.0, 305.0], [16.0, 284.5], [1.0, 773.0], [17.0, 251.0], [18.0, 299.5], [19.0, 378.0], [5.0, 736.5], [6.0, 234.5], [7.0, 451.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.60318566E12, "maxY": 9.3, "series": [{"data": [[1.60318578E12, 7.2], [1.60318566E12, 0.16666666666666666], [1.60318572E12, 9.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318578E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60318566E12, "maxY": 9.133333333333333, "series": [{"data": [[1.60318578E12, 7.416666666666667], [1.60318566E12, 0.11666666666666667], [1.60318572E12, 9.133333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318578E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60318566E12, "maxY": 9.133333333333333, "series": [{"data": [[1.60318578E12, 7.416666666666667], [1.60318566E12, 0.11666666666666667], [1.60318572E12, 9.133333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318578E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.60318566E12, "maxY": 9.133333333333333, "series": [{"data": [[1.60318578E12, 7.416666666666667], [1.60318566E12, 0.11666666666666667], [1.60318572E12, 9.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318578E12, "title": "Total Transactions Per Second"}},
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


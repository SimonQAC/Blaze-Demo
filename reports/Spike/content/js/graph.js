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
        data: {"result": {"minY": 331.0, "minX": 0.0, "maxY": 46595.0, "series": [{"data": [[0.0, 331.0], [0.1, 331.0], [0.2, 331.0], [0.3, 331.0], [0.4, 331.0], [0.5, 331.0], [0.6, 331.0], [0.7, 331.0], [0.8, 331.0], [0.9, 331.0], [1.0, 332.0], [1.1, 332.0], [1.2, 332.0], [1.3, 332.0], [1.4, 332.0], [1.5, 332.0], [1.6, 332.0], [1.7, 332.0], [1.8, 332.0], [1.9, 332.0], [2.0, 396.0], [2.1, 396.0], [2.2, 396.0], [2.3, 396.0], [2.4, 396.0], [2.5, 396.0], [2.6, 396.0], [2.7, 396.0], [2.8, 396.0], [2.9, 396.0], [3.0, 400.0], [3.1, 400.0], [3.2, 400.0], [3.3, 400.0], [3.4, 400.0], [3.5, 400.0], [3.6, 400.0], [3.7, 400.0], [3.8, 400.0], [3.9, 400.0], [4.0, 407.0], [4.1, 407.0], [4.2, 407.0], [4.3, 407.0], [4.4, 407.0], [4.5, 407.0], [4.6, 407.0], [4.7, 407.0], [4.8, 407.0], [4.9, 407.0], [5.0, 451.0], [5.1, 451.0], [5.2, 451.0], [5.3, 451.0], [5.4, 451.0], [5.5, 451.0], [5.6, 451.0], [5.7, 451.0], [5.8, 451.0], [5.9, 451.0], [6.0, 474.0], [6.1, 474.0], [6.2, 474.0], [6.3, 474.0], [6.4, 474.0], [6.5, 474.0], [6.6, 474.0], [6.7, 474.0], [6.8, 474.0], [6.9, 474.0], [7.0, 487.0], [7.1, 487.0], [7.2, 487.0], [7.3, 487.0], [7.4, 487.0], [7.5, 487.0], [7.6, 487.0], [7.7, 487.0], [7.8, 487.0], [7.9, 487.0], [8.0, 487.0], [8.1, 487.0], [8.2, 487.0], [8.3, 487.0], [8.4, 487.0], [8.5, 487.0], [8.6, 487.0], [8.7, 487.0], [8.8, 487.0], [8.9, 487.0], [9.0, 502.0], [9.1, 502.0], [9.2, 502.0], [9.3, 502.0], [9.4, 502.0], [9.5, 502.0], [9.6, 502.0], [9.7, 502.0], [9.8, 502.0], [9.9, 502.0], [10.0, 507.0], [10.1, 507.0], [10.2, 507.0], [10.3, 507.0], [10.4, 507.0], [10.5, 507.0], [10.6, 507.0], [10.7, 507.0], [10.8, 507.0], [10.9, 507.0], [11.0, 510.0], [11.1, 510.0], [11.2, 510.0], [11.3, 510.0], [11.4, 510.0], [11.5, 510.0], [11.6, 510.0], [11.7, 510.0], [11.8, 510.0], [11.9, 510.0], [12.0, 526.0], [12.1, 526.0], [12.2, 526.0], [12.3, 526.0], [12.4, 526.0], [12.5, 526.0], [12.6, 526.0], [12.7, 526.0], [12.8, 526.0], [12.9, 526.0], [13.0, 583.0], [13.1, 583.0], [13.2, 583.0], [13.3, 583.0], [13.4, 583.0], [13.5, 583.0], [13.6, 583.0], [13.7, 583.0], [13.8, 583.0], [13.9, 583.0], [14.0, 678.0], [14.1, 678.0], [14.2, 678.0], [14.3, 678.0], [14.4, 678.0], [14.5, 678.0], [14.6, 678.0], [14.7, 678.0], [14.8, 678.0], [14.9, 678.0], [15.0, 748.0], [15.1, 748.0], [15.2, 748.0], [15.3, 748.0], [15.4, 748.0], [15.5, 748.0], [15.6, 748.0], [15.7, 748.0], [15.8, 748.0], [15.9, 748.0], [16.0, 772.0], [16.1, 772.0], [16.2, 772.0], [16.3, 772.0], [16.4, 772.0], [16.5, 772.0], [16.6, 772.0], [16.7, 772.0], [16.8, 772.0], [16.9, 772.0], [17.0, 780.0], [17.1, 780.0], [17.2, 780.0], [17.3, 780.0], [17.4, 780.0], [17.5, 780.0], [17.6, 780.0], [17.7, 780.0], [17.8, 780.0], [17.9, 780.0], [18.0, 794.0], [18.1, 794.0], [18.2, 794.0], [18.3, 794.0], [18.4, 794.0], [18.5, 794.0], [18.6, 794.0], [18.7, 794.0], [18.8, 794.0], [18.9, 794.0], [19.0, 799.0], [19.1, 799.0], [19.2, 799.0], [19.3, 799.0], [19.4, 799.0], [19.5, 799.0], [19.6, 799.0], [19.7, 799.0], [19.8, 799.0], [19.9, 799.0], [20.0, 802.0], [20.1, 802.0], [20.2, 802.0], [20.3, 802.0], [20.4, 802.0], [20.5, 802.0], [20.6, 802.0], [20.7, 802.0], [20.8, 802.0], [20.9, 802.0], [21.0, 820.0], [21.1, 820.0], [21.2, 820.0], [21.3, 820.0], [21.4, 820.0], [21.5, 820.0], [21.6, 820.0], [21.7, 820.0], [21.8, 820.0], [21.9, 820.0], [22.0, 825.0], [22.1, 825.0], [22.2, 825.0], [22.3, 825.0], [22.4, 825.0], [22.5, 825.0], [22.6, 825.0], [22.7, 825.0], [22.8, 825.0], [22.9, 825.0], [23.0, 827.0], [23.1, 827.0], [23.2, 827.0], [23.3, 827.0], [23.4, 827.0], [23.5, 827.0], [23.6, 827.0], [23.7, 827.0], [23.8, 827.0], [23.9, 827.0], [24.0, 835.0], [24.1, 835.0], [24.2, 835.0], [24.3, 835.0], [24.4, 835.0], [24.5, 835.0], [24.6, 835.0], [24.7, 835.0], [24.8, 835.0], [24.9, 835.0], [25.0, 837.0], [25.1, 837.0], [25.2, 837.0], [25.3, 837.0], [25.4, 837.0], [25.5, 837.0], [25.6, 837.0], [25.7, 837.0], [25.8, 837.0], [25.9, 837.0], [26.0, 853.0], [26.1, 853.0], [26.2, 853.0], [26.3, 853.0], [26.4, 853.0], [26.5, 853.0], [26.6, 853.0], [26.7, 853.0], [26.8, 853.0], [26.9, 853.0], [27.0, 861.0], [27.1, 861.0], [27.2, 861.0], [27.3, 861.0], [27.4, 861.0], [27.5, 861.0], [27.6, 861.0], [27.7, 861.0], [27.8, 861.0], [27.9, 861.0], [28.0, 867.0], [28.1, 867.0], [28.2, 867.0], [28.3, 867.0], [28.4, 867.0], [28.5, 867.0], [28.6, 867.0], [28.7, 867.0], [28.8, 867.0], [28.9, 867.0], [29.0, 870.0], [29.1, 870.0], [29.2, 870.0], [29.3, 870.0], [29.4, 870.0], [29.5, 870.0], [29.6, 870.0], [29.7, 870.0], [29.8, 870.0], [29.9, 870.0], [30.0, 871.0], [30.1, 871.0], [30.2, 871.0], [30.3, 871.0], [30.4, 871.0], [30.5, 871.0], [30.6, 871.0], [30.7, 871.0], [30.8, 871.0], [30.9, 871.0], [31.0, 879.0], [31.1, 879.0], [31.2, 879.0], [31.3, 879.0], [31.4, 879.0], [31.5, 879.0], [31.6, 879.0], [31.7, 879.0], [31.8, 879.0], [31.9, 879.0], [32.0, 901.0], [32.1, 901.0], [32.2, 901.0], [32.3, 901.0], [32.4, 901.0], [32.5, 901.0], [32.6, 901.0], [32.7, 901.0], [32.8, 901.0], [32.9, 901.0], [33.0, 910.0], [33.1, 910.0], [33.2, 910.0], [33.3, 910.0], [33.4, 910.0], [33.5, 910.0], [33.6, 910.0], [33.7, 910.0], [33.8, 910.0], [33.9, 910.0], [34.0, 918.0], [34.1, 918.0], [34.2, 918.0], [34.3, 918.0], [34.4, 918.0], [34.5, 918.0], [34.6, 918.0], [34.7, 918.0], [34.8, 918.0], [34.9, 918.0], [35.0, 923.0], [35.1, 923.0], [35.2, 923.0], [35.3, 923.0], [35.4, 923.0], [35.5, 923.0], [35.6, 923.0], [35.7, 923.0], [35.8, 923.0], [35.9, 923.0], [36.0, 929.0], [36.1, 929.0], [36.2, 929.0], [36.3, 929.0], [36.4, 929.0], [36.5, 929.0], [36.6, 929.0], [36.7, 929.0], [36.8, 929.0], [36.9, 929.0], [37.0, 930.0], [37.1, 930.0], [37.2, 930.0], [37.3, 930.0], [37.4, 930.0], [37.5, 930.0], [37.6, 930.0], [37.7, 930.0], [37.8, 930.0], [37.9, 930.0], [38.0, 947.0], [38.1, 947.0], [38.2, 947.0], [38.3, 947.0], [38.4, 947.0], [38.5, 947.0], [38.6, 947.0], [38.7, 947.0], [38.8, 947.0], [38.9, 947.0], [39.0, 964.0], [39.1, 964.0], [39.2, 964.0], [39.3, 964.0], [39.4, 964.0], [39.5, 964.0], [39.6, 964.0], [39.7, 964.0], [39.8, 964.0], [39.9, 964.0], [40.0, 968.0], [40.1, 968.0], [40.2, 968.0], [40.3, 968.0], [40.4, 968.0], [40.5, 968.0], [40.6, 968.0], [40.7, 968.0], [40.8, 968.0], [40.9, 968.0], [41.0, 980.0], [41.1, 980.0], [41.2, 980.0], [41.3, 980.0], [41.4, 980.0], [41.5, 980.0], [41.6, 980.0], [41.7, 980.0], [41.8, 980.0], [41.9, 980.0], [42.0, 995.0], [42.1, 995.0], [42.2, 995.0], [42.3, 995.0], [42.4, 995.0], [42.5, 995.0], [42.6, 995.0], [42.7, 995.0], [42.8, 995.0], [42.9, 995.0], [43.0, 998.0], [43.1, 998.0], [43.2, 998.0], [43.3, 998.0], [43.4, 998.0], [43.5, 998.0], [43.6, 998.0], [43.7, 998.0], [43.8, 998.0], [43.9, 998.0], [44.0, 1003.0], [44.1, 1003.0], [44.2, 1003.0], [44.3, 1003.0], [44.4, 1003.0], [44.5, 1003.0], [44.6, 1003.0], [44.7, 1003.0], [44.8, 1003.0], [44.9, 1003.0], [45.0, 1011.0], [45.1, 1011.0], [45.2, 1011.0], [45.3, 1011.0], [45.4, 1011.0], [45.5, 1011.0], [45.6, 1011.0], [45.7, 1011.0], [45.8, 1011.0], [45.9, 1011.0], [46.0, 1047.0], [46.1, 1047.0], [46.2, 1047.0], [46.3, 1047.0], [46.4, 1047.0], [46.5, 1047.0], [46.6, 1047.0], [46.7, 1047.0], [46.8, 1047.0], [46.9, 1047.0], [47.0, 1088.0], [47.1, 1088.0], [47.2, 1088.0], [47.3, 1088.0], [47.4, 1088.0], [47.5, 1088.0], [47.6, 1088.0], [47.7, 1088.0], [47.8, 1088.0], [47.9, 1088.0], [48.0, 1172.0], [48.1, 1172.0], [48.2, 1172.0], [48.3, 1172.0], [48.4, 1172.0], [48.5, 1172.0], [48.6, 1172.0], [48.7, 1172.0], [48.8, 1172.0], [48.9, 1172.0], [49.0, 1194.0], [49.1, 1194.0], [49.2, 1194.0], [49.3, 1194.0], [49.4, 1194.0], [49.5, 1194.0], [49.6, 1194.0], [49.7, 1194.0], [49.8, 1194.0], [49.9, 1194.0], [50.0, 2511.0], [50.1, 2511.0], [50.2, 2511.0], [50.3, 2511.0], [50.4, 2511.0], [50.5, 2511.0], [50.6, 2511.0], [50.7, 2511.0], [50.8, 2511.0], [50.9, 2511.0], [51.0, 2571.0], [51.1, 2571.0], [51.2, 2571.0], [51.3, 2571.0], [51.4, 2571.0], [51.5, 2571.0], [51.6, 2571.0], [51.7, 2571.0], [51.8, 2571.0], [51.9, 2571.0], [52.0, 2574.0], [52.1, 2574.0], [52.2, 2574.0], [52.3, 2574.0], [52.4, 2574.0], [52.5, 2574.0], [52.6, 2574.0], [52.7, 2574.0], [52.8, 2574.0], [52.9, 2574.0], [53.0, 2604.0], [53.1, 2604.0], [53.2, 2604.0], [53.3, 2604.0], [53.4, 2604.0], [53.5, 2604.0], [53.6, 2604.0], [53.7, 2604.0], [53.8, 2604.0], [53.9, 2604.0], [54.0, 2656.0], [54.1, 2656.0], [54.2, 2656.0], [54.3, 2656.0], [54.4, 2656.0], [54.5, 2656.0], [54.6, 2656.0], [54.7, 2656.0], [54.8, 2656.0], [54.9, 2656.0], [55.0, 2711.0], [55.1, 2711.0], [55.2, 2711.0], [55.3, 2711.0], [55.4, 2711.0], [55.5, 2711.0], [55.6, 2711.0], [55.7, 2711.0], [55.8, 2711.0], [55.9, 2711.0], [56.0, 2729.0], [56.1, 2729.0], [56.2, 2729.0], [56.3, 2729.0], [56.4, 2729.0], [56.5, 2729.0], [56.6, 2729.0], [56.7, 2729.0], [56.8, 2729.0], [56.9, 2729.0], [57.0, 2763.0], [57.1, 2763.0], [57.2, 2763.0], [57.3, 2763.0], [57.4, 2763.0], [57.5, 2763.0], [57.6, 2763.0], [57.7, 2763.0], [57.8, 2763.0], [57.9, 2763.0], [58.0, 2786.0], [58.1, 2786.0], [58.2, 2786.0], [58.3, 2786.0], [58.4, 2786.0], [58.5, 2786.0], [58.6, 2786.0], [58.7, 2786.0], [58.8, 2786.0], [58.9, 2786.0], [59.0, 3385.0], [59.1, 3385.0], [59.2, 3385.0], [59.3, 3385.0], [59.4, 3385.0], [59.5, 3385.0], [59.6, 3385.0], [59.7, 3385.0], [59.8, 3385.0], [59.9, 3385.0], [60.0, 3403.0], [60.1, 3403.0], [60.2, 3403.0], [60.3, 3403.0], [60.4, 3403.0], [60.5, 3403.0], [60.6, 3403.0], [60.7, 3403.0], [60.8, 3403.0], [60.9, 3403.0], [61.0, 3408.0], [61.1, 3408.0], [61.2, 3408.0], [61.3, 3408.0], [61.4, 3408.0], [61.5, 3408.0], [61.6, 3408.0], [61.7, 3408.0], [61.8, 3408.0], [61.9, 3408.0], [62.0, 3411.0], [62.1, 3411.0], [62.2, 3411.0], [62.3, 3411.0], [62.4, 3411.0], [62.5, 3411.0], [62.6, 3411.0], [62.7, 3411.0], [62.8, 3411.0], [62.9, 3411.0], [63.0, 3438.0], [63.1, 3438.0], [63.2, 3438.0], [63.3, 3438.0], [63.4, 3438.0], [63.5, 3438.0], [63.6, 3438.0], [63.7, 3438.0], [63.8, 3438.0], [63.9, 3438.0], [64.0, 3479.0], [64.1, 3479.0], [64.2, 3479.0], [64.3, 3479.0], [64.4, 3479.0], [64.5, 3479.0], [64.6, 3479.0], [64.7, 3479.0], [64.8, 3479.0], [64.9, 3479.0], [65.0, 3633.0], [65.1, 3633.0], [65.2, 3633.0], [65.3, 3633.0], [65.4, 3633.0], [65.5, 3633.0], [65.6, 3633.0], [65.7, 3633.0], [65.8, 3633.0], [65.9, 3633.0], [66.0, 3644.0], [66.1, 3644.0], [66.2, 3644.0], [66.3, 3644.0], [66.4, 3644.0], [66.5, 3644.0], [66.6, 3644.0], [66.7, 3644.0], [66.8, 3644.0], [66.9, 3644.0], [67.0, 3704.0], [67.1, 3704.0], [67.2, 3704.0], [67.3, 3704.0], [67.4, 3704.0], [67.5, 3704.0], [67.6, 3704.0], [67.7, 3704.0], [67.8, 3704.0], [67.9, 3704.0], [68.0, 3759.0], [68.1, 3759.0], [68.2, 3759.0], [68.3, 3759.0], [68.4, 3759.0], [68.5, 3759.0], [68.6, 3759.0], [68.7, 3759.0], [68.8, 3759.0], [68.9, 3759.0], [69.0, 3760.0], [69.1, 3760.0], [69.2, 3760.0], [69.3, 3760.0], [69.4, 3760.0], [69.5, 3760.0], [69.6, 3760.0], [69.7, 3760.0], [69.8, 3760.0], [69.9, 3760.0], [70.0, 3763.0], [70.1, 3763.0], [70.2, 3763.0], [70.3, 3763.0], [70.4, 3763.0], [70.5, 3763.0], [70.6, 3763.0], [70.7, 3763.0], [70.8, 3763.0], [70.9, 3763.0], [71.0, 3775.0], [71.1, 3775.0], [71.2, 3775.0], [71.3, 3775.0], [71.4, 3775.0], [71.5, 3775.0], [71.6, 3775.0], [71.7, 3775.0], [71.8, 3775.0], [71.9, 3775.0], [72.0, 3779.0], [72.1, 3779.0], [72.2, 3779.0], [72.3, 3779.0], [72.4, 3779.0], [72.5, 3779.0], [72.6, 3779.0], [72.7, 3779.0], [72.8, 3779.0], [72.9, 3779.0], [73.0, 3780.0], [73.1, 3780.0], [73.2, 3780.0], [73.3, 3780.0], [73.4, 3780.0], [73.5, 3780.0], [73.6, 3780.0], [73.7, 3780.0], [73.8, 3780.0], [73.9, 3780.0], [74.0, 3796.0], [74.1, 3796.0], [74.2, 3796.0], [74.3, 3796.0], [74.4, 3796.0], [74.5, 3796.0], [74.6, 3796.0], [74.7, 3796.0], [74.8, 3796.0], [74.9, 3796.0], [75.0, 3798.0], [75.1, 3798.0], [75.2, 3798.0], [75.3, 3798.0], [75.4, 3798.0], [75.5, 3798.0], [75.6, 3798.0], [75.7, 3798.0], [75.8, 3798.0], [75.9, 3798.0], [76.0, 21008.0], [76.1, 21008.0], [76.2, 21008.0], [76.3, 21008.0], [76.4, 21008.0], [76.5, 21008.0], [76.6, 21008.0], [76.7, 21008.0], [76.8, 21008.0], [76.9, 21008.0], [77.0, 21513.0], [77.1, 21513.0], [77.2, 21513.0], [77.3, 21513.0], [77.4, 21513.0], [77.5, 21513.0], [77.6, 21513.0], [77.7, 21513.0], [77.8, 21513.0], [77.9, 21513.0], [78.0, 22073.0], [78.1, 22073.0], [78.2, 22073.0], [78.3, 22073.0], [78.4, 22073.0], [78.5, 22073.0], [78.6, 22073.0], [78.7, 22073.0], [78.8, 22073.0], [78.9, 22073.0], [79.0, 22117.0], [79.1, 22117.0], [79.2, 22117.0], [79.3, 22117.0], [79.4, 22117.0], [79.5, 22117.0], [79.6, 22117.0], [79.7, 22117.0], [79.8, 22117.0], [79.9, 22117.0], [80.0, 22192.0], [80.1, 22192.0], [80.2, 22192.0], [80.3, 22192.0], [80.4, 22192.0], [80.5, 22192.0], [80.6, 22192.0], [80.7, 22192.0], [80.8, 22192.0], [80.9, 22192.0], [81.0, 25352.0], [81.1, 25352.0], [81.2, 25352.0], [81.3, 25352.0], [81.4, 25352.0], [81.5, 25352.0], [81.6, 25352.0], [81.7, 25352.0], [81.8, 25352.0], [81.9, 25352.0], [82.0, 25431.0], [82.1, 25431.0], [82.2, 25431.0], [82.3, 25431.0], [82.4, 25431.0], [82.5, 25431.0], [82.6, 25431.0], [82.7, 25431.0], [82.8, 25431.0], [82.9, 25431.0], [83.0, 25634.0], [83.1, 25634.0], [83.2, 25634.0], [83.3, 25634.0], [83.4, 25634.0], [83.5, 25634.0], [83.6, 25634.0], [83.7, 25634.0], [83.8, 25634.0], [83.9, 25634.0], [84.0, 26271.0], [84.1, 26271.0], [84.2, 26271.0], [84.3, 26271.0], [84.4, 26271.0], [84.5, 26271.0], [84.6, 26271.0], [84.7, 26271.0], [84.8, 26271.0], [84.9, 26271.0], [85.0, 26502.0], [85.1, 26502.0], [85.2, 26502.0], [85.3, 26502.0], [85.4, 26502.0], [85.5, 26502.0], [85.6, 26502.0], [85.7, 26502.0], [85.8, 26502.0], [85.9, 26502.0], [86.0, 26836.0], [86.1, 26836.0], [86.2, 26836.0], [86.3, 26836.0], [86.4, 26836.0], [86.5, 26836.0], [86.6, 26836.0], [86.7, 26836.0], [86.8, 26836.0], [86.9, 26836.0], [87.0, 27356.0], [87.1, 27356.0], [87.2, 27356.0], [87.3, 27356.0], [87.4, 27356.0], [87.5, 27356.0], [87.6, 27356.0], [87.7, 27356.0], [87.8, 27356.0], [87.9, 27356.0], [88.0, 28114.0], [88.1, 28114.0], [88.2, 28114.0], [88.3, 28114.0], [88.4, 28114.0], [88.5, 28114.0], [88.6, 28114.0], [88.7, 28114.0], [88.8, 28114.0], [88.9, 28114.0], [89.0, 28775.0], [89.1, 28775.0], [89.2, 28775.0], [89.3, 28775.0], [89.4, 28775.0], [89.5, 28775.0], [89.6, 28775.0], [89.7, 28775.0], [89.8, 28775.0], [89.9, 28775.0], [90.0, 29147.0], [90.1, 29147.0], [90.2, 29147.0], [90.3, 29147.0], [90.4, 29147.0], [90.5, 29147.0], [90.6, 29147.0], [90.7, 29147.0], [90.8, 29147.0], [90.9, 29147.0], [91.0, 29259.0], [91.1, 29259.0], [91.2, 29259.0], [91.3, 29259.0], [91.4, 29259.0], [91.5, 29259.0], [91.6, 29259.0], [91.7, 29259.0], [91.8, 29259.0], [91.9, 29259.0], [92.0, 30820.0], [92.1, 30820.0], [92.2, 30820.0], [92.3, 30820.0], [92.4, 30820.0], [92.5, 30820.0], [92.6, 30820.0], [92.7, 30820.0], [92.8, 30820.0], [92.9, 30820.0], [93.0, 30830.0], [93.1, 30830.0], [93.2, 30830.0], [93.3, 30830.0], [93.4, 30830.0], [93.5, 30830.0], [93.6, 30830.0], [93.7, 30830.0], [93.8, 30830.0], [93.9, 30830.0], [94.0, 30930.0], [94.1, 30930.0], [94.2, 30930.0], [94.3, 30930.0], [94.4, 30930.0], [94.5, 30930.0], [94.6, 30930.0], [94.7, 30930.0], [94.8, 30930.0], [94.9, 30930.0], [95.0, 45336.0], [95.1, 45336.0], [95.2, 45336.0], [95.3, 45336.0], [95.4, 45336.0], [95.5, 45336.0], [95.6, 45336.0], [95.7, 45336.0], [95.8, 45336.0], [95.9, 45336.0], [96.0, 45385.0], [96.1, 45385.0], [96.2, 45385.0], [96.3, 45385.0], [96.4, 45385.0], [96.5, 45385.0], [96.6, 45385.0], [96.7, 45385.0], [96.8, 45385.0], [96.9, 45385.0], [97.0, 45582.0], [97.1, 45582.0], [97.2, 45582.0], [97.3, 45582.0], [97.4, 45582.0], [97.5, 45582.0], [97.6, 45582.0], [97.7, 45582.0], [97.8, 45582.0], [97.9, 45582.0], [98.0, 45697.0], [98.1, 45697.0], [98.2, 45697.0], [98.3, 45697.0], [98.4, 45697.0], [98.5, 45697.0], [98.6, 45697.0], [98.7, 45697.0], [98.8, 45697.0], [98.9, 45697.0], [99.0, 46595.0], [99.1, 46595.0], [99.2, 46595.0], [99.3, 46595.0], [99.4, 46595.0], [99.5, 46595.0], [99.6, 46595.0], [99.7, 46595.0], [99.8, 46595.0], [99.9, 46595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 12.0, "series": [{"data": [[600.0, 1.0], [700.0, 5.0], [800.0, 12.0], [900.0, 12.0], [1000.0, 4.0], [1100.0, 2.0], [21000.0, 1.0], [21500.0, 1.0], [22100.0, 2.0], [22000.0, 1.0], [25400.0, 1.0], [25300.0, 1.0], [25600.0, 1.0], [26500.0, 1.0], [26200.0, 1.0], [26800.0, 1.0], [27300.0, 1.0], [28100.0, 1.0], [29100.0, 1.0], [28700.0, 1.0], [29200.0, 1.0], [30900.0, 1.0], [30800.0, 2.0], [2500.0, 3.0], [2600.0, 2.0], [2700.0, 4.0], [45300.0, 2.0], [45500.0, 1.0], [45600.0, 1.0], [46500.0, 1.0], [3300.0, 1.0], [3400.0, 5.0], [3700.0, 9.0], [3600.0, 2.0], [300.0, 3.0], [400.0, 6.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 46500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 41.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 50.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 44.9, "minX": 1.60318596E12, "maxY": 44.9, "series": [{"data": [[1.60318596E12, 44.9]], "isOverall": false, "label": "Thread Group-Spike", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 451.0, "minX": 1.0, "maxY": 46595.0, "series": [{"data": [[2.0, 45697.0], [3.0, 45582.0], [4.0, 45336.0], [5.0, 45385.0], [6.0, 30820.0], [7.0, 30830.0], [8.0, 30930.0], [9.0, 29259.0], [10.0, 28775.0], [11.0, 29147.0], [12.0, 28114.0], [13.0, 27356.0], [14.0, 26836.0], [15.0, 26271.0], [16.0, 26502.0], [17.0, 25634.0], [18.0, 25352.0], [19.0, 25431.0], [20.0, 22192.0], [21.0, 22073.0], [22.0, 22117.0], [23.0, 21513.0], [24.0, 21008.0], [25.0, 3779.0], [26.0, 3760.0], [27.0, 3780.0], [28.0, 3798.0], [29.0, 3796.0], [30.0, 3633.0], [31.0, 3704.0], [33.0, 3644.0], [32.0, 3775.0], [35.0, 3763.0], [34.0, 3759.0], [37.0, 3403.0], [36.0, 3408.0], [39.0, 3385.0], [38.0, 3438.0], [41.0, 3479.0], [40.0, 3411.0], [43.0, 1124.6666666666665], [42.0, 2763.0], [45.0, 2729.0], [44.0, 2786.0], [47.0, 1157.3333333333335], [46.0, 2656.0], [49.0, 1205.6666666666665], [48.0, 2571.0], [50.0, 1540.5], [51.0, 1011.0], [53.0, 714.0], [52.0, 968.0], [55.0, 861.0], [54.0, 870.0], [57.0, 583.0], [56.0, 930.0], [59.0, 837.0], [58.0, 999.0], [61.0, 1194.0], [60.0, 995.0], [63.0, 871.0], [62.0, 964.0], [66.0, 710.6666666666666], [65.0, 690.0], [67.0, 825.0], [64.0, 837.0], [68.0, 659.5], [71.0, 947.0], [70.0, 451.0], [69.0, 794.0], [75.0, 807.5], [74.0, 998.0], [73.0, 1003.0], [72.0, 772.0], [79.0, 929.0], [78.0, 827.0], [77.0, 877.0], [82.0, 800.0], [83.0, 800.5], [81.0, 835.0], [80.0, 879.0], [1.0, 46595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[44.9, 8533.640000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 83.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 210.0, "minX": 1.60318596E12, "maxY": 9525.066666666668, "series": [{"data": [[1.60318596E12, 9525.066666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60318596E12, 210.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8533.640000000001, "minX": 1.60318596E12, "maxY": 8533.640000000001, "series": [{"data": [[1.60318596E12, 8533.640000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8529.41, "minX": 1.60318596E12, "maxY": 8529.41, "series": [{"data": [[1.60318596E12, 8529.41]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 57.50999999999999, "minX": 1.60318596E12, "maxY": 57.50999999999999, "series": [{"data": [[1.60318596E12, 57.50999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318596E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 331.0, "minX": 1.60318596E12, "maxY": 46595.0, "series": [{"data": [[1.60318596E12, 46595.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60318596E12, 331.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60318596E12, 331.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60318596E12, 331.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60318596E12, 331.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60318596E12, 1852.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 487.0, "minX": 1.0, "maxY": 29983.5, "series": [{"data": [[2.0, 13641.0], [1.0, 28307.5], [4.0, 25532.5], [34.0, 875.0], [3.0, 29983.5], [13.0, 3424.5], [14.0, 487.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 484.5, "minX": 1.0, "maxY": 29980.0, "series": [{"data": [[2.0, 13638.0], [1.0, 28304.0], [4.0, 25529.5], [34.0, 873.0], [3.0, 29980.0], [13.0, 3421.0], [14.0, 484.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60318596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60318596E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318596E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60318596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60318596E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60318596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60318596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60318596E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.60318596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60318596E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60318596E12, "title": "Total Transactions Per Second"}},
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


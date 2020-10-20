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
        data: {"result": {"minY": 246.0, "minX": 0.0, "maxY": 13111.0, "series": [{"data": [[0.0, 246.0], [0.1, 250.0], [0.2, 251.0], [0.3, 253.0], [0.4, 254.0], [0.5, 255.0], [0.6, 256.0], [0.7, 257.0], [0.8, 258.0], [0.9, 259.0], [1.0, 260.0], [1.1, 260.0], [1.2, 261.0], [1.3, 262.0], [1.4, 262.0], [1.5, 263.0], [1.6, 263.0], [1.7, 264.0], [1.8, 264.0], [1.9, 265.0], [2.0, 265.0], [2.1, 266.0], [2.2, 266.0], [2.3, 267.0], [2.4, 267.0], [2.5, 268.0], [2.6, 269.0], [2.7, 269.0], [2.8, 270.0], [2.9, 270.0], [3.0, 271.0], [3.1, 271.0], [3.2, 272.0], [3.3, 272.0], [3.4, 273.0], [3.5, 274.0], [3.6, 274.0], [3.7, 275.0], [3.8, 275.0], [3.9, 276.0], [4.0, 276.0], [4.1, 277.0], [4.2, 277.0], [4.3, 278.0], [4.4, 278.0], [4.5, 279.0], [4.6, 279.0], [4.7, 279.0], [4.8, 280.0], [4.9, 281.0], [5.0, 281.0], [5.1, 282.0], [5.2, 282.0], [5.3, 283.0], [5.4, 283.0], [5.5, 284.0], [5.6, 284.0], [5.7, 285.0], [5.8, 286.0], [5.9, 286.0], [6.0, 286.0], [6.1, 287.0], [6.2, 287.0], [6.3, 288.0], [6.4, 288.0], [6.5, 288.0], [6.6, 289.0], [6.7, 289.0], [6.8, 290.0], [6.9, 290.0], [7.0, 291.0], [7.1, 291.0], [7.2, 291.0], [7.3, 292.0], [7.4, 292.0], [7.5, 293.0], [7.6, 293.0], [7.7, 293.0], [7.8, 294.0], [7.9, 294.0], [8.0, 295.0], [8.1, 295.0], [8.2, 296.0], [8.3, 297.0], [8.4, 297.0], [8.5, 297.0], [8.6, 298.0], [8.7, 298.0], [8.8, 298.0], [8.9, 299.0], [9.0, 300.0], [9.1, 300.0], [9.2, 300.0], [9.3, 300.0], [9.4, 301.0], [9.5, 302.0], [9.6, 302.0], [9.7, 302.0], [9.8, 303.0], [9.9, 303.0], [10.0, 303.0], [10.1, 304.0], [10.2, 305.0], [10.3, 305.0], [10.4, 305.0], [10.5, 306.0], [10.6, 306.0], [10.7, 306.0], [10.8, 307.0], [10.9, 307.0], [11.0, 307.0], [11.1, 308.0], [11.2, 308.0], [11.3, 309.0], [11.4, 309.0], [11.5, 309.0], [11.6, 310.0], [11.7, 310.0], [11.8, 311.0], [11.9, 311.0], [12.0, 311.0], [12.1, 312.0], [12.2, 312.0], [12.3, 312.0], [12.4, 313.0], [12.5, 313.0], [12.6, 314.0], [12.7, 314.0], [12.8, 314.0], [12.9, 315.0], [13.0, 315.0], [13.1, 316.0], [13.2, 316.0], [13.3, 316.0], [13.4, 317.0], [13.5, 317.0], [13.6, 317.0], [13.7, 318.0], [13.8, 319.0], [13.9, 320.0], [14.0, 320.0], [14.1, 321.0], [14.2, 322.0], [14.3, 322.0], [14.4, 322.0], [14.5, 323.0], [14.6, 324.0], [14.7, 324.0], [14.8, 324.0], [14.9, 325.0], [15.0, 325.0], [15.1, 326.0], [15.2, 326.0], [15.3, 326.0], [15.4, 327.0], [15.5, 327.0], [15.6, 328.0], [15.7, 328.0], [15.8, 329.0], [15.9, 329.0], [16.0, 330.0], [16.1, 330.0], [16.2, 331.0], [16.3, 331.0], [16.4, 332.0], [16.5, 332.0], [16.6, 333.0], [16.7, 333.0], [16.8, 333.0], [16.9, 334.0], [17.0, 334.0], [17.1, 335.0], [17.2, 335.0], [17.3, 336.0], [17.4, 336.0], [17.5, 337.0], [17.6, 337.0], [17.7, 338.0], [17.8, 338.0], [17.9, 339.0], [18.0, 339.0], [18.1, 340.0], [18.2, 340.0], [18.3, 341.0], [18.4, 342.0], [18.5, 342.0], [18.6, 342.0], [18.7, 343.0], [18.8, 344.0], [18.9, 344.0], [19.0, 345.0], [19.1, 346.0], [19.2, 346.0], [19.3, 347.0], [19.4, 347.0], [19.5, 348.0], [19.6, 348.0], [19.7, 349.0], [19.8, 349.0], [19.9, 349.0], [20.0, 350.0], [20.1, 351.0], [20.2, 351.0], [20.3, 351.0], [20.4, 352.0], [20.5, 352.0], [20.6, 353.0], [20.7, 354.0], [20.8, 354.0], [20.9, 354.0], [21.0, 355.0], [21.1, 356.0], [21.2, 356.0], [21.3, 356.0], [21.4, 357.0], [21.5, 357.0], [21.6, 358.0], [21.7, 358.0], [21.8, 358.0], [21.9, 359.0], [22.0, 359.0], [22.1, 360.0], [22.2, 361.0], [22.3, 361.0], [22.4, 362.0], [22.5, 362.0], [22.6, 363.0], [22.7, 363.0], [22.8, 364.0], [22.9, 365.0], [23.0, 365.0], [23.1, 366.0], [23.2, 366.0], [23.3, 367.0], [23.4, 367.0], [23.5, 368.0], [23.6, 368.0], [23.7, 369.0], [23.8, 369.0], [23.9, 369.0], [24.0, 370.0], [24.1, 371.0], [24.2, 371.0], [24.3, 372.0], [24.4, 372.0], [24.5, 373.0], [24.6, 374.0], [24.7, 374.0], [24.8, 374.0], [24.9, 375.0], [25.0, 375.0], [25.1, 375.0], [25.2, 376.0], [25.3, 376.0], [25.4, 377.0], [25.5, 377.0], [25.6, 378.0], [25.7, 378.0], [25.8, 379.0], [25.9, 380.0], [26.0, 381.0], [26.1, 381.0], [26.2, 382.0], [26.3, 382.0], [26.4, 383.0], [26.5, 383.0], [26.6, 384.0], [26.7, 385.0], [26.8, 385.0], [26.9, 385.0], [27.0, 386.0], [27.1, 387.0], [27.2, 388.0], [27.3, 388.0], [27.4, 389.0], [27.5, 389.0], [27.6, 390.0], [27.7, 391.0], [27.8, 392.0], [27.9, 392.0], [28.0, 392.0], [28.1, 393.0], [28.2, 393.0], [28.3, 395.0], [28.4, 396.0], [28.5, 396.0], [28.6, 397.0], [28.7, 398.0], [28.8, 398.0], [28.9, 399.0], [29.0, 400.0], [29.1, 400.0], [29.2, 401.0], [29.3, 402.0], [29.4, 403.0], [29.5, 404.0], [29.6, 404.0], [29.7, 405.0], [29.8, 405.0], [29.9, 406.0], [30.0, 407.0], [30.1, 408.0], [30.2, 408.0], [30.3, 409.0], [30.4, 410.0], [30.5, 410.0], [30.6, 411.0], [30.7, 412.0], [30.8, 412.0], [30.9, 413.0], [31.0, 413.0], [31.1, 413.0], [31.2, 414.0], [31.3, 415.0], [31.4, 416.0], [31.5, 416.0], [31.6, 417.0], [31.7, 418.0], [31.8, 419.0], [31.9, 420.0], [32.0, 420.0], [32.1, 421.0], [32.2, 422.0], [32.3, 423.0], [32.4, 423.0], [32.5, 424.0], [32.6, 425.0], [32.7, 426.0], [32.8, 426.0], [32.9, 427.0], [33.0, 428.0], [33.1, 429.0], [33.2, 429.0], [33.3, 430.0], [33.4, 431.0], [33.5, 432.0], [33.6, 433.0], [33.7, 434.0], [33.8, 434.0], [33.9, 435.0], [34.0, 435.0], [34.1, 436.0], [34.2, 437.0], [34.3, 438.0], [34.4, 438.0], [34.5, 439.0], [34.6, 440.0], [34.7, 440.0], [34.8, 441.0], [34.9, 441.0], [35.0, 442.0], [35.1, 443.0], [35.2, 443.0], [35.3, 444.0], [35.4, 445.0], [35.5, 446.0], [35.6, 446.0], [35.7, 447.0], [35.8, 449.0], [35.9, 449.0], [36.0, 450.0], [36.1, 450.0], [36.2, 451.0], [36.3, 452.0], [36.4, 452.0], [36.5, 453.0], [36.6, 453.0], [36.7, 454.0], [36.8, 455.0], [36.9, 455.0], [37.0, 456.0], [37.1, 457.0], [37.2, 458.0], [37.3, 459.0], [37.4, 459.0], [37.5, 460.0], [37.6, 461.0], [37.7, 462.0], [37.8, 462.0], [37.9, 463.0], [38.0, 464.0], [38.1, 464.0], [38.2, 465.0], [38.3, 466.0], [38.4, 467.0], [38.5, 467.0], [38.6, 468.0], [38.7, 469.0], [38.8, 470.0], [38.9, 471.0], [39.0, 471.0], [39.1, 472.0], [39.2, 472.0], [39.3, 473.0], [39.4, 474.0], [39.5, 474.0], [39.6, 475.0], [39.7, 475.0], [39.8, 476.0], [39.9, 476.0], [40.0, 477.0], [40.1, 478.0], [40.2, 478.0], [40.3, 479.0], [40.4, 479.0], [40.5, 480.0], [40.6, 481.0], [40.7, 481.0], [40.8, 482.0], [40.9, 483.0], [41.0, 483.0], [41.1, 484.0], [41.2, 485.0], [41.3, 486.0], [41.4, 487.0], [41.5, 487.0], [41.6, 488.0], [41.7, 489.0], [41.8, 490.0], [41.9, 490.0], [42.0, 491.0], [42.1, 492.0], [42.2, 493.0], [42.3, 493.0], [42.4, 494.0], [42.5, 495.0], [42.6, 496.0], [42.7, 496.0], [42.8, 497.0], [42.9, 498.0], [43.0, 499.0], [43.1, 500.0], [43.2, 500.0], [43.3, 501.0], [43.4, 501.0], [43.5, 502.0], [43.6, 503.0], [43.7, 504.0], [43.8, 504.0], [43.9, 505.0], [44.0, 506.0], [44.1, 507.0], [44.2, 507.0], [44.3, 508.0], [44.4, 508.0], [44.5, 509.0], [44.6, 510.0], [44.7, 511.0], [44.8, 511.0], [44.9, 512.0], [45.0, 513.0], [45.1, 514.0], [45.2, 514.0], [45.3, 515.0], [45.4, 516.0], [45.5, 516.0], [45.6, 518.0], [45.7, 518.0], [45.8, 519.0], [45.9, 519.0], [46.0, 520.0], [46.1, 521.0], [46.2, 522.0], [46.3, 523.0], [46.4, 524.0], [46.5, 525.0], [46.6, 526.0], [46.7, 526.0], [46.8, 527.0], [46.9, 528.0], [47.0, 528.0], [47.1, 529.0], [47.2, 530.0], [47.3, 531.0], [47.4, 531.0], [47.5, 532.0], [47.6, 533.0], [47.7, 534.0], [47.8, 534.0], [47.9, 535.0], [48.0, 535.0], [48.1, 536.0], [48.2, 537.0], [48.3, 537.0], [48.4, 538.0], [48.5, 538.0], [48.6, 539.0], [48.7, 540.0], [48.8, 541.0], [48.9, 542.0], [49.0, 543.0], [49.1, 544.0], [49.2, 544.0], [49.3, 544.0], [49.4, 545.0], [49.5, 546.0], [49.6, 547.0], [49.7, 548.0], [49.8, 549.0], [49.9, 549.0], [50.0, 550.0], [50.1, 551.0], [50.2, 552.0], [50.3, 552.0], [50.4, 553.0], [50.5, 553.0], [50.6, 554.0], [50.7, 555.0], [50.8, 556.0], [50.9, 557.0], [51.0, 557.0], [51.1, 558.0], [51.2, 559.0], [51.3, 560.0], [51.4, 560.0], [51.5, 561.0], [51.6, 562.0], [51.7, 563.0], [51.8, 564.0], [51.9, 564.0], [52.0, 566.0], [52.1, 566.0], [52.2, 567.0], [52.3, 568.0], [52.4, 569.0], [52.5, 571.0], [52.6, 571.0], [52.7, 572.0], [52.8, 574.0], [52.9, 574.0], [53.0, 575.0], [53.1, 575.0], [53.2, 576.0], [53.3, 577.0], [53.4, 577.0], [53.5, 578.0], [53.6, 579.0], [53.7, 580.0], [53.8, 581.0], [53.9, 582.0], [54.0, 583.0], [54.1, 583.0], [54.2, 584.0], [54.3, 585.0], [54.4, 586.0], [54.5, 587.0], [54.6, 588.0], [54.7, 589.0], [54.8, 590.0], [54.9, 591.0], [55.0, 592.0], [55.1, 593.0], [55.2, 594.0], [55.3, 595.0], [55.4, 596.0], [55.5, 597.0], [55.6, 598.0], [55.7, 599.0], [55.8, 600.0], [55.9, 601.0], [56.0, 602.0], [56.1, 603.0], [56.2, 604.0], [56.3, 605.0], [56.4, 606.0], [56.5, 607.0], [56.6, 607.0], [56.7, 608.0], [56.8, 609.0], [56.9, 609.0], [57.0, 610.0], [57.1, 611.0], [57.2, 612.0], [57.3, 612.0], [57.4, 613.0], [57.5, 614.0], [57.6, 615.0], [57.7, 616.0], [57.8, 617.0], [57.9, 618.0], [58.0, 619.0], [58.1, 619.0], [58.2, 620.0], [58.3, 620.0], [58.4, 621.0], [58.5, 622.0], [58.6, 623.0], [58.7, 623.0], [58.8, 624.0], [58.9, 624.0], [59.0, 625.0], [59.1, 626.0], [59.2, 626.0], [59.3, 627.0], [59.4, 628.0], [59.5, 628.0], [59.6, 629.0], [59.7, 629.0], [59.8, 630.0], [59.9, 630.0], [60.0, 631.0], [60.1, 631.0], [60.2, 632.0], [60.3, 633.0], [60.4, 634.0], [60.5, 634.0], [60.6, 635.0], [60.7, 636.0], [60.8, 636.0], [60.9, 637.0], [61.0, 638.0], [61.1, 639.0], [61.2, 639.0], [61.3, 640.0], [61.4, 640.0], [61.5, 641.0], [61.6, 643.0], [61.7, 643.0], [61.8, 644.0], [61.9, 645.0], [62.0, 645.0], [62.1, 646.0], [62.2, 647.0], [62.3, 648.0], [62.4, 648.0], [62.5, 649.0], [62.6, 650.0], [62.7, 650.0], [62.8, 651.0], [62.9, 652.0], [63.0, 653.0], [63.1, 654.0], [63.2, 654.0], [63.3, 655.0], [63.4, 655.0], [63.5, 656.0], [63.6, 657.0], [63.7, 658.0], [63.8, 658.0], [63.9, 659.0], [64.0, 659.0], [64.1, 660.0], [64.2, 661.0], [64.3, 661.0], [64.4, 662.0], [64.5, 662.0], [64.6, 663.0], [64.7, 664.0], [64.8, 664.0], [64.9, 665.0], [65.0, 666.0], [65.1, 667.0], [65.2, 668.0], [65.3, 668.0], [65.4, 669.0], [65.5, 669.0], [65.6, 670.0], [65.7, 671.0], [65.8, 672.0], [65.9, 672.0], [66.0, 673.0], [66.1, 673.0], [66.2, 674.0], [66.3, 675.0], [66.4, 675.0], [66.5, 676.0], [66.6, 676.0], [66.7, 677.0], [66.8, 677.0], [66.9, 678.0], [67.0, 678.0], [67.1, 679.0], [67.2, 680.0], [67.3, 680.0], [67.4, 681.0], [67.5, 682.0], [67.6, 682.0], [67.7, 683.0], [67.8, 683.0], [67.9, 684.0], [68.0, 684.0], [68.1, 685.0], [68.2, 685.0], [68.3, 686.0], [68.4, 686.0], [68.5, 687.0], [68.6, 687.0], [68.7, 688.0], [68.8, 689.0], [68.9, 690.0], [69.0, 691.0], [69.1, 691.0], [69.2, 692.0], [69.3, 692.0], [69.4, 693.0], [69.5, 693.0], [69.6, 694.0], [69.7, 694.0], [69.8, 695.0], [69.9, 696.0], [70.0, 696.0], [70.1, 697.0], [70.2, 698.0], [70.3, 699.0], [70.4, 699.0], [70.5, 700.0], [70.6, 700.0], [70.7, 701.0], [70.8, 701.0], [70.9, 702.0], [71.0, 703.0], [71.1, 704.0], [71.2, 704.0], [71.3, 704.0], [71.4, 705.0], [71.5, 706.0], [71.6, 706.0], [71.7, 707.0], [71.8, 708.0], [71.9, 708.0], [72.0, 709.0], [72.1, 710.0], [72.2, 711.0], [72.3, 712.0], [72.4, 712.0], [72.5, 713.0], [72.6, 714.0], [72.7, 714.0], [72.8, 715.0], [72.9, 716.0], [73.0, 717.0], [73.1, 717.0], [73.2, 718.0], [73.3, 718.0], [73.4, 720.0], [73.5, 721.0], [73.6, 721.0], [73.7, 722.0], [73.8, 723.0], [73.9, 724.0], [74.0, 725.0], [74.1, 726.0], [74.2, 727.0], [74.3, 728.0], [74.4, 728.0], [74.5, 729.0], [74.6, 730.0], [74.7, 731.0], [74.8, 731.0], [74.9, 732.0], [75.0, 733.0], [75.1, 734.0], [75.2, 734.0], [75.3, 735.0], [75.4, 736.0], [75.5, 736.0], [75.6, 737.0], [75.7, 738.0], [75.8, 739.0], [75.9, 740.0], [76.0, 741.0], [76.1, 742.0], [76.2, 743.0], [76.3, 744.0], [76.4, 745.0], [76.5, 746.0], [76.6, 747.0], [76.7, 748.0], [76.8, 749.0], [76.9, 750.0], [77.0, 751.0], [77.1, 752.0], [77.2, 752.0], [77.3, 753.0], [77.4, 754.0], [77.5, 755.0], [77.6, 756.0], [77.7, 757.0], [77.8, 758.0], [77.9, 758.0], [78.0, 760.0], [78.1, 761.0], [78.2, 762.0], [78.3, 763.0], [78.4, 764.0], [78.5, 765.0], [78.6, 766.0], [78.7, 767.0], [78.8, 768.0], [78.9, 769.0], [79.0, 771.0], [79.1, 772.0], [79.2, 773.0], [79.3, 774.0], [79.4, 775.0], [79.5, 777.0], [79.6, 778.0], [79.7, 779.0], [79.8, 780.0], [79.9, 781.0], [80.0, 783.0], [80.1, 784.0], [80.2, 785.0], [80.3, 785.0], [80.4, 787.0], [80.5, 789.0], [80.6, 790.0], [80.7, 791.0], [80.8, 792.0], [80.9, 793.0], [81.0, 794.0], [81.1, 796.0], [81.2, 798.0], [81.3, 799.0], [81.4, 801.0], [81.5, 802.0], [81.6, 804.0], [81.7, 805.0], [81.8, 807.0], [81.9, 808.0], [82.0, 810.0], [82.1, 811.0], [82.2, 812.0], [82.3, 814.0], [82.4, 815.0], [82.5, 816.0], [82.6, 817.0], [82.7, 819.0], [82.8, 820.0], [82.9, 822.0], [83.0, 823.0], [83.1, 825.0], [83.2, 825.0], [83.3, 827.0], [83.4, 829.0], [83.5, 831.0], [83.6, 833.0], [83.7, 835.0], [83.8, 837.0], [83.9, 839.0], [84.0, 842.0], [84.1, 844.0], [84.2, 845.0], [84.3, 849.0], [84.4, 850.0], [84.5, 854.0], [84.6, 858.0], [84.7, 860.0], [84.8, 863.0], [84.9, 865.0], [85.0, 868.0], [85.1, 871.0], [85.2, 874.0], [85.3, 878.0], [85.4, 881.0], [85.5, 884.0], [85.6, 888.0], [85.7, 891.0], [85.8, 893.0], [85.9, 895.0], [86.0, 901.0], [86.1, 904.0], [86.2, 909.0], [86.3, 914.0], [86.4, 917.0], [86.5, 922.0], [86.6, 925.0], [86.7, 929.0], [86.8, 932.0], [86.9, 936.0], [87.0, 944.0], [87.1, 948.0], [87.2, 952.0], [87.3, 959.0], [87.4, 962.0], [87.5, 966.0], [87.6, 972.0], [87.7, 977.0], [87.8, 980.0], [87.9, 986.0], [88.0, 991.0], [88.1, 998.0], [88.2, 1007.0], [88.3, 1016.0], [88.4, 1027.0], [88.5, 1036.0], [88.6, 1045.0], [88.7, 1052.0], [88.8, 1058.0], [88.9, 1063.0], [89.0, 1071.0], [89.1, 1079.0], [89.2, 1084.0], [89.3, 1092.0], [89.4, 1100.0], [89.5, 1106.0], [89.6, 1112.0], [89.7, 1125.0], [89.8, 1134.0], [89.9, 1144.0], [90.0, 1150.0], [90.1, 1157.0], [90.2, 1169.0], [90.3, 1178.0], [90.4, 1185.0], [90.5, 1195.0], [90.6, 1210.0], [90.7, 1218.0], [90.8, 1225.0], [90.9, 1232.0], [91.0, 1246.0], [91.1, 1259.0], [91.2, 1271.0], [91.3, 1286.0], [91.4, 1301.0], [91.5, 1313.0], [91.6, 1329.0], [91.7, 1342.0], [91.8, 1351.0], [91.9, 1366.0], [92.0, 1379.0], [92.1, 1392.0], [92.2, 1407.0], [92.3, 1422.0], [92.4, 1438.0], [92.5, 1452.0], [92.6, 1475.0], [92.7, 1499.0], [92.8, 1515.0], [92.9, 1527.0], [93.0, 1544.0], [93.1, 1561.0], [93.2, 1572.0], [93.3, 1588.0], [93.4, 1607.0], [93.5, 1626.0], [93.6, 1651.0], [93.7, 1683.0], [93.8, 1702.0], [93.9, 1718.0], [94.0, 1735.0], [94.1, 1756.0], [94.2, 1782.0], [94.3, 1814.0], [94.4, 1839.0], [94.5, 1856.0], [94.6, 1874.0], [94.7, 1913.0], [94.8, 1944.0], [94.9, 1963.0], [95.0, 1992.0], [95.1, 2022.0], [95.2, 2059.0], [95.3, 2128.0], [95.4, 2182.0], [95.5, 2216.0], [95.6, 2248.0], [95.7, 2279.0], [95.8, 2325.0], [95.9, 2378.0], [96.0, 2402.0], [96.1, 2438.0], [96.2, 2491.0], [96.3, 2549.0], [96.4, 2598.0], [96.5, 2681.0], [96.6, 2729.0], [96.7, 2802.0], [96.8, 2843.0], [96.9, 2941.0], [97.0, 2973.0], [97.1, 3083.0], [97.2, 3159.0], [97.3, 3218.0], [97.4, 3331.0], [97.5, 3433.0], [97.6, 3629.0], [97.7, 3734.0], [97.8, 3867.0], [97.9, 3986.0], [98.0, 4063.0], [98.1, 4141.0], [98.2, 4254.0], [98.3, 4326.0], [98.4, 4487.0], [98.5, 4700.0], [98.6, 4891.0], [98.7, 5020.0], [98.8, 5152.0], [98.9, 5357.0], [99.0, 5802.0], [99.1, 6108.0], [99.2, 6622.0], [99.3, 6879.0], [99.4, 7365.0], [99.5, 7994.0], [99.6, 8927.0], [99.7, 9265.0], [99.8, 9914.0], [99.9, 11266.0], [100.0, 13111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2089.0, "series": [{"data": [[200.0, 939.0], [300.0, 2089.0], [400.0, 1477.0], [500.0, 1324.0], [600.0, 1539.0], [700.0, 1133.0], [800.0, 487.0], [900.0, 225.0], [1000.0, 133.0], [1100.0, 120.0], [1200.0, 88.0], [1300.0, 80.0], [1400.0, 59.0], [1500.0, 68.0], [1600.0, 45.0], [1700.0, 50.0], [1800.0, 41.0], [1900.0, 39.0], [2000.0, 24.0], [2100.0, 20.0], [2200.0, 32.0], [2300.0, 25.0], [2400.0, 22.0], [2500.0, 23.0], [2600.0, 13.0], [2800.0, 18.0], [2700.0, 13.0], [2900.0, 18.0], [3000.0, 11.0], [3100.0, 15.0], [3200.0, 10.0], [3300.0, 13.0], [3400.0, 6.0], [3500.0, 5.0], [3700.0, 8.0], [3600.0, 8.0], [3800.0, 11.0], [3900.0, 9.0], [4000.0, 11.0], [4100.0, 13.0], [4300.0, 7.0], [4200.0, 13.0], [4500.0, 5.0], [4600.0, 4.0], [4400.0, 6.0], [4800.0, 5.0], [4700.0, 6.0], [5000.0, 8.0], [4900.0, 10.0], [5100.0, 5.0], [5200.0, 5.0], [5300.0, 4.0], [5400.0, 2.0], [5500.0, 4.0], [5600.0, 2.0], [5800.0, 3.0], [5700.0, 1.0], [5900.0, 3.0], [6000.0, 4.0], [6100.0, 2.0], [6300.0, 2.0], [6500.0, 4.0], [6400.0, 3.0], [6600.0, 5.0], [6800.0, 4.0], [6700.0, 3.0], [6900.0, 1.0], [7000.0, 1.0], [7100.0, 4.0], [7300.0, 5.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 2.0], [7800.0, 2.0], [7900.0, 3.0], [8100.0, 1.0], [8500.0, 1.0], [8400.0, 1.0], [8600.0, 3.0], [8700.0, 1.0], [8300.0, 3.0], [8900.0, 1.0], [9200.0, 3.0], [9000.0, 4.0], [9100.0, 3.0], [9400.0, 2.0], [9600.0, 2.0], [9500.0, 2.0], [9700.0, 1.0], [9800.0, 3.0], [9900.0, 3.0], [10500.0, 1.0], [11000.0, 2.0], [11200.0, 2.0], [10900.0, 1.0], [11100.0, 2.0], [11600.0, 1.0], [11800.0, 1.0], [12400.0, 1.0], [12300.0, 1.0], [12700.0, 1.0], [12600.0, 1.0], [12900.0, 2.0], [13100.0, 1.0], [12800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 762.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5172.0, "series": [{"data": [[0.0, 4522.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5172.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 762.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6031913E12, "maxY": 96.23657843577085, "series": [{"data": [[1.6031913E12, 71.61881977671457], [1.60319142E12, 4.0], [1.60319136E12, 96.23657843577085]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group - Load", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319142E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 291.2352941176471, "minX": 1.0, "maxY": 7994.0, "series": [{"data": [[2.0, 6495.0], [3.0, 1359.8], [4.0, 1541.6666666666667], [5.0, 1683.8], [6.0, 1685.2], [7.0, 1464.2], [8.0, 1004.1666666666667], [9.0, 1723.75], [10.0, 1108.142857142857], [11.0, 1171.5], [12.0, 937.25], [13.0, 928.5], [14.0, 346.44444444444446], [15.0, 334.2307692307692], [16.0, 585.3], [17.0, 435.8888888888889], [18.0, 342.3636363636364], [19.0, 558.0833333333334], [20.0, 583.7692307692307], [21.0, 850.6666666666667], [22.0, 474.46153846153845], [23.0, 719.9999999999999], [24.0, 502.49999999999994], [25.0, 549.0], [26.0, 291.2352941176471], [27.0, 714.1666666666666], [28.0, 673.1666666666669], [29.0, 782.8333333333331], [30.0, 840.9285714285713], [31.0, 708.9677419354838], [32.0, 543.7727272727273], [33.0, 382.8181818181818], [34.0, 394.31034482758616], [35.0, 356.1764705882353], [36.0, 325.53125000000006], [37.0, 404.95121951219505], [38.0, 384.06060606060606], [39.0, 363.8055555555556], [40.0, 490.69444444444457], [41.0, 332.04878048780483], [42.0, 465.51351351351354], [43.0, 370.452380952381], [44.0, 474.0], [45.0, 390.1428571428571], [46.0, 448.4146341463414], [47.0, 565.4545454545455], [48.0, 446.4736842105263], [49.0, 373.9428571428572], [50.0, 401.61538461538464], [51.0, 420.6666666666668], [52.0, 426.15189873417717], [53.0, 438.2608695652174], [54.0, 720.6296296296296], [55.0, 719.9], [56.0, 412.488888888889], [57.0, 497.24528301886795], [58.0, 544.9705882352941], [59.0, 438.375], [60.0, 476.90909090909093], [61.0, 466.2837837837839], [62.0, 430.6666666666667], [63.0, 460.8333333333333], [64.0, 425.64444444444456], [65.0, 509.2499999999999], [66.0, 435.3260869565218], [67.0, 502.3023255813954], [68.0, 518.84], [69.0, 493.7358490566039], [70.0, 513.7241379310344], [71.0, 502.8421052631579], [72.0, 534.2021276595743], [73.0, 519.6666666666667], [74.0, 551.4666666666666], [75.0, 521.2295081967213], [76.0, 566.3571428571429], [77.0, 597.0352941176469], [78.0, 564.8], [79.0, 603.2898550724635], [80.0, 484.846153846154], [81.0, 622.8823529411765], [82.0, 705.6338028169016], [83.0, 586.9705882352941], [84.0, 725.5], [85.0, 683.0138888888887], [86.0, 485.99999999999994], [87.0, 676.2749999999997], [88.0, 777.7627118644067], [89.0, 666.4848484848483], [90.0, 638.2941176470588], [91.0, 641.7045454545454], [92.0, 716.0862068965516], [93.0, 762.4032258064515], [94.0, 725.9000000000002], [95.0, 674.9333333333333], [96.0, 607.5652173913044], [97.0, 688.525], [98.0, 618.8166666666664], [99.0, 631.036144578313], [100.0, 887.4161417899511], [1.0, 7994.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[87.3175210405506, 773.0614957918924]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 14.7, "minX": 1.6031913E12, "maxY": 636937.6166666667, "series": [{"data": [[1.6031913E12, 358331.1], [1.60319142E12, 666.75], [1.60319136E12, 636937.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6031913E12, 7900.2], [1.60319142E12, 14.7], [1.60319136E12, 14042.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319142E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 633.2113237639555, "minX": 1.6031913E12, "maxY": 6252.428571428572, "series": [{"data": [[1.6031913E12, 633.2113237639555], [1.60319142E12, 6252.428571428572], [1.60319136E12, 846.0031404217148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319142E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 627.3678894205202, "minX": 1.6031913E12, "maxY": 6249.428571428572, "series": [{"data": [[1.6031913E12, 627.3678894205202], [1.60319142E12, 6249.428571428572], [1.60319136E12, 837.9665021683907]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319142E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.42857142857142, "minX": 1.6031913E12, "maxY": 195.1691341408704, "series": [{"data": [[1.6031913E12, 128.0770866560341], [1.60319142E12, 40.42857142857142], [1.60319136E12, 195.1691341408704]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319142E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 246.0, "minX": 1.6031913E12, "maxY": 13111.0, "series": [{"data": [[1.6031913E12, 11636.0], [1.60319142E12, 7994.0], [1.60319136E12, 13111.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6031913E12, 254.0], [1.60319142E12, 3991.0], [1.60319136E12, 275.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6031913E12, 254.0], [1.60319142E12, 3991.0], [1.60319136E12, 276.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6031913E12, 254.0], [1.60319142E12, 3991.0], [1.60319136E12, 275.53599920272825]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6031913E12, 246.0], [1.60319142E12, 3991.0], [1.60319136E12, 250.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6031913E12, 435.5], [1.60319142E12, 6495.0], [1.60319136E12, 633.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319142E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 266.0, "minX": 1.0, "maxY": 6690.0, "series": [{"data": [[3.0, 6690.0], [5.0, 4617.5], [9.0, 311.0], [14.0, 332.5], [16.0, 347.0], [18.0, 332.5], [20.0, 350.5], [29.0, 312.0], [30.0, 544.5], [35.0, 306.0], [36.0, 298.5], [38.0, 331.5], [41.0, 283.0], [47.0, 275.0], [58.0, 396.5], [61.0, 328.0], [64.0, 433.5], [73.0, 266.0], [76.0, 342.0], [81.0, 329.0], [82.0, 277.5], [91.0, 306.0], [90.0, 319.0], [95.0, 327.0], [93.0, 338.0], [94.0, 464.0], [96.0, 333.0], [99.0, 369.0], [100.0, 313.5], [102.0, 441.0], [103.0, 449.0], [105.0, 560.0], [106.0, 357.0], [109.0, 355.0], [108.0, 645.5], [113.0, 345.0], [112.0, 415.0], [114.0, 412.5], [115.0, 533.0], [119.0, 350.0], [116.0, 415.5], [117.0, 480.5], [118.0, 716.5], [122.0, 356.0], [123.0, 682.0], [120.0, 628.5], [127.0, 439.0], [126.0, 525.0], [125.0, 535.0], [124.0, 575.5], [128.0, 670.0], [131.0, 676.5], [129.0, 620.0], [132.0, 709.5], [134.0, 685.0], [130.0, 707.5], [137.0, 482.5], [143.0, 679.0], [142.0, 663.5], [140.0, 682.5], [148.0, 598.0], [151.0, 512.0], [144.0, 608.5], [155.0, 452.0], [1.0, 5886.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 262.0, "minX": 1.0, "maxY": 6687.0, "series": [{"data": [[3.0, 6687.0], [5.0, 4613.0], [9.0, 308.0], [14.0, 326.0], [16.0, 345.0], [18.0, 330.5], [20.0, 348.0], [29.0, 309.0], [30.0, 536.5], [35.0, 301.0], [36.0, 296.5], [38.0, 326.0], [41.0, 280.0], [47.0, 270.0], [58.0, 388.5], [61.0, 327.0], [64.0, 431.0], [73.0, 262.0], [76.0, 339.5], [81.0, 325.0], [82.0, 272.5], [91.0, 305.0], [90.0, 316.0], [95.0, 321.0], [93.0, 336.0], [94.0, 461.5], [96.0, 328.5], [99.0, 362.0], [100.0, 311.0], [102.0, 439.0], [103.0, 445.0], [105.0, 554.0], [106.0, 356.0], [109.0, 352.0], [108.0, 639.5], [113.0, 341.0], [112.0, 412.0], [114.0, 402.0], [115.0, 524.0], [119.0, 347.0], [116.0, 411.5], [117.0, 472.0], [118.0, 706.0], [122.0, 354.5], [123.0, 679.0], [120.0, 622.5], [127.0, 436.5], [126.0, 516.0], [125.0, 529.0], [124.0, 571.5], [128.0, 666.5], [131.0, 673.5], [129.0, 615.0], [132.0, 706.0], [134.0, 683.0], [130.0, 702.0], [137.0, 476.5], [143.0, 676.5], [142.0, 659.5], [140.0, 679.5], [148.0, 595.0], [151.0, 508.0], [144.0, 602.5], [155.0, 442.0], [1.0, 5881.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 64.36666666666666, "minX": 1.6031913E12, "maxY": 109.9, "series": [{"data": [[1.6031913E12, 64.36666666666666], [1.60319136E12, 109.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319136E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6031913E12, "maxY": 111.45, "series": [{"data": [[1.6031913E12, 62.7], [1.60319142E12, 0.11666666666666667], [1.60319136E12, 111.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60319142E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6031913E12, "maxY": 111.45, "series": [{"data": [[1.6031913E12, 62.7], [1.60319142E12, 0.11666666666666667], [1.60319136E12, 111.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319142E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6031913E12, "maxY": 111.45, "series": [{"data": [[1.6031913E12, 62.7], [1.60319142E12, 0.11666666666666667], [1.60319136E12, 111.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60319142E12, "title": "Total Transactions Per Second"}},
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


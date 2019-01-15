import GLOBAL from '../scripts/constants.js';
import {BaseController} from "./BaseController.js";
import * as c3 from 'c3';
class ChartTestController extends BaseController {
    constructor(args) {
        super(args);

    }
    //init happend only when bind to page
    init(app) {
        console.log("dashboard");
        super.init(app);
        this.registerEvent();

        // var chart = c3.generate({
        //     bindto: '#chart',
        //     size: {
        //         height: 200
        //       },
        //     data: {
        //       columns: [
        //         ['data1', 30, 200, 100, 400, 150, 250],
        //         ['data2', 50, 20, 10, 40, 15, 25]
        //       ]
        //     }
        // });

        let jsonData = [
            {"brand":"Miwaukee","complete":50,"avgTime":5.4},
            {"brand":"AEG","complete":22,"avgTime":4.2},
            {"brand":"Makita","complete":15,"avgTime":4.9},
            {"brand":"Dewalt","complete":12,"avgTime":6.1},
            {"brand":"Paslode","complete":12,"avgTime":5.2},
            {"brand":"Other","complete":16,"avgTime":6.5},
        ];

        

        
        var chart = c3.generate({            
            size: {
                        height: 200,
                        width: 400 
                      },
            data: {
                type: 'bar',
              json:jsonData,
              keys: {
                 x: 'brand', // it's possible to specify 'x' when category axis
                value: ['complete']
              },
              labels: true
            },
            legend: {
                show: false
              },
            axis: {
              x: {
                 type: 'category'
              },
              y: {
                show: false
              }
            }
          });
          var chart2 = c3.generate({
            bindto: '#chart2',
            size: {
                        height: 200,
                        width: 400 
                      },
            data: {
                type: 'bar',
                types: {'avgTime':'line'},
              json:jsonData,
              keys: {
                 x: 'brand', // it's possible to specify 'x' when category axis
                value: ['complete','avgTime']
              },
              groups:[
                ['jobType','complete']
              ],
              axes: {
                'avgTime': 'y2' // ADD
              },
              labels: true
            },
            legend: {
                show: true
              },
            axis: {
              x: {
                 type: 'category'
              },
              y: {
                show: false
              },
              y2: {
                min :0,
                show: false
              }
            }
          });
    }

   
    registerEvent() {
        //bind this
        
    }



}
export {ChartTestController};
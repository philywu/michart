import GLOBAL from '../scripts/constants.js';
import DATA from '../util/data.js';
import {
    RemoteUtil
} from '../util/util.js';
import {
    BaseController
} from './BaseController.js';
import * as c3 from 'c3';
import {
    DashChart 
} from '../component/DashChart.js';

class DashboardController extends BaseController {
    constructor(args) {
       super(args);

    } 
    //init happend only when bind to page
    genCard(card, container, chartOption) {
        let template = document.getElementById('dash-chart-card-template');
        //let templateContent = template.content;
        let cardFragment = template.content.cloneNode(true);
        let cardElement = cardFragment.querySelector('.dash-chart-card');
        cardElement.innerHTML = eval('`' + cardElement.innerHTML + '`');

        if (card.chartId) {
            let chartContainer = cardFragment.querySelector('.chart-container');
            if (chartContainer) {
                chartContainer.id = card.chartId;
            }
        }

        container.appendChild(cardFragment);

        if (chartOption) {
            chartOption.bindto = '#' + card.chartId;
            // chartOption.data = chartData;      
            // console.log(chartOption);     
            var chart = c3.generate(chartOption);
            //chart.load(chartData);
            //     bindto: '#chart2',
        }

    }
    async init(app) {
        super.init(app);
        this.registerEvent();
        

        let chartContainer = document.querySelector('#sec_ca_chart .card-container');

       
        let chartData = {
            type: 'bar',            
            keys: {
                x: 'brand',
                value: ['complete']
            },
            labels: true
        };

        let chartOption = {

            data: chartData,
            legend: {
                show: false
            },
            bar: {
                width: {
                    ratio: 0.4
                }
            },
            axis: {
                x: {
                    type: 'category'
                },
                y: {
                    show: false
                }
            }
        };
        let cardInfo = {
            title: 'Count By Brand',
            chartId: 'chart_cbb',
            };

             //Chart of Count By Brand
        let apiURL = 'api/data/brandList';
        let json = await RemoteUtil.getJsonFromAPIServer(apiURL);
           // console.log(json);
           chartData.json = json ; 
          
            this.genCard(cardInfo, chartContainer, chartOption);

            //Chart of Av Turnaround by Brand     
            cardInfo = Object.assign(cardInfo, {
                title: 'Av Turnaround by Brand',
                chartId: 'chart_abb',
            });
            chartData.keys.value = ['avgTime'];
            this.genCard(cardInfo, chartContainer, chartOption);

        
        apiURL = 'api/data/jobTypeList';
        //Chart of Count by Job Type
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
           // console.log(json);
           chartData.json = json ; 
          
           cardInfo = Object.assign(cardInfo, {
            title: 'Count by Job Type',
            chartId: 'chart_cbj',
        });
        chartData.json = json;
        chartData.keys.x = 'jobType';
        chartData.keys.value = ['complete'];
        this.genCard(cardInfo, chartContainer, chartOption);

        //Av Turnaround by Job Type
        cardInfo = Object.assign(cardInfo, {
            title: 'Av Turnaround by Job Type',
            chartId: 'chart_abj',
        });

        chartData.keys.value = ['avgTime'];
        this.genCard(cardInfo, chartContainer, chartOption);


       //Chart of Count by Customer Type
       apiURL = 'api/data/customerTypeList';
       json = await RemoteUtil.getJsonFromAPIServer(apiURL);
            // console.log(json);
            cardInfo = Object.assign(cardInfo, {
                title: 'Count by Customer Type',
                chartId: 'chart_cbc',
            });
            chartData.json = json;
            chartData.keys.x = 'customerType';
            chartData.keys.value = ['complete'];
            this.genCard(cardInfo, chartContainer, chartOption);
    
            //Av Turnaround by Customer Type
            cardInfo = Object.assign(cardInfo, {
                title: 'Av Turnaround by Customer Type',
                chartId: 'chart_abc',
            });
    
            chartData.keys.value = ['avgTime'];
            this.genCard(cardInfo, chartContainer, chartOption);
 
         apiURL = 'api/data/ageList';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
            // console.log(json);
            chartContainer = document.querySelector('#sec_age_chart .card-container');
            //Chart of Count of Jobs by Age
            cardInfo = Object.assign(cardInfo, {
                title: 'Count by Age',
                chartId: 'chart_coa',
            });
            chartData.json = json;
            chartData.keys.x = 'age';
            chartData.keys.value = ['total'];
            this.genCard(cardInfo, chartContainer, chartOption);
    

         apiURL = 'api/data/difficultyList';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
            // console.log(json);
          chartContainer = document.querySelector('#sec_dif_chart .card-container');
            
         //Chart of Count of Jobs by Difficulty
         cardInfo = Object.assign(cardInfo, {
             title: 'Count by Difficulty',
             chartId: 'chart_cod',
         });
         chartData.json = json;
         chartData.keys.x = 'difficulty';
         chartData.keys.value = ['total'];
         this.genCard(cardInfo, chartContainer, chartOption);

         apiURL = 'api/data/ageJob';
         // dash chart
         json = await RemoteUtil.getJsonFromAPIServer(apiURL);
         let dcContainer= document.querySelector('#dcc');
         let dc1 = new DashChart();
         dc1.loadData(json,'age','received');
         dc1.appendTo(dcContainer);
        
    }


    registerEvent() {
        //bind this
        document.querySelector('#toTest').addEventListener('click', evt => {
            this.app.route('chart_test');
        });
    }

}
export {
    DashboardController
};
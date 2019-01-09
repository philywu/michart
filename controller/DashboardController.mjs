import GLOBAL from '../scripts/constants.mjs';
import DATA from "../util/data.mjs";
import {
    BaseController
} from "./BaseController.mjs";


class DashboardController extends BaseController {
    constructor(args) {
        super(args);

    }
    //init happend only when bind to page
    genCard(card,container,chartOption){
        let template = document.getElementById('dash-chart-card-template');
        //let templateContent = template.content;
        let cardFragment = template.content.cloneNode(true);
        let cardElement = cardFragment.querySelector(".dash-chart-card");
        cardElement.innerHTML = eval("`" + cardElement.innerHTML + "`");

        if (card.chartId){
            let chartContainer = cardFragment.querySelector(".chart-container");
            if (chartContainer){
                chartContainer.id = card.chartId;                
            }
        }

        container.appendChild(cardFragment);

        if ( chartOption){
            chartOption.bindto = '#'+ card.chartId;
           // chartOption.data = chartData;      
          // console.log(chartOption);     
            var chart = c3.generate(chartOption);
            //chart.load(chartData);
                //     bindto: '#chart2',
        }

    }
    init(app) {
        console.log("dashboard");
        super.init(app);
        this.registerEvent();
        
        let chartContainer = document.querySelector('#sec_ca_chart .card-container');

        let jsonData = DATA['brandList'];

        let chartData =   {
            type: 'bar',
            json:jsonData,
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

         //Chart of Count By Brand
        let cardInfo = {
            title:'Count By Brand',
            chartId : 'chart_cbb',            
        };
        
        this.genCard(cardInfo,chartContainer,chartOption);

        //Chart of Av Turnaround by Brand     
        cardInfo = Object.assign(cardInfo,{
            title:'Av Turnaround by Brand',
            chartId : 'chart_abb',
        });
        chartData.keys.value = ['avgTime'];
        this.genCard(cardInfo,chartContainer,chartOption);

        jsonData = DATA['jobTypeList'];

        //Chart of Count by Job Type
        cardInfo = Object.assign(cardInfo,{
            title:'Count by Job Type',
            chartId : 'chart_cbj',
        });
        chartData.json = jsonData; 
        chartData.keys.x = 'jobType';
        chartData.keys.value = ['complete'];
        this.genCard(cardInfo,chartContainer,chartOption);

        //Av Turnaround by Job Type
        cardInfo = Object.assign(cardInfo,{
            title:'Av Turnaround by Job Type',
            chartId : 'chart_abj',
        });
                
        chartData.keys.value = ['avgTime'];
        this.genCard(cardInfo,chartContainer,chartOption);

        jsonData = DATA['customerTypeList'];

        //Chart of Count by Customer Type
        cardInfo = Object.assign(cardInfo,{
            title:'Count by Customer Type',
            chartId : 'chart_cbc',
        });
        chartData.json = jsonData; 
        chartData.keys.x = 'customerType';
        chartData.keys.value = ['complete'];
        this.genCard(cardInfo,chartContainer,chartOption);

        //Av Turnaround by Customer Type
        cardInfo = Object.assign(cardInfo,{
            title:'Av Turnaround by Customer Type',
            chartId : 'chart_abc',
        });
                
        chartData.keys.value = ['avgTime'];
        this.genCard(cardInfo,chartContainer,chartOption);
        
        chartContainer = document.querySelector('#sec_age_chart .card-container');
        jsonData = DATA['ageList'];
         //Chart of Count of Jobs by Age
        cardInfo = Object.assign(cardInfo,{
            title:'Count by Age',
            chartId : 'chart_coa',
        });
        chartData.json = jsonData; 
        chartData.keys.x = 'age';
        chartData.keys.value = ['total'];
        this.genCard(cardInfo,chartContainer,chartOption);

        chartContainer = document.querySelector('#sec_dif_chart .card-container');
        jsonData = DATA['difficultyList'];
         //Chart of Count of Jobs by Difficulty
        cardInfo = Object.assign(cardInfo,{
            title:'Count by Age',
            chartId : 'chart_cod',
        });
        chartData.json = jsonData; 
        chartData.keys.x = 'difficulty';
        chartData.keys.value = ['total'];
        this.genCard(cardInfo,chartContainer,chartOption);
    }


    registerEvent() {
        //bind this
        document.querySelector("#toTest").addEventListener("click", evt => {
            this.app.route("chart_test");
        })
    }



}
export {
    DashboardController
};
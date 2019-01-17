import {GraphChart} from './GraphChart.js';
import * as c3 from 'c3';
const CHART_OPTION = {
    data :{
        type: 'bar',       
        labels: true
    },
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
class BarChart  extends GraphChart{
    constructor(args){
        super(args);
        this.title = args.title;
        this.chartId = args.chartId;
        this.chartOption = Object.assign(CHART_OPTION); 
        this.chartOption.bindto = '#' + this.chartId;
        this.x = args.x ; 
        this.y = args.y ; 
       
    }
    loadJson(json){
       
        this.chartOption.data.json = json;
    }
    build(container,json,isIntial) {
        if (isIntial){
            container.innerHTML = '';
        }
        if (json){
            this.loadJson(json);
        } 
       
        this.component = this.genComponent();
        if (this.chartId) {
            let chartContainer = this.component.querySelector('.chart-container');
            if (chartContainer) {
                chartContainer.id = this.chartId;
            }
            container.appendChild(this.component);
            this.draw();             
        }

        return this.component;
    }
    draw(){
        if (this.chartOption) {
            this.chartOption.bindto = '#' + this.chartId;
            this.chartOption.data.keys = {
                x: this.x,
                value: this.y
            };
            // chartOption.data = chartData;      
            // console.log(this.chartOption);     
            var chart = c3.generate(this.chartOption);
            //chart.load(chartData);
            //     bindto: '#chart2',
        }
    }
}
export {BarChart};
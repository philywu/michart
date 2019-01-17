import {GraphChart} from './GraphChart.js';
import * as c3 from 'c3';
const DATA_TYPE = {
    'JSON':'JSON',
    'COLUMN':'COLUMN'
};
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

    static get DATA_TYPE() {
        return DATA_TYPE;
    }
    constructor(args){
        super(args);
        this.dataType = args.dataType;
        this.title = args.title;
        this.chartId = args.chartId;
        this.chartOption = Object.assign(CHART_OPTION); 
        this.chartOption.bindto = '#' + this.chartId;
        this.x = args.x ; 
        this.y = args.y ; 
       
    }
    loadJson(json){
        if (this.dataType === DATA_TYPE.JSON){
        this.chartOption.data.json = json;
        }
        if (this.dataType === DATA_TYPE.COLUMN){
            let keys = Object.keys(json);
            let values = Object.values(json);
            let x = ['x', ...keys];
            let column = ['job count', ...values];
            
            this.chartOption.data.x = 'x';
            this.chartOption.data.columns = [x,column];
            
        }

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
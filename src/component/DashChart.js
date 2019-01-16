import {ChartComponent} from './ChartComponent.js';
var data ; 

class DashChart extends ChartComponent{
   
    constructor(args) {
        super(args);
        this.dataSet = [];
     } 
    loadData(list,headerName,contentName){
        if (list && list.length>0){
            this.dataSet = list.map(item =>{
                let data = {
                    header:item[headerName],
                    content:item[contentName]
                };
                return data; 
            });
        } 
    }
    appendTo(container){
        let html = '';
        for (let item of this.dataSet){
           
             html += this._render(item);
        }
        container.innerHTML += html ;
    }
    _render (data) {
        return `<div class="dash-number-card">
        <div class="header">${data.header}</div>
        <div class="body">
          <h3>${data.content}</h3>
        </div>
        </div>`;
    }
}
export {DashChart};
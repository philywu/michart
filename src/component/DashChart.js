import {ChartComponent} from './ChartComponent.js';
var data ; 

class DashChart extends ChartComponent{
   
    constructor(args) {
        super(args);
 
     } 
    loadData(json){
        this.json = json ; 
    }
    appendTo(container){
        let html = '';
        for (let item of this.json){
            let data = {};
            data.header = `test1`;
            data.content = `test2`;
             html += this._render(data);
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
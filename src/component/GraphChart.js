import {ChartComponent} from './ChartComponent.js';
var data ; 

class GraphChart  extends ChartComponent{
    constructor(args){
        super(args);
    }
    genComponent(){
        return this.buildComponentFragment(
             `<div class="card graph-chart-card">
             <div class="card-header">
               ${this.title}
             </div>
             <div class="card-body">
               <div class="chart-container"></div>
             </div>
           </div>`
        );
        
          
    }
    
}
export {GraphChart};
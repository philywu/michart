import {ChartComponent} from './ChartComponent.js';
var data ; 

class DashChart extends ChartComponent{
   
    constructor(args) {
        super(args);
        this.dataSet = [];
       // console.log(args);
       if (args){
           this.title = args.title;
           this.dataType = args.dataType;
           this.fields = args.fields;
           
       }
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
    loadJson (json){
        if (this.fields){
            this.dataSet = this.fields.map(item =>{
                return {
                        header:item.header,
                        content:json[item.field]                    
                    };            
            });
        }
    }
    build(json){
        if (json){
            this.loadJson(json);
        } 
        this.component = this._genComponent();
        let itemDiv = this.component.querySelector('.number-card-group');

        for (let item of this.dataSet){
            itemDiv.appendChild(this._genItem(item));
        }
        return this.component;
    }
    
    _genComponent(){
        return this.buildComponentFragment(
             `<div id="sec_job_receive" class="number-card-container">
          <div class="number-card-title">${this.title}</div>
          <div class="number-card-group"></div></div>`
        );
        
          
    }
    _genItem (data) {
        return  this.buildComponentFragment(
            `<div class="dash-number-card">
        <div class="header">${data.header}</div>
        <div class="body">
          <h3>${data.content}</h3>
        </div>
        </div>`
        );
    }
}
export {DashChart};
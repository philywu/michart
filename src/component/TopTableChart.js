import {TableChart} from './TableChart.js';
class TopTableChart extends TableChart{
   
    constructor(args) {
        super(args);
        if (args){
            this.title = args.title;         
            this.fields = args.fields;
            this.topN = args.topN||10;
            this.dataSet =[];
        }
    }
    build(container,json,isIntial){
        if(json){
            this.loadJson(json);
        }
        if (isIntial){
           this.clearContainer(container);
        }
       
        this.component = this._genComponent();
        let thead =  this.component.querySelector('thead');
        thead.innerHTML = this._genTH();
        let tbody = this.component.querySelector('tbody');
        console.log(this.dataSet);
        for (let i=0;i<this.topN;i++){
            let item = (i<this.dataSet.length?this.dataSet[i]:{});
            
            let tr = document.createElement('tr');
            tr.innerHTML = this._genTR(i,item);
            
            tbody.appendChild(tr);
        }
        container.appendChild(this.component);
    }
    loadJson(json){
        
        this.dataSet = json;
    }
    _genComponent(){
        return this.buildComponentFragment(
            `<div class="table-chart-container">
            <div class="title">${this.title}</div>
            <table class="table table-bordered top10table" >  
            <thead>
            
            </thead>
            <tbody>           
            </tbody>
            </table>
            `
        );
        
          
    }
    _genTH(){
        let th = '<th>No.</th>';
        for (let f of this.fields){
            th += `<th>${f.header ||''}</th>`;
        }
        return  `
        <tr class="table-secondary">${th}
            </tr>
            `;
        
    }
    _genTR(n,item){
        let td =  `<td>${n+1}</td>`;
        for (let f of this.fields){
            td += `<td>${item[f.field] ||''}</td>`;
        }
        return td;
        
    }

   
}
export {TopTableChart};
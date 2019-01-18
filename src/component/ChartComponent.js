import { HTMLComponent } from './HTMLComponent.js';

class ChartComponent extends HTMLComponent{
    constructor (args){
        super(args);
    }
    clearContainer(container){
        container.innerHTML = '';
    }
}
export {ChartComponent};
class HTMLComponent {
    constructor (args){
    }
    buildComponentFragment(html){
       return  document.createRange().createContextualFragment(html);
    }
}
export {HTMLComponent};
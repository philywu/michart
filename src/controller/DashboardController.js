import GLOBAL from '../scripts/constants.js';
import DATA from '../util/data.js';
import {
    RemoteUtil
} from '../util/util.js';
import {
    BaseController
} from './BaseController.js';
import * as c3 from 'c3';
import {
    DashChart
} from '../component/DashChart.js';
import {
    BarChart
} from '../component/BarChart.js';
class DashboardController extends BaseController {
    constructor(args) {
        super(args);

    }
    //init happend only when bind to page
    genCard(card, container, chartOption) {
        let template = document.getElementById('dash-chart-card-template');
        //let templateContent = template.content;
        let cardFragment = template.content.cloneNode(true);
        let cardElement = cardFragment.querySelector('.dash-chart-card');
        cardElement.innerHTML = eval('`' + cardElement.innerHTML + '`');

        if (card.chartId) {
            let chartContainer = cardFragment.querySelector('.chart-container');
            if (chartContainer) {
                chartContainer.id = card.chartId;
            }
        }

        container.appendChild(cardFragment);

        if (chartOption) {
            chartOption.bindto = '#' + card.chartId;
            // chartOption.data = chartData;      
            // console.log(chartOption);     
            var chart = c3.generate(chartOption);
            //chart.load(chartData);
            //     bindto: '#chart2',
        }

    }
    async init(app) {
        super.init(app);
        this.registerEvent();

    //     //Chart of Count By Brand
    //     let apiURL = 'api/data/brandList';
    //     let json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    //     // console.log(json);
       

    //     let gcBar = document.querySelector('#gc_bar');
    //     let chartBar = new BarChart({
    //         'dataType': 'json',
    //         'title': 'Count By Brand',
    //         'chartId':'c_cbb',
    //         'x':'brand',
    //         'y':['complete']
    //     });
       
    //     chartBar.build(gcBar,json,true);      

        
    //     chartBar.title =  'Av Turnaround by Brand';
    //     chartBar.chartId = 'c_abb';
    //     chartBar.y = ['avgTime'];
    //     chartBar.build(gcBar,json);     

    //     apiURL = 'api/data/jobTypeList';
    //     //Chart of Count by Job Type
    //     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
      
    //   //job type chart    
    //     chartBar.title =  'Count by Job Type';
    //     chartBar.chartId = 'c_cbj';
    //     chartBar.x = 'jobType';
    //     chartBar.y = ['complete'];
    //     chartBar.build(gcBar,json);  

    //     chartBar.title =  'Av Turnaround by Job Typ';
    //     chartBar.chartId = 'c_abj';
    //     chartBar.x = 'jobType';
    //     chartBar.y = ['avgTime'];
    //     chartBar.build(gcBar,json);  

    //     apiURL = 'api/data/customerTypeList';
    //     //Chart of Count by Job Type
    //     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    //     //customer bar chart
    //     chartBar.title =  'Count by Customer Type';
    //     chartBar.chartId = 'c_cbc';
    //     chartBar.x = 'customerType';
    //     chartBar.y = ['complete'];
    //     chartBar.build(gcBar,json);  

    //     chartBar.title =  'Av Turnaround by Customer Type';
    //     chartBar.chartId = 'c_abc';
    //     chartBar.x = 'customerType';
    //     chartBar.y = ['avgTime'];
    //     chartBar.build(gcBar,json);  



    //     apiURL = 'api/data/ageList';
    //     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    //     gcBar = document.querySelector('#sec_age_chart');
    //     chartBar.title =  'Count by Age';
    //     chartBar.chartId = 'c_coa';
    //     chartBar.x = 'age';
    //     chartBar.y = ['total'];
    //     chartBar.build(gcBar,json); 

    //     apiURL = 'api/data/difficultyList';
    //     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    //     gcBar = document.querySelector('#sec_dif_chart');
    //     chartBar.title =  'Count by Difficulty';
    //     chartBar.chartId = 'c_cod';
    //     chartBar.x = 'difficulty';
    //     chartBar.y = ['total'];
    //     chartBar.build(gcBar,json); 
    //     // // console.log(json);
        
    //Chart of Count By Brand
    let apiURL = 'api/data/countByBrand';
    let json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    // console.log(json);


    let gcBar = document.querySelector('#gc_bar');
    let chartBar = new BarChart({
        'dataType': BarChart.DATA_TYPE.COLUMN,
        'title': 'Count By Brand',
        'chartId':'c_cbb',        
    });
    chartBar.build(gcBar,json,true);

    // count by job type
    apiURL = 'api/data/countByJobType';
    json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    
    chartBar.title =  'Count By Job Type';
    chartBar.chartId = 'c_cbj';
    
    chartBar.build(gcBar,json);

    //count by customer type
    apiURL = 'api/data/countByCustomerType';
    json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    
    chartBar.title =  'Count By Customer Type';
    chartBar.chartId = 'c_cbc';
    
    chartBar.build(gcBar,json);

    // averag TAT by brand
    apiURL = 'api/data/avTATByBrand';
    json = await RemoteUtil.getJsonFromAPIServer(apiURL);
    
    chartBar.title =  'Av Turnaround by Brand';
    chartBar.chartId = 'c_abb';
    
    chartBar.build(gcBar,json);
    
     // avery by job type
     apiURL = 'api/data/avTATByJobType';
     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
     
     chartBar.title =  'Count By Job Type';
     chartBar.chartId = 'c_abj';
     
     chartBar.build(gcBar,json);
 
     //avery by customer type
     apiURL = 'api/data/avTATByCustomerType';
     json = await RemoteUtil.getJsonFromAPIServer(apiURL);
     
     chartBar.title =  'Count By Customer Type';
     chartBar.chartId = 'c_abc';
     
     chartBar.build(gcBar,json);

     apiURL = 'api/data/jobByAge';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
        gcBar = document.querySelector('#sec_age_chart');
        chartBar.title =  'Count by Age';
        chartBar.chartId = 'c_coa';
   
         chartBar.build(gcBar,json); 

        apiURL = 'api/data/jobByDifficulty';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
        gcBar = document.querySelector('#sec_dif_chart');
        chartBar.title =  'Count by Difficulty';
        chartBar.chartId = 'c_cod';        
        chartBar.build(gcBar,json); 
    //     // // console.log(json);


        // dash chart
        apiURL = 'api/data/ageJob';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);

        let dcJob = document.querySelector('#dc_job');
        let chartJob = new DashChart({
            'dataType': 'json',
            'title': 'Job Received',
            'fields': [{
                    'header': '7 days',
                    'field': 'jobreceived7days'
                },
                {
                    'header': '30 days',
                    'field': 'jobreceived30days'
                }
            ]
        });
        chartJob.build(dcJob,json,true);
        
        // for job complete
        chartJob.title = 'Job Completed';
        chartJob.fields = [{
                'header': '7 days',
                'field': 'jobcompleted7days'
            },
            {
                'header': '30 days',
                'field': 'jobcompleted30days'
            }
        ];
        chartJob.build(dcJob,json);
        

        // for current Jobs
        chartJob.title = 'Current Jobs';
        chartJob.fields = [{
                'header': 'Backlogs',
                'field': 'countbacklog'
            },
            {
                'header': 'vs 7 days ago',
                'field': 'backlogvslast7days'
            },
            {
                'header': 'Backlog days',
                'field': 'backlogdays'
            }
        ];
        chartJob.build(dcJob,json);
        

        //action chart
        let dcAction = document.querySelector('#dc_action');
        apiURL = 'api/data/avTATByAction';
        // dash chart
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
        let chartAction = new DashChart({
            'dataType': 'json',
            'title': 'Job Received',            
            'fields': [{
                    'header': 'Assess Product',
                    'field': 'assessProduct'
                },
                {
                    'header': 'Parts /Claim',
                    'field': 'partsClaim'
                },
                {
                    'header': 'Awaiting Parts',
                    'field': 'awaitingParts'
                },
                {
                    'header': 'Complete Repair',
                    'field': 'completeRepair'
                },
                {
                    'header': 'Delivery Product',
                    'field': 'deliveryProduct'
                }
            ]
        });
        chartAction.build(dcAction,json);

        apiURL = 'api/data/avTATByTotal7Days';
        // dash chart
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);
        chartAction.title = 'Total';
        chartAction.fields = [{
                'header': 'Total Repair',
                'field': 'totalRepair'
            },
            {
                'header': 'Total Overall',
                'field': 'totalOverall'
            }
        ];
        chartAction.build(dcAction,json);


        //chart customer 
        apiURL = 'api/data/customerCount';
        json = await RemoteUtil.getJsonFromAPIServer(apiURL);

        let dcCustomer = document.querySelector('#dc_customer');
        let chartCustomer = new DashChart({
            'dataType': 'json',
            'title': 'New Customers - Direct',
            'fields': [{
                    'header': '7 days',
                    'field': 'newdirect7days'
                },
                {
                    'header': '30 days',
                    'field': 'newdirect30days'
                }
            ]
        });
        chartCustomer.build(dcCustomer,json,true);
        dcCustomer.appendChild(chartCustomer.component);

        // for new retailer customer
        chartCustomer.title = 'New Customer - Retailer';
        chartCustomer.fields = [{
                'header': '7 days',
                'field': 'newretailer7days'
            },
            {
                'header': '30 days',
                'field': 'newretailer30days'
            }
        ];
        chartCustomer.build(dcCustomer,json);
        //dcCustomer.appendChild(chartCustomer.component);

        // for return customer
        chartCustomer.title = 'Return Customer - 30 days';
        chartCustomer.fields = [{
                'header': 'Direct',
                'field': 'returndirect30days'
            },
            {
                'header': 'Retailer',
                'field': 'returnretailer30days'
            }
        ];
        chartCustomer.build(dcCustomer,json);
        //dcCustomer.appendChild(chartCustomer.component);

        
         
    }


    registerEvent() {
        //bind this
        document.querySelector('#toTest').addEventListener('click', evt => {
            this.app.route('chart_test');
        });
    }

}
export {
    DashboardController
};
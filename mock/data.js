module.exports = {
    "brandList": [{
            "brand": "Miwaukee",
            "complete": 50,
            "avgTime": 5.4
        },
        {
            "brand": "AEG",
            "complete": 22,
            "avgTime": 4.2
        },
        {
            "brand": "Makita",
            "complete": 15,
            "avgTime": 4.9
        },
        {
            "brand": "Dewalt",
            "complete": 12,
            "avgTime": 6.1
        },
        {
            "brand": "Paslode",
            "complete": 12,
            "avgTime": 5.2
        },
        {
            "brand": "Other",
            "complete": 16,
            "avgTime": 6.5
        },
    ],
    "jobTypeList": [{
            "jobType": "Warranty",
            "complete": 82,
            "avgTime": 5.8
        },
        {
            "jobType": "General",
            "complete": 45,
            "avgTime": 5.2
        }
    ],
    "customerTypeList": [{
            "customerType": "Retailer",
            "complete": 70,
            "avgTime": 6.1
        },
        {
            "customerType": "Direct",
            "complete": 57,
            "avgTime": 4.8
        }
    ],
    "ageList": [{
            "age": "<3 days",
            "total": 25
        },
        {
            "age": "<7 days",
            "total": 76
        },
        {
            "age": "<14 days",
            "total": 10
        },
        {
            "age": "14 days+",
            "total": 3
        },
    ],
    "difficultyList": [{
            "difficulty": "Low",
            "total": 37
        },
        {
            "difficulty": "Medium",
            "total": 54
        },
        {
            "difficulty": "High",
            "total": 23
        },

    ],
    "ageJob":{
        "jobreceived7days":56,
        "jobcompleted7days":2,
        "jobreceived30days":120,
        "jobcompleted30days":4,
        "countbacklog":116,
        "backlogvslast7days":54,
        "backlogdays":870,
    },
    "customerCount":{
        "newdirect7days":5,
        "newdirect30days":26,
        "newretailer7days":12,
        "newretailer30days":57,
        "returndirect30days":12,
        "returnretailer30days":17,
    },
    "avTATByAction":{
        "assessProduct":0.4,
        "partsClaim":0.2,
        "awaitingParts":1.7,
        "completeRepair":0.8,
        "deliveryProduct": 1.3,
        "total":4.4
    },
    "ageJobs" :[
        {
            "age":"7 days",
            "received":121,
            "completed":127
        },
        {
            "age":"30 days",
            "received":463,
            "completed":493
        }
    ],
    "currentJobs":[
        {
            "category":"Backlog",
            "count":114
        },
        {
            "category":"vs 7 days ago",
            "count":-12
        },
        {
            "category":"Backlog days",
            "count":5.4
        },
    ],
    "statusTurnaround":[{
            "status":"Asset Product",
            "time": 0.4
        },
        {
            "status":"Parts ? Claim",
            "time": 0.2
        },
        {
            "status":"Await Parts",
            "time": 1.7
        },
        {
            "status":"Complete Repair",
            "time": 0.8
        },
        {
            "status":"Deliver Product",
            "time": 1.3
        },
        {
            "status":"Total",
            "time": 4.4
        }
    ],
    "newCustomerList":[
        {
            "age":"7 days",
            "direct":5,
            "retailer":12
        },
        {
            "age":"30 days",
            "direct":26,
            "retailer":57
        },
    ],
    "returCustomerList":[
        
        {
            "type":"Direct",
            "age":"30 days",
            "count":12
        },
        {
            "type":"Retailer",
            "age":"30 days",
            "count":17
        },
    ]
}
export function listTransactions(req, res) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    today.setDate(today.getDate() + 5);
    var validity = today;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const transactionDenied = {
        "number": 441,
        "emission": date ,
        "validity": validity.getFullYear()+'-'+(validity.getMonth()+1)+'-'+validity.getDate(),
        "time": time,
        "value": 514.80,
        "flag": "mastercard",
        "type": "debito",
        "period": 1,
        "status": "negada",
        "tag": "TAG",
        
    }

    const transactionAproved = {
        "number": 441,
        "emission": date ,
        "validity": validity.getFullYear()+'-'+(validity.getMonth()+1)+'-'+validity.getDate(),
        "time": time,
        "value": 514.80,
        "flag": "mastercard",
        "type": "credito",
        "period": 12,
        "status": "aprovada",
        "tag": "TAG",
    }

    let transactions =  {
        "transactions": [transactionDenied, transactionDenied, transactionAproved, transactionDenied, transactionAproved, transactionDenied ]
    };
    
    res.send(transactions);
}


export function listReceivable(req, res) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    today.setDate(today.getDate() + 5);
    var validity = today;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    constReceivable = {
        "number": 441,
        "emission": date ,
        "validity": validity.getFullYear()+'-'+(validity.getMonth()+1)+'-'+validity.getDate(),
        "time": time,
        "value": 514.80,
        "flag": "mastercard",
        "type": "debito",
        "period": 1,
        "status": "negada",
        "tag": "TAG",
        
    }
    
}
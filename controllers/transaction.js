//Dados gerados para manipulação
var tax = 0;  
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
today.setDate(today.getDate() + 5);
var validity = today;
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 

var transactionAproved = {
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

var receivable = {
    "id": 1,
    "number": transactionAproved.number,
    "emission": transactionAproved.emission,
    "validity": transactionAproved.validity,
    "time": transactionAproved.time,
    "value": transactionAproved.value - (tax * transactionAproved),
    "flag": transactionAproved.flag,
    "type": transactionAproved.type,
    "period": transactionAproved.type,
    "status": transactionAproved.status,
    "tag": transactionAproved.tag,
    "paid": true        
}

export function listTransactions(req, res) {
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

    let transactions =  {
        "transactions": [transactionDenied, transactionDenied, transactionAproved, transactionDenied, transactionAproved, transactionDenied ]
    };
    
    res.status(200).send(transactions);
}


export function listReceivable(req, res) {
    let receivables =  {
        "receivables": [receivable, receivable, receivable, receivable ]
    };
    
    res.status(200).send(receivables);
    
}

export function anticipateReceivables(req, res) {
    const receivableId = req.body.id;
    const antecipateData = req.body.antecipate

    //Checagem dos valores e "checa a validade do Id" (no caso compara com o objeto previamente criado mas o ideal seria buscar num banco de dados)
    if(antecipateData && receivableId && receivableId === receivable.id) {
        const newReceivable = receivable
        newReceivable.date = antecipateData.date;
        newReceivable.value = antecipateData.value;
        
        res.status(200).send(newReceivable);
    } else {
        res.status(500).send('Recebivel nao existente!');      
    }    
    
}
const { Parser } = require('json2csv');

//Dados gerados para manipulação
var tax = 0.03;  

const transactionAproved = {
    "number": 441,
    "emission": "2019-03-20" ,
    "validity": "2019-03-25",
    "time": "15:45:00",
    "value": 514.80,
    "flag": "mastercard",
    "type": "credito",
    "period": 12,
    "status": "aprovada",
    "tag": "TAG",
}

const transactionDenied = {
    "number": 441,
    "emission": "2019-03-20" ,
    "validity": "2019-03-25",
    "time": "15:45:00",
    "value": 514.80,
    "flag": "mastercard",
    "type": "debito",
    "period": 1,
    "status": "negada",
    "tag": "TAG",    
}

const receivable = {
    "id": 1,
    "number": transactionAproved.number,
    "emission": transactionAproved.emission,
    "validity": transactionAproved.validity,
    "time": transactionAproved.time,
    "value": transactionAproved.value,
    "receivevalue": Math.round(transactionAproved.value - (tax * transactionAproved.value)),
    "flag": transactionAproved.flag,
    "type": transactionAproved.type,
    "period": transactionAproved.type,
    "status": transactionAproved.status,
    "tag": transactionAproved.tag,
    "paid": true        
}

var transactions =  [transactionDenied, transactionDenied, transactionAproved, transactionDenied, transactionAproved, transactionDenied ];

var receivables =  [receivable, receivable, receivable, receivable ];

/* Functions */

export function listTransactions(req, res) {
    res.status(200).send(transactions);
}


export function listReceivables(req, res) {    
    res.status(200).send(receivables);    
}

export function anticipateReceivable(req, res) {
    const receivableId = req.body.id;
    const antecipateData = req.body.antecipate

    //Checagem dos valores e "checa a validade do Id" (no caso compara com o objeto previamente criado mas o ideal seria buscar num banco de dados)
    if(antecipateData && receivableId && receivableId === receivable.id) {
        const newReceivable = receivable
        newReceivable.validity = antecipateData.date;
        newReceivable.receivevalue = antecipateData.value;
        
        res.status(200).send(newReceivable);
    } else {
        res.status(500).send('Recebivel nao existente!');      
    }    
}

export function exportTransactionToCsv(req, res) {
    const transactionFields = ["number", "emission", "validity", "time",
    "value", "flag", "type", "period", "status", "tag"];

    const json2csvTransactionParser = new Parser({ transactionFields });
    
    const csvTransaction = json2csvTransactionParser.parse(transactions);

    res.attachment('reporttransaction.csv');
    res.status(200).send(Buffer.from(csvTransaction));    
}

export function exportReceivableToCsv(req, res) {
    const receivableFields = ["id","number", "emission", "validity", "time",
    "value", "receivevalue", "flag", "type", "period", "status", "tag", "paid"];

    const json2csvReceivableParser = new Parser({ receivableFields });
    
    const csvReceivable = json2csvReceivableParser.parse(receivables);

    res.attachment('reportreceivable.csv');
    res.status(200).send(Buffer.from(csvReceivable));    
}

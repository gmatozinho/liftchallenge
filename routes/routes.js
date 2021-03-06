import { Router } from 'express';
var router = Router();
const prefix = "/api";
import { home } from './index';

/* Controllers */
const userController = require('../controllers/user');
const transactionController = require('../controllers/transaction');

/* GET home page. */
router.get(`/`, home);

/* users */
router.get(`${prefix}/users`, userController.index);
router.post(`${prefix}/user/login`, userController.login);
router.get(`${prefix}/user/logout`, userController.logout);

/* transaction */
router.get(`${prefix}/transaction`, userController.verifyToken, transactionController.listTransactions);
router.get(`${prefix}/receivable`, userController.verifyToken, transactionController.listReceivables);
router.put(`${prefix}/receivable/anticipate`, userController.verifyToken, transactionController.anticipateReceivable);
router.get(`${prefix}/reports/csv/transaction`, userController.verifyToken, transactionController.exportTransactionToCsv);
router.get(`${prefix}/reports/csv/receivable`, userController.verifyToken, transactionController.exportReceivableToCsv);

export default router;

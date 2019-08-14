import { Router } from 'express';
var router = Router();

import { home } from './index';

/* Controllers */
import { index as _index, login } from '../controllers/users';
import { index as __index } from '../controllers/dashboard';

/* GET home page. */
router.get('/', home);

/* Users page */
router.get('/users', _index);
router.get('/user/login', login);

/* Dashboard Page */
router.get('/dashboard', __index);

export default router;

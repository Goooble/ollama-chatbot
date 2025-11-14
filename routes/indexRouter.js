import {Router} from 'express'
import displayMessages from '../controller/displayMessages.js';

const indexRouter = Router();


indexRouter.get('', displayMessages);

// indexRouter.get('', (req, res)  => {
//  res.send("there is nothing here"); 
// })
export default indexRouter;
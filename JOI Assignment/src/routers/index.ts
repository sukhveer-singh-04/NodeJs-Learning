import {Router} from 'express';
const router = Router();

import { createDoc, getAllDocs, getById, updateOne, deleteOne, patch} from '../controllers';
import {validator}  from '../middlewares';

router.post('/add', validator, createDoc);
router.get('/all', validator, getAllDocs);
router.get('/:id', validator, getById);
router.put('/:id', validator, updateOne);
router.delete('/:id', validator, deleteOne);
router.patch('/:id', validator, patch);

export {router};

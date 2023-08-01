import express from 'express'
import { addUser, verify } from '../controllers'

const router = express.Router()

router.post('/addUser' , addUser)

router.get('/:userName', verify)

export {router};
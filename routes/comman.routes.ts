import express from 'express';
import passport from 'passport';
import { check, validationResult } from "express-validator";
import { addtask ,deleteTask,editTask,getTask} from '../controller/common.controller';
var router=express.Router()
/**
* get user.
*
* @author  Arjun
* @version 1.0
* @since   2021-12-18 
*/
router.get('/',getTask)
/**
* add User
*
* @author  Arjun
* @version 1.0
* @since   2021-12-18 
*/
router.post('/',[
    check('taskName').exists(),
    check('startDate').exists(),
    check('endDate').exists(),
    check('progress').exists(),
    check('duration').exists(),
    check('priority').exists(),
    check('approved').exists().isBoolean(),
],addtask)
/**
* Delete user with child.
*
* @author  Arjun
* @version 1.0
* @since   2021-12-18 
*/
router.delete('/:id',deleteTask)
/**
* Edit user.
*
* @author  Arjun
* @version 1.0
* @since   2021-12-18 
*/
router.put('/:id',[
    check('taskName').exists(),
    check('startDate').exists(),
    check('endDate').exists(),
    check('progress').exists(),
    check('duration').exists(),
    check('priority').exists(),
    check('approved').exists().isBoolean(),
],editTask)
export =router
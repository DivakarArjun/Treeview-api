import express from 'express';
import { check, validationResult } from "express-validator";
import { addfields, deletefields, editfields, getfields } from '../controller/common.controller';
var router=express.Router()
/**
* get fields.
*
* @author  Arjun
* @version 1.0
* @since   2022-01-11 
*/
router.get('/',getfields)
/**
* add fields
*
* @author  Arjun
* @version 1.0
* @since   2022-01-11 
*/
router.post('/',[
    check('column_name').exists(),
    check('column_type').exists(),
    check('header_text').exists()
],addfields)
/**
* Deletefields.
*
* @author  Arjun
* @version 1.0
* @since   2022-01-11 
*/
router.delete('/:id',deletefields)
/**
* Edit Fields.
*
* @author  Arjun
* @version 1.0
* @since   2022-01-11 
*/
router.put('/:id',[
    check('column_name').exists(),
    check('column_type').exists(),
    check('header_text').exists()
],editfields)
export =router
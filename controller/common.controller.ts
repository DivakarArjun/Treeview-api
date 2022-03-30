require('dotenv').config()
import {  validationResult } from "express-validator";
import { addFields, deleteFields, editField, findField, getAllFields } from "../entity/field";
import { addTask, deletetask, edittask, findtask, getAllTask } from "../entity/task";
export const addtask=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {taskName}=req.body
            let findTask=await findtask({where:{taskName:taskName}})
            if(findTask){
                return res.status(201).json({success:false,msg:"Task already exist."})
            }
            let data=await addTask(req.body)
            res.json({success:true,msg:"Add task successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
export const deleteTask=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {id}=req.params
            let findUser=await findtask({where:{id:id}})
            if(!findUser){
                return res.status(201).json({success:false,msg:"Task not found."})
            }
            let data=await deletetask(id)
            res.json({success:true,msg:"Delete user successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
export const getTask=async(req:any,res:any)=>{
    try {
        let data=await getAllTask()
        res.json({success:true,msg:"Get all task successfully.",data:data})
    } catch (error) {
        res.status(501).json({success:false,msg:"internal server error",err:error})
    }
}
export const editTask=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {id}=req.params
            const {taskName}=req.body
            let findTask=await findtask({where:{id:id}})
            if(!findTask){
                return res.status(201).json({success:false,msg:"Task not found."})
            }
            let findTask1=await findtask({where:{taskName:taskName,id:{$ne:id}}})
            if(findTask1){
                return res.status(201).json({success:false,msg:"Task already exist."})
            }
            let data=await edittask(id,req.body)
            res.json({success:true,msg:"Edit task successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
export const addfields=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {column_type,column_name}=req.body
            let findFields=await findField({where:{column_name:column_name}})
            if(findFields){
                return res.status(201).json({success:false,msg:"Field already exist."})
            }
            let data=await addFields(req.body)
            res.json({success:true,msg:"Add field successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
export const deletefields=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {id}=req.params
            let findfields=await findField({where:{id:id}})
            if(!findfields){
                return res.status(201).json({success:false,msg:"Field not found."})
            }
            let data=await deleteFields(id)
            res.json({success:true,msg:"Delete field successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
export const getfields=async(req:any,res:any)=>{
    try {
        let data=await getAllFields()
        res.json({success:true,msg:"Get all fields successfully.",data:data})
    } catch (error) {
        res.status(501).json({success:false,msg:"internal server error",err:error})
    }
}
export const editfields=async(req:any,res:any)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array().map((err) => ({ field: err.param, message: err.msg }));
        res.status(201).json({
            success: false,
            message: err[0].message
        });
        return;
    } else {
        try {
            const {id}=req.params
            const {column_type,column_name}=req.body
            let findfield=await findField({where:{id:id}})
            if(!findfield){
                return res.status(201).json({success:false,msg:"Filed not found."})
            }
            let findfield1=await findField({where:{column_name:column_name,id:{$ne:id}}})
            if(findfield1){
                return res.status(201).json({success:false,msg:"Field already exist."})
            }
            let data=await editField(id,req.body)
            res.json({success:true,msg:"Edit field successfully."})
        } catch (error) {
            res.status(501).json({success:false,msg:"internal server error",err:error})
        }
    }
}
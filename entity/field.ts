import {Task} from '../models';
import {Fields} from '../models';
import { sequelize } from '../models/instance';
const queryInterface = sequelize.getQueryInterface();
export const getAllFields=async ()=>{
    return await Fields.findAll()
}
export const findField=async (payload:any)=>{
    return await Fields.findOne(payload)
}
export const editField=async(id:number,taskobj:any)=>{
    try {
        return await Fields.update(taskobj,{where:{id:id}})
    } catch (error) {
        throw error
    }
}
export const addFields=async(taskobj:any)=>{
    try {
        await queryInterface.addcolumn('task',taskobj.column_name)
        return await Fields.create(taskobj)
    } catch (error) {
        throw error
    }
}
export const deleteFields=async(id:number)=>{
    try {
        return await  Fields.destroy({where: {id: id}})
    } catch (error) {
        throw error
    }
}

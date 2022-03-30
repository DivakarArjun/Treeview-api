import {Task} from '../models';
export const getAllTask=async ()=>{
    return await Task.findAll({hierarchy:true})
}
export const findtask=async (payload:any)=>{
    return await Task.findOne(payload)
}
export const edittask=async(id:number,taskobj:any)=>{
    try {
        return await Task.update(taskobj,{where:{id:id}})
    } catch (error) {
        throw error
    }
}
export const addTask=async(taskobj:any)=>{
    try {
        return await Task.create(taskobj)
    } catch (error) {
        throw error
    }
}
export const deletetask=async(id:number)=>{
    try {
        return await  Task.destroy({where: {id: id}})
    } catch (error) {
        throw error
    }
}

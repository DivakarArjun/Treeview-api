import {DataTypes, Model, Sequelize} from 'sequelize'
import { sequelize } from './instance'
export const Task =sequelize.define("task", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    taskName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE
    },
    endDate: {
        type: Sequelize.DATE
    },
    progress: {
        type: Sequelize.INTEGER
    },
    priority: {
        type: Sequelize.STRING,
        default:0
    },
    duration: {
        type: Sequelize.INTEGER
    },
    approved: {
        type: Sequelize.BOOLEAN,
        default:false
    },
    parentId: {
        type: Sequelize.INTEGER,
        hierarchy: { onDelete: 'CASCADE' } 
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    },
    hierarchyLevel:{
        type:Sequelize.STRING
    }
});
sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);
  });
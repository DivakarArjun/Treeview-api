import {DataTypes, Model, Sequelize} from 'sequelize'
import { sequelize } from './instance'
export const Fields =sequelize.define("fields", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    column_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    column_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    header_text: {
        type: Sequelize.STRING    
    },
    pattern: {
        type: Sequelize.STRING
    },
    is_required: {
        type: Sequelize.BOOLEAN,
        default:false
    },
    default_value:{
        type: Sequelize.STRING
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    }
});
sequelize.sync()
.then(() => {
console.log(`Database & tables created!`);
});
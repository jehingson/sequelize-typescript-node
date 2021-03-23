//user.model.ts
import {
  Table, 
  Column, 
  Model, 
  PrimaryKey, 
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  } from 'sequelize-typescript';
import { UserAddress } from './UserAddress';

@Table({timestamps: true, tableName: 'users'})
export class Users extends Model<Users>{
  @PrimaryKey
  @Column(DataType.STRING)
  uid: string

  @Column(DataType.STRING)
  uImage: string

  @Column(DataType.STRING)
  fullName: string

  // @Column(DataType.STRING)
  // social?: string;

  @Column(DataType.STRING)
  phone: string

  @Column(DataType.STRING)
  email: string

  @CreatedAt
   readonly createdAt!: Date;

   @UpdatedAt
   readonly updatedAt!: Date;

   @DeletedAt
   readonly deletedAt!: Date;

   //Relations
   @HasMany(() => UserAddress)
   UserAddress: UserAddress[];

}
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     age: DataTypes.INTEGER
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };
import {
  Table, 
  Column, 
  Model, 
  PrimaryKey, 
  DataType,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo
} from 'sequelize-typescript';
import { Users } from './User';

@Table({timestamps: true, tableName: 'userAddress'})
export class UserAddress extends Model<UserAddress>{
  @PrimaryKey
  @Column(DataType.STRING)
  id!: number

   @Column(DataType.STRING)
   public address!: string

   @Column(DataType.STRING)
   public name!: string

   @Column(DataType.STRING)
   public defaulAddress!: string

   @Column(DataType.STRING)
   public status!: string

   @ForeignKey(() => Users)
   @Column(DataType.STRING)
   uid!: string

   @CreatedAt
   readonly createdAt!: Date;

   @UpdatedAt
   readonly updatedAt!: Date;

   @DeletedAt
   readonly deletedAt!: Date;

   @BelongsTo(() => Users)
   Users: Users
}
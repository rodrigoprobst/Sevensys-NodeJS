import {
  Model,
  Column,
  Table,
  Scopes,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Length,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import { DecimalDataType } from "sequelize/types";

@Scopes(() => ({}))
@Table
export class User extends Model<User> {
  @AllowNull(false)
  @Length({ max: 100, min: 2 })
  @Column
  name!: string;

  @AllowNull(false)
  @Length({ max: 50, min: 2 })
  @Column
  login!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

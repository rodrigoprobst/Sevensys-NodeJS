import {
  Model,
  Column,
  Table,
  Scopes,
  Default,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Length,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import { Category } from "./Category";
import { DecimalDataType } from "sequelize/types";

@Scopes(() => ({}))
@Table
export class Product extends Model<Product> {
  @AllowNull(false)
  @Length({ max: 100, min: 2 })
  @Column
  title!: String;

  @AllowNull(false)
  @Length({ max: 1000, min: 2 })
  @Column
  description!: String;

  @Default (0)
  @Column
  stock!: Number;

  @AllowNull(false)
  @Column({ type: DataType.DECIMAL(10, 2) })
  value!: DecimalDataType;

  @ForeignKey(() => Category)
  @AllowNull(false)
  @Column
  public categoryId: Number;

  @BelongsTo(() => Category)
  public category: Category;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

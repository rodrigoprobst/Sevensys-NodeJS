import { Request, Response } from "express";
import { Category } from "../models/Category";
import { log } from "util";

export class CategoryController {
  public async index(req: Request, res: Response) {
    try {
      const list = await Category.findAndCountAll();
      return res.status(200).json({
        response: "OK",
        list
      });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id, {
        include: [{ model: Category }]
      });

      if (!category) {
        return res
          .status(400)
          .json({ response: "error", message: "Category not found!" });
      }

      return res.status(200).json({
        response: "OK",
        category
      });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async save(req: Request, res: Response) {
    try {
      const category = await Category.create(req.body);
      return res.status(201).json({ response: "OK", category });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        return res
          .status(404)
          .json({ response: "error", message: "Category not found!" });
      }

      const updated = await category.update(req.body);

      return res.status(200).json({ response: "OK", updated });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) {
        return res
          .status(404)
          .json({ response: "error", message: "Category not found!" });
      }

      const destroyed = await category.destroy();

      return res.status(200).json({ response: "OK", destroyed });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }
}

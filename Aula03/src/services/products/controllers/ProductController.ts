import {Request, Response} from 'express';
import {Product} from '../models/Product';

export class ProductController {

  public async index(req: Request, res: Response) {
    try {
      const list = await Product.findAndCountAll();

      return res.json(list);

    } catch (e) {
      return res.status(400).json({message: e.message});
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (product == null) {
        return res.status(404).json({message: "Produto não encontrado!"});
      }
      const category = await product.getCategory();
      return res.status(200).json({ product, category });
    } catch (e) {
      return res.status(400).json({message: e.message});
    }
  }

  public async save(req: Request, res: Response) {
    try {
      const product = await Product.create(req.body);
      return res.status(200).json(product);
    } catch (e) {
      return res.status(400).json({message: e.message});
    }
  }

  public async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (product == null) {
        return res.status(404).json({message: "Produto não encontrado!"});
      }
      const result = await product.update(req.body);
      return res.status(200).json(result);

    } catch (e) {
      return res.status(400).json({message: e.message});
    }
  }

  public async delete(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product == null) {
          return res.status(404).json({message: "Produto não encontrado!"});
        }
        const result = await Product.destroy({
          where: { id }
        });
        if (result === 1) {
          return res.status(200).json({message: "Registro removido com sucesso!"});
        } else {
          return res.status(404).json({message: "Produto não encontrado!"});
        }
    } catch (e) {
      return res.status(400).json({message: e.message});
    }
  }
}

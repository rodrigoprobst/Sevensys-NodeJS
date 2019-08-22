import { Request, Response } from "express";
import { User } from "../models/User";
import * as jwt from "jsonwebtoken";
//import * as bcrypt from 'bcrypt';

export class UserController {

  public async login(req: Request, res: Response) {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({
        where: {
          login        
        }
      });      

      // yarn add bcrypt
      
      if (!user) {
        return res
          .status(404)
          .json({ response: "error", message: "User not found!" });
      }

      // const result = await bcrypt.compare(password, user.password);

      /**
       *  if(!result) {
              return res.status(403).json({message: 'User and Password not match!'})
          }

      */

      var token = jwt.sign({id: user.id}, process.env.SECRET || 'anything', {
        expiresIn: 300 // 5 minutos
      });     

      return res.status(200).json({ 
        auth: true, 
        token
      });
      
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async index(req: Request, res: Response) {
    try {
      const list = await User.findAndCountAll();
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
      const user = await User.findByPk(id);

      if (!user) {
        return res
          .status(404)
          .json({ response: "error", message: "User not found!" });
      }

      return res.status(200).json({
        response: "OK",
        user
      });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async save(req: Request, res: Response) {
    try {      
      const user = await User.create(req.body);
      
      // req.body.password = await bcrypt.hash(req.body.password, 6);

      return res.status(201).json({ response: "OK", user });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async edit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res
          .status(404)
          .json({ response: "error", message: "User not found!" });
      }

      const updated = await user.update(req.body);

      return res.status(200).json({ response: "OK", updated });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res
          .status(404)
          .json({ response: "error", message: "User not found!" });
      }

      const destroyed = await user.destroy();

      return res.status(200).json({ response: "OK", destroyed });
    } catch (error) {
      return res.status(400).json({ response: "error", error });
    }
  }
}

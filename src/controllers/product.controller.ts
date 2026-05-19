import { Request, Response } from "express";
import { dataset } from "../models/product.model";
import { ApiResponseHelper} from "../utils/api.helper.utils"
import { HttpException } from "../exceptions/http-exception";

import { z } from "zod";
import { CreateProductDTO } from "../dtos/product.dto";


export class ProductController {
    async getAllProduct(req: Request, res: Response) {
        // return res.json(dataset);
        try {
            const someVar: any = {};
            // without custom exception
            if(!someVar.ref){
                // throw new Error("Reference not found"); // either 
                // return ApiResponseHelper.error(
                //     res, "Reference not found", 404
                // );
                throw new HttpException(404, "Reference not found");
            }

            someVar.ref.add("test"); // error 

            return ApiResponseHelper.success(
                res, dataset, "Product fetched successfully", 200
            );
        } catch (err: Error | any | HttpException) {
            return ApiResponseHelper.error(
                res, "Failed to fetch product", err.status ?? 500
            );
        }
    }
    // API consistency
    // 1. consistent response structure
    // 2. logic through exceptions
    // 3. combine reponse and error handling
    async createProduct(req: Request, res: Response) {
        const parsedData = CreateProductDTO.safeParse(req.body);
        if(!parsedData.success){
            return ApiResponseHelper.error(
                res, z.prettifyError(parsedData.error), 400
            );
        }
        const { name, price ,category } = parsedData.data; // validated data
        
        
        const newProduct = {
            
            id: "prod_" + Math.random().toString(36).substring(2, 9),
            name,
            price, // Just use the variable directly
            category
        }
        dataset.push(newProduct);
        return ApiResponseHelper.success(
            res, newProduct, "Product created successfully", 201
        );
    }
}
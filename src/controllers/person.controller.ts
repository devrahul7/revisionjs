import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { ApiResponseHelper} from "../utils/apihelper.util"
import { HttpException } from "../exceptions/http-exception";

import { z } from "zod";
import { CreatePersonDTO, UpdatePersonDTO } from "../dtos/person.dto";

import { PersonService } from "../services/person.service";
const personService = new PersonService();

export class PersonController {
    async getAllPersons(req: Request, res: Response) {
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
                res, dataset, "Persons fetched successfully", 200
            );
        } catch (err: Error | any | HttpException) {
            return ApiResponseHelper.error(
                res, "Failed to fetch persons", err.status ?? 500
            );
        }
    }
    // API consistency
    // 1. consistent response structure
    // 2. logic through exceptions
    // 3. combine reponse and error handling
    async createPerson(req: Request, res: Response) {
        const parsedData = CreatePersonDTO.safeParse(req.body);
        if(!parsedData.success){
            return ApiResponseHelper.error(
                res, z.prettifyError(parsedData.error), 400
            );
        }

        // const { name, age } = parsedData.data; // validated data
        
        // // const { name, age } = req.body;
        // // if(!name){
        // //     throw new HttpException(400, "Name is required");
        // // }
        // // if(!age){
        // //     throw new HttpException(400, "Age is required");
        // // }
        // const newPerson = {
        //     id: dataset.length + 1,
        //     name,
        //     age
        // }
        // dataset.push(newPerson);


        const newPerson = personService.createPerson(parsedData.data);  // above commented line replaced by this line 49 to 63
        return ApiResponseHelper.success(
            res, newPerson, "Person created successfully", 201
        );
    }


    async updatePerson(req: Request, res: Response) {
        const parsedData = UpdatePersonDTO.safeParse(req.body);
        if(!parsedData.success){
            return ApiResponseHelper.error(
                res, z.prettifyError(parsedData.error), 400
            );
        }

        // const { name, age } = parsedData.data; // validated data
        
        // // const { name, age } = req.body;
        // // if(!name){
        // //     throw new HttpException(400, "Name is required");
        // // }
        // // if(!age){
        // //     throw new HttpException(400, "Age is required");
        // // }
        // const newPerson = {
        //     id: dataset.length + 1,
        //     name,
        //     age
        // }
        // dataset.push(newPerson);


        const newPerson = personService.createPerson(parsedData.data);  // above commented line replaced by this line 49 to 63
        return ApiResponseHelper.success(
            res, newPerson, "Person created successfully", 201
        );
    }
}
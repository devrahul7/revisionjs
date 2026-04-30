import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { ApiResponseHelper } from "../utils/api.helper.utils";
import { HttpException } from "../exceptions/http-exception";

export class PersonController {
    async getAllPersons(req: Request, res: Response) {
        // path function
        // return res.json(dataset);


        try{
            const someVar: any = {};

            //without custom exception
            if(!someVar.ref){
                //throw new Error("Reference not found"); //either
                // return ApiResponseHelper.error(
                //     res,"Reference not found",400
                // );
                throw new HttpException(404, "Reference not found");
            }

            someVar.ref.add("test"); //error
        

        return ApiResponseHelper.success(
            res,dataset, "Person fetched succesfully",200
        );

    }catch (err: Error | any | HttpException){
        return ApiResponseHelper.error(
            res, "Failed to fetch persons",500
        );
    }
}
    //Api consistency
    //1. consistent response structure
    //2. logic through exceptiond
    //3. combine response and error handling

    async createPerson(req: Request , res:Response){
        const {name,age} = req.body;
        if(!name){
            throw new HttpException(400, "Name is Required");
        }
        if (!age){
            throw new HttpException(400,"Age is required");

        }
        const newPerson = {
            id: dataset.length +1,
            name,
            age
        }
        dataset.push(newPerson);
        return ApiResponseHelper.success(
            res, newPerson, "Person created Successfully",201
        );
    }
}


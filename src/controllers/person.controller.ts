import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { ApiResponseHelper } from "../utils/api.helper.utils";

export class PersonController {
    async getAllPersons(req: Request, res: Response) {
        // path function
        // return res.json(dataset);


        try{
            const someVar: any = {};
            someVar.ref.add("test"); //error
        

        return ApiResponseHelper.success(
            res,dataset, "Person fetched succesfully",200
        );

    }catch (err: Error | any){
        return ApiResponseHelper.error(
            res, "Failed to fetch persons",500
        );
    }
}
    //Api consistency
}


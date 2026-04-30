//API response example

const res = {
    "success": true,
    "message": " product is fetched successfully",
    "data": [],

    "meta0":{
        //pagination
        "page": 1,
        "limit": 10,
        "total":100
    }
}
import {response, Response } from "express"

export interface PaginationMeta{
    page: number;
    limit: number;
    total:number;

}

export default interface ApiResponse<T>{
    status: number;
    succes: boolean;
    message: string;
    data: T;
    meta?: PaginationMeta; //optional
}

export class ApiResponseHelper{
        static success<T>(
            res: Response,
            data:  T,
            message: string = "success",
            status: number=200,
            meta?: PaginationMeta,
        ):Response{
            const response: ApiResponse<T>={
                status,
                succes:true,
                message,
                data,
                meta
            }
            return res.status(status).json(response);
        }
        static error(
            res: Response,
            message: string = "Error",
            status: number = 600,
        ) : Response {
            const response : ApiResponse<null>={
                status,
                succes: false,
                message,
                data: null
            }
            return res.status(status).json(response);
        }
        
}



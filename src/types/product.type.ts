// create a zod schema of
// id as string
// name as string, min length 1, default value "Unnamed Product"
// price as number, min 0
// category as optional string 
// z.string().optional() // optional
// z.default("Unknown Product") // default value if not provided

// make a dto from this schema for create
// on create, id is not required

// make a dto from this schema for update
// on update, all fields are optional 

// apply model, dto, and controller for product similar to person

import {z } from "zod";


export const productSchema = z.object(
    {
        id: z.string(),
        name: z.string("should be String").min(1,"Name is Required").default("Unknown Product"),
        price: z.number("should be number").min(0,"price must be positive"),
        category: z.string().optional(),
    
    }
)


//domain model what is the person in the application
export type product = z.infer<typeof productSchema>;  //convert to type



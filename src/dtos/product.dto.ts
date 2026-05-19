


import {z } from "zod";
import { productSchema } from "../types/product.type";


//DTO -- data transfwer object - what is product in the request /response
export const CreateProductDTO = productSchema.omit({id:true});
export const UpdateProductDTO = productSchema.omit({id:true});

//alternative
// for create , id is not required
export type CreateProductDTO = z.infer<typeof CreateProductDTO>;
export type UpdateProductDTO = z.infer<typeof UpdateProductDTO>;

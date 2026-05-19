import { Request, Response, Router } from "express";
import { ProductController } 
    from "../controllers/product.controller";

const router: Router = Router();
const productController = new ProductController();

// 1. Get All - persons (replace app with router)
router.get("/get/all", productController.getAllProduct);

// Task: implement router
// POST /create/product/new
// Make controller to store data in dataset 
// and return created person
// Implement and test in postman
router.post("/create/product/new", productController.createProduct);

export default router;
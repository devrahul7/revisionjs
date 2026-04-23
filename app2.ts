// make a GET requset to match the following URL:
// http://localhost:8089/api/products/123/electronics?sort=asc&limit=10
// 123 and electronics are route parameters, :id and :category
// if category is not "electronics", return 400 with message "Invalid category"
// return a JSON response with the following structure:

import express from "express";

const app = express();

const PORT:number = 8089;

app.get("/" , //path
    (req , res)=>//callback function
    {return res.send("Hello , App-Express")}
);


// make a GET requset to match the following URL:
// http://localhost:8089/api/products/123/electronics?sort=asc&limit=10
// 123 and electronics are route parameters, :id and :category
// if category is not "electronics", return 400 with message "Invalid category"
// return a JSON response with the following structure:

app.get(
    "/api/products/:id/:category", //:name -> route parameter/alias

    (req,res)=>{
        //const name = req.params.name; //without destructing

        const {id, category} = req.params;
        const {limit, sort} = req.query;

        if (category != "electronics"){
            return res.send("400 Invalid category")
        }

        return res.status(200).json(
            {
                message: `Hello , ${category}`,
                id
            
            }
        );
    }
)


app.listen(
    PORT,  //start backend in this PORT

    ()=>{
        console.log(`server: http://localhost:${PORT}`);
    }
);
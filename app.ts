import express from "express";


const app = express();
const PORT:number = 8089;

app.get("/" , //path
    (req , res)=>//callback function
    {return res.send("Hello , TypeScript-Express")}
);

app.listen(
    PORT,  //start backend in this PORT

    ()=>{
        console.log(`server: http://localhost:${PORT}`);
    }
);

//executte : npx tsx --wach app.ts


app.get(
    "/hello/world/",
    (req,res)=>{
        return res.send("Hello , world");
    }
);

app.get(
    "/hello/world/:name", //:name -> route parameter/alias

    (req,res)=>{
        //const name = req.params.name; //without destructing

        const {name} = req.params;
        const {title ,age} = req.query;

        //query params -> /hello/world/John?tittle=Mr&age=22
        return res.status(200).json(
            {
                message: `Hello , ${name}`,
                title,
                age
            }
        );
    }
);




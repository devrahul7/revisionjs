import express, { type NextFunction } from "express";

const app = express();
const PORT:number = 8089;



app.use(express.json()); //json input
app.use(express.urlencoded({extended: true})); //x-ww-form-urlencoded

interface Person{
    id: number;
    name: string;
    age: number;
}

const dataset: Person[]=[
    {id:1,name: "Rahul",age:30},
    {id:2,name: "sita",age:22},
    {id:3,name: "Hari",age:11},
];

//1.get All -person
app.get("/api/persons",(req,res)=>{
    //later paginanted
    return res.json(dataset);
});

//2.get one by ID -person
app.get("/api/persons/:id", (req,res)=>{
    const {id} = req.params; //

    const person = dataset.find(
        p=>p.id == parseInt(id as string)
    );
    return res.json(person);
});

//3. create one person

app.post("/api/persons/",(req,res)=>{
    const {name,age}=req.body; //body parameters/ client data
    const newPerson: Person = {
        id: dataset.length +1,
        name, age
    };
    dataset.push(newPerson); //add to dataset
    return res.json(newPerson);

})

//4. update One Person

//4.1 put -> full update /most update
//4.2 patch -> partial update / least update

app.put("/api/persons/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const personIndex = dataset.findIndex(
        p => p.id === parseInt(id as string)
    );
    if (personIndex === -1) {
        return res.status(404).json({ message: "Person not found" });
    }
    dataset[personIndex] = {
        id: parseInt(id as string),
        name,
        age
    };
    return res.json(dataset[personIndex]);
}
);

//delete
//5 Delete ONE PErson

app.delete("/api/persons/:id", (req, res) => {
    const { id } = req.params;  //route parameter
    const personIndex = dataset.findIndex(
        p => p.id === parseInt(id as string)
    );
    if (personIndex === -1) {
        return res.status(404).json({ message: "Person not found" });
    }
    
    dataset.splice(personIndex,1); //delete person
       return res.json({"message":"Deleted"})
    
}
);






app.get("/" , //path
    (req , res)=>//callback function
    {return res.send("Hello , TypeScript-Express")}
);

app.get("/exception", (req, res) => {
  try {
    const logic: any = {};
    logic.user.find(); // simulate error
  } catch (err: Error | any) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Exception Issue" });
  }
});

//global api handler (at the last)
app.use(
    (req,res)=>{
        return res.status(404).json({Message: "API not found"})
    }
);



//global error handler (at the alst)
app.use( (req, res) =>  {
  console.error("Error");
  return res.json({message: "okey"});
});


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




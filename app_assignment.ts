import express from "express";

const app = express();
const PORT: number = 8089;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

type Product = {
    id: number;
    name: string;
    price: number;
    category?: string;
};

const products: Product[] = [
    { id: 1, name: "Laptop",        price: 999.99,  category: "Electronics" },
    { id: 2, name: "Desk Chair",    price: 249.49,  category: "Furniture"   },
    { id: 3, name: "Coffee Mug",    price: 12.99,   category: "Kitchen"     },
    { id: 4, name: "Notebook",      price: 4.99,    category: "Stationery"  },
    { id: 5, name: "Headphones",    price: 149.99,  category: "Electronics" },
];

// 1. GET ALL products
app.get("/api/products", (req, res) => {
    return res.json(products);
});

// 2. GET ONE product by ID
app.get("/api/products/:id", (req, res) => {
    const { id } = req.params;

    const product = products.find(p => p.id === parseInt(id as string));
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    return res.json(product);
});

// 3. CREATE a product
app.post("/api/products", (req, res) => {
    const { name, price, category } = req.body;

    const newProduct: Product = {
        id: products.length + 1,
        name:     name  ?? "Unknown Product",
        price:    price ?? 0,
        category,
    };
    products.push(newProduct);
    return res.status(201).json(newProduct);
});

// 4. UPDATE a product (full replace)
app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const productIndex = products.findIndex(p => p.id === parseInt(id as string));
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[productIndex] = {
        id: parseInt(id as string),
        name:     name  ?? "Unknown Product",
        price:    price ?? 0,
        category,
    };
    return res.json(products[productIndex]);
});

// 5. DELETE a product
app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(p => p.id === parseInt(id as string));
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(productIndex, 1);
    return res.json({ message: "Deleted" });
});

// Global 404 handler
app.use((req, res) => {
    return res.status(404).json({ message: "API not found" });
});

app.listen(PORT, () => {
    console.log(`server: http://localhost:${PORT}`);
});

// execute: npx tsx --watch products.ts
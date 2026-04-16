
// Task, Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await
let products = [
  { id: 101, name: "Laptiop", price: 50000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "Tablet", price: 30000 },
  { id: 104, name: "Monitor", price: 15000 },
];
// your application should be 6 functions to perform CRUD operations using Promise
// 1. createProduct
// -- takes product object as argument and add to products array
// -- check if id is present, if yes, reject with error
// -- if name is missing, replace with "Unknown Product"
// -- if price is missing, replace with 0
// 2. getProducts,
// -- returns all products after 2 seconds delay using Promise
// 3. getProductById,
// -- takes id as argument and returns product with that id after 1 second delay
// using Promise, if not found, reject with error
// 4. searchProduct,
// -- takes name as argument and returns all products that match the name
// 5. updateProduct,
// -- takes id and update object as arguments,
// finds product by id and updates it with the update object,
// if not found, reject with error
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// if not found, reject with error, if deleted, resolve with success message

// run this application using,
// npm run start-mock-db
//also use async and await to call these functions and log the results in console

const createProduct = (product) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.some((p) => p.id === product.id)) {
        reject(new Error("Product with this ID already exists"));
      } else {
        if (!product.name) {
          product.name = "Unknown Product";
        }
        if (!product.price) {
          product.price = 0;
        }
        products.push(product);
        resolve(product);
      }
    }, 1000);
  });
const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
const searchProduct = (name) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = products.filter((p) => p.name.includes(name));
      resolve(results);
    }, 2000);
  });
const updateProduct = (id, update) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const productIndex = products.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...update };
        resolve(products[productIndex]);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
const deleteProduct = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const productIndex = products.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        products.splice(productIndex, 1);
        resolve({ message: "Product deleted successfully" });
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
// Example usage
(async () => {
  try {
    const newProduct = await createProduct({
      id: 105,
      name: "Keyboard",
      price: 5000,
    });
    console.log("Created Product:", newProduct);

    const allProducts = await getProducts();
    console.log("All Products:", allProducts);

    const productById = await getProductById(102);
    console.log("Product by ID:", productById);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
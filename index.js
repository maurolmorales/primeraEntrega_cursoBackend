const express = require("express");

const app = express();
const PORT = 3000;

const productsRouter = require("./src/routes/products.router.js");
const cartsRouter = require("./src/routes/carts.router.js");

app.use(express.json());

app.use("/products", productsRouter);
app.use("/carts", cartsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando el http://localhost:${PORT}`);
});

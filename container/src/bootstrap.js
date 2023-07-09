import { mount as ProductsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

const productsContainer = document.getElementById("container-products")
const cartContainer = document.getElementById("container-cart")

ProductsMount(productsContainer);
cartMount(cartContainer);

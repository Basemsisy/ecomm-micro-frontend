import faker from "faker";

let products = "";

const mount = (el) => {
  for (let i = 0; i <= 5; i++) {
    const name = faker.commerce.productName();
    products += `<p>${name}</p>`;
  }
  el.innerHTML = products;
};


if (process.env.NODE_ENV === "development") {
  let el = document.getElementById("dev-products");
  if (el) {
    mount(el);
  }
}

export { mount }
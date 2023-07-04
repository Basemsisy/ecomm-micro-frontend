import faker from 'faker'

let products = ''
let productList = document.getElementById('product-list')

for (let i = 0; i <= 5; i++) {
    const name  = faker.commerce.productName()
    products += `<p>${name}</p>`
    
}
productList.innerHTML = products
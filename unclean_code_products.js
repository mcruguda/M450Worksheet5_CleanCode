let products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 599 },
    { id: 3, name: 'Headphones', price: 199 }
];

function getProduct(id) { 
    for (let product of products) { 
        if (product.id == id) return product; 
    } 
    return null; }

function addProduct(name, cost) {
    let maxId = 0; 
    for (let product of products) { 
        if (product.id > maxId) maxId = product.id;
    } 
    products.push({ id: maxId + 1, name: name, price: cost }); }

function listProducts() {
    for (let product of products) { 
        console.log(product.name + " costs " + product.price + "€");
    }
}

let myProduct = getProduct(2); 
console.log(myProduct); 
addProduct("Tablet", 399); 
listProducts();
console.log(Math.PI);
Math.PI = 4
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const product = {
    name: "Iphone",
    price: "1,00,000",
    isAvailabel: true
}

product

console.log(Object.getOwnPropertyDescriptor(product, "name"));
Object.defineProperty(product, 'name', {
    writable: false,
    enumerable: false
})

product.name = "Iphone14"
console.log(Object.getOwnPropertyDescriptor(product, "name"));
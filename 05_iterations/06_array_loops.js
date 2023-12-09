// Filter it return a new arr

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numGreater4 =  myNums.filter((num) => (num > 4))
// console.log(numGreater4);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History")
const userBooks = books.filter((book) => {
    return book.publish >= 1900 && book.genre ==="Fiction"
})
// console.log(userBooks);


// Map it returns a new array

const addTenToNums = myNums.map((num, idx, arr) => (num+10))
// console.log(addTenToNums);


// Chaining

const chain = myNums.map((num) => num+10)
                .map((num) => num++)
                .filter((num) => num%2===0)

// console.log(chain);


// Reduce it return a single value
const initialValue = 0

const sumOfMyNums = myNums.reduce((acc, cur) => {
    // console.log(`acc: ${acc} and cur:${cur}`);
    return acc+cur;
}, initialValue)

// console.log(sumOfMyNums);

const shoppingCart = [
    {
        itemName: "Web Development Course",
        price: 1999 
    },
    {
        itemName: "APP Development Course",
        price: 3999 
    },
    {
        itemName: "Docker Course",
        price: 999 
    },
    {
        itemName: "Kubernetes Course(K8s)",
        price: 4999 
    },
    {
        itemName: "Data Scientist Course",
        price: 12999 
    },
    {
        itemName: "Prompt Engineering Course",
        price: 9 
    },
]

const totalCartPrice = shoppingCart.reduce((acc, cur) => acc+cur.price, 0);
console.log(totalCartPrice);



var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];
 
//1. Use map to get an array of product titles

const productTitles = products.map(product => product.title);
console.log(productTitles);
 


//2. Use filter to get all products that have variations in black color

const productsWithBlackVariation = products.filter(product => product.variations.some(variation => variation.color === "black"));
console.log(productsWithBlackVariation);

//3. Use reduce to calculate the total stock of all products

const totalStock = products.reduce((acc, product) => acc + product.variations.reduce((sum, variation) => sum + variation.quantity, 0), 0);
console.log(totalStock);


//4. Use map and reduce to get the average rating of each product

const averageRatings = products.map(product => {
    const validReviews = product.reviews.filter(review => review.status);
    const averageRating = validReviews.length > 0 ? validReviews.reduce((sum, review) => sum + review.rating, 0) / validReviews.length : 0;
    return { title: product.title, averageRating };
});
console.log(averageRatings);

//5. Use filter to get products that have at least one review with products that have at least one review with a rating of 5.0

const productsWith5StarReview = products.filter(product => product.reviews.some(review => review.rating === 5));
console.log(productsWith5StarReview);

//6. Use map to format variations with product name

const formattedVariations = products.map(product => ({ title: product.title, variations: product.variations.map(variation => ({ color: variation.color, price: variation.price, quantity: variation.quantity })) }));
console.log(formattedVariations);


//7. Use reduce to get the total revenue if all items were sold

const totalRevenue = products.reduce((acc, product) => acc + product.variations.reduce((sum, variation) => sum + variation.price * variation.quantity, 0), 0);
console.log(totalRevenue);


//8. Use filter to get all products that have more than 5 items in any variation

const productsWithMoreThan5Items = products.filter(product => product.variations.some(variation => variation.quantity > 5));
console.log(productsWithMoreThan5Items);

//9. Use map to get a summary of each product with total variations and total reviews

const productSummaries = products.map(product => ({ title: product.title, totalVariations: product.variations.length, totalReviews: product.reviews.length }));
console.log(productSummaries);


//10. Use reduce to find the product with the highest total stock

const productWithHighestStock = products.reduce((max, product) => {
    const totalStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
    if (totalStock > max.totalStock) {
        return { title: product.title, totalStock };
    }
    return max;
}, { title: '', totalStock: 0 });
console.log(productWithHighestStock);

/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/  console.log("EXERCISE 1") 
    const myArray = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
    console.log("EXERCISE 2") 
    const myData ={
        name: "Carlo",
        surname: "Lombardi",
        email: "lombardi.business@outlook.com",
        age: "23",
    }

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
    console.log("EXERCISE 3") 
    myData.drivinglicense = false

/* EXERCISE 4
Remove from the previously created object the age property.
*/
    console.log("EXERCISE 4") 
    delete myData.age
    console.log(myData)

/* EXERCISE 5
Create a second object with name, surname, email address and verify 
that this object has a different email address than the previous one.
*/
console.log("EXERCISE 5") 
    const secondObject = {
        name: " Juan",
        surname: " Lopez",
        email: "juano45@outlook.com"
    }
    
    if ( myData.email !== secondObject.email)
        console.log("Different")
    else
        console.log("Is the same")

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/
console.log("EXERCISE 6") 
    const totalShoppingCart = 80
    const accesPromotion = 50
    const freeShippingPromotion = null
    const shipping = 10
    const totalIncludPromotion = totalShoppingCart

if (totalShoppingCart > accesPromotion)
    console.log(" You have a Free Shipping disccount, total amount to pay: " + totalIncludPromotion)
else
    console.log(" total amount to pay: " + (totalShoppingCart + shipping) )

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has
 a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the 
shipping cost, calculate the totalCost.
*/
console.log("EXERCISE 7") 
    let isBlackFriday = true
    const totalShoppingCartBlackFriday = 40
    const accesPromotionBlackFriday = 50
    const promotionBlackFriday = (20 * totalShoppingCartBlackFriday) / 100
    const freeShippingPromotionBlackFriday = null
    const costShippingBlackFriday = 10
    const totalIncludPromotionBlackFriday = promotionBlackFriday

    if (isBlackFriday && totalShoppingCartBlackFriday > accesPromotionBlackFriday)
        console.log(" You have a Free Shipping and 20% disccount, total amount to pay: " + (promotionBlackFriday - freeShippingPromotionBlackFriday))
    else
        console.log(" You have a 20% disccount, total amount to pay : " + (promotionBlackFriday + costShippingBlackFriday))
    
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
    console.log("EXERCISE 8") 
    let typeOfCar ={
        brand: "Ferrari",
        model: " Mk1",
        licensePlate: "569-879",
    }
    let typeOfCar1 = {}
    Object.assign(typeOfCar1, typeOfCar)
    typeOfCar1.licensePlate = "7689-6439"
    console.log(typeOfCar1) 

    let typeOfCar2 = {}
    Object.assign(typeOfCar2, typeOfCar)
    typeOfCar2.licensePlate = "589-647"
    console.log(typeOfCar2) 

    let typeOfCar3 = {}
    Object.assign(typeOfCar3, typeOfCar)
    typeOfCar3.licensePlate = "469-6237"
    console.log(typeOfCar3)
    
    let typeOfCar4 = {}
    Object.assign(typeOfCar4, typeOfCar)
    typeOfCar4.licensePlate = "349-947"
    console.log(typeOfCar4) 

    let typeOfCar5 = {}
    Object.assign(typeOfCar5, typeOfCar)
    typeOfCar5.licensePlate = "5871-6467"
    console.log(typeOfCar5) 

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
console.log("EXERCISE 9") 
    const carsForRent = [
        {
            typeOfCar1
        },
        {
            typeOfCar2
        },
        {
            typeOfCar3
        },
        {
            typeOfCar4
        },
        {
            typeOfCar5
        },
    ]
        console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
console.log("EXERCISE 10")
    carsForRent.pop()
    carsForRent.shift()
    console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/
console.log("EXERCISE 11")
    console.log(carsForRent.slice(0))

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) 
and calculates the area of the associated rectangle.
*/
    function area (l1, l2){
        
        const height = l1
        const base = l2
        const rectangleArea= base * height
        return rectangleArea
    }
        const l1 = 5
        const l2 = 6
        const theArea = area(l1, l2)
        console.log("The area is: " + theArea)

/* EXERCISE 2
Write a function "crazySum" which receives two integers.
 It should return the sum of those two values, 
 but if the two values are the same then it should return their sum multiplied by 3.
*/
    function crazySum(i1, i2){
        if (i1 !== i2) {
            const answer = i1 + i2  
            return answer
        }
            else{
            const answer = (i1 + i2) * 3
            return answer 
        } 
    }
    const i1 = 6
    const i2 = 6
    const answer = crazySum(i1, i2)
    console.log("The crazySum is: " + answer)

/* EXERCISE 3
Write a function "crazyDiff" that computes the
 absolute difference between a given number and 19. 
It should return triple their absolute difference if 
the given number is greater than 19.
*/
    function crazyDiff(gN){
        if (gN < 19)
        {
            let result = gN - 19
            return  Math.abs(result)
        }
        else (gN > 19)
        {
            let result = (gN - 19) * 3
            return Math.abs(result)
        }    
    }
    var gN = 100
    var result = crazyDiff(gN)
    console.log(result)

/* EXERCISE 4
Write a function "boundary" which accept an integer 
n and returns true if n is within 20 and 100 (included) 
or if it's equal to 400.
*/
    function boundary(n){   
        if( n > 20 && n < 100 || n === 400)
        {
        return true
        }
        else
        {
        return false    
        }
    }
    let integer = boundary(150)
    console.log(integer)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string,
 but if the given string already begins with "Strive", then it
  should just return the original string.
*/
    function strivify(s, a){
        if( s !== "Strive" )
        {
        const a = "Strive"
        return s + a
        }
        else(s === "Strive")
        {
        return "Strive"
        }
    }
    const s = "I love " 
    const myString = strivify(s)
    console.log(myString) 

    
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and 
check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
    function check3and7(givingNumber, multiple ){
        let result = givingNumber % multiple
        if (result === 0) return true
        else return false
    }
    console.log(check3and7(15, 3))
    console.log(check3and7(15, 7))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
    function reverseString(str){
        return str.split("").reverse().join("")

    }
    console.log(reverseString ("carlo"))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

  /*  function upperFirst(str){
        return str.split("").slice(0).replace(0, (c) => c.toUpperCase()).join("")
    }*/

    console.log("carlo".replace("c", (c) => c.toUpperCase()))
    console.log("juana".replace("j", (c) => c.toUpperCase()))
    console.log("giorgina".replace("g", (c) => c.toUpperCase()))
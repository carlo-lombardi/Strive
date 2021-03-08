/*1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
let calculate = (x, y) => {
      
    if (x === y){
        return (x + y) * 3
    }
    else{
        return x + y 
    }
}
console.log(calculate(5, 5))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

 const checking = (x, y) => {
    if( x === 50 || y === 50 || x + y === 50){
        return true
    }
    else{
        return false
    }

 }
 console.log(checking(5, 5))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const remover = (str) => {
    
    let strSplited = str.split("")
    //let theSelectedNumber = y

    for(let i = 0; i < strSplited.length; i++){
        if ( strSplited.length[i] === 3) { 
            strSplited.splice(i, 1, "asd")      
        }
        
        
    }
    
}
console.log(remover("Emafrodita"))

/*
4)
 Create a function to find the largest of three given integers.
*/

let largest = (x, y, z) => {
    if( x > y && x > z){
        return x
    }
    if( y > x && y > z ){
        return y
    }
    if( z > x && z > y ){
        return z
    }
        
}
console.log(largest(100,648,85))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

let chekingRange = (x ,y) =>{

    const range = (start, end) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }

    let firstRange = range(40, 60)
    let secondRange = range(70, 100)

    if ( x )


}

console.log(chekingRange(56, 30))
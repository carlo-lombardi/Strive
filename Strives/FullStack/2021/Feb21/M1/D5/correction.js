function howManyDays(myDate){
    
    let date1 = myDate
    let date2 = new Date()
    let milliseconds = 24 * 60 * 60 * 1000
    
    let totalOfSeconds = Math.abs(date1.getTime() - date2.getTime())
    let totalOfSecondsInDays = Math.round(totalOfSeconds / milliseconds)
    return totalOfSecondsInDays

}
let myDate = new Date(2020, 5, 6)
console.log(howManyDays(myDate))
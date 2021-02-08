/* Ex.A
   Create a variable test that contains a string.
*/
    let test = "Hello"
    console.log(typeof test)

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
    let sum = 10 + 20
    console.log(sum)

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
    let random = Math.floor(Math.random() * 20)
    console.log(random)

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
    let me = {name: "Carlo", surname: "Lombardi", age: 23}
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
    delete me.age
    console.log(me)

/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
    me.skills = ["Python"] 
    console.log(me.skills[0])

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
    delete me.skills
    console.log(me)

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
    function dice(){
        let random = Math.floor(Math.random() * 6) + 1  
        return random
    }
    console.log(dice())

/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
    function whoIsBigger(n1, n2){
        if(n1 < n2)
        return n2
        else (n1 > n2)
        return n1

    }
      console.log(whoIsBigger(25, 20))

/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
    function splitMe(str){
        let splitter = str.split(" ")
        return splitter
    }
    let str = "I love coding"
    console.log(splitMe(str))

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string
     without the first letter, otherwise it should remove the last one.
*/
    function deleteOne(s, b){
        if (b === true ){
            let result = s.substring(1)
            return result
        }
        else
        {
            let result = s.slice(0, -1)
            return result
        } 

    }
    console.log(deleteOne("Carlo", false))
/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
    function onlyLetters(x){
        const nonNumbers = x.replace(/\d+/g, "")
        return nonNumbers
    }

    console.log(onlyLetters("I love 123 whatever"))
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
    function isThisAnEmail(x){
        const character = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if( x.match(character)){ return "valid" }
        else{return "Invalid"}
        
    }

    console.log(isThisAnEmail("mr.lombardi@outlook.com"))
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
    function whatDayIsIt(){
        let isToday = new Date() 
        let today = isToday.getDate()
        return today
    }
    console.log(whatDayIsIt())

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
    function rollTheDices(x){

        function dice(){
            let random = Math.floor(Math.random() * 6) + 1  
            return random
        }
        let obj ={

            sum: 0,
            values: []
        }

        for ( let i = 0; i < x; i++ ){
            let result = dice()
            obj.values.push(result)
            obj.sum = obj.sum + result 
        }
        return obj
    }

    console.log(rollTheDices(2))

/* Ex.9
   Write the function howManyDays that receives a date
    and returns the number of days that has passed since that day.
*/
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
  


/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
    function isTodayMyBDay(i){

        function whatDayIsIt(){
            let isToday = new Date()
            let isTodayDecimals = isToday.getTime() 
            return isTodayDecimals
        }
        if ( i === whatDayIsIt() ){
        return (" Today is my birthday?: " + true)
        }
        else{ 
        return (" Today is my birthday?: " + false)
        }    
    }
    let myBrithdayIs = new Date(2020, 5, 6)
    let myBrithdayIsDecimal = myBrithdayIs.getTime()
    console.log(isTodayMyBDay(myBrithdayIsDecimal))
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    /* Movies array is an example array, used for the exs. Don't change it :)  */
    const movies = [
        {
          Title: "The Lord of the Rings: The Fellowship of the Ring",
          Year: "2001",
          imdbID: "tt0120737",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Return of the King",
          Year: "2003",
          imdbID: "tt0167260",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Two Towers",
          Year: "2002",
          imdbID: "tt0167261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "Lords of Dogtown",
          Year: "2005",
          imdbID: "tt0355702",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings",
          Year: "1978",
          imdbID: "tt0077869",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1990",
          imdbID: "tt0100054",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Lords of Salem",
          Year: "2012",
          imdbID: "tt1731697",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
          Year: "1984",
          imdbID: "tt0087365",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1963",
          imdbID: "tt0057261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
      ]
/* Ex.11
Write the function deleteProp that receives an object and a string, 
and returns the object after deleting the property with that given name.
*/
    function deleteProp(x, y){

        let obj = x
        let obj2 = [y]
        let tog = delete obj[obj2]
        return tog
        
    }
    deleteProp(movies[0], ["Type"])
    console.log(movies[0])

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

    var y = movies.sort()
    console.log(y)
    

    


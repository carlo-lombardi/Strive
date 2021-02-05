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
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
    function howManyDays(dt) {
    //let current = new Date(dt.getTime());
    var now = new Date(dt);
    var daysSince = now.getDate() - 1;
    //let previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((now - daysSince + 1) / 86400000);
  }
  console.log(howManyDays(new Date(2020, 6, 5)));
  


/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
    function isTodayMyBDay(i){

        function whatDayIsIt(){
            let isToday = new Date() 
            let today = isToday.getDate().getMonth().getYear()
            return today
        }
        if ( i === whatDayIsIt )
        return true
    }
    console.log(isTodayMyBDay(05/02/2021))
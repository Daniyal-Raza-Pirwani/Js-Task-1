//Age Check
var user = prompt("Enter Your Age");
if (user >= 13 && user < 18) {
    alert("You are a Teenager")
} else if (user >= 18) {
    alert("You are an Adult")
} else {
    alert("You are a Child")
}

//Weather Advise
var weather = prompt(" 1:Sunny \n 2:Rainy \n 3:Snowy");
if (weather == "Sunny" || weather == "sunny") {
    alert("Wear Sun Glasses!")
} else if (weather == "Rainy" || weather == "rainy") {
    alert("Take a Umbrella")
} else if (weather == "Snowy" || weather == "snowy") {
    alert("Wear Warm Clothes")
} else {
    alert("Enjoy Your Day!")
}

//Grade Determination
var grade = prompt("Enter Your Marks");
if (grade >= 90) {
    alert("Grade A")
} else if (grade >= 80 && grade <= 89) {
    alert("Grade B")
} else if (grade >= 70  && grade <= 79) {
    alert("Grade C")
} else if (grade  >= 60 && grade <= 69) {
    alert("Grade D")
} else {
    alert("Grade F")
}

//Simple Login System
alert(" Your username is Admin \n Your password is 1234")
var userName = prompt("Enter your username")
var password = prompt("Enter your password")
if (userName == "Admin" || userName == "admin" && password == 1234) {
    alert("Login Successful")
} else {
    alert("Login failed Try adain.")
}

//Number Range Checker
var numRange = prompt("Enter a Number")
if (numRange >= 1 && numRange <= 10) {
    alert("The number is between 1 and 10")
} else if (numRange >= 11 && numRange <= 20) {
    alert("The number is between 11 and 20")
} else {
    alert("The number is out of Range")
}

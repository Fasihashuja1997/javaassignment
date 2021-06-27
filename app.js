//Chapters (26-30)

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt ('Enter a positive integer')

// document.write ("Number : " + number + "<br>" + "round off value : " + Math.round(number) + "<br>" + "floor value : " + Math.floor(number) + "<br>" + "ceil value : " +  Math.ceil(number))



// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt ('Enter a negative float point')

// document.write ("Number : " + number + "<br>" + "round off value : " + Math.round(number) + "<br>" + "floor value : " + Math.floor(number) + "<br>" + "ceil value : " +  Math.ceil(number))

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter any number")
// document.write ("<h2>absolute value of " + number + " is" + " " + Math.abs(number) + "<h2>")

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var dice = prompt ("Enter any number")
// var number = (Math.random())*6
// var floor = Math.floor(number)
// if (floor <= 6){
//     alert ( "random dice value : " + " is " + dice)
// }
// else {
//     alert ( "no value")
// }


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var head = prompt ("Enter your toss");
// var tail = prompt ("Enter your toss");
// var number = Math.random() * 3;
// var floor = Math.floor (number);
// if (floor === 1){
//     alert ( "random coin value : " + tail)
// }
// else {
//     alert ( "random coin value : " + head)
// }


// Q6. Write a program that shows a random number between 1
// and 100 in your browser.

// var a = 100*(Math.random());

// var b = Math.floor(a);

// document.write("<h1>random number between 1 and 100 : " + b + "</h1>");



// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt ("Enter your weight in kilograms");
// var b = parseFloat(weight);
// document.write("<h1>The weight of user is " + weight + " Kilogram </h1>")





// Q8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var number = +prompt ("Enter a number between 1 and 10");
// var storesNumber = 10*(Math.random());
// var a = Math.ceil(storesNumber);
// alert (a);
// if (number == a){
//     alert ("Congratulations")
// }
// else {
//     alert ("your number is not found")
// }






/*CHAPTERS (31-34)*/

//Q1. Write a program that displays current date and time in
//your browser.

//var currentDate = new Date();
//document.write(currentDate);


// 2. Write a program that alerts the current month in words.
// For example December.
// var m = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];
// var a = new Date();
// var b = a.getMonth();
// var thisMonth = m[b];
// alert(" Current month : " + " " + thisMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
// var a = new Date();
// var b = a.getDay();
// var today = days[b];
// alert ("Today is " + today);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today


// var days = prompt("Enter day")
// var x = new Date();
// var y = x.getDay();
// if("days === [6] || days === [0]"){
//     alert ("It’s Fun day");
// }
// else {
//     alert ("It's not a Fun day");
// }



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var message = prompt("Enter the date")
// var a = new Date();
// var b = a.getDay();
// if(message<16){
//     alert("First fifteen days of the month")
// }
// else {
//     alert ("Last days of the month")
// }



// Q6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var x = new Date();
// var b = x.getTime();
// var minutes = b/1000*360;
// document.write("Current Date : " + x + "<br>" + "Elapsed milliseconds since January 1,1970 : " + b +"<br>" + "Elapsed minutes since January 1,1970 : " + minutes)


// Q7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hours= date.getHours();
// if (hours >= 00 && hours <= 11){
//     alert("Its AM")
// }
// else if (hours >= 12 && hours <=23){
//     alert ("Its PM")
// }



// Q8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date ("Dec 31, 2020");
// document.write(laterDate);


// Q9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015.

// var dateObject = new Date ();
// var a =  dateObject.getTime();
// var startingDate = new Date("June 18 , 2015");
// var b = startingDate.getTime ();
// var c = a - b;
// var time = Math.ceil(c/(1000*360*24*30));
// // alert (time + " days have passed since 1st Ramadan, 2015");


// Q10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the begining of 2015.

// var seconds = new Date();
// var reference = seconds.getDate();
// var a = new Date("Dec 5 , 2015");
// var b = a.getSeconds();
// var diff = reference - b;
// var accuTime = Math.floor(diff/(1000*60));
// document.write("On reference date" + reference + "<br>" + accuTime + "seconds had passed since biginning of 2015");


// Q11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// var x = new Date();
// x.setHours(x.getHours()-1);
//  document.write ("Current Date: " + currentDate + "<br>" +"1 hour go , it was :" + x);





// Q12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var date1 = new Date();
// var date2 = new Date();
// date2.setFullYear(date2.getFullYear()-100);
// document.write ("Current Date: " + date1 + "<br>" +"100 years back , it was :" + date2);


// Q13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var dob = new Date (prompt("Enter your date of birth" , "sep 14 ,1999"))
// var x = dob.toString();
// var y = x.slice(11 , 15);
// var a = dob.getTime();
// var today = new Date ();
// var b = today.getTime();
// var diff = b - a ;
// var age = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is : " + age + "<br>" + "Your birth Year is : " + y);




// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


//var customerName = "ABC Customer"
// var currentMonth = "March";
// var numberOfUnits = 410;
// var chargersPerUnit = 16;
// var netAmount = numberOfUnits* chargersPerUnit
// var latePayment = 350;
// var grossAmount =  netAmount + latePayment
// document.write("<h1> K-Electric</h1>")
// document.write("<p>Customer Name:" + customerName + "<br>Current Month : " +  currentMonth + "Number of units" + numberOfUnits + "<br>Charges per unit: " + chargersPerUnit + "<br><br> Net Amount Payable (within Due Date) :" +netAmount + "<br>Late Payment Surcharge : " + latePayment
// + "<br>Gross Amount Payable (after Due Date) : " + grossAmount + "</p>")








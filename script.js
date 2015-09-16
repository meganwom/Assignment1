//STEP 1 -- camelCase
    //var someMonth;
    //function currentMonth;
    //const CURRENTMONTH;
    //var summerMonths = ["June", "July", "August"];
    //function myLibrary(){};

//STEP 2 -- literal
    //3.9
    //"Hello!" 
    //false
    //null

//STEP 3 --complex/variable expressions
    //var anExpression = 3 * (4 / 5) + 6;
    //var aSecondExpression = Math.PI * radius * radius;

//STEP 4 --declarations but not assigned
    //var firstName, var lastName, var address, var city, var state, var zipCode, var yourAge, var referralSource, var mayWeContactYou;

//STEP 5
//declaration with assignment operator 1
    //var firstName;
    //var lastName;
    //var address;
    //var city;
    //var state;
    //var zipCode;
    //var yourAge;
    //var referralSource;
    //var mayWeContactYou; 
    //firstName = "Megan";
    //lastName = "Womack";
    //address = "1234 Main Street";
    //city = "San Diego";
    //state = "CA";
    //zipCode = "92101";
    //yourAge = "35";
    //referralSource = "SDCCD";
    //mayWeContactYou = true;

//declaration with assignment operator 2
    //var firstName = "Megan";
    //var lastName = "Womack"; 
    //var address = "1234 Main Street"; 
    //var city = "San Diego"; 
    //var state = "CA"; 
    //var zipCode = "92101"; 
    //var yourAge = "35"; 
    //var referralSource = "SDCCD"; 
    //var mayWeContactYou = true;

//declaration with assignment operator 3
    //var firstName = "Megan", var lastName = "Womack", var address = "1234 Main Street", var city = "San Diego", var state = "CA", var zipCode = "92101", var yourAge = "35", var referralSource = "SDCCD", var mayWeContactYou = true;

//STEP 6
//add a number and a string and use console.log to display the coerced result 
    //var players = 2;
    //window.console.log("On March 19, 1942, " + players + " black, Jackie Robinson & Nate Moreland, request a tryout with the Chicago White Sox, they are allowed to work out.");

// add a Boolean and a string  and display the coerced result 
    //var x = 1;
    //var y = 2;
    //var logicOne = "1 <= 2";
    //var logicTwo = "except when 1 = 2";
    //window.console.log(logicOne + ": " + x != y + logicTwo +  ": " + x !== y);

//add a number and a Boolean and a string and display the coerced result 
    //var toes = 3;
    //var legs = 4;
    //var sloths = 25;
    //var stringValue = "Three-toed sloths have four legs. How many toes would 25 sloths have?";
    //window.console.log(stringValue + " " + (toes * legs)*sloths);
    
//STEP 7 -- typeError, undefined is not a function!
    //sayHello();
    //var sayHello = function() {
    //window.console.log("Hi!");
    //};

//STEP 8
    //var someString = "Who once said, \'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\'";
    //window.console.log(someString);

//STEP 9
    //var x = 200;                                                          //produces null value
    //var y = null;
    //x = null;
    //window.console.log(x);
    //window.console.log(y);

    //var x;                                                                //produces undefined value
    //window.console.log(x);

//STEP 10
    //var firstName = "xyz";
    //var result = (typeof firstName === 'string');
    //window.console.log(result);                                          //confirms that variable is a string; output: true 
                  
    //var randonNumber = 5.6;
    //var result = (typeof randonNumber === 'number');
    //window.console.log(result);                                          //confirms that variable is a number; output: true 

    //var booleanValue = false;
    //var result = (typeof booleanValue === 'boolean');
    //window.console.log(result);                                          //confirms that variable is a boolean; output: true 

    //var newObject = [1,2,3,4];
    //var result = (typeof newObject === 'object');
    //window.console.log(result);                                          //confirms that variable is an object; output: true

    //var undefinedResult = myCar;
    //var result = (typeof undefinedResult === 'undefined');
    //window.console.log(result);                                          //confirms that variable is undefined; output: Uncaught ReferenceError: myCar is not defined

//STEP 11
   //function sayHello(fullName) {
        //window.alert("Hello " + fullName + ", welcome to the JavaScript class!");
        //};
    //sayHello("Zak Ruvalcaba");                           

//------------ ALERT BOX WITH CONCACTENATION ---------------------- WHY!!!

//STEP 12
    //var name = "Megan Womack";
    //var stringValue = "Hello Zak Ruvalcaba, welcome to the JavaScript class!";
   //var replacement = stringValue.replace("Zak Ruvalcaba", name);
    //window.alert(replacement); 

//STEP 13
    //var name = "Megan Womack";
    //var course = "JavaScript";
    //var stringValue = "Hello Zak Ruvalcaba, welcome to the JavaScript class!";
    //window.alert("Hello, " + name + "welcome to the " + course + " class!"); 

//STEP 14
    //var stringValue = "Hello Zak Ruvalcaba.\nWelcome to the JavaScript class!";
    //window.alert(stringValue);

//STEP 15
    //var name = window.prompt("What is your name?");
    //var stringValue = "Hello Zak Ruvalcaba.\nWelcome to the JavaScript class!";
    //window.alert("Hello, " + name + ".\nWelcome to the Javascript class!"); 

//STEP 16
    //var name = window.prompt("What is your name?");
    //var course = window.prompt("What class are you in?");
    //var stringValue = "Hello Zak Ruvalcaba.\nWelcome to the JavaScript class!";
    //window.alert("Hello, " + name + ".\nWelcome to the " + course + " class!"); 

//STEP 17
    //var x = 10;
    //var y = 20;
    //window.console.log(x + y);

//STEP 18
    //var x = 20 + 20;
    //window.console.log(x);

//STEP 19
    //var x = 20 * 5;
    //window.console.log(x);

//STEP 20
    //var x = (20 / 3)/(20 / 3) + 1;
    //window.console.log(x);

//STEP 21 -- comparison and logical operator; result = true
    //var x = 5;
    //var y = 10;
    //window.console.log(x == 5 || y == 5);

//STEP 22 -- comparison and logical operator; result = false
    //var x = 5;
    //var y = 10;
    //window.console.log(x <= y != true);

//STEP 23
    //var newObject = "widget";
    //window.console.log(typeof newObject); //output: string

//STEP 24 --true, because C.prototype is in o's prototype chain (var)
// defining constructors
    //function C(){}
    //function D(){}
    //var o = new C();
    //window.console.log(o instanceof C);

//STEP 25 -- false, because D.prototype is nowhere in o's prototype chain (var)
    //function C(){}
    //function D(){}
    //var o = new C();
    //window.console.log(o instanceof D);  

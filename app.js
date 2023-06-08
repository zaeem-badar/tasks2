// Chapter 21 (Changing Case)
// question 1
// var allLower = userInput.toLowerCase()

// question 2
// var x = "HELLO".toLowerCase()
// console.log(x)

// question 3
// var y = "hello".toUpperCase()
// console.log(y)

// question 4
// var a = "HELLO"
// var b = a.toLowerCase()
// console.log(b)

// question 5
// var a = ["HELLO"]
// var b = a[0].toLowerCase()
// console.log(b)

// question 6
// var city = "karachi".toUpperCase()
// alert(city)

// question 7
// var city = "kArAcHi"
// var firstChar =city.slice(0,1).toUpperCase()
// var others =city.slice(1).toLowerCase()
// alert(firstChar+others)

// CHAPTER 22-25 (STRINGS)
// question 1
// var sameWords = "captain"
// var sliced = sameWords.slice(1,3)
// console.log(sliced)

// question 2
// var sameWords ="captain"
// var length = sameWords.length
// console.log(length)


// question 3
// var  animal = "elephant"
// var seg = animal.slice(2,6)
// console.log(seg)

// question 4
// var sameWords ="captain"
// var length = sameWords.length
// console.log(length)

// question 5
// var variable = "Massachussets"
// var length  = variable.length
// console.log(length)

// var sliced = variable.slice(1,10)
// console.log(sliced)

// question 6
// var txt = "To be or not to be"
// var indx = txt.indexOf("be")
// console.log(indx)

// question 7
// var txt = "To be or not to be"
// var indx = txt.lastIndexOf("be")
// console.log(indx)


// question 8
// var text = "go"
// var indx = text.indexOf("go")
// console.log(indx)

// question 9
// if (str === indexNum)

// question 10
// var str = "abcde"
// var indx =str.charAt(2)
// console.log(indx)

// question 11
// var str = "abcdefghijklmnopqrstuvwxyz"
// var cha = str.charAt(10)
// console.log(cha)

// question 12
// var str = "hello"
// var x = str.charAt(4)
// console.log(x)


// question 13
// var str = "abcdefghijklmnopqrstuvwxyz"
// var cha = str.charAt(5)
// console.log(cha)

// question 14
// if (str.charAt(3)==="k")

// question 15
// var str = "abcdefghijklmnopqrstuvwxyz"
// var arr = []
// for (var i = 0; i>str.length ; i ++){
//     str(i) = arr[i]
// }

// question 16
// var str = "1"
// var newStr = str.replace("1", "one")
// console.log(newStr)

// question 17
// var y = "abcd"
// var x = y.replace("abcd", "efgh")
// console.log(x)

// Chapter 26 (Rounding Numbers)

// question 1

// var random = (Math.random() *49 +1)
// var round = Math.round(random)
// console.log(round)

// question 2
// var random = Math.random()

// question 3
// var dice = Math.round(Math.random()*5 +1)
// console.log(dice)

// question 4
// var toss = Math.round(Math.random()*1 +1)
// if(toss===1){
//     console.log("HEADS")
// }
// else{
//     console.log("TAILS")
// }

// Chapter 28, 29 (Converting Strings)
// question 1
// var str = "1"
// var converting = parseInt(str)

// question 2
// var str = "123"
// var int = parseInt(str)
// console.log(typeof(int))

// question 3
// var str = "1.1"
// var float = parseFloat(str)

// question 4
// var str = "1.1"
// var float = parseFloat(str)
// console.log(typeof(float))

// question 5
// var num = 1
// var str = num.toString()
// console.log(typeof(str))


// question 6
//  var num = 42
//  var str = num.toString()
//  console.log(typeof(str))

// question 7
// var str = "3.14"
// var int = parseInt(str)
// console.log(int)

// Chapter 30 (Controlling the length of decimals)

// question 1

// var num = 4.33566789
// var newNum = num.toString() 
// newNum = num.toFixed(2)
// console.log(newNum + typeof(newNum))

// question 2

// var num = 4.3567890.toFixed(2)
// num =num.toString()
// num = parseFloat(num)
// console.log(num + typeof(num))

// question 3
// num = 4.12345678 .toFixed(2)
// num = num.toString()
// if(num> 4){

// }

// question 4
// var num = 1.12345678910.toFixed(2)
// num =num.toString()
// alert(num +" "+ typeof(num))

// Chapter 31 - 34 (Date & Time)

// question 1
// var dObj = new Date

// question 2
// var dObj = new Date
// var dStr = dObj.toString()

// question 3
// var dObj = new Date
// var day = dObj.getDay()


// question 4
// var dayNames = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
// var dObj = new Date
// var d = dObj.getDay()
// var indx = dayNames.indexOf("WEDNESDAY")
// if(indx===d){
//     alert(dayNames[d]+" " +d)
// }


// question 5
// var dObj = new Date
// console.log(dObj)
// var d = dObj.getDay()
// var da = dObj.getDate()
// var m = dObj.getMonth()
// var y = dObj.getFullYear()
// var h = dObj.getHours()
// var mi = dObj.getMinutes()
// var s = dObj.getSeconds()
// var miili = dObj.getMilliseconds() 


// question 6
// var later = new Date ("31  December 2020")
// console.log(later)

// question 7
// var dObj = new Date("2 Februrary 1992")
// console.log(dObj)

// question 8
// var dObj1 = new Date("1 jan 1980")
// var dObj2 = new Date()
// var milli1 = dObj1.getTime()
// var milli2 = dObj2.getTime()
// var diff = milli2 - milli1
// console.log(diff)

// question 9
// var dObj = new Date
// var changeY = dObj.setFullYear(2005)
// console.log(dObj)


// question 10
// var dObj = new Date
// dObj.setMonth(0)
// console.log(dObj)


// question 11
// var dObj = new Date
// dObj.setDate(2)
// console.log(dObj)


// question 12
// var dObj = new Date
// console.log(dObj)
// var minValue = prompt("")
// dObj.setMinutes(minValue)
// console.log(dObj)

// question 13
// var dObj = new Date
// dObj.setHours(2)
// console.log(dObj)

// question 14
// var bDay = new Date ("11 MARCH 2005")
// var t = new Date
// var millB = bDay.getTime()
// var millT = t.getTime()
// var diff = millT - millB
// var age = diff /1000/60/60/24/365
// age=Math.round(age)
// console.log(age)


// Chapter 35 - 37 (Functions)


// question 1

// function displayAlert(){

// }

// question 2
// function askName(){
//     var userName = prompt("ENTER YOUR NAME")
// }
// askName()

// question 3
// function callingOtherFunc (){
//     firstOtherFunc()
//     SecondOtherFunc()
// }

// question 4
// function askName (){
//     var userName = prompt("ENTER NAME")
//     alert(userName)
// }
// askName()

// question 5
// var hello;
// function concat (a,b,c) {}
// concat(hello,"hello",1)

// question 6
// function doood (a,b){
//     return a+b
// }
// var new1 = doood() 

// question 7
// function multiply (a,b,c){
//     return a*b*c

// }
// var multiplied = multiply(1,2,3)
// alert(multiplied)

// question 8
// var arr = ["1","2","3"]
// function avg (){
// arr[0]%
// }

// question 9




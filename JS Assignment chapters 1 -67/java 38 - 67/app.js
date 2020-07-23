// **********_______Chap 38 - 42 FUNCTION _______*************
// Question # 1

// to find power in chap 38 q1

// function power() {
//  alert("power of (8,4) is " +Math.pow(8,4))
// }
// power()

// Question # 2
// find leap year chap 38 q2

// function leapYear(){
//     var year;
//     year = document.getElementById("year").value
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+ " is a leap year");
// 		}
// 		else
// 		{
// 			alert(year+ " is not a leap year");
// 		}

// }

// Question # 3
// find the area of triangle chap 38 q3

// var a = prompt("Enter the A value");
// var b = prompt("Enter the B value");
// var c = prompt("Enter the C value");

//  var s = (a + b + c) / 2
//  var areaValue = Math.floor(
// 	 s = s*(s - a) *(s - b ) * ( s - c)
//  )

//  document.write(
// 	"The area of a triangle with side length", " " , a , " " , b , "and" , " " , c  ,  "is $" , " " , areaValue
//  )

// Question # 4
// Receive a Marks by student chap 38 q4

// function mainFunction(result1,result2) {
//   var a = +prompt("Enter your first subject Marks");
//   var b = +prompt("Enter your second subject Marks");
//   var c = +prompt("Enter your third subject Marks");

//   function average(avg) {
//     var avg = (a + b + c)/3;
//     return avg;
//   }
//   function percentage(perc) {
//     var perc = ((a+b+c)/300)*100;
//     return perc;
//   }
//   result1 = average();
//   result2 = percentage();

//   alert(
//     "Average of Marks is: " + result1 + "\n" + "percentage is: " + result2+"%");
// }

// mainFunction();

// Question # 5

// find indexOf chap 38 q5

// function main(){
//     var str = ["Ahsan" , "Asif", "Altaf", "Ahmed", "Shafi"];
// var n = str.indexOf("Ahmed");
// console.log(n)
// Document.innerHTML = n;
// }
// main()

// Question # 6
// Delete all vowels from the sentence chap 38 q6

// String.prototype.character = function() {
//     return this.replace(/[aeiou]+/g, '');
//   }

//   function submit() {
//     var input = document.getElementById('input').value;
//     document.getElementById('output').innerHTML = input.character();
//   }

// Question # 7
// find two occurrences chap 38 q7

// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   let haveSeenVowel = false;

//   for (const letter of str.toLowerCase()) {
//     switch (letter) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         {
//           if (haveSeenVowel) {
//             count++;
//             haveSeenVowel = false;
//           } else {
//             haveSeenVowel = true;
//           }
//           break;
//         }
//       default:
//         haveSeenVowel = false
//     }
//   }

//   return count
// }

// console.log(findOccurrences());

// Question # 8
// Distance btw two cities chap 38 q8

// function Main(result1, result2, result3, result4) {
//   var Distance = +prompt("Enter Your Distance into Km", "10");

//   function meter(met) {
//     var met = Distance * 1000;
//     return met;
//   }
//   function feet(ft) {
//     var ft = Distance * 3280.84;
//     return ft;
//   }
//   function inches(inch) {
//     var inch = Distance * 39370.08;
//     return inch;
//   }
//   function centimeters(cent) {
//     var cent = Distance * 1000 * 100;
//     return cent;
//   }

//   result1 = meter();
//   result2 = feet();
//   result3 = inches();
//   result4 = centimeters();

//   document.write("The distance in Meters: " + result1 + "<br>" + "The distance in Feet: " + result2 + "<br>" + "The distance in Inches: " + result3 + "<br/>" + "The distance in centimeters: " + result4 );

// }

// Main()

// Question # 9

// var workingHour = prompt("Enter Your Working Hour");
// function get(){
// if(workingHour > 40){

//     over_time = workingHour - 40;
//    over_time_pay = over_time * 12.00;
//    document.write("Your overtime Total payment is " + over_time_pay)
// }
// else{
//     alert("You have to work for more than 40 hours to get over time pay");
// }
// }
// get()

// Question # 10
//  currency Note chap 38 to 42 q10

// function currencyDenomination() {
//     var cash =  prompt("Enter cash (in hundreds): ");
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination();

// **********_______Chap 43-48 Events _______*************

// Question # 1

// function clickHere(greet){
// alert(greet)
// }

// Question # 2

// function clickMe(){
//     alert("Thanks For Purchasing a phone From us")
// }

// Question # 3

// function Delebtn(e){
// var a = e.parentNode.parentNode.rowIndex;
// document.getElementById("thisTable").Delebtn(a);
// }

// Question # 4

// option for mouseover or mouseOut

// function car(id,src){
//     var image = document.getElementById(id)
//      image.src = src
//    }

// Question # 5

// function increase(){
//     document.getElementById("Numb").stepup(1);
// }

// function decrease(){
//     document.getElementById("Numb").stepup(-1);
// }

// **********_______Chap 49 - 52 Events _______*************

// Question # 1

// function showInput() {
//     document.getElementById('submit').innerHTML
//     var signForm = document.getElementById("signForm").value;
//     submit.innerHTML = signForm;
// }

// Question # 2

// function readMore() {
//     var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi incidunt earumquam doloribus repudiandae sint neque nisi similique dolores repellat recusandaeperferendis cumque, optio pariatur aliquid nostrum? Facere, quia"
//     var pera = document.getElementById('pera')
//     pera.innerHTML = text
// }

// Question # 3

// function addRow(tableID) {
//   var table = document.getElementById(tableID);
//   var rowCount = table.rows.length;
//   var row = table.insertRow(rowCount);
//   var cell1 = row.insertCell(0);
//   var element1 = document.createElement("input");
//   element1.type = "checkbox";
//   element1.name = "chkbox[]";
//   cell1.appendChild(element1);
//   var cell2 = row.insertCell(1);
//   cell2.innerHTML = rowCount + 1;
//   var cell3 = row.insertCell(2);
//   var element2 = document.createElement("input");
//   element2.type = "text";
//   element2.name = "txtbox[]";
//   cell3.appendChild(element2);
// }
// function deleteRow(tableID) {
//   try {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;
//     for (var i = 0; i < rowCount; i++) {
//       var row = table.rows[i];
//       var chkbox = row.cells[0].childNodes[0];
//       if (null != chkbox && true == chkbox.checked) {
//         table.deleteRow(i);
//         rowCount--;
//         i--;
//       }
//     }
//   } catch (e) {
//     alert(e);
//   }
// }

// **********_______Chap 53 - 58 Events _______*************

// Question # 1 (IMAGE MODAL)

// function showImage(e){
//     var modalImage = document.getElementById("modalImage")
//     modalImage.src = e.src
// }

// Question # 2

// function zoomin() { 
//     var GFG = document.getElementById("para"); 
//     var currWidth = GFG.clientWidth; 
//     GFG.style.width = (currWidth + 200) + "px"; 
// } 
  
// function zoomout() { 
//     var GFG = document.getElementById("para"); 
//     var currWidth = GFG.clientWidth; 
//     GFG.style.width = (currWidth - 200) + "px"; 
// } 

// **********_______Chap 59 - 67 DOM _______*************

// Question # 1

// function mainContent(){
//     var main = document.getElementById("main-content")
//    var display = main.innerHTML;
//    document.write(display)
// }
// mainContent()

// Question # 2

// function mainContent() {
//     var main = document.getElementById("main-content").children;
//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }

// Question # 3


// function mainContent() {
//     var main = document.getElementsByClassName("render");
//     var txt = "";
//     for (var i = 0; i < main.length; i++) {
//       txt = txt + main[i].tagName + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt;
//   }

// Question # 4

// function mainContent(){
//    document.getElementById("first-name").value="Ahsan";

// }
// mainContent()

// Question # 5

// function mainContent(){
//     document.getElementById("last-name").value="Asif";
//     document.getElementById("email").value="m-ahsan178";
// }
// mainContent()

// // Part 2

// //Part 2- Task 1

// function nodeType(){
//     var x = document.getElementById("form-content").nodeType;
//   document.write(x)
// }
// nodeType()

// //Part 2- TAsk 2

// function nodeType(){
//     var x = document.getElementById("lastName").nodeType;
//   document.write(x)
// }
// nodeType()

// //Part 2- TAsk 3

// function updateChild() {
//         var elmnt = document.createElement("p");
//         var textnode = document.createTextNode("Last Name: Ahsan");
//         elmnt.appendChild(textnode);

//         var item = document.getElementById("lastName");
//         item.replaceChild(elmnt, item.childNodes[0]);
// }
// updateChild()

// //Part 2- Task 4

// function targetNode(){
//     var firstchild = document.getElementById("main-content");
//     document.write(firstchild.firstChild.nodeName)
//     document.write(firstchild.lastChild.nodeName)
// }
// targetNode()

// //Part 2- Task 5

// function targetNode(){
//     var nextt = document.getElementById("lastName");
//     var prev = document.getElementById("lastName");
//     document.write(nextt.nextSibling.nodeName)
//     document.write(prev.previousSibling.nodeName)
// }
// targetNode()

// //Part 2- Task 6

// function targetNode(){
//     var parent = document.getElementById("email");
//     var type = document.getElementById("email");
//     document.write(parent.parentNode.nodeName)
//     document.write(type.nodeType)
// }
// targetNode()
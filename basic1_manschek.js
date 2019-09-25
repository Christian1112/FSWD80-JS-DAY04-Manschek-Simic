// function calcAge(Birthday){

// 	var date1 = new Date();
// 	var year = date1.getFullYear();
// 	var age1 = year - Birthday;
// 	var age2 = age1 - 1;

// 	console.log (age1, age2);

// }
// calcAge(1992);
// document.write ("sack");

var argu1 = "I am a hero of Katzenpolster"
var argu2 = 11;

function kuerzer (a,b){
	c = a.substring(0, b);
}
kuerzer(argu1, argu2)
document.write(c);

document.write ("<br>")



function personalInformation(name,surname,age,shortDescription){

			var sentence = "Hi I am " + name + " " + surname + " I am " + age + " years old and I am a " + shortDescription;


			return sentence;


		}

		personalInformation("John","Doe",25,"future programmer");
// function calcAge(Birthday){

// 	var date1 = new Date();
// 	var year = date1.getFullYear();
// 	var age1 = year - irthday;
// 	var age2 = age1 - 1;

// 	console.log(age1,age2)

// }
// calcAge(27);



		function personalInformation(name,surname,age,shortDescription){

			var sentence = "Hi I am " + name + " " + surname + " I am " + age + " years old and I am a " + shortDescription;


			return sentence;


		}

		personalInformation("John","Doe",25,"future programmer");

wantedNights = prompt("GibMirRaeume", 6);
// document.write(wantedNights + "<br>");

function hotelConstructor (name, rooms){
	this.name=name;
	this.rooms=rooms;
	this.booked=Math.floor(Math.random()*69);
	this.checkavailability = function(){
		return this.rooms - this.booked;
	}
}


var hiltonHotel = new hotelConstructor ("Hilton",69);
var hiltonHotel = new Object();
document.write(hiltonHotel.checkavailability());

// document.write("The Hotel " + hiltonHotel.name + " has only " + hiltonHotel.checkavailability() + " rooms available.");

// document.write(checkavailability(wantedNights));


// function hotelavailability (nights)
// {
// 	habeNacht = Math.floor(Math.random()*10);
// 	if (nights <= habeNacht) 
// 	{
// 		console.log("Verfügbar");
// 	}
// 	else
// 	{
// 		console.log("Gschissn grissn");
// 	}
// }
// hotelavailability(5);
// document.write(habeNacht);

// document.write("<br>For your request we found " +availroomz+ " rooms in" +hotel name+ "and");
document.getElementsByClassName("p1z1")[0].innerHTML=Math.floor(Math.random()*6.9999);
document.getElementsByClassName("p1z2")[0].innerHTML=Math.floor(Math.random()*6.9999);
document.getElementsByClassName("p1z3")[0].innerHTML=Math.floor(Math.random()*6.9999);
document.getElementsByClassName("p2z1")[0].innerHTML=Math.floor(Math.random()*6.9999);
document.getElementsByClassName("p2z2")[0].innerHTML=Math.floor(Math.random()*6.9999);
document.getElementsByClassName("p2z3")[0].innerHTML=Math.floor(Math.random()*6.9999);

document.getElementsByClassName("p1erg")[0].innerHTML= Number(document.getElementsByClassName("p1z1")[0].innerHTML)+Number(document.getElementsByClassName("p1z2")[0].innerHTML)+Number(document.getElementsByClassName("p1z3")[0].innerHTML);
document.getElementsByClassName("p2erg")[0].innerHTML= Number(document.getElementsByClassName("p2z1")[0].innerHTML)+Number(document.getElementsByClassName("p2z2")[0].innerHTML)+Number(document.getElementsByClassName("p2z3")[0].innerHTML);


if
(Number(document.getElementsByClassName("p1erg")[0].innerHTML) > Number(document.getElementsByClassName("p2erg")[0].innerHTML))
{
document.getElementsByClassName("ausruf")[0].innerHTML="Hubsi has won."
}
else 
{
document.getElementsByClassName("ausruf")[0].innerHTML="Baerbl has won."
}





// if
// (Number(document.getElementsByClassName("p1erg")[0].innerHTML) > Number(document.getElementsByClassName("p2erg")[0].innerHTML))
// {
// document.getElementsByClassName("ausruf")[0].innerHTML="Hubsi has won."
// }
// else 
// {
// document.getElementsByClassName("ausruf")[0].innerHTML="Baerbl has won."
// }
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write(stringOne);
document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

if (stringOne == stringTwo) {
    document.write("<br>stringOne has value equal to stringTwo");
}

if (stringOne == stringFour) {
    document.write("<br>stringOne has value equal to stringFour");
}

if (stringOne === stringTwo) {
    document.write("<br>stringOne has value and type equal to stringTwo");
}

if (stringTwo === stringThree) {
    document.write("<br>stringTwo has value and type equal to stringThree");
}


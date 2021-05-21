//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========

var resultDisplay = document.getElementById("data");

function test__checkHumbrId(studentId, expResult) {
    "use strict";

    var result = checkHumbrId(studentId);
    var testResult = "";

    if (result === expResult) {
        testResult = "<span style=\"color:green;\">==PASSED==</span>";
    } else {
        testResult = "<span style=\"color:red;\">xxFAILEDxx</span>";
    }

    resultDisplay.innerHTML += "Value tested: " + studentId;
    resultDisplay.innerHTML += " Expected result: " + expResult;
    resultDisplay.innerHTML += " " + testResult + "<br>";

}


test__checkHumbrId("n12345678", true);//test to pass
test__checkHumbrId("N12345678", true);//test to pass
test__checkHumbrId("n12345&ef", false); //test to fail
test__checkHumbrId("k12345678", false); //test to fail
test__checkHumbrId("n9999999", false); //Boundary condition, 7 digits
test__checkHumbrId("n00000000", true); //Boundary condition, 8 digits
test__checkHumbrId("n00000001", true); //Boundary condition, 8 digits
test__checkHumbrId("n99999998", true); //Boundary condition, 8 digits
test__checkHumbrId("n99999999", true); //Boundary condition, 8 digits
test__checkHumbrId("N12345678", false); //Boundary condition, 9 digits
test__checkHumbrId("n100000000", true); //To output xxFAILEDxx
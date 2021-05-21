//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumbrId(idNumber) {
    "use strict";

    var idPattern = /^n\d{8}$/i;

    return idPattern.test(idNumber);
}
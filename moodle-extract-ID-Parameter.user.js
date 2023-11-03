// ==UserScript==
// @name        moodle extract ID Parameter
// @namespace   moodle extract ID Parameter
// @match       https://moodle.bbbaden.ch/mod/quiz/view.php*
// @version     1.0.0
//
// @description prints the ID parameter of the current URL to the console
// @author      black-backdoor (https://github.com/black-backdoor)
//
// @run-at      document-end
// @grant       none
// ==/UserScript==

function IDofLink (url) {
    // Extract the ID parameter from the URL
    var id = new URL(url).searchParams.get("id");

    return id;
}

var url = window.location.href;

var id = IDofLink(url);
console.log("course ID: " + id);


"use strict";

// ========================================
// TASK 06: JAVASCRIPT STRINGS
// ========================================


// 1. CREATING STRINGS
// JavaScript mein strings 3 tarikon se bana sakte hain.
// Single quotes, double quotes aur backticks.

document.getElementById("createBtn").addEventListener("click", function () {

    const first = 'Hello JavaScript';
    const second = "Welcome to Strings";
    const third = `Learning JavaScript`;

    document.getElementById("createOutput").textContent =
        first + " | " + second + " | " + third;
});


// 2. STRING LENGTH
// .length string ke total characters count karta hai.
// Spaces bhi character mein count hote hain.

document.getElementById("lengthBtn").addEventListener("click", function () {

    const message = "Hello World";

    document.getElementById("lengthOutput").textContent =
        "Text: " + message + " | Length: " + message.length;
});


// 3. ACCESSING CHARACTERS USING INDEXES
// Har character ka index zero se start hota hai.
// [0] first character aur [1] second character deta hai.

document.getElementById("indexBtn").addEventListener("click", function () {

    const word = "JavaScript";

    document.getElementById("indexOutput").textContent =
        "First: " + word[0] +
        " | Second: " + word[1] +
        " | Fifth: " + word[4];
});


// 4. toUpperCase() AND toLowerCase()
// toUpperCase() tamam letters capital karta hai.
// toLowerCase() tamam letters small karta hai.

document.getElementById("caseBtn").addEventListener("click", function () {

    const text = "Hello JavaScript";

    document.getElementById("caseOutput").textContent =
        "Uppercase: " + text.toUpperCase() +
        " | Lowercase: " + text.toLowerCase();
});


// 5. trim(), trimStart() AND trimEnd()
// trim() start aur end dono ke extra spaces remove karta hai.
// trimStart() sirf start ke spaces remove karta hai.
// trimEnd() sirf end ke spaces remove karta hai.

document.getElementById("trimBtn").addEventListener("click", function () {

    const message = "   Hello World   ";

    document.getElementById("trimOutput").textContent =
        "Original: [" + message + "]" +
        " | trim: [" + message.trim() + "]" +
        " | trimStart: [" + message.trimStart() + "]" +
        " | trimEnd: [" + message.trimEnd() + "]";
});


// 6. includes(), startsWith() AND endsWith()
// includes() check karta hai ke word mojood hai ya nahi.
// startsWith() check karta hai ke string kis word se start hai.
// endsWith() check karta hai ke string kis word par end hai.
// Ye methods true ya false return karte hain.

document.getElementById("searchBtn").addEventListener("click", function () {

    const sentence = "I am learning JavaScript";

    document.getElementById("searchOutput").textContent =
        "Includes JavaScript: " + sentence.includes("JavaScript") +
        " | Starts with I: " + sentence.startsWith("I") +
        " | Ends with JavaScript: " + sentence.endsWith("JavaScript");
});


// 7. indexOf() AND lastIndexOf()
// indexOf() kisi word ki pehli position batata hai.
// lastIndexOf() us word ki aakhri position batata hai.
// Agar word na mile to -1 return hota hai.

document.getElementById("findBtn").addEventListener("click", function () {

    const text = "Hello World, Hello JavaScript";

    document.getElementById("findOutput").textContent =
        "First Hello: " + text.indexOf("Hello") +
        " | Last Hello: " + text.lastIndexOf("Hello");
});


// 8. slice() AND substring()
// slice(start, end) string ka selected part return karta hai.
// substring(start, end) bhi selected part return karta hai.
// Dono mein end index include nahi hota.
// slice() negative index ko support karta hai.

document.getElementById("extractBtn").addEventListener("click", function () {

    const word = "JavaScript";

    document.getElementById("extractOutput").textContent =
        "slice: " + word.slice(0, 4) +
        " | substring: " + word.substring(4, 10) +
        " | Negative slice: " + word.slice(-6);
});


// 9. replace() AND replaceAll()
// replace() pehli matching value replace karta hai.
// replaceAll() tamam matching values replace karta hai.
// Original string change nahi hoti.

document.getElementById("replaceBtn").addEventListener("click", function () {

    const message = "I like JavaScript. JavaScript is easy.";

    document.getElementById("replaceOutput").textContent =
        "replace: " + message.replace("JavaScript", "HTML") +
        " | replaceAll: " + message.replaceAll("JavaScript", "HTML");
});


// 10. split() AND concat()
// split() string ko array mein divide karta hai.
// concat() do ya zyada strings ko join karta hai.

document.getElementById("splitBtn").addEventListener("click", function () {

    const names = "Ali, Ahmed, Mateen";

    const nameArray = names.split(", ");

    const firstName = "Hello";
    const lastName = " Mateen";

    document.getElementById("splitOutput").textContent =
        "Array: " + nameArray.join(" | ") +
        " | Concat: " + firstName.concat(lastName);
});


// 11. TEMPLATE LITERALS AND STRING INTERPOLATION
// Backticks (` `) template literals ke liye use hote hain.
// ${variable} ke zariye variable ki value string mein add hoti hai.

document.getElementById("templateBtn").addEventListener("click", function () {

    const name = "Mateen";
    const course = "JavaScript";
    const task = 6;

    const introduction = `My name is ${name}. I am learning ${course}. This is Task ${task}.`;

    document.getElementById("templateOutput").textContent =
        introduction;
});


// 12. STRINGS ARE IMMUTABLE
// Immutable ka matlab hai original string directly change nahi hoti.
// toUpperCase() nayi string return karta hai.
// Original string apni jagah same rehti hai.

document.getElementById("immutableBtn").addEventListener("click", function () {

    let original = "hello world";

    const changed = original.toUpperCase();

    document.getElementById("immutableOutput").textContent =
        "Original: " + original +
        " | New String: " + changed;
});

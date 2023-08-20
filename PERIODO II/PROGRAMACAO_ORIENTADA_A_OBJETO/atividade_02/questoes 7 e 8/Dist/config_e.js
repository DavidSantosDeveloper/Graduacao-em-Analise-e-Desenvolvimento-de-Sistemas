"use strict";
/*
   strictNullChecks
*/
const users = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
];
const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);

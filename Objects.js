let person = {
    name: "Corey",
    age: 29
};
console.log(person);
console.log(person.name);   //can access individual properties with the .
person.name = "Jack";       //can update individual properties
person.lastName = "Herdman" //can add new property with the .
person["heightCM"] = 185    // can also add new property like this
person.friends = ["Christian", "Karina", "Hilary"]; //can add arrays as properties
console.log(person.friends[1]);
for (const key in person) {
    console.log(`${key} has value: ${person[key]}`)
}

//Q1 - Create an object called pet with 2 properties. name and age
console.log("Question 1");
let pet = {
    name: "Scooter",
    age: 18
};
console.log(pet);
//Q2 - Add an array as a property called owners that lists all the people that live with/own the pet
console.log("Question 2");
pet.owners = ["Donald", "Denise", "Jack"];
console.log(pet);

//Q3 - Loop through the owners property and log all the names of owners
console.log("Question 3");
for (let i = 0; i < pet.owners.length; i++) {
    const owner = pet.owners[i];
    console.log(owner);
}

// Q4 - Create a new object using the new Object syntax.
console.log("Question 4");
let object = new Object();
console.log(object);

// Q5 - Add a property to the object using the square bracket accessor
console.log("Question 5");
object["Property 1"] = "Property 1"
console.log(object);

// Q6 - Add another property to the object using the dot accessor
console.log("Question 6");
object.property2 = "Property 2"
console.log(object);

// Q7 - use a for..in to log all the keys and values in the object declared in Q4
console.log("Question 7");
for (const key in object) {
console.log(`${key} has value: ${object[key]}`);
}
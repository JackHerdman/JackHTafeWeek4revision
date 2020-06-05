let people =[{
    name: "Luke",
    age: 23,
    pet: {
        name: "Rex",
        species: "Dog",
        age: 6
    }
},{
    name: "Chris",
    age: 35,
    pet: {
        name: "Lucky",
        species: "Cat",
        age: 2
    }
}];

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`);
    console.log(`${person.name} has a ${person.pet.species} called ${person.pet.name}`)
}
console.log(people[0].name)

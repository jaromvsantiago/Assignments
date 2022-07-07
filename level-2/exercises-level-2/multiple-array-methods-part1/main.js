var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(arr){
    arr.sort(function(a, b){
        const nameA= a.lastName.toLowerCase()
        const nameB= b.lastName.toLowerCase()
        if (nameA < nameB) 
            return -1 
        if (nameA > nameB)
            return 1
        return 0 
    })    
    let peopleList = arr.map(function(people){
        let nameFirst = people.firstName
        let nameLast = people.lastName
        let age = people.age
        let nameAge = `<li>${nameFirst} ${nameLast} is ${age}<li>`
        return nameAge
    })
    
    return peopleList
 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
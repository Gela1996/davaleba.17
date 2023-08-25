// დავალება 1

let users = [
    {
        name: 'John',
        age: 35
    },
    {
        name: 'Adam',
        age: 34,
    },
    {
        name: 'Mary',
        age: 25,
    },
];

function sortByName(a, b) {
    if(a.name > b.name) {
        return 1;
    }
    if(a.name === b.name) {
        return 0;
    }
    if(a.name < b.name) {
        return -1;
    }
}

console.log(user.sort(sortByName));

// დავალება 2

function unique(arr) {
    let uniqueArray = [];

    for(let item of arr) {
        if(!uniqueArray.includes(item)) {
          uniqueArray.push(item);  
        }
    }
    return uniqueArray;
}

unique(['Mary', 'Mary', 'John', 'George', 'John', 'Maey', 'Jane']);


// დავალება 4

let user = [
    { name: 'John', surname: 'Smith', id: 1 },
    { name: 'Mary', surname: 'Doe', id: 2 },
    { name: 'Pete', surname: 'Hunt', id: 3 },
];

let usersMapped = users.map((user) => {
    return {
        id: user.id,
        fullName: user.name + ' ' + user.username,
    };
});
[
    { id: 1, fullName: 'John Smith' },
    { id: 2, fullName: 'Mary Doe' },
    { id: 3, fullName: 'Pete Hunt' },
];

console.log(usersMapped);

let mappedArray = [];

for(let user of users) {
    mappedArray.push({id: user.id, fullName: user.name + ' ' + user.surname});

}


// დავალება 5

function countWords(sentence) {
    let filteredSentence = sentence.replace(/[,.]/g, '');

    let words = filteresSentence.split(' ');
let countedWords = new map();

for(let word of words) {
    if(countedWords.has(word)) {
        countedWords.set(word, countedWords.get(word) + 1);
     } else {
            countedWords.add(word, 1);
        }
    }

    return countedWords;
}
    console.log(

countWords('lorem ipsum dolor sit amet, Hello world. lorem ipsum.')
    );
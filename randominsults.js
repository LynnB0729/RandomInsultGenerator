

var randomBodyParts = ['head', 'arm', 'leg', 'foot']
var randomAdjectives = ['fat', 'ugly', 'bumpy', 'gross']
var randomWords = ['dog', 'cheese', 'floor', 'laundry', 'cake']

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
//math.random allows for a # up to 1, if you times it by three you will get one up tp whatever u times it by

console.log('Your ' + randomBodyPart + ' is like a(n) ' + randomAdjective + ' ' + randomWord + '!!!');
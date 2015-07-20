var diff = require('../index.js');

var a, b, delta, c ;

//testing primitive data type
a = 5 ;
b = 2;
delta = diff.getDiff(a, b); 
c = diff.applyDiff(a, delta);

//testing array
a = [1,2,3,4] ;
b = [2,3,4] ;
delta = diff.getDiff(a, b); 
c = diff.applyDiff(a, delta);

//testing object 
a = {
    a: '21',
    b: '22'
} ;
b = {
    a: '21',
    b: '50'
} ;
delta = diff.getDiff(a, b); 
c = diff.applyDiff(a, delta);

//testing complex deep object
a = {
    a: 10,
    b: [1,2,[3,4]],
    c: {
        c1 : 20,
        c2 : {
            c21: 'hello'
        },
        c3: 'Kellton'
    } 
} ;
b = {
    a: 12,
    b: [1,2,[4]],
    c: {
        c1 : 20,
        c2 : {
            c21: 'hi',
            c22: 'welcome'
        },
        c3: 'Kellton' 
    } 
} ;

console.log('Object1 is:')
console.log(a);
console.log('Object2 is:')
console.log(b);
delta = diff.getDiff(a, b);
console.log('Diff calculated is:')
console.log(delta);
c = diff.applyDiff(a, delta);

// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    cats.unshift(name);
}

destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();


function appendCat(name){
    let newCat = [...cats, name];
    return newCat;
}

appendCat("Broom");

function prependCat(name){
    let newCat = [name, ...cats];
    return newCat;
}

prependCat("Arnold");


function removeLastCat(){
    let newCat = cats.slice(0, cats.length-1);
    return newCat;
}

function removeFirstCat(){
    let newCat = cats.slice(1);
    return newCat;
}
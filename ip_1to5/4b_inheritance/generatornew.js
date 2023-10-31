function* generator() {
    console.log("g1")
    yield 'altaf';
    console.log("g2")
    return 'result';
    yield 'aman';
}

let it = generator();
console.log("paused1")
console.log(it.next());

console.log("paused2")
console.log(it.next());
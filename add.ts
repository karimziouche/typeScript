function hello(name: string) {
    console.log("Hello " + name);
}

var firstName = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b: string): string {
    return a + b;
}

var ds: string = concat("Donkey", "School");
console.log(ds);
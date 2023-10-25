// Hello JSDOC People!

























const SPEAKER = {
    name: "Matsu",
    title: "Senior Software Developer",
    workplace: { name: "Simplr", url: "https://simplr.fi/" },
    github: { name: "Matsuuu", url: "https://github.com/Matsuuu" }, // Pls follow 👉 👈

    whoAmI() {
        return [
            "Avid No Build JS enthusiast",
            "Web Platform hype man",
            "HomeBrewer" // Malts + Yeast, Not 'brew install'
        ]
    }
}









































// TODO(yarr): Add some guideliness
// TODO(lazy-dev): Check that the sum function only takes numbers as params

function sum(a, b) {
    return a + b;
}

const foo = 3;
const bar = 5;

const total = sum(foo, bar);

// -------------
























// -------------

// TODO(boss-person): Enforce types of user props
// TODO(mr-archi): Create an interface for user props
// TODO(kid): Make sure phone is optional


class User {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.phone = props.phone;
    }
}

const userProps = {
    name: "Matsu",
    age: 27
}

const user = new User(userProps);

// -------------

















































// -------------


// TODO(the-p-o): Make sure padleft is usable using a string or a number
// TODO(i-write-DRY-code): Create a re-usable number checker that does the narrowing thing for us

function padLeft(padding, input) {
    return padding + input;
}

const toPad = "foo";

console.log(toPad);
console.log(padLeft(5, toPad));
console.log(padLeft("@@@@@", toPad));

































// --------------------

// node fs pls














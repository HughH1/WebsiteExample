// console.log("Hello there");

// const a = 2;
// const b = 6;

// function addition(a, b) {
//     let c = a + b;
//     let d = 2;
//     function output(c, a) {
//         console.log(c * a);
//     }
//     output(c, a);
// }


// document.createElement(HTMLDivElement);
// import Animal from './Animal.js';
// import Penguin from './Penguin.js';

let breathe = "inhale";
let name = "Tony";
const animal = new Animal(breathe, name);
animal.getName();

let dance = "dancy dance!";
penguin = new Penguin(dance);
penguin.doDance();





function multiply() {
    let x = parseString(document.getElementById("input1").value);
    let y = parseInt(document.getElementById("input2").value);
    let z = x * y;
    console.log(z);
    document.getElementById("formOp").innerText = JSON.stringify(z);
}

let myOp = multiply();

const myObj = {
    name: "Hugo",
    age: 9,
    address: {
        addL1: "place",
        addL2: "place2",
        addL3: "place3",
        city: "cityPlace",
        postcode: "AA061AA"
    }
}

function op() {
    document.getElementById("output").innerText = JSON.stringify(myObj);

}

// op();



function fetchData(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                }
                else {
                    reject("It went wrong");
                }
            }
        }
        req.open("GET", url);
        req.send();
    })
}

function sendReq() {
    fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json").then((req) => {
        let superHeroObject = JSON.parse(req.responseText);
        console.log(req.responseText);
        console.log(superHeroObject);
        for (let x in superHeroObject) {
            let paste = document.createElement("th");
            paste.innerText = x;
            document.getElementById("heading").appendChild(paste);

            if (x === "members") {
                for (let q in superHeroObject.members[0]) {
                    let paste2 = document.createElement("th");
                    paste2.innerText = q;
                    document.getElementById("heading2").appendChild(paste2);
                }

                for (let z of members) {
                    const row = document.createElement("tr");
                    for (y in members)
                        console.log(z);
                    let paste2 = document.createElement("td");
                    paste2.innerText = members[z];
                    document.getElementById("value2").appendChild(paste2);
                    // for (let a of superHeroObject.members[z]) {
                    // }
                }
            }
        }
        for (let w of superHeroObject) {
            console.log("BBBBBBBBBBBBBBBBBBBBBB");

        }
    });
}

// function sendReq() {
//     const req = new XMLHttpRequest();
//     req.onreadystatechange = function myRequest() {
//         if (req.readyState === 4) {
//             let superHeroObject = JSON.parse(req.responseText);
//             for (let x in superHeroObject) {
//                 let paste = document.createElement("th");
//                 paste.innerText = x;
//                 document.getElementById("heading").appendChild(paste);
//                 if (x === superHeroObject.members) {
//                     for (let z in members) {
//                         let paste2 = document.createElement("td");
//                         paste2.innerText = z;
//                         document.getElementById("value").appendChild(paste2);
//                     }
//                 }

//                 // if(){

//                 // }
//             }
//         }
//     }
//     req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
//     req.send();

// }




// console.log(JSON.stringify(myObj));
// console.log(myObj);




// function message() {
//     console.log("You're a bold one!");
// }




// addition(a, b);

// const func = (data) => data + 1;
// const func2 = (data2) => data2 + func;

// console.log(func(2));

// console.log(func2((4), func(a, b)));

// const x = (val1) => (val2) => (val3) => val1 + val2 + val3;

// console.log('X', x(1)(2)(3));

// x(1)(2)(3);
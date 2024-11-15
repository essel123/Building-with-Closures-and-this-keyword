//Object Methods and this


const person = {
  name: "Essel",
  age: 20,
  greet: function() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
};


const anotherperson = { name: "Apusiga", age: 24 };

console.log("-------------call()-----------------");

person.greet.call(anotherperson);

console.log("-------------bind()-----------------");

console.log(person.greet.bind(anotherperson)());

console.log("-------------apply()-----------------");

person.greet.call(anotherperson);


//Event Handlers and this

function handleClick() {
  console.log(this.id);
  console.log(this.innerText);
}
const arrowFunc = () => {
    console.log(this.id);
    console.log(this.innerText);
};



document.getElementById("btn").addEventListener("click", handleClick);
document.getElementById("btn").addEventListener("click", arrowFunc);




function createCounter() {
  let count = 0;

  const obj = 
  {
    increment: function() {
        count++;
        return this.count;
      },
  
      getCount: function() {
        return count;
      }
  }

  return obj;
}



console.log(createCounter().increment());

console.log(createCounter().getCount());



function createTimer(duration, elementid) {
  this.count = duration;
  this.elementid = elementid;

  function decrement() {
    count--;
    document.getElementById(`${this.elementid}`).innerText = `${this.count}`;
  }
  const id = setInterval(() => {
    decrement();

    if (this.count === 0) {
      clearInterval(id);
      console.log("Time Up");
      document.getElementById("error").style.display ="flex"
      
    }
  }, 1000);
  
}

createTimer(10, "p");

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("error").style.display = "none";
});



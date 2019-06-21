console.log('Hello World!');

// Simple Object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};

// circle.draw()



// Factory function
function createCircle(radius) {
  return {
    // ES6 lets us not do 'radius: radius' if key/value is the same, cause it's redundant
    radius,
    draw: function() {
      console.log('draw');
    }
  }
}

const circlee = createCircle(1)
// circlee.draw()




// Constructor Function
// this = reference to obj executing the code
// if you forget 'new' then it defines these props & methods on the global 'this' var
// Circle function is actually an object
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// These are all ways to invoke new Circle:
Circle.call({}, 1, 2, 3) // creates new obj, just like 'new'
Circle.apply({}, [1, 2, 3]) // helpful if you already have an arr somewhere in the program you can reference
const another = new Circle(1)
// another.draw()

for (let key in another) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

// Does not separate properties and methods
const keys = Object.keys(another)
console.log(keys);

if ('radius' in another) {
  console.log('Circle has a radius');
}




const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}`)

const circle1 = new Circle1(1)
// circle1.draw()





// Abstraction - hide details & complexity and show or expose only the essentials
// We should hide defaultLocation & computeOptimumLocation cause they are implementation details that consumers don't need
// They only need access to radius & draw 
function Circle3(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function() {
    // ...
  }
  this.draw = function() {
    this.computeOptimumLocation();
    console.log('draw');
  }
}

const circle3 = new Circle3(10)
circle3.computeOptimumLocation()
circle3.draw()

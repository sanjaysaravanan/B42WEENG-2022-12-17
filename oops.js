// Creating an imaginary object

// Car ---> Design a blueprint and create a modal car

// Blueprint or Definition of the Car 

// using function ( deprecated, should know this )
// this type of object creation should not be used in codes
// simple function does not have the capability of creation
function Car(color='blue', model='sedan') {


  // constuction
  // this --> keyword to assign attributes / properties to an object
  this.color = color;
  this.model = model;

  // console.log('Car');
}

// Car(); // simple invoking

const blueCar = new Car(); // instantiation
// console.log(blueCar);

// creating the required color car
const redCar = new Car('red'); // instantiation with arguments
// console.log(redCar);


// create a car with model --> XUV; color --> grey; 
const xuvCar = new Car('grey', 'XUV');
// console.log(xuvCar);

// important keyword
// new ---> instantiation of a object ( creation )
// this ---> adding properties/attibutes
//           eg: Mobile ---> ram( 6gb, 8gb, 12gb )
                          //  camera( 24mp, 108mp )
                          //  processor( Helio, Snapdragon ), 
                          //  display ( foldale, led )

// create a mobile blueprint with above features/parameters
// function Mobile(ram='6gb', camera='24mp', processor, display) {
//   this.ram = ram;
//   this.camera = camera;
//   this.processor = processor;
//   this.display = display;
// }

// // create a mobile with 8gb ram, 108mp camera, processor: snapdragon, display: led
// const samsungMobile = new Mobile('8gb', '108mp', 'snapdragon', 'led');
// console.log(samsungMobile);


// difference between normal function ( heavy weighted ) and arrow fucntion (light weight)


// arrow function as constructor
// const Mobile = (ram='6gb', camera='24mp', processor, display) => {
//   this.ram = ram;
//   this.camera = camera;
//   this.processor = processor;
//   this.display = display;
// }
// trying to instantiate with arrow function
// const androidMobile = new Mobile('8gb', '108mp', 'snapdragon', 'led');
// console.log(androidMobile)





// functionlaity/methods ---> call, text, play song, play movie, record
// blueprint using class

class Mobile {

  // construction
  constructor (ram='6gb', camera='24mp', os='android', processor, display) {
    this.camera = camera;
    this.processor = processor;
    this.display = display;
    this.os = os;
    this.ram = ram;
  }


  // defualt values/construction
  // functionality / methods
  makeCall = (contact) => {
    console.log('Calling', contact);
  }

  playSong = (songList) => {
    console.log('Playing Song List', songList);
  }

}

// prototype
// way of assining values (construction  )
Mobile.prototype.networkType = '4g';

Mobile.prototype.playVideo = function (videoName) {
  console.log('Playing Video', videoName)
};




// instantiation
const miMobile = new Mobile();

// mobile executing call function
miMobile.makeCall('Dad'); // invoking

console.log(miMobile);

console.log('Network Type MI', miMobile.networkType)

// instantiation
const iphone = new Mobile('12gb', '64mp', 'ios', 'M1', 'Gorrilla - 9D');
console.log(iphone);

iphone.playSong('Bollywood Songs');

iphone.playVideo('Tom & Jerry');


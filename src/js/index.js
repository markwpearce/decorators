import { fancy, logCreation, wearable } from "./class-decorator";
import { tooCool, logUsage } from "./member-decorator";

@wearable
@logCreation
class Pants1 {
  constructor() {
    this.imgSrc = '/assets/regular-pants.jpg';
    this.imgClass = "";
  }
}


@wearable
@fancy
@logCreation
class Pants2 {}



@wearable
@fancy
@logCreation
class Pants3 {
  @logUsage
  @tooCool("for School")
  wear() {}
}




function clear() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("picture").innerHTML = "";
}




function wearPants(type) {

  let myPants;
  switch (type) {
    case 1:
      myPants = new Pants1();
      break;
    case 2:
      myPants = new Pants2();
      break;
    case 3:
      myPants = new Pants3();
      break;
    default:
      break;

  }
  console.log(`Putting on ${myPants.constructor.name}`);
  myPants.wear();
}

window.pants = {
  wearPants,
  clear
}
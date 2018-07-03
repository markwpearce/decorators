export function logCreation(klass) {
  const klassName = klass.name;
  return (...args) => {
    console.log(`Constructing a ${klassName}`)
    return new klass(...args);;
  }

}

export function wearable(klass) {
  return (...args) => {
    const klassObj = new klass(...args);;

    const originalWear = klassObj.wear;
    klassObj.tagline = "I'm wearing pants"
    klassObj.wear = () => {
      document.getElementById("output").innerHTML = klassObj.tagline;
      document.getElementById("picture").innerHTML = `<img class="${klassObj.imgClass}" src="${klassObj.imgSrc}">`;
      if (originalWear) { originalWear.apply(klassObj); }
    }
    return klassObj;
  }
}


export function fancy(klass) {
  console.log(`Making ${klass.name} fancy!`)
  return (...args) => {
    const klassObj = new klass(...args);;
    klassObj.fancy = true;
    klassObj.tagLine = (klassObj.tagline ? klassObj.tagline : "pants").replace("pants", "fancy pants!");
    klassObj.imgClass = "fancy-pants";
    klassObj.imgSrc = "/assets/fancy-pants.jpeg";
    return klassObj;
  };
}
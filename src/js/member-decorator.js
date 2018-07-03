export function logUsage(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`Calling function ${target.constructor.name}.${name}`, args)
    return original.apply(this, args);
  }
}

export function tooCool(forWhat) {

  return function(target, name, descriptor) {
    console.log(`Making ${target.constructor.name}.${name} too cool ${forWhat}!`)
    const original = descriptor.value;
    descriptor.value = function() {
      original.apply(this);
      const existingHtml = document.getElementById("picture").innerHTML;
      document.getElementById("picture").innerHTML = `<div class="too-cool">${existingHtml}</div>`;
      document.getElementById("output").innerHTML += ` They're too cool ${forWhat}!`
    }
    return descriptor;
  }

}
# Examples of JavaScript Decorators

## Usage

Install:

`npm install`

Build:

`npm run build`

Serve:

`npm run serve`

## JavaScript Decorators

### What is a decorator

Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
Think of decorators as wrappers.

### @Decorators in JavaScript

Can be used in two “flavors” - Class decorators and class/object member (e.g. accessor, function, etc.) decorators
Currently a [proposal in Stage 2](https://github.com/wycats/javascript-decorators/blob/master/readme.md)
Available in [TypeScript](http://www.typescriptlang.org/docs/handbook/decorators.html) (also supports parameter decorators)
Available with Babel - [babel-plugin-transform-decorators](https://babeljs.io/docs/en/babel-plugin-transform-decorators/)

## Decorator Usage

```javascript
@fancy                                  // Class decorator
class Pants {
    @bedazzle("gemstones")              // Decorator factory
    get backPockets() { ... }

    @tooCool                            // You can chain
    @forSchool                          // multiple decorators together
    wear() { ... }

    @enforce({hangToDry: true})         // Use objects in decorator factories
    wash() { ... }
}
```

## Coding Decorators

### Member Decorators

Class member decorators have this function signature:

```javascript
function memberDecorator(
  target,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {}
```

_Target_ - the object you’re decorating

_Name_ - the name of the member you’re decorating (e.g. the function name)

_Descriptor_ - the member descriptor. This is essentially the object that would have been passed to Object.defineProperty()

_Returned_ value - replaces the memberDescriptor as in a Object.defineProperty() call

### Class Decorators

Class decorators simply take the class

```javascript
function classDecorator(target): any {}
```

_Target_ - the class you’re decorating

_Returned Value_ - replaces the Class

### Decorator factories

i.e. Decorators with parameters

```javascript
function decoratorFactory(someArgs): Function {
  return function decorator(target): any {};
}
```

_Target_ - the class you’re decorating

_Returned Value_ - a function to be used a decorator

## Resources

... with better, more useful information ...

https://www.sitepoint.com/javascript-decorators-what-they-are/

https://cabbageapps.com/fell-love-js-decorators/

https://github.com/wycats/javascript-decorators/blob/master/README.md

https://hackernoon.com/all-you-need-to-know-about-decorators-a-case-study-4a7e776b22a6

http://www.typescriptlang.org/docs/handbook/decorators.html

[Lodash decorators](https://steelsojka.github.io/lodash-decorators/)

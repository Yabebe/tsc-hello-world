var str = 'Hello World!';
console.log(str);
var HelloWorld = /** @class */ (function () {
    function HelloWorld(displayText) {
        this.displayText = displayText;
    }
    HelloWorld.prototype.greet = function () {
        return this.displayText;
    };
    return HelloWorld;
}());
var helloWorld = new HelloWorld("Hello, Typescript");
document.body.innerHTML = helloWorld.greet();

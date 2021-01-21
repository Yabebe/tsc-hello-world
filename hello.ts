let str: string = 'Hello World!';
console.log(str);


class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        return this.displayText;    
    }
}

var helloWorld = new HelloWorld("Hello, Typescript");
document.body.innerHTML = helloWorld.greet();
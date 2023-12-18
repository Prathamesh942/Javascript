// A platform may be a browser, or a web-server or another host, or even a “smart” coffee machine if it can run JavaScript. Each of these provides platform-specific functionality. The JavaScript specification calls that a host environment.
// A host environment provides its own objects and functions in addition to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

// There’s a “root” object called window. It has two roles:
// First, it is a global object for JavaScript code, as described in the chapter Global object.
// Second, it represents the “browser window” and provides methods to control it.

// The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
// document object is the main “entry point” to the page. We can change or create anything on the page using it.

document.body.style.background = "red";

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.
//such as navigator and location



# ColoTerm

ColoTerm is a small JavaScript Code that replace the old console.log() function, with ColoTerm add a nice color and amazing background color to your terminal. Make it Colored!

## Installation

Use the package manager [npm](https://www.npmjs.com/package/coloterm) to install ColoTerm.

```bash
npm i coloterm
```

## text colors
• black
• red
• green
• yellow
• blue
• magenta
• cyan
• white

## bright text colors

• brightRed
• brightGreen
• brightYellow
• brightBlue
• brightMagenta
• brightCyan
• brightWhite

## background colors

• black
• red
• green
• yellow
• blue
• magenta
• cyan
• white

## bright background colors

• brightRed
• brightGreen
• brightYellow
• brightBlue
• brightMagenta
• brightCyan
• brightWhite

## Usage

```JavaScript
const coloterm = require('coloterm');

// Print 'text' to terminal
coloterm.log('this is text', {
   color: "red",
   background: "white"
})

// return 'text' after colored then print it to terminal
const text = coloterm.text('this is text', {
   color: "red",
   background: "white"
   });
console.log(text)

```

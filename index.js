var textColor00197 = {
   "black": "\u001b[30m",
   "red": "\u001b[31m",
   "green": "\u001b[32m",
   "yellow": "\u001b[33m",
   "blue": "\u001b[34m",
   "magenta": "\u001b[35m",
   "cyan": "\u001b[36m",
   "white": "\u001b[37m",
   "brightBlack": "\u001b[30;1m",
   "brightRed": "\u001b[31;1m",
   "brightGreen": "\u001b[32;1m",
   "brightYellow": "\u001b[33;1m",
   "brightBlue": "\u001b[34;1m",
   "brightMagenta": "\u001b[35;1m",
   "brightCyan": "\u001b[36;1m",
   "brightWhite": "\u001b[37;1m"
};
var BackgroundColor00197 = {
   "black": "\u001b[40m",
   "red": "\u001b[41m",
   "green": "\u001b[42m",
   "yellow": "\u001b[43m",
   "blue": "\u001b[44m",
   "magenta": "\u001b[45m",
   "cyan": "\u001b[46m",
   "white": "\u001b[47m",
   "brightBlack": "\u001b[40;1m",
   "brightRed": "\u001b[41;1m",
   "brightGreen": "\u001b[42;1m",
   "brightYellow": "\u001b[43;1m",
   "brightBlue": "\u001b[44;1m",
   "brightMagenta": "\u001b[45;1m",
   "brightCyan": "\u001b[46;1m",
   "brightWhite": "\u001b[47;1m"
};
var Reset00197 = "\u001b[0m";

module.exports = {
   text: (text, {
      color = 'white', background = 'black'
   } = {}) => {
      return (`${BackgroundColor00197[background]}${textColor00197[color]}${text}${Reset00197}`);
   },
   log: (text, {
      color = 'white', background = 'black'
   } = {}) => {
      console.log (`${BackgroundColor00197[background]}${textColor00197[color]}${text}${Reset00197}`);
   }
}
let moment = require('moment');

console.log(moment().format());

let now = moment();
console.log("Current timestamp", now.unix());

let timestamp = 1498346967;
let currentMoment = moment.unix(timestamp);
console.log("Current moment", currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log("Current date", moment().format('MMMM Do, YYYY @ hh:mm A'));

console.log('jajaja');
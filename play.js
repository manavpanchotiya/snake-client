const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");

const aConnection = connect();

setupInput(aConnection);
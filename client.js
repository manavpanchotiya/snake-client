const net = require("net");
const {IP, PORT} = require("./constants")
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    console.log("Name: MP");
  
    conn.write("Name: SNK");
    // conn.write("Move: Up");

    // conn.write("Move: Down");

    // conn.write("Move: Left");

    // conn.write("Move: RIght");

  });
    conn.on('data', (data) => {
      console.log('Server says:',data);
   
  
  });

  return conn;

};

module.exports = {connect};
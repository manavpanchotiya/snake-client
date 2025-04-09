const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  

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
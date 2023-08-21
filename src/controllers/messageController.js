let hello = (req, res) => {
  console.log(`public hello from messageController`);
  res.send(`this is a public hello`);
};

// we only want logged in users to access this
let privateHello = (req, res) => {
  console.log(`private hello from messageController`);
  res.send(`Hello, you are logged in to the private route!`);
};

module.exports = { hello, privateHello };

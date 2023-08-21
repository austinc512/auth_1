let hello = (req, res) => {
  console.log(`public hello from messageController`);
  res.send(`this is a public hello`);
};

// we only want logged in users to access this
let privateHello = (req, res) => {
  // console.log(`looking`);
  // console.log(req.userInfo.fullname);

  // console.log(req);
  console.log(`private hello from messageController`);
  res.send(
    `Hello ${req.userInfo.fullname}, you are logged in to the private route!`
  );
};

module.exports = { hello, privateHello };

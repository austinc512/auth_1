const express = require("express");

const messageControllers = require("../controllers/messageController");

const router = express.Router();

const auths = require("../middleware/auth");

// anyone can get to this route
router.get("/hello", messageControllers.hello);

/*
someone with a valid token can access this route
still needs work - middleware function?
this is where next() comes in
the arguments are tasks in a chain

first it checks that we're on a specific endpoint
the NEXT task in the chain is to check if authorized
and finally run private hello
*/
router.get("/privateHello", auths.checkJWT, messageControllers.privateHello);

module.exports = router;

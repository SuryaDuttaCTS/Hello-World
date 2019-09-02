const express = require("express");
const router = express.Router();

//@route    POST  API/users
//@desc     register a users
//@access   public

router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;

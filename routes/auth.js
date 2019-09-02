const express = require("express");
const router = express.Router();

//@route    GET  API/auth
//@desc     get login user
//@access   private

router.get("/", (req, res) => {
  res.send("get login user");
});
//@route    POST  API/auth
//@desc     auth user & get token
//@access   public

router.post("/", (req, res) => {
  res.send("login user");
});

module.exports = router;

const express = require("express");
const router = express.Router();

//@route    GET  API/contacts
//@desc     GET ALL USERS CONTACTS
//@access   pRIVATE

router.get("/", (req, res) => {
  res.send("get all contact");
});

//@route    POST  API/contacts
//@desc     ADD NEW USERS CONTACTS
//@access   pRIVATE

router.post("/", (req, res) => {
  res.send("add contact");
});

//@route    PUT  API/contacts/:ID
//@desc     UPDATE CONTACT
//@access   pRIVATE

router.put("/:id", (req, res) => {
  res.send("update contact ");
});

//@route  DELETE  API/contacts/:ID
//@desc     DELETE CONTACT
//@access   pRIVATE

router.delete("/:id", (req, res) => {
  res.send("DELETE contact ");
});

module.exports = router;

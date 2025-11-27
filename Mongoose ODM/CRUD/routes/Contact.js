// Contact routes

// CRUD

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// creating code

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    await newContact
      .save()
      .then((savedContact) => {
        console.log(savedContact);
        res.status(200).json({ message: "Contact saved" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to create new contact" });
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Unable to save new contact" });
  }
});

//read code to find all Contact
router.get("/read", async (req, res) => {
  try {
    Contact.find()
      .then((contacts) => {
        console.log(contacts);
        res.status(200).json({ contacts: contacts });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to save new contact" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to save new contact" });
  }
});

// read to find single contact

router.get("/contact/:id", async (req, res) => {
  try {
    const id = req.params.id;
    Contact.findById({ _id: id })
      .then((contacts) => {
        console.log(contacts);
        res.status(200).json({ contacts: contacts });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to save new contact" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to save new contact" });
  }
});

// search code
router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;
    const searchRegex = new RegExp(searchTerm, "i");
    await Contact.find({
      $or: [
        { firstname: searchRegex },
        { lastname: searchRegex },
        { email: searchRegex },
      ],
    })
      .then((contacts) => {
        console.log(contacts);
        res.status(200).json({ contacts: contacts });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to save new record" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No Matching Record" });
  }
});

// upadte

router.put("/contact/:id", async (req, res) => {
  try {

    const id = req.params.id;
    const user= await user.findById(id)

    if (!id){
      res.status(501).json('User Not Found')

    }
    const updatedContact = req.body;
    await Contact.findOneAndUpdate({ _id: id }, updatedContact, { new: true })

      .then((updatedContact) => {
        console.log(updatedContact);
        res.status(200).json({
          message: "Contact saved successfully",
          contacts: updatedContact,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to saved new contact" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to save new contact" });
  }
});

// delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Contact.findOneAndDelete({ _id: id })
      .then((deletedContact) => {
        console.log(deletedContact);
        res.status(200).json({
          message: "Contact delete successfully",
          contacts: deletedContact,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Unable to delete new contact" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete new contact" });
  }
});

module.exports = router;

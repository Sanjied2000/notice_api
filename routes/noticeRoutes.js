const express = require("express");
const Notice = require("../models/Notice");

const router = express.Router();

/**
 *  Create Notice
 */
router.post("/", async (req, res) => {
  try {
    const notice = new Notice(req.body);
    const savedNotice = await notice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 *  Read All Notices
 */
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 *  Read Single Notice by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 *  Delete Single Notice by ID
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Notice.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Notice not found" });
    }
    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

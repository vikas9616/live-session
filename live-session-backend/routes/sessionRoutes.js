const express = require("express");
const router = express.Router();
const LiveSession = require("../models/LiveSession");
const { v4: uuidv4 } = require("uuid");

router.post("/create", async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const sessionUrl = `http://localhost:5173/session/${uniqueId}`;

    const newSession = await LiveSession.create({
      type: "admin",
      unique_id: uniqueId,
      userurl: sessionUrl
    });

    res.json(newSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:unique_id", async (req, res) => {
  try {
    const session = await LiveSession.findOne({
      unique_id: req.params.unique_id
    });

    if (!session) return res.status(404).json({ error: "Session not found" });

    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

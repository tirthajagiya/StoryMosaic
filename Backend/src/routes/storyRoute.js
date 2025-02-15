import express from "express";
import { Story } from "../models/story.models.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Story.find();
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const data = await Story.findById(req.params.id);
  res.send(data);
});

router.post("/", async (req, res) => {
  const data = await Story.create(req.body);
  res.send(data);
});

router.patch("/:id", async (req, res) => {
  const data = await Story.findByIdAndUpdate(req.params.id);
  res.send(data);
});

router.delete("/:id", async (req, res) => {
  const data = await Story.findByIdAndDelete(req.params.id);
  res.send(data);
});

export default router;

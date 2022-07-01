const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  timelineAll,
  getTimelinePosts,
  getUserPosts,
} = require("../controllers/postController");

router.post("/create-post", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id", getPost);
router.get("/timeline/all", timelineAll);
router.get("/timeline/:userId", getTimelinePosts);
router.get("/profile/:name", getUserPosts);

module.exports = router;

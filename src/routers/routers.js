const express = require("express");
const router = express.Router();

// Dashboard
router.get("/", async function(request, response) {
    response.send("Hello world");
});

// Profile
router.get("/:username", async function(request, response) {
    response.send("Hello " + request.params.username);
});

// Update Profile
router.put("/:username", async function(request, response) {
    response.send("Hello " + request.params.username);
});

// Tasks
router.get("/:username/tasks", async function(request, response) {
    response.send("Hello get tasks " + request.params.username);
});

// Add New Task
router.post("/:username/tasks", async function(request, response) {
    response.send("Hello post tasks " + request.params.username);
});

// Update Tasks
router.put("/:username/task/:taskId", async function(request, response) {
    response.send("Hello update tasks " + request.params.username);
});

// Events
router.get("/:username/events", async function(request, response) {
    response.send("Hello get event " + request.params.username);
});

// Add New Event
router.post("/:username/events", async function(request, response) {
    response.send("Hello post event " + request.params.username);
});

// Update Events
router.put("/:username/event/:eventId", async function(request, response) {
    response.send("Hello update event " + request.params.username);
});

// Schedules
router.get("/:username/schedules", async function(request, response) {
    response.send("Hello get schedule " + request.params.username);
});

// Add New Schedule
router.post("/:username/schedules", async function(request, response) {
    response.send("Hello post schedule " + request.params.username);
});

// Update Schedules
router.put("/:username/schedule/:scheduleId", async function(request, response) {
    response.send("Hello update schedule " + request.params.username);
});

module.exports = router;
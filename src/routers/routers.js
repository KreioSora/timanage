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
    response.send("Hello world");
});

// Add New Task
router.post("/:username/tasks", async function(request, response) {
    response.send("Hello world");
});

// Update Tasks
router.put("/:username/task/:taskId", async function(request, response) {
    response.send("Hello world");
});

// Events
router.get("/:username/events", async function(request, response) {
    response.send("Hello world");
});

// Add New Event
router.post("/:username/events", async function(request, response) {
    response.send("Hello world");
});

// Update Events
router.put("/:username/event/:eventId", async function(request, response) {
    response.send("Hello world");
});

// Schedules
router.get("/:username/schedules", async function(request, response) {
    response.send("Hello world");
});

// Add New Schedule
router.post("/:username/schedules", async function(request, response) {
    response.send("Hello world");
});

// Update Schedules
router.put("/:username/schedule/:scheduleId", async function(request, response) {
    response.send("Hello world");
});

module.exports = router;
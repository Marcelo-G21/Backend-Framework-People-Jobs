const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/peopleController");
const { validatePersonData } = require("../middlewares/validatePerson");
const { validateJobData } = require("../middlewares/validateJobs");
const { checkJsonContentType } = require("../middlewares/validateJsonType");

router.get("/", peopleController.getAllPeople);
router.get("/:id", peopleController.getPersonById);
router.post(
  "/",
  checkJsonContentType,
  validatePersonData,
  peopleController.createPerson
);
router.put(
  "/:id",
  checkJsonContentType,
  validatePersonData,
  peopleController.updatePerson
);
router.delete("/:id", peopleController.deletePerson);

router.get("/:id/jobs", peopleController.getJobsByPersonId);
router.post(
  "/:id/jobs",
  checkJsonContentType,
  validateJobData,
  peopleController.addJobToPerson
);
router.put(
  "/:id/jobs/:jobId",
  checkJsonContentType,
  validateJobData,
  peopleController.updateJobInPerson
);
router.delete("/:id/jobs/:jobId", peopleController.deleteJobFromPerson);

module.exports = router;

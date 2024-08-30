const peopleService = require("../services/peopleService");
const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return null;
};

const handleServerError = (res, error, message) => {
  return res.status(500).json({ message, error: error.message });
};

const getAllPeople = async (req, res) => {
  try {
    const people = await peopleService.getAllPeople();
    res.status(200).json({
      message: "People retrieved successfully.",
      data: people,
    });
  } catch (error) {
    handleServerError(res, error, "Error fetching people");
  }
};

const getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await peopleService.getPersonById(id);
    if (person) {
      res.status(200).json({
        message: "Person retrieved successfully.",
        data: person,
      });
    } else {
      res.status(404).json({ message: "Person not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error fetching person");
  }
};

const createPerson = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  try {
    const person = await peopleService.createPerson(req.body);
    res.status(201).json({ message: "Person created successfully", person });
  } catch (error) {
    handleServerError(res, error, "Error creating person");
  }
};

const updatePerson = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  try {
    const person = await peopleService.updatePerson(req.params.id, req.body);
    if (person) {
      res.status(200).json({ message: "Person updated successfully", person });
    } else {
      res.status(404).json({ message: "Person not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error updating person");
  }
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await peopleService.deletePerson(id);
    if (result) {
      res.status(200).json({ message: "Person deleted successfully." });
    } else {
      res.status(404).json({ message: "Person not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error deleting person");
  }
};

const getJobsByPersonId = async (req, res) => {
  const { id } = req.params;
  try {
    const jobs = await peopleService.getJobsByPersonId(id);
    if (jobs !== null) {
      res.status(200).json({
        message: "Jobs retrieved successfully.",
        data: jobs,
      });
    } else {
      res.status(404).json({ message: "Person not found" });
    }
  } catch (error) {
    handleServerError(
      res,
      error,
      "Error fetching jobs, please use a valid id (๑•̀ᗝ•́)૭"
    );
  }
};

const addJobToPerson = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { id } = req.params;
  try {
    const person = await peopleService.addJobToPerson(id, req.body);
    if (person) {
      res.status(200).json({ message: "Job added successfully", person });
    } else {
      res.status(404).json({ message: "Person not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error adding job");
  }
};

const updateJobInPerson = async (req, res) => {
  if (handleValidationErrors(req, res)) return;

  const { id, jobId } = req.params;
  try {
    const person = await peopleService.updateJobInPerson(id, jobId, req.body);
    if (person) {
      res.status(200).json({
        message: "Job updated successfully.",
        data: person,
      });
    } else {
      res.status(404).json({ message: "Person or job not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error updating job");
  }
};

const deleteJobFromPerson = async (req, res) => {
  const { id, jobId } = req.params;
  try {
    const person = await peopleService.deleteJobFromPerson(id, jobId);
    if (person) {
      res.status(200).json({
        message: "Job removed from person successfully.",
        data: person,
      });
    } else {
      res.status(404).json({ message: "Person or job not found" });
    }
  } catch (error) {
    handleServerError(res, error, "Error deleting job");
  }
};

module.exports = {
  getAllPeople,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
  getJobsByPersonId,
  addJobToPerson,
  updateJobInPerson,
  deleteJobFromPerson,
};

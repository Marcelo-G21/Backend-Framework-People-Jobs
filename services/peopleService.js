const People = require("../models/People");

const getAllPeople = async () => {
  try {
    return await People.find();
  } catch (error) {
    throw new Error("Error fetching people: " + error.message);
  }
};

const getPersonById = async (id) => {
  try {
    return await People.findById(id);
  } catch (error) {
    throw new Error("Error fetching person: " + error.message);
  }
};

const createPerson = async (personData) => {
  try {
    const person = new People(personData);
    return await person.save();
  } catch (error) {
    throw new Error("Error creating person: " + error.message);
  }
};

const updatePerson = async (id, personData) => {
  try {
    return await People.findByIdAndUpdate(id, personData, { new: true });
  } catch (error) {
    throw new Error("Error updating person: " + error.message);
  }
};

const deletePerson = async (id) => {
  try {
    const result = await People.findByIdAndDelete(id);
    return result !== null;
  } catch (error) {
    throw new Error(`Error deleting person: ${error.message}`);
  }
};

const getJobsByPersonId = async (id) => {
  try {
    const person = await People.findById(id);
    return person ? person.jobs : null;
  } catch (error) {
    throw new Error("Error fetching jobs: " + error.message);
  }
};

const addJobToPerson = async (id, jobData) => {
  try {
    return await People.findByIdAndUpdate(
      id,
      { $push: { jobs: jobData } },
      { new: true }
    );
  } catch (error) {
    throw new Error("Error adding job: " + error.message);
  }
};

const updateJobInPerson = async (personId, jobId, jobData) => {
  try {
    return await People.findOneAndUpdate(
      { _id: personId, "jobs._id": jobId },
      { $set: { "jobs.$": jobData } },
      { new: true }
    );
  } catch (error) {
    throw new Error("Error updating job: " + error.message);
  }
};

const deleteJobFromPerson = async (personId, jobId) => {
  try {
    return await People.findByIdAndUpdate(
      personId,
      { $pull: { jobs: { _id: jobId } } },
      { new: true }
    );
  } catch (error) {
    throw new Error("Error deleting job: " + error.message);
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

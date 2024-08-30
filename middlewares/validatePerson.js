const { body } = require("express-validator");

const allowedPersonFields = ["name", "lastName", "nationality", "year", "jobs"];

const allowedJobFields = [
  "company",
  "initContract",
  "finishContract",
  "position",
];

const validatePersonData = [
  // Validación de los campos permitidos en el objeto principal
  body().custom((value) => {
    const keys = Object.keys(value);
    const invalidFields = keys.filter(
      (key) => !allowedPersonFields.includes(key)
    );
    if (invalidFields.length > 0) {
      throw new Error(`Invalid fields: ${invalidFields.join(", ")}`);
    }
    return true;
  }),

  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),

  body("lastName")
    .isString()
    .withMessage("Last name must be a string")
    .notEmpty()
    .withMessage("Last name is required"),

  body("nationality")
    .isString()
    .withMessage("Nationality must be a string")
    .notEmpty()
    .withMessage("Nationality is required"),

  body("year")
    .isNumeric()
    .withMessage("Year must be a number")
    .notEmpty()
    .withMessage("Year is required"),

  // Validación del array de trabajos
  body("jobs")
    .isArray({ min: 1 })
    .withMessage("Jobs must be an array with at least one job"),

  body("jobs.*").custom((job) => {
    const jobKeys = Object.keys(job);
    const invalidJobFields = jobKeys.filter(
      (key) => !allowedJobFields.includes(key)
    );
    if (invalidJobFields.length > 0) {
      throw new Error(`Invalid job fields: ${invalidJobFields.join(", ")}`);
    }
    return true;
  }),

  body("jobs.*.company")
    .notEmpty()
    .withMessage("Company is required")
    .isString()
    .withMessage("Company must be a string"),

  body("jobs.*.initContract")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Start date must be in ISO 8601 format (YYYY-MM-DD)"),

  body("jobs.*.finishContract")
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage("Finish date must be in ISO 8601 format (YYYY-MM-DD)"),

  body("jobs.*.position")
    .notEmpty()
    .withMessage("Position is required")
    .isString()
    .withMessage("Position must be a string"),
];

module.exports = {
  validatePersonData,
};

const { body } = require("express-validator");

const allowedJobFields = [
  "company",
  "initContract",
  "finishContract",
  "position",
];

const validateJobData = [
  body().custom((value) => {
    const keys = Object.keys(value);
    const invalidJobFields = keys.filter(
      (key) => !allowedJobFields.includes(key)
    );
    if (invalidJobFields.length > 0) {
      throw new Error(`Invalid job fields: ${invalidJobFields.join(", ")}`);
    }
    return true;
  }),

  body("company").notEmpty().withMessage("Company is required"),
  body("initContract")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Start date must be in ISO 8601 format (YYYY-MM-DD)"),
  body("finishContract")
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage("Finish date must be in ISO 8601 format (YYYY-MM-DD)"),
  body("position").notEmpty().withMessage("Position is required"),
];

module.exports = {
  validateJobData,
};

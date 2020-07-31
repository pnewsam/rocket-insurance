export const isPresent = (val) =>
  Boolean(val.length) ? "" : "must be present.";

export const isValidPostalCode = (val) =>
  /^\d{5}$/g.test(val) ? "" : "must be a valid postal code.";

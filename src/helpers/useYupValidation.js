import * as yup from "yup";
const validate = (schema, data) => schema.isValid(data, (valid) => valid);

export const validateProperty = (input, schema) => {
  const fieldSchema = yup
    .object()
    .shape({ [input.name]: schema["fields"][input.name] });
  return validate(fieldSchema, { [input.name]: input.value });
};

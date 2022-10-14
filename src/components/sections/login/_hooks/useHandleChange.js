import { validateProperty } from "helpers/useYupValidation";
import { loginSchema } from "./useLoginSchema";

export const handleChange = (target, formState, setFormState) => {
  setFormState({
    ...formState,
    values: { ...formState.values, [target.name]: target.value },
  });
  validateProperty(target, loginSchema).then((valid) => {
    setFormState((prev) => ({
      ...prev,
      errors: { ...formState.errors, [target.name]: !valid },
    }));
  });
};

export const buttonDisabled = (formState) => {
  if (
    formState.errors?.password ||
    formState.errors?.username ||
    !!!formState.values?.username ||
    !!!formState.values?.password
  ) {
    return true;
  }
};

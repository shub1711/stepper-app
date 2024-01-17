export const updateFormData = (field, value) => ({
  type: "UPDATE_FORM_DATA",
  payload: { field, value },
});

export const submitForm = (formData) => ({
  type: "SUBMIT_FORM",
  payload: { formData },
});

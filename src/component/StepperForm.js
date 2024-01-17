import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "./redux/actions";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const StepperForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleChange = (field, value) => {};

  const handleAddressChange = (address) => {};

  const handleSubmit = () => {
    dispatch(submitForm(formData));
  };

  const steps = [
    { component: <Step1 formData={formData} handleChange={handleChange} /> },
    {
      component: (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleAddressChange={handleAddressChange}
        />
      ),
    },
    { component: <Step3 formData={formData} /> },
  ];

  return (
    <div>
      {steps[activeStep].component}
      <button onClick={handleBack} disabled={activeStep === 0}>
        Back
      </button>
      <button
        onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
      >
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default StepperForm;

import { useState } from "react";
/**
 *
 * @param {Object} initdataModel - initiates the controlled form with default data
 * @param {Object} validationSchema - validation schema helps to validate form input
 * @returns {Object} - form handler functions to manage form state
 */
const useForm = (initdataModel, validationSchema) => {
  const [dataModel, setDataModel] = useState(initdataModel);
  const validate = () => {};
  const validateProperty = ({ key, value }) => {};
  const handleSubmit = async (e, doSubmit, options = {}) => {
    doSubmit(e);
  };
  const handleChange = ({ key, value }) => {
    validateProperty({})
    const data = { ...dataModel.data };
    data[key] = value;
    setDataModel({ data });
  };
  const resetForm = () => {
    setDataModel(initdataModel);
  };
  const _isObject = (object) => object !== null && typeof object === "object";
  const _deepEqual = (referenceObject, testObject) => {
    const referenceKeys = Object.keys(referenceObject);
    const testKeys = Object.keys(testObject);
    if (referenceKeys.length !== testKeys.length) return false;
    for (const key of referenceKeys) {
      const referenceValue = referenceObject[key];
      const testValue = testObject[key];
      const hasProperties = _isObject(referenceValue);
      if (!hasProperties && referenceValue !== testValue) return false;
      if (hasProperties && !_deepEqual(referenceValue, testValue)) return false;
    }
    return true;
  };
  const hasUnsavedData = () => !_deepEqual(initdataModel, dataModel);
  return {
    dataModel,
    handleChange,
    handleSubmit,
    validate,
    resetForm,
    hasUnsavedData,
  };
};
export default useForm;

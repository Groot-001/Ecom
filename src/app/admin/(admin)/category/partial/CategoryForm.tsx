import InputText from "@/components/forms/InputText";
import InputTextArea from "@/components/forms/InputTextArea";
import React from "react";

const CategoryForm = () => {
  return (
    <div>
      <InputText label="Category Name" name="name" />
      <InputTextArea label="Description" name="description" />
    </div>
  );
};

export default CategoryForm;

import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register("username", { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormExample;

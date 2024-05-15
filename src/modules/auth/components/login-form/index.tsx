import CustomButton from "@/common/components/forms/button";
import CustomInput from "@/common/components/forms/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginFormType {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="Enter Email"
          {...register("email", { required: true })}
          error={errors.email}
        />
        <div className="">
          <CustomInput
            label="Enter Password"
            {...register("password", { required: true })}
            error={errors.password}
          />
          <div className="text-right mt-2">
            <Link to="#" className="text-sm text-[#000000] font-medium">
              Forgot Password
            </Link>
          </div>
        </div>

        <CustomButton className="px-[4.188rem] py-3 w-fit text-sm rounded-xl">
          Login
        </CustomButton>
      </form>
    </div>
  );
};

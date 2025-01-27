import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utility/toastify";

const Login = () => {
  const [isHide, setIsHide] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const { handelFirebaseLogin, setLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBtnLoading(true);
    handelFirebaseLogin(data.email, data.password)
      .then(() => {
        setLoading(false);
        showSuccessToast("Login Successfully");
        setBtnLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setBtnLoading(false);
        showErrorToast("Something want wrong!");
      });
  };

  return (
    <div className="w-full max-width flex items-center justify-center">
      <div className="card w-full max-w-sm my-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body flex flex-col gap-4"
        >
          <label className="font-bold text-2xl text-center">Login</label>
          <hr className="border-base-300 my-2" />
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Password</span>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                {...register("password", { minLength: 6 })}
                type={isHide ? "text" : "password"}
                placeholder="password"
                className=""
                required
              />
              <span
                onClick={() => setIsHide(!isHide)}
                className="text-lg text-gray-500 cursor-pointer"
              >
                {isHide ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </label>
            {errors.password?.type === "minLength" && (
              <div className="text-xs text-red-500 mt-2">
                Password length must be at least 6 character
              </div>
            )}
          </div>
          <div className="form-control mt-6">
            {btnLoading ? (
              <button className="btn btn-primary w-full">
                <span className="loading loading-spinner"></span>
                Login
              </button>
            ) : (
              <button className="btn w-full btn-primary">Login</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

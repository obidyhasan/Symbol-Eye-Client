const Login = () => {
  return (
    <div className="w-full max-width flex items-center justify-center">
      <div className="card w-full max-w-sm my-20">
        <form className="card-body flex flex-col gap-4">
          <label className="font-bold text-2xl text-center">Login</label>
          <hr className="border-base-300 my-2" />
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-2">Email</span>
            </label>
            <input
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
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitHandler = () => {
    if (!username || !password) {
      return setError(true);
    } else {
      navigate("/landing");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-5/6 ">
      <div className="flex-col justify-start w-1/3 mb-8">
        <div className="text-3xl font-bold">Welcome back</div>
        <div className="text-gray-500">Sign in to your account</div>
      </div>
      {error && <div className="text-red-600">Field(s) cannot be empty</div>}
      <div className="flex justify-start w-1/3 mb-2">
        <div className="font-semibold">Username</div>
      </div>
      <input
        className="w-1/3 mb-10 p-2 rounded-md border-2 border-gray-500"
        type="test"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={true}
        placeholder="Enter your username"
      />
      <div className="flex justify-start w-1/3 mb-2">
        <div className="font-semibold">Password</div>
      </div>
      <input
        className="w-1/3 mb-10 p-2 rounded-md border-2 border-gray-500"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        placeholder="Enter your Password"
      />
      <div className="flex justify-end w-1/3 mb-2">
        <a
          className="text-purple-500 hover:text-purple-700 cursor-pointer"
          href="/login"
        >
          Forgot your password?
        </a>
      </div>

      <button
        onClick={onSubmitHandler}
        className="bg-purple-600 h-10 w-40 text-white rounded-md mt-10 hover:bg-purple-700"
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;

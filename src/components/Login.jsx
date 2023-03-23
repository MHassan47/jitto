import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex-col justify-start w-1/3 mb-8">
        <div className="text-3xl font-bold">Welcome back</div>
        <div className="text-gray-500">Sign in to your account</div>
      </div>
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
          href="#"
        >
          Forgot your password?
        </a>
      </div>

      <button
        //   onClick={onSubmitHandler}
        className="bg-purple-600 h-10 w-40 text-white rounded-md mt-10 hover:bg-purple-700"
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
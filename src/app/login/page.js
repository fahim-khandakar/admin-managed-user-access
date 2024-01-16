import Image from "next/image";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const LoginPage = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const password = form.password.value;
    console.log(id, password);

    createUser(id, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 bg-[#03013B]">
          <div className=" flex justify-center items-center h-screen">
            <div className="absolute">
              <Image
                src="/Ellipse 774.png"
                alt=""
                width="400"
                height="400"
                className=""
                priority={true}
              />
            </div>
            <div className="absolute">
              <Image
                src="/Ellipse 773.png"
                alt=""
                width="250"
                height="250"
                className=""
              />
            </div>
            <Image
              src="/Frame 427319727.png"
              width="200"
              height="200"
              alt=""
              className="relative"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center h-screen">
          <div>
            <h2 className="text-center font-bold text-2xl mb-5">Admin Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="id"
                  placeholder="User ID"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="btn bg-[#0500FF] text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

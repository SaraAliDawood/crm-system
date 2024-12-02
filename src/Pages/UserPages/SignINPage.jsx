import React, { useState } from "react";
import img1 from "../../../assets/Media/Dashboard Login Page illustration.png";
import logo from "../../../assets/Media/top.png";
import { Link } from "react-router-dom";
import axios from "axios";
function SignINPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    let res = await axios.post(" ", {
      //Api
      email: email,
      password: password,
    });
    if (res.status === 200) {
      window.localStorage.setItem("email", email);
      window.location.pathname = "/UserDashboard";
    }
  }
  return (
    <section className="User" dir="rtl">
      <div className="w-full h-screen flex gap-[5%] items-center justify-center p-3 bg-[#292929]">
        <div className="w-[2/3] h-full hidden md:block">
          <div className="relative group h-[100%] w-full">
            <img
              src={img1}
              className="object-contain w-full h-full"
              alt="logo"
            />
          </div>
        </div>

        <div className="w-[1/3] h-full flex items-center justify-between flex-col RS">
          <div className="h-[9%]">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="h-[91%] flex justify-center flex-col w-full">
            <div className="mb-8 text-right headd">
              <h1 className="text-[32px] text-[white] font-bold">
                تسجيل الدخول
              </h1>
              <p className="text-[18px] text-[#969696]">
                تسجيل الدخول لمتابعة مشاريعك
              </p>
            </div>
            <form
              action="#"
              method="get"
              onSubmit={submit}
              className="flex flex-col items-center w-full"
            >
              <div className="w-full mb-4">
                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                  id="email"
                  type="email"
                  placeholder="البريد الالكتروني"
                  className="text-right border rounded-[10px] w-full py-2 px-3 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                />
              </div>

              <div className="w-full">
                <label className="block text-[#969696] text-sm font-bold mb-2 text-right">
                  رمز المرور
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  type="password"
                  placeholder="كلمه المرور"
                  className="text-right border rounded-[10px] w-full py-2 px-3 text-[white] focus:outline-none focus:ring-1 focus:ring-[#0A8F0A] bg-[#292929]"
                />
              </div>

              <button
                className="bg-[#0A8F0A] hover:bg-[#0F430F] transition duration-300 p-[10px] w-full rounded-[5px] font-bold mb-[20px] mt-[20px]"
                type="submit"
              >
                تسجيل الدخول
              </button>

              <div className="flex items-center w-full my-4">
                <div className="flex-1 border-b border-gray-300"></div>
                <span className="mx-4 text-gray-600">or</span>
                <div className="flex-1 border-b border-gray-300"></div>
              </div>

              <p className="text-[#959595] mt-[10px] text-[12px]">
                تحتاج الي حساب؟
                <Link to="/register"className="text-[#3679FD] underline">
                  {" "}
                  انشئ الان{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>


  );
}

export default SignINPage;

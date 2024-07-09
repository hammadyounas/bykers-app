import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Dummy login validation
    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_USER_PASSWORD) {
      console.log(username, password);
      router.push('/admin/viewBikes');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <section className="lg:h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between bg-black">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="/assets/Images/bike13.jpg"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 w-[90%] md:w-8/12 lg:w-5/12 xl:w-5/12 max-lg:mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 lg:text-2xl sm:text-xl text-lg font-bold text-red-700">Sign In</p>
              </div>
              <div className="mb-6 mt-5">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                  UserName
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="shadow appearance-none border rounded w-full sm:w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full sm:w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 sm:pr-14 xl:pr-20 pr-3 flex items-center text-black cursor-pointer"
                  >
                    {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                  </span>
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <a href="#!" className="inline-block align-baseline font-bold text-sm hover:text-red-500 text-white">
                  Forgot password?
                </a>
              </div>
              <div className="text-center lg:text-left">
                <button type="submit" className="inline-block rounded bg-red-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-white focus:bg-red hover:text-red-700 focus:outline-none active:bg-red-700">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

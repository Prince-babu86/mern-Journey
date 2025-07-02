import React, { useState } from "react";

const Net = () => {
  const [loader, setloader] = useState(false);
  const [username, setusername] = useState("");
  const [user, setuser] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (!res.ok) throw new Error("User not found");
      setloader(false);
      return setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <form onSubmit={handleOnSubmit} className="w-[500px] p-4" action="">
        <input
          name="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
          value={username}
          className="outline-none w-full py-3 px-2 border-b-2"
          type="text"
          placeholder="Username"
        />
        {!loader ? (
          <button
            type="submit"
            className="w-full text-white bg-[#FB641B] py-2 mt-5 rounded "
          >
            Find
          </button>
        ) : (
          <button
            type="submit"
            className="w-full text-white bg-[#FB641B] py-2 mt-5 rounded flex items-center justify-center "
          >
            <span className="h-5 w-5 rounded-full border-2 border-t-transparent animate-spin"></span>
          </button>
        )}
      </form>

      {user ? (
        <div className="w-[500px] mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className="text-2xl font-bold">{user.login}</h2>
              <p className="text-gray-500">@prince-babu86</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 mb-2 italic">
              "Web Developer | MERN Stack Learner"
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>📍 Location:</strong> India
              </li>
              <li>
                <strong>📁 Public Repos:</strong> {user.public_repos}
              </li>
              <li>
                <strong>👥 Followers:</strong> {user.followers}
              </li>
              <li>
                <strong>🔗 Profile:</strong>
                <a
                  href={user.html_url}
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  github.com/{user.login}
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Find a user ?</div>
      )}
    </div>
  );
};

export default Net;

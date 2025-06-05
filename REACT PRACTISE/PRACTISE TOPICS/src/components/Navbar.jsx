import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(true);

  // useEffect(()=>{
  //     fetch("https://api.github.com/users/master-dhanesh")
  //     .then(res => res.json())
  //     .then(data => setdata(data))
  //     .catch((err)=>console.log(err))
  // },[])

  // useEffect(()=>{
  //     const fetchdata = async () => {
  //         try {
  //             const res = await fetch("https://api.github.com/users/master-dhanesh")
  //             const data = await res.json()
  //             setdata(data)
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }

  //     fetchdata()
  // },[]),

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=1000");
        if (!res.ok) throw new Error("User not found");
        const resutl = await res.json();
        setisloading(false);
        setdata(resutl);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setisloading(false);
      }
    };

    getdata();
  }, []);

  //   let renderdata = data.map((elem)=>{
  //     return
  //   })

  console.log(data);

  if (data) {
  }

  let renderdata = data
    ? data.results.map((elem) => {
        console.log(elem.picture.large);
        return (
          <div className="card w-[350px] p-3  min-h-5 rounded-xl flex  flex-wrap items-center justify-center">
            <img
              className="w-full rounded-2xl"
              src={elem.picture.large}
              alt=""
            />
          </div>
        );
      })
    : "";

  return (
    <div className=" w-screen flex items-center justify-center p-5">
      {isloading ? (
        <div className="loader flex flex-wrap gap-2">
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>{" "}
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>{" "}
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
          <div className="ld w-[350px] h-[300px] bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-wrap">{renderdata}</div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
       <div className="flex flex-col items-center px-4 py-8">
      <h1 className="font-bold text-4xl text-blue-950 text-center mb-4 ">หน้าหลัก</h1>
      <hr className="w-full mb-6 border-t-2 border-gray-300"/>
      <img src="./image/classroomgooo.jpg" alt="" className="w-full max-w-2xl object-cover mb-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"/>
      <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-justify">ศูนย์กลางด้านการศึกษา เพื่อการสู่ความเป็นเลิศ เป็นคนที่พิเศษเหนือใคร ต้องที่ NVC Training Center</p>
    </div>
    </Layout>
  );
};

export default Home;

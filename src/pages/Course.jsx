import React from 'react'
import Layout from '../components/Layout';

const Products = () => {

  const products = [
    { id: 1, name: "Basic React Native", time: 5, price: 7500, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmluQWe188nLtKUnLzW0NarbSuBy1o7WZug&s" },
    { id: 2, name: "Power Bi Dashboard", time: 4,price: 5500, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoB8ADAnEngygXTJj6VHp2Y7wljbliJxgUw&s" },
    { id: 3, name: "UI Design with Figma", time: 3, price: 5000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2NYvZxkm6_ZMgIgwfURsIRmaiRVpJalyJw&s" },
    { id: 4, name: "Cross Platform with Flutter", time: 5, price: 6500, imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*SrSBfIzu9JpORKAB.jpeg" },
  ];
  

  return (
    <Layout>
  
  <h1 className="font-bold text-4xl text-blue-950 text-center mb-4 ">หลักสูตรที่เปิดสอน</h1>
  <hr className="w-full mb-6 border-t-2 border-gray-300"/> 
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          time={product.time}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>

    </Layout>
  )
}

const ProductCard = ({ name, time, price, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          คอร์สแนะนำ
        </div>
        <button className="absolute top-2 right-2 text-blue-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12l5 5L20 7"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-lg mb-2">{name}</h3>
        <p>ระยะเวลา: {time} (วัน)</p>
        <p className="text-gray-500 mb-4">฿{price}</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded w-full">
          สั่งซื้อคอร์ส
        </button>
      </div>
    </div>
  );
};

export default Products
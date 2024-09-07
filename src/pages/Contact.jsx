import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 text-center mb-4">ติดต่อ</h1>
      <hr className="w-full mb-6 border-t-2 border-gray-300"/>

      <div className="flex justify-center mt-20">
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 w-full max-w-sm text-center transform hover:-translate-y-2">
          <img 
            src="https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-1/409201919_122102046392144633_7034868551531212010_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFKru8yFXCSXQzMAgRDjV0o8Pt1NDWrexXw-3U0Nat7FeZiru5vLb-Q42xm6xe6XksXveEnoms87CCsobG_t12Z&_nc_ohc=2Mo03a70irYQ7kNvgHei5VD&_nc_ht=scontent.fkdt3-1.fna&oh=00_AYCrZ0eEVsp73IeWUc4ZNz_VBPAXYmf7FmYlL_YANrCBmg&oe=66CFCA03" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800">NVC Training Center</h2>
          <p className="text-gray-700 mb-3 mt-8">Addres: 90 Avanue Los Angelis Newyork</p>
          <p className="text-gray-700 mb-3 mt-3">E-mail: yutthanaa13@gmail.com</p>
          <p className="text-gray-700 mb-3 mt-3">Tel: 062-565-2481</p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

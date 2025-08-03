import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MyBrand</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Tính năng</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Bảng giá</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Liên hệ</a>
        </nav>
        <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Bắt đầu
        </a>
      </div>
    </header>
  );
};

export default Header;

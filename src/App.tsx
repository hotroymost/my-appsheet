import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Mail, MapPin, Menu, Phone, X, Youtube } from "lucide-react";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start all animations together after a short delay
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <style>{`
        @keyframes slideUpFromBottom {
          from {
            transform: translateY(10px);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideUpFromBottomDelay {
          from {
            transform: translateY(10px);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideUpFromBottomSlow {
          from {
            transform: translateY(50px) scale(0.99);
          }
          to {
            transform: translateY(0) scale(1);
          }
        }

        .animate-slide-up {
          animation: slideUpFromBottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-up-delay {
          animation: slideUpFromBottomDelay 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-up-slow {
          animation: slideUpFromBottomSlow 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .initial-position {
          transform: translateY(10px);
        }

        .initial-position-delay {
          transform: translateY(10px);
        }

        .initial-position-slow {
          transform: translateY(50px) scale(0.99);
        }
      `}</style>

      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
        <div className="bg-white rounded-full shadow-lg max-w-[800px] mx-auto px-4 py-3">
          <div className="hidden md:grid grid-cols-5 items-center text-center">
            {/* Logo */}
            <a href="#home" className="flex justify-center items-center">
              <img
                src="/image/z6755125550946_9b321926cd5e1ff95f88619c6d558f76.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>

            {/* Các mục menu */}
            {[
              { href: "#du-an", label: "Dự án" },
              { href: "#appsheet", label: "Appsheet" },
              { href: "#khoa-hoc", label: "Khóa học" },
              { href: "#lien-he", label: "Liên hệ" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 text-lg hover:bg-gray-200 hover:text-red-500 px-3 py-2 rounded-full transition flex justify-center items-center"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden flex justify-between items-center">
            <a href="#home">
              <img
                src="/image/z6755125550946_9b321926cd5e1ff95f88619c6d558f76.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dropdown menu (mobile) */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 max-w-[800px] mx-auto px-4 py-2 space-y-2">
            {[
              { href: "#du-an", label: "Dự án" },
              { href: "#appsheet", label: "Appsheet" },
              { href: "#khoa-hoc", label: "Khóa học" },
              { href: "#lien-he", label: "Liên hệ" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-100 px-3 py-2 rounded transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40">
        <div className="text-center px-4 max-w-[1200px] mx-auto">
          <h1
            className={`text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-12 ${
              startAnimation ? 'animate-slide-up' : 'initial-position'
            }`}
          >
            Giải pháp chuyển đổi số<br />doanh nghiệp
          </h1>
        </div>

        <div className="relative flex justify-center items-center px-4">
          {/* Nền đỏ tách riêng, không bị cắt */}
          <div
            className={`absolute w-[90%] bottom-0 left-1/2 -translate-x-1/2 h-48 bg-red-500 rounded-3xl z-0 ${
              startAnimation ? 'animate-slide-up-delay' : 'initial-position-delay'
            }`}
          />

          {/* Container overflow-hidden chỉ cắt ảnh */}
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl">
            <img
              src="/image/z6755125550962_9525f6174f87d316beabc91f16e798c4.jpg"
              alt="Giải pháp chuyển đổi số"
              className={`w-full rounded-3xl shadow-lg ${
                startAnimation ? 'animate-slide-up-slow' : 'initial-position-slow'
              }`}
            />
          </div>
        </div>
      </section>

      <section id="du-an" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Dự án</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Quản trị trung tâm',
                features: ['Quản lý trung tâm', 'Quản lý học sinh', 'QL lớp học'],
                link: 'https://www.appsheet.com/start/a7157b16-7592-4398-a7ef-7bd9689a7886',
              },
              {
                title: 'Quản lý dự án',
                features: ['Quản lý dự án', 'Giao, nhận, phân chia thành viên', 'Theo dõi tiến độ'],
                link: 'https://www.appsheet.com/start/quan-ly-du-an',
              },
              {
                title: 'Quản lý Studio',
                features: ['Quản lý Studio', 'Xếp lịch', 'Theo dõi tiến độ', 'Báo cáo'],
                link: 'https://www.appsheet.com/start/quan-ly-studio',
              },
              {
                title: 'Quản lý Sales/Kho',
                features: ['Quản lý kho', 'Quản lý kinh doanh', 'Nhập/Xuất'],
                link: 'https://www.appsheet.com/start/quan-ly-kho',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl border shadow-[0_8px_8px_-4px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-between p-6 h-full transform hover:-translate-y-1 transition-transform duration-200 border-t-8 border-t-red-500 hover:border-red-600"
              >
                <div className="mt-4 mb-16">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="list-disc list-inside text-left text-sm space-y-2">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white text-sm px-6 py-2 rounded-lg self-center hover:bg-red-600 transition"
                >
                  Truy cập
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Khóa học */}
      <section id="khoa-hoc" className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Khóa học mới nhất</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-xl p-4 border hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Khóa học #{id}</h3>
                <p>Thời lượng: 12 buổi · Học online · Có cấp chứng chỉ</p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Xem chi tiết
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <section id="lien-he" className="py-20">
        <div className="max-w-[600px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Liên hệ với chúng tôi</h2>
          <p className="mb-6">Bạn cần tư vấn hoặc hỗ trợ? Gửi thông tin cho chúng tôi!</p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-4 py-2"
            />
            <textarea
              placeholder="Nội dung"
              rows={4}
              className="w-full border rounded px-4 py-2"
            ></textarea>
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              onClick={() => alert('Form submitted!')}
            >
              Gửi
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ymost</h3>
              <p className="text-gray-400 mb-4">
                Cung cấp giải pháp chuyển đổi số cho doanh nghiệp.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4">Danh mục</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#du-an" className="hover:text-white">
                    Dự án
                  </a>
                </li>
                <li>
                  <a href="#appsheet" className="hover:text-white">
                    Appsheet
                  </a>
                </li>
                <li>
                  <a href="#khoa-hoc" className="hover:text-white">
                    Khóa học
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3: Bản đồ */}  
            <div>
              <h4 className="font-semibold mb-4">Bản đồ doanh nghiệp</h4>
              <div className="aspect-video w-full rounded overflow-hidden border border-gray-700">
                <iframe 
                  src="" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Hướng dẫn mua hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span> Quận Tân Phú, TP.HCM</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>0123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@ymost.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ymost. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
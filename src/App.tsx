/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  QrCode, 
  Tv, 
  CheckCircle, 
  PlayCircle, 
  ArrowRight, 
  BookOpen, 
  Languages, 
  Calculator, 
  Facebook, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone,
  Menu,
  X,
  Trophy,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tighter text-primary">IDBook</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary transition-colors" href="#">Home</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Bộ đề 2026</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Tổng ôn lớp 9</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Hỗ trợ học tập</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Liên hệ</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/10">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4"
        >
          <a className="text-primary font-bold" href="#">Home</a>
          <a className="text-on-surface-variant font-medium" href="#">Bộ đề 2026</a>
          <a className="text-on-surface-variant font-medium" href="#">Tổng ôn lớp 9</a>
          <a className="text-on-surface-variant font-medium" href="#">Hỗ trợ học tập</a>
          <a className="text-on-surface-variant font-medium" href="#">Liên hệ</a>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold w-full">
            Get Started
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-tertiary-fixed text-tertiary text-xs font-bold mb-6 tracking-wide uppercase">
          Chào mừng đến với kỷ nguyên số
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
          Chinh Phục Kỳ Thi 2026 <br/> Cùng <span className="text-primary">IDBook</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
          Mở Khoá Thành Công với hệ thống học tập thông minh, giải bài tập bằng ID và bộ đề thi chuẩn cấu trúc 2026.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
            Khám phá bộ đề ngay
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-200 font-bold text-lg hover:bg-surface-container-low transition-all active:scale-95">
            <PlayCircle size={24} className="text-primary" />
            Xem hướng dẫn
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-fixed rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-30"></div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://picsum.photos/seed/study/800/600" 
            alt="Student studying" 
            className="w-full aspect-[4/3] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Tự Học <span className="relative inline-block">
            Thông Minh
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-tertiary rounded-full"></div>
          </span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <QrCode className="text-primary" size={32} />,
            title: "Scan ID for Video",
            desc: "Tra cứu lời giải video chi tiết bằng ID đi kèm trong từng câu hỏi của sách.",
            color: "bg-primary/10"
          },
          {
            icon: <Tv className="text-tertiary" size={32} />,
            title: "Regular Livestreams",
            desc: "Tham gia các buổi chữa đề trực tiếp cùng đội ngũ giáo viên giàu kinh nghiệm.",
            color: "bg-tertiary/10"
          },
          {
            icon: <CheckCircle className="text-blue-500" size={32} />,
            title: "100% Detailed Solutions",
            desc: "Cam kết mọi câu hỏi đều có lời giải văn bản và video phân tích kỹ lưỡng.",
            color: "bg-blue-500/10"
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://picsum.photos/seed/books/400/500" 
            alt="Books" 
            className="rounded-2xl shadow-lg mt-8"
            referrerPolicy="no-referrer"
          />
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://picsum.photos/seed/group/400/500" 
            alt="Study Group" 
            className="rounded-2xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-8 leading-tight">Học Tập Vượt Trội Cùng Hệ Sinh Thái Moonbook</h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            IDBook không chỉ là những cuốn sách. Đó là một giải pháp học tập toàn diện kết hợp giữa tri thức in ấn và công nghệ số hiện đại.
          </p>
          <ul className="space-y-5 mb-10">
            {[
              "Lời giải Video chi tiết qua mã ID độc quyền",
              "Cập nhật liên tục theo cấu trúc đề thi mới nhất 2026",
              "Hỗ trợ livestream giải đáp thắc mắc 24/7"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-center">
                <div className="bg-tertiary/10 p-1 rounded-full">
                  <CheckCircle size={20} className="text-tertiary" />
                </div>
                <span className="font-medium text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <button className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all">
            Tìm hiểu thêm về Moonbook <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SubjectGrid = () => {
  const subjects = [
    { name: "Toán Học", color: "bg-blue-600" },
    { name: "Tiếng Anh", color: "bg-emerald-600" },
    { name: "Vật Lí", color: "bg-indigo-800" },
    { name: "Hoá Học", color: "bg-blue-500" },
    { name: "Sinh Học", color: "bg-green-700" },
    { name: "Ngữ Văn", color: "bg-blue-700" }
  ];

  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Bộ 60 đề minh họa tốt nghiệp THPT 2026</h2>
            <p className="text-on-surface-variant">Chuẩn bị lộ trình bứt phá cho kỳ thi quan trọng nhất.</p>
          </div>
          <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">
            Xem tất cả đề 2026 <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {subjects.map((sub, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-2xl shadow-sm cursor-pointer hover:shadow-xl transition-all"
            >
              <div className={`aspect-[3/4] rounded-xl overflow-hidden mb-4 ${sub.color} flex flex-col items-center justify-center text-white p-4 text-center`}>
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">{sub.name}</span>
                <div className="text-5xl font-black mb-4">60</div>
                <span className="text-[10px] font-bold opacity-60">ĐỀ MINH HOẠ 2026</span>
              </div>
              <h4 className="font-bold text-center text-sm">{sub.name} 2026</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Grade9Section = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold">Bộ Tổng Ôn Lớp 9</h2>
        <span className="px-4 py-1 bg-tertiary-fixed text-tertiary rounded-full text-xs font-bold tracking-wider">MỚI NHẤT</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Tổng Ôn Toán 9", icon: <Calculator size={32} />, id: "#01", desc: "Đầy đủ các chuyên đề từ cơ bản đến nâng cao theo cấu trúc thi vào 10 mới nhất." },
          { title: "Tổng Ôn Ngữ Văn 9", icon: <BookOpen size={32} />, id: "#02", desc: "Hệ thống hoá kiến thức tác phẩm và kỹ năng làm văn nghị luận xã hội, văn học." },
          { title: "Tổng Ôn Tiếng Anh 9", icon: <Languages size={32} />, id: "#03", desc: "Nắm vững ngữ pháp và từ vựng trọng tâm giúp tối ưu điểm số thi vào 10." }
        ].map((book, i) => (
          <div key={i} className="group bg-surface-container-low p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-white rounded-xl shadow-sm text-primary">
                {book.icon}
              </div>
              <span className="text-3xl font-black text-gray-200">{book.id}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{book.title}</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">{book.desc}</p>
            <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-95">
              Đặt sách ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary-fixed/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Sẵn sàng để trở thành Thủ khoa 2026?</h2>
        <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed">
          Đăng ký nhận tài liệu ôn thi miễn phí và thông báo về các buổi livestream chữa đề mới nhất.
        </p>
        <form className="relative flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-xl shadow-black/5" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Địa chỉ email của bạn" 
            className="w-full px-8 py-4 md:py-2 text-on-surface outline-none border-none text-lg bg-transparent placeholder:text-gray-400"
          />
          <button className="w-full md:w-auto bg-tertiary-fixed text-tertiary px-10 py-4 rounded-xl md:rounded-full font-bold text-lg hover:brightness-95 transition-all active:scale-95 whitespace-nowrap">
            Đăng ký ngay
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
      <div className="md:col-span-1">
        <div className="text-2xl font-extrabold text-primary mb-6">IDBook</div>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          Hệ thống sách ID hàng đầu Việt Nam. Đồng hành cùng hàng triệu sĩ tử chinh phục ước mơ vào các trường Đại học Top đầu.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <Trophy size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <Play size={20} />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-lg mb-6">Sản Phẩm</h4>
        <ul className="space-y-4 text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">Bộ đề 2026</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Tổng ôn lớp 9</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Sách theo chuyên đề</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Khóa học Online</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Liên Hệ</h4>
        <ul className="space-y-4 text-on-surface-variant">
          <li className="flex items-start gap-3">
            <MapPin size={20} className="text-primary shrink-0" />
            <span>Miếu Đầm, Nam Từ Liêm, Hà Nội</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={20} className="text-primary shrink-0" />
            <span>support@idbook.vn</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={20} className="text-primary shrink-0" />
            <span>1900 1234</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Hỗ Trợ</h4>
        <ul className="space-y-4 text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-gray-100 text-center text-on-surface-variant text-sm">
      <p>© 2024 IDBook. Empowering the Fluid Academy.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <SubjectGrid />
        <Grade9Section />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

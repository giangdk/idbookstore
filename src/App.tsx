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
  Play,
  GraduationCap,
  Star,
  Send,
  ChevronRight,
  BookMarked,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// Book data from BDD.md
const books2026 = [
  {
    title: "60 Đề minh hoạ THPT môn Toán 2026",
    desc: "Phần 1 phân tích chi tiết cấu trúc và ma trận đề thi 2025 của Bộ GD&ĐT, kèm hướng dẫn cách làm từng dạng bài và tài liệu PDF. Phần 2 gồm 60 đề bám sát xu hướng ra đề mới.",
    img: "60 Đề minh hoạ tốt nghiệp THPT môn Toán 2026.JPG",
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "60 Đề minh hoạ THPT môn Tiếng Anh 2026",
    desc: "Phân tích chi tiết cấu trúc và ma trận đề thi THPT 2025 của Bộ GD&ĐT, kèm hướng dẫn cách làm từng dạng bài và tài liệu PDF; 60 đề minh họa bám sát xu hướng ra đề mới.",
    img: "60 Đề minh hoạ tốt nghiệp THPT môn Tiếng Anh 2026.JPG",
    color: "from-emerald-600 to-green-700",
  },
  {
    title: "60 Đề minh hoạ THPT môn Vật Lí 2026",
    desc: "Phân tích chi tiết ma trận kiến thức và cấu trúc đề thi THPT 2025 của Bộ GD&ĐT, kèm hướng dẫn cách làm từng dạng bài và tài liệu PDF; 60 đề minh họa bám sát xu hướng ra đề mới.",
    img: "60 Đề minh hoạ tốt nghiệp THPT môn Vật Lí 2026.JPG",
    color: "from-indigo-700 to-indigo-900",
  },
  {
    title: "60 Đề minh hoạ THPT môn Hoá Học 2026",
    desc: "60 đề được xây dựng từ ma trận của Bộ, mỗi đề chia 3 dạng: trắc nghiệm khách quan, trắc nghiệm đúng-sai và trắc nghiệm trả lời ngắn. Phân theo 3 mức độ: biết, hiểu, vận dụng.",
    img: "60 Đề minh hoạ tốt nghiệp THPT môn Hoá Học 2026.JPG",
    color: "from-teal-600 to-cyan-700",
  },
  {
    title: "60 Đề minh hoạ THPT môn Sinh học 2026",
    desc: "Phần 1 phân tích chi tiết cấu trúc đề tham khảo và đề thi chính thức THPT 2025 môn Sinh học; Phần 2 gồm 60 đề minh họa THPT 2026 bám sát xu hướng ra đề mới.",
    img: "60 Đề minh hoạ tốt nghiệp THPT môn Sinh học 2026.JPG",
    color: "from-green-600 to-emerald-800",
  },
  {
    title: "100 Đề minh hoạ THPT môn Văn học 2026",
    desc: "3 phần: giới thiệu đề thi tốt nghiệp THPT môn Ngữ văn 2025, tổng hợp kiến thức trọng tâm, và 100 đề minh họa THPT 2026 sắp xếp theo từng thể loại văn bản đọc hiểu.",
    img: "100 Đề minh hoạ tốt nghiệp THPT môn Văn học 2026.JPG",
    color: "from-rose-700 to-pink-700",
  },
];

const khoiDeBooks = [
  {
    title: "Bộ đề minh hoạ khối A 2026",
    desc: "Tổng hợp đề minh hoạ bám sát cấu trúc đề thi 2026 cho khối A (Toán, Vật Lí, Hoá học).",
    img: "Bộ đề minh hoạ khối A 2026.JPG",
    color: "from-blue-700 to-violet-800",
  },
  {
    title: "Bộ đề minh hoạ khối A1 2026",
    desc: "Tổng hợp đề minh hoạ bám sát cấu trúc đề thi 2026 cho khối A1 (Toán, Vật Lí, Tiếng Anh).",
    img: "Bộ đề minh hoạ khối A1 2026.JPG",
    color: "from-cyan-700 to-blue-800",
  },
  {
    title: "Bộ đề minh hoạ khối D 2026",
    desc: "Tổng hợp đề minh hoạ bám sát cấu trúc đề thi 2026 cho khối D (Toán, Ngữ văn, Tiếng Anh).",
    img: "Bộ đề minh hoạ khối D 2026.JPG",
    color: "from-amber-700 to-orange-800",
  },
  {
    title: "Bộ đề minh hoạ khối B 2026",
    desc: "Tổng hợp đề minh hoạ bám sát cấu trúc đề thi 2026 cho khối B (Toán, Hoá học, Sinh học).",
    img: "Bộ đề minh hoạ khối B 2026.JPG",
    color: "from-green-700 to-teal-800",
  },
];

const grade9Books = [
  {
    title: "Tổng ôn Toán 9 tập 1&2",
    desc: "Hệ thống kiến thức Toán 9 từ cơ bản đến nâng cao, bám sát cấu trúc thi vào 10. Đầy đủ chuyên đề, bài tập và lời giải chi tiết.",
    img: "Tổng ôn Toán 9 tập 1&2.JPG",
    icon: <Calculator size={32} />,
    id: "#01",
    color: "bg-blue-600",
  },
  {
    title: "Tổng ôn Tiếng Anh 9 tập 1&2",
    desc: "Nắm vững ngữ pháp và từ vựng trọng tâm lớp 9, tối ưu điểm số thi vào 10. Đầy đủ các chuyên đề ngữ pháp và bài tập thực hành.",
    img: "Tổng ôn Tiếng Anh 9 tập 1&2.JPG",
    icon: <Languages size={32} />,
    id: "#02",
    color: "bg-emerald-600",
  },
  {
    title: "Tổng ôn Ngữ Văn 9 tập 1&2",
    desc: "Hệ thống hoá kiến thức tác phẩm, kỹ năng làm văn nghị luận xã hội và văn học. Chuẩn bị toàn diện cho kỳ thi vào lớp 10.",
    img: "Tổng ôn Ngữ Văn 9 tập 1&2.JPG",
    icon: <BookOpen size={32} />,
    id: "#03",
    color: "bg-indigo-700",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-12 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <BookMarked size={20} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-primary">IDBook</span>
            <span className="text-[10px] block text-primary/60 font-bold -mt-1">.vn</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollTo("home")} className="text-primary font-bold border-b-2 border-primary transition-colors">Trang chủ</button>
          <button onClick={() => scrollTo("products")} className="text-on-surface-variant hover:text-primary transition-colors font-medium">Bộ đề 2026</button>
          <button onClick={() => scrollTo("khoi-de")} className="text-on-surface-variant hover:text-primary transition-colors font-medium">Khối đề</button>
          <button onClick={() => scrollTo("grade9")} className="text-on-surface-variant hover:text-primary transition-colors font-medium">Tổng ôn lớp 9</button>
          <button onClick={() => scrollTo("contact")} className="text-on-surface-variant hover:text-primary transition-colors font-medium">Liên hệ</button>
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("products")}
            className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/10"
          >
            Mua sách ngay
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
          <button onClick={() => scrollTo("home")} className="text-primary font-bold text-left">Trang chủ</button>
          <button onClick={() => scrollTo("products")} className="text-on-surface-variant font-medium text-left">Bộ đề 2026</button>
          <button onClick={() => scrollTo("khoi-de")} className="text-on-surface-variant font-medium text-left">Khối đề</button>
          <button onClick={() => scrollTo("grade9")} className="text-on-surface-variant font-medium text-left">Tổng ôn lớp 9</button>
          <button onClick={() => scrollTo("contact")} className="text-on-surface-variant font-medium text-left">Liên hệ</button>
          <button onClick={() => scrollTo("products")} className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold w-full">
            Mua sách ngay
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  const heroBooks = [
    "/60 Đề minh hoạ tốt nghiệp THPT môn Toán 2026.JPG",
    "/60 Đề minh hoạ tốt nghiệp THPT môn Tiếng Anh 2026.JPG",
    "/60 Đề minh hoạ tốt nghiệp THPT môn Vật Lí 2026.JPG",
    "/60 Đề minh hoạ tốt nghiệp THPT môn Hoá Học 2026.JPG",
    "/Tổng ôn Toán 9 tập 1&2.JPG",
    "/Tổng ôn Tiếng Anh 9 tập 1&2.JPG",
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-primary text-xs font-bold mb-6 tracking-wide border border-blue-100">
            <GraduationCap size={14} />
            Shop chuyên sách luyện thi THPT, THCS 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-4 leading-[1.1]">
            Mở Khoá<br />
            <span className="text-primary">Thành Công</span><br />
            Cùng IDBook.vn
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-8 max-w-lg leading-relaxed">
            Shop chuyên cung cấp sách luyện đề THPT, THCS 2026 và bộ sách ID ôn thi đề minh họa Moonbook, biên soạn bám sát định hướng mới nhất của Bộ Giáo dục.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
            >
              Khám phá bộ đề 2026 <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-200 font-bold text-base hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              <BookOpen size={20} />
              Về chúng tôi
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <CheckCircle size={16} className="text-green-600" />, text: "100% lời giải chi tiết" },
              { icon: <PlayCircle size={16} className="text-blue-600" />, text: "Video hướng dẫn theo ID" },
              { icon: <Tv size={16} className="text-purple-600" />, text: "Livestream chữa đề" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-100 rounded-full blur-[80px] opacity-40"></div>

          {/* Grid of book covers */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6">
            <div className="grid grid-cols-3 gap-4">
              {heroBooks.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[3/4] rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={src}
                    alt={`Sách IDBook ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                      <Star size={12} className="text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Hàng triệu sĩ tử</p>
                  <p className="text-xs text-on-surface-variant">đã tin tưởng sử dụng sách ID</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg mt-8 overflow-hidden"
          >
            <img
              src="/60 Đề minh hoạ tốt nghiệp THPT môn Sinh học 2026.JPG"
              alt="Bộ sách 60 đề Sinh học"
              className="w-full h-72 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/60 Đề minh hoạ tốt nghiệp THPT môn Hoá Học 2026.JPG"
              alt="Bộ sách 60 đề Hoá học"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Hệ Sinh Thái Học Tập Toàn Diện<br />
            <span className="text-primary">Cùng IDBook & Moonbook</span>
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Shop chuyên cung cấp sách luyện đề THPT, THCS 2026 và bộ sách ID ôn thi đề minh họa Moonbook, được biên soạn bám sát định hướng mới nhất của Bộ Giáo dục. Các bản luyện đề trắc nghiệm 2026 áp dụng format mới, với hệ thống câu hỏi bám sát nội dung học trên lớp và các dạng bài thường xuất hiện trong đề thi.
          </p>
          <ul className="space-y-5 mb-10">
            {[
              "Nội dung được xây dựng từ ma trận đề minh họa 2026 của Bộ Giáo dục",
              "100% bài tập đều có lời giải chi tiết, kèm video hướng dẫn theo từng ID",
              "Các buổi livestream chữa đề, hỗ trợ tối đa quá trình tự học và nâng cao điểm số",
              "Hệ thống câu hỏi phân theo 3 mức độ: biết, hiểu, vận dụng"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="bg-green-100 p-1 rounded-full mt-0.5 shrink-0">
                  <CheckCircle size={18} className="text-green-700" />
                </div>
                <span className="font-medium text-on-surface leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hỗ Trợ Học Tập <span className="text-primary">Hiệu Quả</span>
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Không chỉ là cuốn sách — đó là cả một hệ sinh thái học tập thông minh đồng hành cùng bạn.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <QrCode className="text-primary" size={32} />,
            title: "Tra cứu video qua ID",
            desc: "Tra cứu lời giải video chi tiết bằng mã ID độc quyền đi kèm trong từng câu hỏi của sách. Chỉ cần quét ID là xem ngay video phân tích.",
            color: "bg-blue-50"
          },
          {
            icon: <Tv className="text-green-700" size={32} />,
            title: "Livestream chữa đề",
            desc: "Tham gia các buổi chữa đề trực tiếp cùng đội ngũ giáo viên giàu kinh nghiệm, giải đáp thắc mắc 24/7.",
            color: "bg-green-50"
          },
          {
            icon: <CheckCircle className="text-purple-600" size={32} />,
            title: "100% Lời giải chi tiết",
            desc: "Cam kết mọi câu hỏi đều có lời giải văn bản và video phân tích kỹ lưỡng, giúp học sinh tự học hiệu quả.",
            color: "bg-purple-50"
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

const Products2026 = () => (
  <section id="products" className="py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="inline-block py-1 px-3 bg-blue-50 text-primary text-xs font-bold rounded-full mb-3">
            SÁCH BÁN CHẠY NHẤT
          </span>
          <h2 className="text-3xl font-bold mb-2">60 Đề Minh Hoạ Tốt Nghiệp THPT 2026</h2>
          <p className="text-on-surface-variant">Bám sát format đề thi mới nhất của Bộ Giáo dục & Đào tạo</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books2026.map((book, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
          >
            {/* Full-width image header - no gradient, full bleed */}
            <div className="relative overflow-hidden bg-surface-container-low">
              <img
                src={`/${book.img}`}
                alt={book.title}
                className="w-full aspect-square object-cover block group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Label overlay */}
              <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                60 đề
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 leading-tight">{book.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-3">{book.desc}</p>
              <button className="w-full py-3 rounded-xl bg-primary/5 text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm">
                Xem chi tiết
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const KhoiDeSection = () => (
  <section id="khoi-de" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <span className="inline-block py-1 px-3 bg-blue-50 text-primary text-xs font-bold rounded-full mb-3">
          ÔN THI ĐẠI HỌC
        </span>
        <h2 className="text-3xl font-bold mb-2">Bộ Đề Minh Hoạ Theo Khối Thi 2026</h2>
        <p className="text-on-surface-variant">Tổng hợp đề minh hoạ bám sát cấu trúc đề thi 2026 cho các khối xét tuyển Đại học</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {khoiDeBooks.map((book, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
          >
            {/* Full-width image header - no gradient overlay */}
            <div className="relative overflow-hidden bg-surface-container-low">
              <img
                src={`/${book.img}`}
                alt={book.title}
                className="w-full aspect-square object-cover block group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Label overlay at bottom of image */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                2026
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold mb-1 leading-tight">{book.title}</h3>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed line-clamp-2">{book.desc}</p>
              <button className="w-full py-2.5 rounded-xl bg-primary/5 text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm">
                Xem chi tiết
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Grade9Section = () => (
  <section id="grade9" className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="inline-block py-1 px-3 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3">
            THI VÀO LỚP 10
          </span>
          <h2 className="text-3xl font-bold mb-2">Bộ Tổng Ôn Lớp 9</h2>
          <p className="text-on-surface-variant">Hệ thống kiến thức trọng tâm, chuẩn bị toàn diện cho kỳ thi vào lớp 10</p>
        </div>
        <span className="px-4 py-1 bg-tertiary-fixed text-tertiary rounded-full text-xs font-bold tracking-wider shrink-0">MỚI NHẤT 2026</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {grade9Books.map((book, i) => (
          <div key={i} className="group bg-white rounded-2xl hover:shadow-2xl transition-all border border-transparent hover:border-gray-100 overflow-hidden">
            {/* Full-width image - no gradient */}
            <div className="relative overflow-hidden bg-surface-container-low">
              <img
                src={`/${book.img}`}
                alt={book.title}
                className="w-full aspect-square object-cover block group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Tập 1&2
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {book.icon}
                </div>
                <h3 className="text-lg font-bold leading-tight">{book.title}</h3>
              </div>
              <p className="text-on-surface-variant mb-6 leading-relaxed text-sm line-clamp-3">{book.desc}</p>
              <button className="w-full py-3 rounded-xl bg-primary/5 text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm">
                Đặt sách ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Sẵn sàng để trở thành Thủ khoa 2026?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Đăng ký nhận tài liệu ôn thi miễn phí và thông báo về các buổi livestream chữa đề mới nhất từ IDBook.
          </p>
          <form className="relative flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 flex items-center gap-3 px-6">
              <Mail size={20} className="text-gray-400 shrink-0" />
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="w-full py-4 md:py-2 text-on-surface outline-none border-none text-base bg-transparent placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl md:rounded-full font-bold text-base hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2 justify-center md:justify-start"
            >
              <Send size={18} />
              Đăng ký ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <BookMarked size={20} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-primary">IDBook</span>
            <span className="text-[10px] block text-primary/60 font-bold -mt-1">.vn</span>
          </div>
        </div>
        <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">
          Shop chuyên cung cấp sách luyện đề THPT, THCS 2026 và bộ sách ID ôn thi đề minh họa Moonbook. Đồng hành cùng hàng triệu sĩ tử chinh phục ước mơ.
        </p>
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all">
            <Youtube size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-base mb-6">Sản Phẩm</h4>
        <ul className="space-y-3 text-on-surface-variant text-sm">
          <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><ChevronRight size={14} /> Bộ đề 2026</a></li>
          <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><ChevronRight size={14} /> Khối đề thi ĐH</a></li>
          <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><ChevronRight size={14} /> Tổng ôn lớp 9</a></li>
          <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-1"><ChevronRight size={14} /> Tài liệu PDF hỗ trợ</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-base mb-6">Hỗ Trợ</h4>
        <ul className="space-y-4 text-on-surface-variant text-sm">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
            <span>Số 4 ngách 36/23 Miếu Đầm, Mễ Trì, Từ Liêm, Hà Nội</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-primary shrink-0" />
            <span>oncloudninespace@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-primary shrink-0" />
            <span>0397.742.933</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-base mb-6">Giờ làm việc</h4>
        <ul className="space-y-3 text-on-surface-variant text-sm">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Thứ 2 - Thứ 6: 8:00 - 18:00
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Thứ 7: 9:00 - 16:00
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            Chủ nhật: Nghỉ
          </li>
        </ul>
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-primary font-bold mb-1">Cam kết</p>
          <p className="text-xs text-on-surface-variant">Đổi trả trong 7 ngày nếu sản phẩm lỗi từ nhà xuất bản</p>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-on-surface-variant text-sm">© 2026 IDBook.vn — Mở Khoá Thành Công</p>
        <p className="text-on-surface-variant text-xs">Địa chỉ: Số 4 ngách 36/23 Miếu Đầm, Mễ Trì, Từ Liêm, Hà Nội</p>
      </div>
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
        <Products2026 />
        <KhoiDeSection />
        <Grade9Section />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

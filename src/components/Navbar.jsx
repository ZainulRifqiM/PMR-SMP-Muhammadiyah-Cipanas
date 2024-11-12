import { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaPhone } from "react-icons/fa6";
import logo from "../assets/Logo PMR SMPM.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: "Beranda", path: "beranda" },
    { link: "Tentang", path: "tentang" },
    { link: "Kegiatan", path: "kegiatan" },
    { link: "Anggota", path: "anggota" },
    { link: "Kontak", path: "kontak" },
  ];
  return (
    <>
      <nav className=" h-24 bg-white fixed top-0 right-0 left-0 border-b border-color5 z-50">
        <div className=" max-w-screen-xl md:px-8 mx-auto p-4 text-textColor">
          <div className="text-lg container mx-auto flex justify-between items-center font-medium ">
            {/* desktop display */}
            <div>
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-14" alt="Flowbite Logo" />
                <div className="flex flex-col">
                  <span className="text-sm  sm:text-lg font-semibold  text-primary">
                    Palang Merah Remaja
                  </span>
                  <span className="text-sm sm:text-lg font-semibold  text-textColor">
                    SMP Muhammadiyah Cipanas
                  </span>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-8">
              <ul className="md:flex space-x-8 hidden text-textColor font-medium">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={link}
                    to={path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={1000}
                    className="block hover:text-secondary hover:font-semibold text-sm font-normal cursor-pointer hover:-translate-y-1 transition-all duration-300 focus:underline"
                  >
                    {link}
                  </Link>
                ))}
              </ul>
              <div className="space-x-4 hidden md:flex items-center cursor-pointer border-l-4 border-secondary pl-4">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full bg-secondary">
                    {/* <PhoneIcon className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
                    <FaPhone className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="ml-4">
                    <p className="text-labelColor font-medium text-sm">
                      Hubungi Kami
                    </p>
                    <p className="text-secondary font-medium text-sm">
                      +62 838-T732-7642
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile display */}
            <div className="md:hidden ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" text-color7 focus:outline-none hover:text-color9 focus:text-color9 z-50 "
              >
                {isMenuOpen ? (
                  <FaXmark className="w-6 h-6 text-color7" />
                ) : (
                  <FaBars className="w-6 h-6 text-color7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-white ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="block text-labelColor font-medium hover:font-semibold  hover:text-secondary cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;

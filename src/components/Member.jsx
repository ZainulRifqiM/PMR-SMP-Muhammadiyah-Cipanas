import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";

import { ServiceData } from "../constants";
const Member = () => {
  return (
    <div className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-full my-8 md:my-16">
      <div className="md:space-y-16 space-y-8">
        <div className="md:w-4/5 text-center mx-auto">
          <h2 className="text-lg md:text-2xl font-semibold text-textColor ">
            Kami memiliki anggota yang didedikasikan untuk mendukung SMP
            Muhammadiyah dalam bidang kesehatan.
          </h2>
          <p className="text-xs md:text-sm text-labelColor font-medium">
            Dapatkan bantuan dari ekstrakurikuler Palang Merah Remaja yang
            berkomitmen dalam memberikan pertolongan pertama.
          </p>
        </div>
        <div className="mx-auto text-center space-x-4">
          <button className="bg-secondary text-white font-bold py-2 px-4 w-28 rounded-md ">
            Aktif
          </button>
          <button className="bg-white text-disabledColor border-disabledColor border-2  font-bold py-2 px-4 w-28 rounded-md ">
            Nonaktif
          </button>
        </div>
        <div className="">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12, // Jarak lebih kecil untuk layar ponsel
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 16, // Jarak sedang untuk layar tablet
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 16, // Jarak lebih lebar untuk layar besar
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="max-w-[95%] md:max-w-[100%] lg:max-w-[100%]"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-4 group relative shadow-lg rounded-lg p-2 md:p-2 lg:p-4 h-[200px] w-[160px] sm:h-[250px] sm:w-[200px] lg:h-[300px] lg:w-[240px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-md transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url(${item.foto})`,
                    }}
                  />
                  <div className="relative flex flex-col mt-auto">
                    <h1 className="text-sm sm:text-sm lg:text-sm text-white font-semibold">
                      {item.nama}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-200">
                      Kelas : {item.kelas}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Member;

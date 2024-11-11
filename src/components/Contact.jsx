import { FiPhoneCall } from "react-icons/fi";
import gmail from "../assets/gmail.png";
import ig from "../assets/ig.png";
import fb from "../assets/fb.png";
import twit from "../assets/twit.png";

const Contact = () => {
  return (
    <div className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-full mt-8 md:mt-16  ">
      <div className="space-y-0">
        <div>
          <h3 className="text-xl md:text-2xl text-secondary font-semibold">
            Hubungi Kami
          </h3>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="md:w-1/2 space-y-4">
            <div className="md:text-base text-xs font-medium text-labelColor">
              <p>Ingin berkolaborasi?</p>
              <p>
                Hubungi ekstrakurikuler kami pada hari Kamis, pukul 14.00 -
                16.30.
              </p>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <FiPhoneCall className="text-secondary font-bold " />
              <p className="md:text-base text-sm font-semibold text-textColor">
                +62 838 - 1732 - 7542
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg text-secondary font-semibold">
                Terhubung dengan kami
              </h4>
              <p className="md:text-base text-xs font-medium text-labelColor">
                Jadilah bagian dari kami, untuk informasi lebih lanjut
              </p>
            </div>
            <div className="space-y-4 ">
              <div className="flex items-center md:gap-4 gap-2">
                <img src={gmail} alt="" className="w-4 md:w-6 " />
                <p className="md:text-base text-sm font-medium text-textColor">
                  pmrsmpmcipanas47@gmail.com
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-2">
                <img src={ig} alt="" className="w-4 md:w-6 " />
                <p className="md:text-base text-sm font-medium text-textColor">
                  pmrsmpmcipanas47@gmail.com
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-2">
                <img src={fb} alt="" className="w-4 md:w-6 " />
                <p className="md:text-base text-sm font-medium text-textColor">
                  pmrsmpmcipanas47@gmail.com
                </p>
              </div>
              <div className="flex items-center md:gap-4 gap-2">
                <img src={twit} alt="" className="w-4 md:w-6 " />
                <p className="md:text-base text-sm font-medium text-textColor">
                  pmrsmpmcipanas47@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-auto">
            <div className="w-full flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.274844496495!2d107.02852270547093!3d-6.730914797015963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b30006204e1d%3A0xf96eacfdc7e2e084!2sSMP%20Muhammadiyah%20Cipanas!5e0!3m2!1sen!2sid!4v1731241909904!5m2!1sen!2sid"
                className="w-full h-80 rounded-md"
                // width="600"
                // height="400"
                title="Map SMP"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

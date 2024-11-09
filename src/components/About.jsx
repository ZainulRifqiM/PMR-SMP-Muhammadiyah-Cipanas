import image from "../assets/tentang-kami.png";
const About = () => {
  return (
    <div className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-full mt-8  md:pb-0 mb-8  md:pt-16 md:mt-0 ">
      <div className="flex md:flex-row flex-col md:space-x-8 space-y-4 md:space-y-0">
        <div className="md:w-1/3">
          <img src={image} alt="" />
        </div>
        <div className="md:w-2/3 md:space-y-8 space-y-8">
          <div className="md:space-y-4 space-y-4">
            <div className="text-2xl font-semibold">
              <h2 className="text-textColor">Tentang Kami:</h2>
              <h2 className="text-secondary">
                Palang Merah Remaja SMP Muhammadiyah Cipanas
              </h2>
            </div>
            <div>
              <p className="text-labelColor text-base font-medium text-justify">
                Palang Merah Remaja Tingkat Madya adalah ekstrakurikuler yang
                didedikasikan untuk mengasah keterampilan pertolongan pertama,
                menumbuhkan rasa kepedulian, serta mengembangkan jiwa
                kepemimpinan. Bersama kami, Anda dapat menggali potensi diri
                melalui berbagai kegiatan sosial dan kemanusiaan yang bermakna.
                Bergabunglah dan jadilah bagian dari generasi muda yang peduli
                dan siap membantu!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div className="md:w-1/2 border border-1  p-2 rounded-md shadow-md shadow-labelColor">
              <h2 className="text-secondary text-center text-base font-semibold">
                Visi:
              </h2>
              <p className="max-w-md space-y-1 text-labelColor text-justify text-sm font-medium  ">
                Menjadi organisasi pelajar yang unggul dalam keterampilan
                pertolongan pertama, kepedulian sosial, dan kepemimpinan, serta
                mampu menciptakan generasi muda yang berjiwa kemanusiaan dan
                siap berkontribusi bagi masyarakat.
              </p>
            </div>
            <div className="md:w-1/2 border border-1  p-2 rounded-md shadow-md shadow-labelColor">
              <h2 className="text-secondary text-center text-base font-semibold">
                Misi:
              </h2>
              <ul className="max-w-md space-y-0 text-labelColor text-justify text-sm font-medium list-disc list-inside ">
                <li>
                  Menyelenggarakan pelatihan pertolongan pertama secara berkala
                  untuk meningkatkan keterampilan anggota dalam situasi darurat.
                </li>
                <li>
                  Melatih jiwa kepemimpinan dan kerjasama melalui program kerja
                  tim dan kegiatan lapangan yang bermanfaat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

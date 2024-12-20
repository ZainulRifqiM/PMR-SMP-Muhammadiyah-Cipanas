const Banner = () => {
  return (
    <div className="" id="beranda">
      <div
        className="md:h-full h-screen max-w-screen md:mt-0  bg-hero-pattern bg-cover bg-center bg-no-repeat box-border"
        // style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-screen   md:pb-0 content-center  md:pt-16 md:mt-0 "
          id="home"
        >
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="md:text-3xl text-2xl font-bold text-secondary">
                  Ekstrakurikuller
                </h2>
                <h1 className="md:text-5xl text-3xl font-bold text-primary">
                  Palang Merah Remaja
                </h1>
              </div>
              <p className="md:text-base text-sm font-medium text-textColor">
                Bergabunglah Bersama Kami dan Kembangkan Potensi Melalui
                Berbagai Kegiatan Sosial dan Kemanusiaan!
              </p>
            </div>

            <button className="bg-secondary hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-800 rounded ">
              <a href="https://forms.gle/dcZNpxXPruaUoPuP8" target="_blank">
                Bergabung Bersama Kami
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

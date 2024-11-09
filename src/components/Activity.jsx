import logo from "../assets/LogoPMI.png";
import pelantikan1 from "../assets/pelantikan1.png";
import pelantikan2 from "../assets/pelantikan2.png";
import pelantikan3 from "../assets/pelantikan3.png";

const Activity = () => {
  return (
    <div className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-full mt-8  md:pb-0 mb-8  md:pt-16 md:mt-0 ">
      <div>
        {/* Bagian Kiri */}
        <div className="md:w-2/3 space-y-2">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-textColor">Kegiatan</h2>
            <div className="md:flex md:space-x-4 hidden text-base text-labelColor font-medium">
              <p>Jumbara</p>
              <p className="text-secondary">Pelantikan</p>
              <p>Donor Darah</p>
            </div>
          </div>
          <div className="p-4 border rounded-md space-y-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo PMR SMP Muhammadiyah Cipanas"
                className="size-12"
              />
              <div>
                <h3 className="text-base text-secondary font-medium">
                  Pelantikan Palang Merah Remaja Kabupaten Cianjur
                </h3>
                <p className="text-xs text-labelColor">
                  13 - 15 September 2024
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-textColor text-justify">
                Palang Merah Indonesia mengadakan pelantikan Palang Merah Remaja
                (PMR) se-Kabupaten Cianjur pada tanggal 13 hingga 15 September
                2024 di Mandala Kitri, Cibodas. Kegiatan ini mencakup beberapa
                acara, seperti tes praktik lapangan untuk pertolongan pertama
                pada pasien, serta proses membawa pasien menggunakan tandu
                menuju titik yang disediakan panitia. Selain itu, akan diadakan
                post-test sebagai evaluasi pemahaman para peserta terkait
                materi-materi PMR. Acara ini bertujuan untuk melatih
                keterampilan serta memperkuat pemahaman anggota PMR dalam
                menjalankan tugas-tugas kemanusiaan.
              </p>
            </div>
            <div className="md:flex md:space-x-2 space-y-2">
              <div>
                <img src={pelantikan1} alt="" />
              </div>
              <div className="space-y-2 flex flex-col">
                <img src={pelantikan2} alt="" />
                <img src={pelantikan3} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Bagian Kanan */}
        <div className="md:w-1/3"></div>
      </div>
    </div>
  );
};

export default Activity;

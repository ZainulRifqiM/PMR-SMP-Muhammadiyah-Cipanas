import logo from "../assets/logoPMI.png";
import pelantikan1 from "../assets/pelantikan1.png";
import pelantikan2 from "../assets/pelantikan2.png";
import pelantikan3 from "../assets/pelantikan3.png";
import agenda1 from "../assets/agenda1.png";
import agenda2 from "../assets/agenda2.png";

const Activity = () => {
  return (
    <div className=" md:px-8 p-4 max-w-screen-xl mx-auto  h-full md:h-full my-8 md:my-16   ">
      <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
        {/* Bagian Kiri */}
        <div className="md:w-2/3 space-y-2">
          <div className="flex justify-between items-center">
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
        <div className="md:w-1/3 space-y-2">
          {/* Proker */}
          <div>
            <h2 className="text-2xl font-semibold text-textColor">
              Program Kerja
            </h2>
          </div>
          <div className="flex space-x-4">
            <div className="bg-proker1 bg-cover bg-center bg-no-repeat h-60 w-48 content-end pb-2 pl-2">
              {" "}
              <p className="text-xs font-medium text-white">
                Latihan Praktik (Lapangan)
              </p>
              <p className="text-xs font-light text-labelColor">Kamis 14:00</p>
            </div>
            <div className="bg-proker2 bg-cover bg-center bg-no-repeat h-60 w-48 content-end pb-2 pl-2">
              {" "}
              <p className="text-xs font-medium text-white">
                Latihan Materi (Teori)
              </p>
              <p className="text-xs font-light text-labelColor">Kamis 14:00</p>
            </div>
          </div>
          {/* Agenda Mendatang */}
          <div className="space-y-4">
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-textColor">
                Agenda Mendatang
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 border shadow-sm rounded-md p-4 box-border w-full h-24">
                <img src={agenda1} alt="" className="w-16" />
                <div>
                  <p className="text-lg font-semibold text-textColor">
                    Latihan Gabungan
                  </p>
                  <p className="text-base text-labelColor">
                    Informasi Menyusul
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 border shadow-sm rounded-md p-4 box-border w-full h-24">
                <img src={agenda2} alt="" className="w-16" />
                <div>
                  <p className="text-lg font-semibold text-textColor">
                    Wisata Edukasi Alam
                  </p>
                  <p className="text-base text-labelColor">
                    Informasi Menyusul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

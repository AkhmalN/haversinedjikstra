const DATA = [
  {
    no: 1,
    nama: "RSUD TIDAR KOTA MAGELANG",
    alamat:
      "Jl. Tidar No.30A, Kemirirejo, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56125",
    img: "https://foto.kontan.co.id/JeUmPsx5o7Z6Yh_F03nXbGW6LnU=/smart/2022/01/10/1578498979p.jpg",
    kategori: "Rumah_Sakit",
    latitude: -7.485396,
    longitude: 110.218277,
  },
  {
    no: 2,
    nama: "RSI Kota Magelang",
    alamat:
      "Jl. Jeruk No.4A, RT.03/RW.06, Kramat Sel., Kec. Magelang Utara, Kota Magelang, Jawa Tengah 56112",
    kategori: "Rumah_Sakit",
    latitude: -7.452961,
    longitude: 110.22142,
  },
  {
    no: 3,
    nama: "RS Harapan Magelang",
    alamat:
      "Jl. Panembahan Senopati No.11, Jurangombo Utara, Kec. Magelang Sel., Kota Magelang, Jawa Tengah 56123",
    kategori: "Rumah_Sakit",
    latitude: -7.486779,
    longitude: 110.211914,
  },
  {
    no: 4,
    nama: "RST dr. Soedjono Magelang",
    alamat:
      "Jl. Urip Sumoharjo No.48, Wates, Kec. Magelang Utara, Kota Magelang, Jawa Tengah 56113",
    kategori: "Rumah_Sakit",
    latitude: -7.467806,
    longitude: 110.226072,
  },
  {
    no: 5,
    nama: "RSJ Prof. Dr. Soerojo Magelang",
    alamat:
      "Jl. Ahmad Yani No.169, Kramat Utara, Kec. Magelang Utara, Kota Magelang, Jawa Tengah 56115",
    kategori: "Rumah_Sakit",
    latitude: -7.441344,
    longitude: 110.225689,
  },
  {
    no: 6,
    nama: "RSUD Merah Putih Magelang",
    alamat:
      "Jl. Magelang - Yogyakarta Jl. Mungkidan No.km, RW.8, Japunan, Danurejo, Kec. Mertoyudan, Kabupaten Magelang, Jawa Tengah 56172",
    kategori: "Rumah_Sakit",
    latitude: -7.536131,
    longitude: 110.234205,
  },
  {
    no: 7,
    nama: "Puskesmas Magelang Utara",
    alamat:
      "Jl. Ahmad Yani No.244, Kedungsari, Kec. Magelang Utara, Kota Magelang, Jawa Tengah 56115.",
    kategori: "Puskesmas",
    latitude: -7.451887,
    longitude: 110.224151,
  },
  {
    no: 8,
    nama: "Puskesmas Magelang Selatan",
    alamat:
      "Jalan Beringin 3 No.2, Tidar Utara, Magelang Selatan, Tidar Utara, Kec. Magelang Sel., Kota Magelang, Jawa Tengah 56125.",
    kategori: "Puskesmas",
    latitude: -7.492366,
    longitude: 110.227625,
  },
  {
    no: 9,
    nama: "Puskesmas Magelang Tengah",
    alamat:
      "Gg. Dukuh II, Potrobangsan, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56117.",
    kategori: "Puskesmas",
    latitude: 7.466413,
    longitude: 110.217963,
  },
  {
    no: 10,
    nama: "Puskesmas Jurangombo",
    alamat:
      "Jl. Sunan Gunung Jati No.48, Kel. Jurangombo Utara, Kec. Magelang Sel., Kota Magelang. Kode Pos 56123. ",
    kategori: "Puskesmas",
    latitude: -7.488272,
    longitude: 110.211269,
  },
  {
    no: 11,
    nama: "Puskesmas Gelangan",
    alamat:
      "Jalan. Abimanyu, Gelangan, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56112.",
    kategori: "Puskesmas",
    latitude: -7.478531,
    longitude: 110.226059,
  },
  {
    no: 12,
    nama: "Puskesmas Kerkopan",
    alamat:
      "Jalan Sutopo No.4, Cacaban, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56121.",
    kategori: "Puskesmas",
    latitude: -7.478494,
    longitude: 110.215492,
  },
  {
    no: 13,
    nama: "Puskesmas Pakis",
    alamat: " Jl. Magelang Salatiga Km.20, Kec. Pakis 0818262781",
    kategori: "Puskesmas",
    latitude: -7.444146,
    longitude: 110.356128,
  },
  {
    no: 14,
    nama: " MERTOYUDAN I ",
    alamat: "Jl. Mayjen Bambang Soegeng Km.5 Santan, Kec. Mertoyudan",
    kategori: "Puskesmas",
    latitude: -7.521022,
    longitude: 110.227531,
  },
  {
    no: 15,
    nama: " MERTOYUDAN II",
    alamat: "Jl. Sawo I Perumnas Kalinegoro, Kec. Mertoyudan ",
    kategori: "Puskesmas",
    latitude: -7.556315,
    longitude: 110.19766,
  },
  {
    no: 16,
    nama: "TEGALREJO",
    alamat: "Jl. Pahlawan 196, Kec. Tegalrejo ",
    kategori: "Puskesmas",
    latitude: -7.461011,
    longitude: 110.274466,
  },
  {
    no: 17,
    nama: "TEMPURAN",
    alamat: "Jl. Magelang-Purworejo Km 10, Kec. Tempuran",
    kategori: "Puskesmas",
    latitude: -7.543602,
    longitude: 110.166635,
  },
  {
    no: 18,
    nama: "CANDIMULYO",
    alamat: "Jl. Lapangan No.01 Karang, Candimulyo, Kec. Candimulyo",
    kategori: "Puskesmas",
    latitude: -7.49145,
    longitude: 110.272845,
  },
  {
    no: 19,
    nama: "BANDONGAN",
    alamat: "Jl. Yahya Sholikhin, Kec. Bandongan",
    kategori: "Puskesmas",
    latitude: -7.467575,
    longitude: 110.1888804,
  },
  {
    no: 20,
    nama: "SECANG 1",
    alamat: "Jl. Raya Secang 110, Kec. Secang",
    kategori: "Puskesmas",
    latitude: -7.394211,
    longitude: 110.246383,
  },
  {
    no: 21,
    nama: "Puskesmas Pembantu Rejowinangun Utara",
    alamat:
      "Jl. Telaga Warna No.125, Nambangan, Rejowinangun Utara, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56214",
    kategori: "Puskesmas",
    latitude: -7.480946,
    longitude: 110.228878,
  },
  {
    no: 22,
    nama: "Puskesmas Pembantu Panjang",
    alamat:
      "Bogeman Wetan, Panjang, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56111",
    kategori: "Puskesmas",
    latitude: -7.479927,
    longitude: 110.225187,
  },
  {
    no: 23,
    nama: "Puskesmas Mungkid",
    alamat:
      "Jl. Ps. Blabak No.2, Kadipuro, Mungkid, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512",
    kategori: "Puskesmas",
    latitude: -7.553843,
    longitude: 110.252738,
  },
  {
    no: 24,
    nama: "Puskesmas Kota Mungkid",
    alamat:
      "Ngentan II, Sawitan, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56511",
    kategori: "Puskesmas",
    latitude: -7.595677,
    longitude: 110.222156,
  },
  {
    no: 25,
    nama: "Puskesmas Wates Magelang Utara",
    alamat:
      "Jl. Semarang - Yogyakarta No.17, Wates, Kec. Magelang Utara, Kota Magelang, Jawa Tengah 51253",
    kategori: "Puskesmas",
    latitude: -7.476446,
    longitude: 110.230131,
  },
  {
    no: 26,
    nama: "Puskesmas Secang II",
    alamat: "Pojok, Pucang, Kec. Secang, Kabupaten Magelang, Jawa Tengah 56195",
    kategori: "Puskesmas",
    latitude: -7.414445,
    longitude: 110.257543,
  },
  {
    no: 27,
    nama: "Puskesmas Grabag II",
    alamat:
      "Teneran, Pucungsari, Kec. Grabag, Kabupaten Magelang, Jawa Tengah 56196",
    kategori: "Puskesmas",
    latitude: -7.430832,
    longitude: 110.309617,
  },
  {
    no: 28,
    nama: "Puskesmas Pembantu  Magersari",
    alamat:
      "G669+4RV, Jl. Kahendran, Magersari, Kec. Magelang Sel., Kota Magelang, Jawa Tengah 59214",
    kategori: "Puskesmas",
    latitude: -7.489628,
    longitude: 110.219571,
  },
  {
    no: 29,
    nama: "Puskesmas Grabag I ",
    alamat:
      "Jalan Pagar Gunung KM. 1, Grabag, Sawahan, Grabag, Kec. Grabag, Kabupaten Magelang, Jawa Tengah 56196",
    kategori: "Puskesmas",
    latitude: -7.36913,
    longitude: 110.33156,
  },
  {
    no: 30,
    nama: "Puskesmas Borobudur",
    alamat:
      "Jl. Sentanu, Srigetan, Wringinputih, Kec. Borobudur, Kabupaten Magelang, Jawa Tengah 56553",
    kategori: "Puskesmas",
    latitude: -7.594611,
    longitude: 110.199949,
  },
  {
    no: 31,
    nama: "Puskesmas Muntilan I",
    alamat:
      "96PV+6WR, Jl. Kleben, Leber, Tanjung, Kec. Muntilan, Kabupaten Magelang, Jawa Tengah 56415",
    kategori: "Puskesmas",
    latitude: -7.614385,
    longitude: 110.244755,
  },
  {
    no: 32,
    nama: "Puskesmas Muntilan II",
    alamat:
      "C7FC+JQG, Tejowarno, Tamanagung, Kec. Muntilan, Kabupaten Magelang, Jawa Tengah 56413",
    kategori: "Puskesmas",
    latitude: -7.575934,
    longitude: 110.27194,
  },
];

export default DATA;

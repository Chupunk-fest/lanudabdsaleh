// Toggle menu mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

function toggleSubmenu() {
  const submenu = document.getElementById('submenu');
  submenu.classList.toggle('hidden');
}

// Data berita
const beritaData = [
  {
    img: "assets/image/berita1.jpg",
    title: "Lanud Abd Saleh dan Insub Laksanakan Ziarah Rombongan Peringati Hari Bakti TNI AU ke-78 di TMP Suropati Malang",
    desc: "Dalam rangka memperingati Hari Bakti TNI Angkatan Udara ke-78, Lanud Abdulrachman Saleh bersama satuan jajaran (Insub) melaksanakan kegiatan ziarah rombongan di Taman Makam Pahlawan (TMP) Suropati, Kota Malang, Senin (28/7/2025)."
  },
  {
    img: "assets/image/berita2.jpg",
    title: "Danlanud Abdulrachman Saleh Sambut Kedatangan Menteri Imigrasi dan Pemasyarakatan di Bandara Abd Saleh Malang.",
    desc: "Komandan Pangkalan TNI AU Abdulrachman Saleh, Marsma TNI Reza R.R. Sastranegara, S.Sos., M.A.P., MNSS., menyambut kedatangan Menteri Imigrasi dan Pemasyarakatan, Jenderal Polisi (Purn) Drs. Agus Andrianto, S.H., M.H., beserta rombongan di Bandara Abdulrachman Saleh Malang, Senin (28/7/2025)."
  },
  {
    img: "assets/image/berita3.jpg",
    title: "Lanud Abd Saleh Bersama Komunitas HDCI Jatim Gelar Safety Riding.",
    desc: "Lanud Abdulrachman Saleh bersama komunitas motor Harley-Davidson Club Indonesia (HDCI) Jawa Timur menggelar kegiatan Safety Riding yang berlangsung di area Lanud Abd Saleh, Malang, Minggu (4/8/2025)."
  },
  {
    img: "assets/image/berita4.jpg",
    title: "Jelang Peringatan Hari Bakti TNI AU ke-78, Lanud Abdulrachman Saleh Gelar Doa Bersama dan Berikan Tali Asih.",
    desc: "Dalam rangka menyambut peringatan ke-78 Hari Bakti TNI Angkatan Udara yang jatuh pada tanggal 29 Juli 2025, Lanud Abdulrachman Saleh menggelar kegiatan doa bersama yang penuh khidmat di Masjid Baiturachman, Lanud Abdulrachman Saleh, Malang, Senin (21/7/2025)."
  },
  {
    img: "assets/image/berita5.jpg",
    title: "Kolaborasi Malang Tahes Club dan Lanud Abd Saleh Gelar Bakti Sosial dalam Rangka Peringatan Hari Bakti TNI AU ke-78.",
    desc: "Dalam rangka memperingati Hari  Bakti Bakti TNI Angkatan Udara ke-78, Malang Tahes Club (MTC) ,YBM PLN, HDCI, JK ONE bersama Lanud Abd Saleh menggelar kegiatan bakti sosial yang bertujuan untuk mempererat tali silaturahmi dan meningkatkan kepedulian sosial kepada masyarakat yang membutuhkan bertempat di Sathar 31 Depohar 30. Malang, Rabu ( 23/7/2025 )."
  },
  {
    img: "assets/image/berita6.jpg",
    title: "Kadisops Lanud Abd Saleh Hadiri Sidang Senat Terbuka Wisuda Sarjana Terapan Politeknik Angkatan Darat.",
    desc: "Kepala Dinas Operasi Kadisops Lanud Abd Saleh Kolonel Pnb Dodik Suprianto, S.Sos., MMDS mewakili Komandan Lanud Abd Saleh Marsma TNI Reza R.R. Sastranegara, S.Sos., M.A.P., MNSS, menghadiri Sidang Senat Terbuka Politeknik Angkatan Darat dalam rangka Wisuda Sarjana Terapan Teknik Tahun Pendidikan 2021–2025, yang dilaksanakan di Aula Politeknik Angkatan Darat, Malang, pada Jumat (24/7/2025)."
  },
  {
    img: "assets/image/berita7.jpg",
    title: "Personel Lanud Abd Saleh Laksanakan Karya Bakti di TMP Suropati Malang.",
    desc: "Dalam rangka memperingati Hari Bakti TNI Angkatan Udara ke-78, personel Lanud Abd Saleh melaksanakan kegiatan Karya Bakti bertempat di Taman Makam Pahlawan (TMP) Suropati, Malang, Jumat (24/7/2025)."
  },
  {
    img: "assets/image/berita8.jpg",
    title: "Danlanud Pimpin Serah Terima Jabatan Kadispers dan Kadislog Lanud Abd Saleh, Wujud Dinamika dan Penyegaran Organisasi.",
    desc: "Bertempat di Gedung Cakrawala Lanud Abdulrachman Saleh, telah dilaksanakan acara Serah Terima Jabatan Kepala Dinas Personel (Kadispers) dan Kepala Dinas Logistik (Kadislog).Bertindak selaku pimpinan acara, Komandan Lanud Abd Saleh Marsma TNI Reza R.R. Sastranegara, S.Sos., M.A.P., MNSS. Jumat, (25/7/ 2025)."
  },
  {
    img: "assets/image/berita9.jpg",
    title: "Lanud Abdulrachman Saleh gelar Puncak bakti sosial di desa Saptorenggo Malang, Wujud Nyata Kepedulian TNI AU untuk Masyarakat.",
    desc: "Dalam rangka memperingati Hari Bakti TNI Angkatan Udara ke-78, Lanud Abdulrachman Saleh melaksanakan kegiatan Bakti Sosial dan Bakti Kesehatan di Balai Desa Saptorenggo, Kecamatan Pakis, Kabupaten Malang, Minggu (27/7/2025)."
  }
];

const beritaPerPage = 5;
let currentPage = 1;

const newsContainer = document.getElementById("news-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

function renderNewsPage(page) {
  newsContainer.innerHTML = "";

  const start = (page - 1) * beritaPerPage;
  const end = start + beritaPerPage;
  const pageData = beritaData.slice(start, end);

  pageData.forEach((b, i) => {
    const beritaIndex = start + i;
    const el = document.createElement("a");
    el.href = `berita_detail.html?id=${beritaIndex}`;
    el.className = "news-item";
    el.innerHTML = `
      <img src="${b.img}" alt="${b.title}" class="news-img">
      <div class="news-content">
        <h3 class="news-title">${b.title}</h3>
        <p class="news-desc">${b.desc}</p>
      </div>`;
    newsContainer.appendChild(el);
  });

  prevBtn.disabled = page === 1;
  nextBtn.disabled = end >= beritaData.length;
  pageIndicator.textContent = `Halaman ${page} dari ${Math.ceil(beritaData.length / beritaPerPage)}`;
}

// Event tombol
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderNewsPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if ((currentPage * beritaPerPage) < beritaData.length) {
    currentPage++;
    renderNewsPage(currentPage);
  }
});

// Tampilkan halaman pertama saat dimuat
renderNewsPage(currentPage);

const newsSidebar = document.getElementById("berita-lainnya");

if (newsSidebar) {
  const currentId = parseInt(new URLSearchParams(window.location.search).get("id"));

  beritaData.forEach((item, index) => {
    // Jangan tampilkan berita yang sedang dibuka
    if (!isNaN(currentId) && index === currentId) return;

    const card = document.createElement("div");
    card.className = "news-card";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const link = document.createElement("a");
    link.href = `berita_detail.html?id=${index}`;
    link.textContent = item.title;

    // Agar gambar dan teks link bisa berdampingan
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "news-card-content";
    contentWrapper.appendChild(img);
    contentWrapper.appendChild(link);

    card.appendChild(contentWrapper);
    newsSidebar.appendChild(card);
  });
}

const lihatSemua = document.createElement("a");
lihatSemua.href = "index.html";
lihatSemua.className = "lihat-semua-link";
lihatSemua.textContent = "Lihat Semua Berita →";
newsSidebar.appendChild(lihatSemua);


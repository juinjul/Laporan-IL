let audioPlayers = document.querySelectorAll("audio");

audioPlayers.forEach(audio => {
    audio.addEventListener("play", function() {
        audioPlayers.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0; // Reset ke awal
            }
        });
    });
});

function setActive(element) {
    let items = document.querySelectorAll(".nama-list li");
    items.forEach(item => item.classList.remove("active"));
    element.classList.add("active");
}

function setActive(element){
    // Hapus status aktif dari semua elemen <li>
    document.querySelectorAll(".nama-list li").forEach(li => {
        li.classList.remove("active");
    });

    // Tambahkan status aktif ke elemen yang diklik
    element.classList.add("active");

    // Ambil teks nama yang dipilih
    let nama = element.textContent;

    // Data biografi berdasarkan nama
    let biografiData = {
        "Ayanaara Kemal Haro": "Ayanaara lahir di Jakarta dan memiliki minat di bidang seni dan sastra. Ia aktif dalam kegiatan teater sekolah.",
        "Bernadeth Joscelyn Tan": "Bernadeth adalah seorang siswa yang gemar membaca dan bercita-cita menjadi penulis novel terkenal.",
        "Brigitta Milana Wahyudi": "Lana adalah atlet renang sekolah yang telah memenangkan banyak kejuaraan tingkat daerah.",
        "Eugenia Keiko Wijaya": "Keiko sangat berbakat dalam musik dan memainkan berbagai alat musik seperti piano dan biola.",
        "Laurentia Diandra Harsono": "Diandra adalah pecinta lingkungan yang aktif dalam komunitas hijau sekolahnya.",
        "Rafaella Gratia Juean": "Rafaella memiliki ketertarikan di bidang teknologi dan bercita-cita menjadi seorang software engineer."
    };

    // Tampilkan biografi
    document.getElementById("biografi-nama").textContent = nama;
    document.getElementById("biografi-text").textContent = biografiData[nama];

    // Munculkan div biografi
    document.getElementById("biografi-container").style.display = "block";
}
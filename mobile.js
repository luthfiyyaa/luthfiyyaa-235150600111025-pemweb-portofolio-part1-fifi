const nameElement = document.getElementById('name');
const names = ["I'm Luthfiyya", "I'm Fifi"];
let currentIndex = 0;

setInterval(() => {
    // Fade out teks
    nameElement.style.opacity = 0;

    // Ubah teks setelah fade out selesai
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % names.length;
        nameElement.textContent = names[currentIndex];
        // Fade in teks baru
        nameElement.style.opacity = 1;
    }, 1000); // Waktu sesuai durasi fade-out (1 detik)
}, 3000); // Ganti teks setiap 3 detik
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	})
);

document.addEventListener("DOMContentLoaded", function () {
	// Dapatkan nama halaman saat ini dari URL (misalnya, jika URL mengandung "/artikel.html", maka halaman yang aktif adalah "artikel")
	const currentPage = window.location.pathname.split("/").pop().split(".")[0].toLowerCase();

	// Temukan elemen navbar yang sesuai berdasarkan halaman saat ini
	const homeLink = document.getElementById("home-link");
	const articleLink = document.getElementById("article-link");
	const aboutLink = document.getElementById("about-link");

	// Hapus kelas 'bold' dari semua elemen navbar terlebih dahulu
	homeLink.classList.remove("bold");
	articleLink.classList.remove("bold");
	aboutLink.classList.remove("bold");

	// Tambahkan kelas 'bold' ke elemen navbar yang sesuai dengan halaman saat ini
	if (currentPage === "index") {
		homeLink.classList.add("bold");
	} else if (currentPage === "artikel") {
		articleLink.classList.add("bold");
	} else if (currentPage === "about") {
		aboutLink.classList.add("bold");
	}
});


// Untuk menampilkan teks yang ada di FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("activ");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

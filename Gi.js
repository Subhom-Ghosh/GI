document.addEventListener("DOMContentLoaded", () => {
    const giTags = [
  { name: 'Darjeeling Tea', category: 'Agricultural', district: 'Darjeeling', location: 'Darjeeling, West Bengal', image: 'tea-cup-600nw-719690932.webp', description: 'Renowned aromatic highland tea' },
  { name: 'Nakshi Kantha', category: 'Handicraft/Textile', district: 'Rural Bengal', location: 'West Bengal', image: 'Nakshikantha.jpg', description: 'Embroidered quilt with folk stories' },
  { name: 'Baluchari Saree', category: 'Textile', district: 'Murshidabad/Bishnupur', location: 'Murshidabad & Bishnupur, West Bengal', image: 'baluchari2.webp', description: 'Silk saree with mythological motifs' },
  { name: 'Radhunipagal Rice', category: 'Agricultural', district: 'Southern West Bengal', location: 'West Bengal', image: 'randhuni.webp', description: 'Aromatic, zinc-rich rice variety' },
  { name: 'Nolen Gurer Sandesh', category: 'Food/Sweet', district: 'West Bengal', location: 'West Bengal', image: 'nolengurersondesh.jpg', description: 'Seasonal sweet made from date jaggery' },
  { name: 'Garad Saree', category: 'Textile', district: 'Murshidabad/Birbhum', location: 'Murshidabad & Birbhum, West Bengal', image: 'gorod.jpg', description: 'Handwoven silk saree for festivals' },
  { name: 'Kalonunia Rice', category: 'Agricultural', district: 'Cooch Behar region', location: 'Cooch Behar, West Bengal', image: 'kalonunia-rice.webp', description: 'Traditional aromatic fine rice' },
  { name: 'Gobindobhog Rice', category: 'Agricultural', district: 'Bardhaman region', location: 'Bardhaman, West Bengal', image: 'gobindobhog.webp', description: 'Short-grain, fragrant rice' },
  { name: 'Tulaipanji Rice', category: 'Agricultural', district: 'North Bengal (Raiganj)', location: 'Raiganj, West Bengal', image: 'tulaipanji.jpg', description: 'Aromatic long-grain rice' },
  { name: 'Bardhaman Sitabhog', category: 'Food/Sweet', district: 'Bardhaman', location: 'Bardhaman, West Bengal', image: 'sitabhog.webp', description: 'Rice-based sweet with saffron aroma' },
  { name: 'Bardhaman Mihidana', category: 'Food/Sweet', district: 'Bardhaman', location: 'Bardhaman, West Bengal', image: 'mihidana.jpg', description: 'Fine, gram-flour-based sweet' },
  { name: 'Joynagar Moa', category: 'Food/Sweet', district: 'South 24 Parganas', location: 'Joynagar, West Bengal', image: 'moa.jpg', description: 'Sweet made with puffed rice & jaggery' },
  { name: 'Banglar Rasogolla', category: 'Food/Sweet', district: 'West Bengal', location: 'West Bengal', image: 'rosogolla.webp', description: 'Syrup-filled chhena sweet' },
  { name: 'Santiniketan Leather Goods', category: 'Handicraft', district: 'Birbhum (Santiniketan)', location: 'Santiniketan, West Bengal', image: 'shantiniketanlether.webp', description: 'Handmade leather crafts' },
  { name: 'Purulia Chau Mask', category: 'Handicraft', district: 'Purulia', location: 'Purulia, West Bengal', image: 'chau mask.jpg', description: 'Traditional painted mask for Chau' },
  { name: 'Bankura Panchmura Terracotta', category: 'Handicraft', district: 'Bankura', location: 'Bankura, West Bengal', image: '', description: 'Decorative terracotta art (Bankura horse)' },
  { name: 'Wooden Mask of Kushmandi', category: 'Handicraft', district: 'Dakshin Dinajpur', location: 'Kushmandi, West Bengal', image: '', description: 'Carved wooden festival masks' },
  { name: 'Dhaniakhali Saree', category: 'Textile', district: 'Hooghly', location: 'Hooghly, West Bengal', image: '', description: 'Handwoven cotton saree' },
  { name: 'Patachitra (Bengal)', category: 'Handicraft', district: 'Medinipur', location: 'Medinipur, West Bengal', image: '', description: 'Scroll painting with folk themes' },
  { name: 'Madur Kathi', category: 'Handicraft', district: 'Medinipur', location: 'Medinipur, West Bengal', image: '', description: 'Traditional reed mats' },
  { name: 'Fazli Mango', category: 'Agricultural', district: 'Malda', location: 'Malda, West Bengal', image: '', description: 'Large, late-harvest mango' },
  { name: 'Himsagar Mango', category: 'Agricultural', district: 'Malda', location: 'Malda, West Bengal', image: '', description: 'Popular juicy, fibreless mango' },
  { name: 'Laxman Bhog Mango', category: 'Agricultural', district: 'Malda', location: 'Malda, West Bengal', image: '', description: 'Sweet, aromatic mango variety' },
  { name: 'Sundarban Honey', category: 'Natural Product', district: 'Sundarbans', location: 'Sundarbans, West Bengal', image: '', description: 'Wild honey from mangrove forests' },
];

    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("categoryFilter");
    const districtFilter = document.getElementById("districtFilter");
    const cardContainer = document.getElementById("cardContainer");

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const mapLink = document.getElementById("mapLink");
    const closeModal = document.getElementById("closeModal");

    function renderCards(items) {
        cardContainer.innerHTML = "";
        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>Category: ${item.category}</p>
                    <p>District: ${item.district}</p>
                </div>
            `;

            card.querySelector("img").addEventListener("click", () => {
                modal.style.display = "flex";
                modalImage.src = item.image;
                modalImage.alt = item.name;
                modalDescription.textContent = item.description;
                mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}`;
            });

            cardContainer.appendChild(card);
        });
    }

    function populateFilters() {
        const categories = [...new Set(giTags.map(i => i.category))];
        const districts = [...new Set(giTags.map(i => i.district))];

        categories.forEach(cat => {
            categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
        districts.forEach(dis => {
            districtFilter.innerHTML += `<option value="${dis}">${dis}</option>`;
        });
    }

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedDistrict = districtFilter.value;

        const filtered = giTags.filter(item =>
            item.name.toLowerCase().includes(searchTerm) &&
            (selectedCategory === "" || item.category === selectedCategory) &&
            (selectedDistrict === "" || item.district === selectedDistrict)
        );

        renderCards(filtered);
    }

    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    districtFilter.addEventListener("change", applyFilters);
    closeModal.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    populateFilters();
    renderCards(giTags);
});
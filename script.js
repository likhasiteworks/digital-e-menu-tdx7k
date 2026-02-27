// Menu Data
const menuData = [
    {
        id: 1,
        name: "Caesar Salad",
        category: "appetizers",
        price: 12.99,
        description: "Fresh romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing",
        fullDescription: "Crisp romaine lettuce tossed in our house-made Caesar dressing, topped with aged parmesan cheese, garlic croutons, and a lemon wedge. Classic and refreshing.",
        image: "http://static.photos/food/640x360/1",
        dietary: ["vegetarian"],
        popular: true
    },
    {
        id: 2,
        name: "Bruschetta Trio",
        category: "appetizers",
        price: 14.50,
        description: "Toasted bread topped with tomatoes, basil, and mozzarella",
        fullDescription: "Three varieties of our signature bruschetta - classic tomato basil, creamy burrata with prosciutto, and roasted red pepper with goat cheese.",
        image: "http://static.photos/food/640x360/2",
        dietary: [],
        popular: false
    },
    {
        id: 3,
        name: "Crispy Calamari",
        category: "appetizers",
        price: 16.99,
        description: "Golden-fried squid rings with marinara sauce",
        fullDescription: "Tender calamari rings lightly breaded and fried to perfection, served with a zesty marinara dipping sauce and lemon wedges.",
        image: "http://static.photos/food/640x360/3",
        dietary: [],
        popular: true
    },
    {
        id: 4,
        name: "Grilled Salmon",
        category: "mains",
        price: 28.99,
        description: "Atlantic salmon with lemon butter sauce and seasonal vegetables",
        fullDescription: "Fresh Atlantic salmon fillet grilled to perfection, topped with a delicate lemon butter sauce. Served with roasted seasonal vegetables and wild rice pilaf.",
        image: "http://static.photos/food/640x360/4",
        dietary: ["gluten-free"],
        popular: true
    },
    {
        id: 5,
        name: "Ribeye Steak",
        category: "mains",
        price: 36.50,
        description: "12oz ribeye with garlic mashed potatoes and asparagus",
        fullDescription: "Premium 12oz ribeye steak grilled to your preference, served with creamy garlic mashed potatoes and grilled asparagus spears.",
        image: "http://static.photos/food/640x360/5",
        dietary: ["gluten-free"],
        popular: false
    },
    {
        id: 6,
        name: "Truffle Pasta",
        category: "mains",
        price: 24.99,
        description: "Creamy fettuccine with black truffle and parmesan",
        fullDescription: "House-made fettuccine pasta in a rich truffle cream sauce, finished with shaved black truffle and aged parmesan cheese.",
        image: "http://static.photos/food/640x360/6",
        dietary: ["vegetarian"],
        popular: true
    },
    {
        id: 7,
        name: "BBQ Burger",
        category: "mains",
        price: 22.50,
        description: "Angus beef patty with BBQ sauce, cheddar, and crispy onions",
        fullDescription: "Juicy Angus beef patty topped with smoky BBQ sauce, aged cheddar cheese, crispy onion rings, lettuce, and tomato on a brioche bun.",
        image: "http://static.photos/food/640x360/7",
        dietary: [],
        popular: false
    },
    {
        id: 8,
        name: "Tiramisu",
        category: "desserts",
        price: 9.50,
        description: "Classic Italian dessert with coffee and mascarpone",
        fullDescription: "Layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder. A perfect end to your meal.",
        image: "http://static.photos/food/640x360/8",
        dietary: ["vegetarian"],
        popular: true
    },
    {
        id: 9,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 10.99,
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        fullDescription: "Decadent chocolate cake with a warm, gooey chocolate center. Served with a scoop of vanilla bean ice cream and berry compote.",
        image: "http://static.photos/food/640x360/9",
        dietary: ["vegetarian"],
        popular: true
    },
    {
        id: 10,
        name: "Fresh Berry Tart",
        category: "desserts",
        price: 8.50,
        description: "Pastry crust with vanilla cream and seasonal berries",
        fullDescription: "Buttery pastry shell filled with silky vanilla pastry cream and topped with fresh seasonal berries and a light glaze.",
        image: "http://static.photos/food/640x360/10",
        dietary: ["vegetarian"],
        popular: false
    },
    {
        id: 11,
        name: "Craft Beer Selection",
        category: "beverages",
        price: 7.50,
        description: "Local craft beers on tap",
        fullDescription: "Rotating selection of local craft beers. Ask your server for today's featured brews from nearby breweries.",
        image: "http://static.photos/food/640x360/11",
        dietary: [],
        popular: false
    },
    {
        id: 12,
        name: "Fresh Lemonade",
        category: "beverages",
        price: 5.99,
        description: "House-made lemonade with mint",
        fullDescription: "Refreshing lemonade made fresh daily with real lemons, a touch of sweetness, and fresh mint leaves.",
        image: "http://static.photos/food/640x360/12",
        dietary: ["vegan", "gluten-free"],
        popular: true
    },
    {
        id: 13,
        name: "Red Wine - House Selection",
        category: "beverages",
        price: 8.99,
        description: "Featured red wine by the glass",
        fullDescription: "Carefully selected house red wine that pairs perfectly with our grilled dishes. Ask for today's selection.",
        image: "http://static.photos/food/640x360/13",
        dietary: ["vegan", "gluten-free"],
        popular: false
    },
    {
        id: 14,
        name: "Chef's Special Platter",
        category: "specials",
        price: 45.00,
        description: "A selection of today's finest offerings",
        fullDescription: "An exquisite tasting platter featuring the chef's selection of premium appetizers, mains, and a dessert sampler. Perfect for sharing.",
        image: "http://static.photos/food/640x360/14",
        dietary: [],
        popular: true
    },
    {
        id: 15,
        name: "Seasonal Soup",
        category: "specials",
        price: 11.99,
        description: "Fresh soup made with seasonal ingredients",
        fullDescription: "Warm, comforting soup prepared daily with the freshest seasonal vegetables and herbs. Ask your server for today's selection.",
        image: "http://static.photos/food/640x360/15",
        dietary: ["vegan", "gluten-free"],
        popular: false
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('bistroCart')) || [];
let currentCategory = 'all';
let searchTerm = '';

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.querySelectorAll('.category-tab');
const itemModal = document.getElementById('itemModal');
const modalContent = document.getElementById('modalContent');
const noResults = document.getElementById('noResults');
const desktopCartBtn = document.getElementById('desktopCartBtn');
const mobileCartBtn = document.getElementById('mobileCartBtn');
const cartBadgeMobile = document.getElementById('cartBadgeMobile');
const cartBadgeDesktop = document.getElementById('cartBadgeDesktop');
const cartBadgeFloating = document.getElementById('cartBadgeFloating');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderMenu();
    updateCartUI();
});

// Render Menu Items
function renderMenu() {
    const filteredItems = filterMenuItems();
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" onclick="openModal(${item.id})">
            <div class="relative">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                ${item.popular ? '<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>' : ''}
                <div class="absolute top-2 right-2 flex gap-1">
                    ${item.dietary.map(tag => `
                        <span class="bg-white bg-opacity-90 text-xs px-2 py-1 rounded-full">
                            ${getDietaryIcon(tag)}
                        </span>
                    `).join('')}
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-semibold text-gray-900">${item.name}</h3>
                    <span class="text-xl font-bold text-red-500">$${item.price.toFixed(2)}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">${item.description}</p>
                <button onclick="event.stopPropagation(); addToCart(${item.id}, 1)" class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Filter Menu Items
function filterMenuItems() {
    return menuData.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Get Dietary Icon
function getDietaryIcon(tag) {
    const icons = {
        'vegetarian': '🌱',
        'vegan': '🥬',
        'gluten-free': '🌾',
        'spicy': '🌶️'
    };
    return icons[tag] || '✓';
}

// Category Tabs
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => {
            t.classList.remove('active', 'bg-red-500', 'text-white');
            t.classList.add('bg-gray-100', 'text-gray-700');
        });
        tab.classList.add('active', 'bg-red-500', 'text-white');
        tab.classList.remove('bg-gray-100', 'text-gray-700');
        currentCategory = tab.dataset.category;
        renderMenu();
    });
});

// Search
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderMenu();
});

// Cart Functions
function addToCart(itemId, quantity = 1) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }
    
    saveCart();
    updateCartUI();
    
    // Show feedback
    showFeedback('Added to cart!');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('bistroCart', JSON.stringify(cart));
}

function updateCartUI() {
    renderCartItems();
    updateCartTotal();
    updateCartBadges();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-8">
                <i data-lucide="shopping-cart" class="w-12 h-12 text-gray-300 mx-auto mb-3"></i>
                <p class="text-gray-500">Your cart is empty</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-medium text-gray-900">${item.name}</h4>
                    <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full bg-white border hover:bg-gray-100">
                        <i data-lucide="minus" class="w-4 h-4 mx-auto"></i>
                    </button>
                    <span class="font-medium w-8 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full bg-white border hover:bg-gray-100">
                        <i data-lucide="plus" class="w-4 h-4 mx-auto"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    lucide.createIcons();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartBadges() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = [cartBadgeMobile, cartBadgeDesktop, cartBadgeFloating];
    
    badges.forEach(badge => {
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
}

// Cart Toggle
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
}

cartToggleBtn.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', closeCart);
desktopCartBtn.addEventListener('click', toggleCart);
mobileCartBtn.addEventListener('click', toggleCart);

// Close cart when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && cartSidebar.classList.contains('open') && !cartSidebar.contains(e.target) && !e.target.closest('button')) {
        closeCart();
    }
});

// Modal Functions
function openModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    modalContent.innerHTML = `
        <div class="relative">
            <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover rounded-t-xl">
            <button onclick="closeModal()" class="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <h2 class="text-2xl font-bold text-gray-900">${item.name}</h2>
                <span class="text-3xl font-bold text-red-500">$${item.price.toFixed(2)}</span>
            </div>
            <p class="text-gray-700 mb-4">${item.fullDescription}</p>
            <div class="flex flex-wrap gap-2 mb-6">
                ${item.dietary.map(tag => `
                    <span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        ${getDietaryIcon(tag)} ${tag}
                    </span>
                `).join('')}
            </div>
            <div class="flex gap-3">
                <button onclick="addToCart(${item.id}, 1); closeModal();" class="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                    Add to Cart
                </button>
                <button onclick="closeModal()" class="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Close
                </button>
            </div>
        </div>
    `;
    itemModal.classList.remove('hidden');
    lucide.createIcons();
}

function closeModal() {
    itemModal.classList.add('hidden');
}

// Close modal on backdrop click
itemModal.addEventListener('click', (e) => {
    if (e.target === itemModal) {
        closeModal();
    }
});

// Feedback Toast
function showFeedback(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showFeedback(`Order placed! Total: $${total.toFixed(2)}`);
    
    // Simulate order processing
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        closeCart();
    }, 1500);
});
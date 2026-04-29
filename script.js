const menuData = {
    "Fresh Juice (Normal / Ice Cream)": [
        { name: "Lime", price: "320" },
        { name: "Avocado", price: "450 / 550" },
        { name: "Watermelon", price: "350" },
        { name: "Pineapple", price: "350 / 450" },
        { name: "Papaya", price: "380 / 480" },
        { name: "Woodapple", price: "450 / 500" },
        { name: "Mango", price: "380 / 400" }
    ],
    "Milk Shakes & Drinks": [
        { name: "Vanilla / Chocolate / Strawberry", price: "650" },
        { name: "Lime Mojito", price: "650" },
        { name: "Faluda", price: "650" },
        { name: "Iced Coffee", price: "650" },
        { name: "Lassi", price: "650" },
        { name: "Mango Lassi", price: "750" }
    ],
    "Soup": [
        { name: "Vegetable Soup", price: "400" },
        { name: "Veg Sweet Corn Soup", price: "450" },
        { name: "Mushroom Sweet Corn", price: "550" },
        { name: "Chicken Sweet Corn", price: "650" },
        { name: "Prawn Sweet Corn", price: "750" },
        { name: "Beef Sweet Corn", price: "800" }
    ],
    "Sandwiches": [
        { name: "Vegetable Sandwich", price: "450" },
        { name: "Egg Sandwich", price: "650" },
        { name: "Fish Sandwich", price: "750" },
        { name: "Chicken Sandwich", price: "850" },
        { name: "Signature Veg Club", price: "990" },
        { name: "Signature Chicken Club", price: "1250" }
    ],
    "Special Fried Rice (Reg / Large)": [
        { name: "Special Mix Nasi Goreng", price: "1500 / 2300" },
        { name: "Special Mongolian Mix", price: "1700 / 2500" }
    ],
    "Fried Rice (Reg / Large)": [
        { name: "Vegetable", price: "500 / 750" },
        { name: "Egg", price: "650 / 800" },
        { name: "Chicken", price: "750 / 950" },
        { name: "Fish", price: "850 / 1100" },
        { name: "Pork / Prawn", price: "900 / 1200" },
        { name: "Sea Food", price: "1250 / 1500" },
        { name: "Mixed", price: "1400 / 1500" }
    ],
    "Chopsy Rice (Reg / Large)": [
        { name: "Vegetable", price: "800 / 1100" },
        { name: "Chicken", price: "1200 / 1950" },
        { name: "Pork", price: "1450 / 2300" },
        { name: "Sea Food", price: "1500 / 2500" },
        { name: "Mixed", price: "1650 / 2650" }
    ],
    "Biriyani (Reg / Large)": [
        { name: "Chicken Biriyani", price: "950 / 1700" },
        { name: "Sea Food Biriyani", price: "1100 / 2000" },
        { name: "Pot Chicken Biriyani", price: "1100 / 2000" },
        { name: "Pot Sea Food Biriyani", price: "1650 / 2500" }
    ],
    "Biriyani Sawan": [
        { name: "Medium (4 Person)", price: "4500" },
        { name: "Large (6 Person)", price: "5750" },
        { name: "Extra Large (8 Person)", price: "6750" }
    ],
    "Noodles (Reg / Large)": [
        { name: "Vegetable", price: "500 / 750" },
        { name: "Egg", price: "650 / 850" },
        { name: "Chicken", price: "750 / 1000" },
        { name: "Fish", price: "850 / 1100" },
        { name: "Pork / Prawns", price: "900 / 1350" },
        { name: "Sea Food", price: "1250 / 1650" },
        { name: "Mixed", price: "1400 / 1850" }
    ],
    "Cheese Noodles (Reg / Large)": [
        { name: "Vegetable", price: "800 / 1200" },
        { name: "Egg", price: "900 / 1250" },
        { name: "Chicken", price: "1250 / 1500" },
        { name: "Fish / Prawns", price: "1450 / 1750" },
        { name: "Pork", price: "1500 / 1750" },
        { name: "Sea Food", price: "1750 / 1950" },
        { name: "Mixed", price: "1800 / 2000" }
    ],
    "Kottu (Reg / Large)": [
        { name: "Vegetable", price: "500 / 750" },
        { name: "Egg", price: "650 / 850" },
        { name: "Chicken", price: "750 / 950" },
        { name: "Fish", price: "850 / 1100" },
        { name: "Pork / Prawns", price: "900 / 1200" },
        { name: "Sea Food", price: "1250 / 1500" },
        { name: "Mixed", price: "1350 / 1550" },
        { name: "String Hopper Veg", price: "500 / 750" },
        { name: "String Hopper Chicken", price: "800 / 1000" }
    ],
    "Cheese Kottu (Reg / Large)": [
        { name: "Vegetable", price: "800 / 1200" },
        { name: "Egg", price: "900 / 1250" },
        { name: "Chicken", price: "1250 / 1500" },
        { name: "Fish / Prawns", price: "1450 / 1750" },
        { name: "Pork", price: "1500 / 1750" },
        { name: "Sea Food", price: "1750 / 1950" },
        { name: "Mixed", price: "1800 / 2000" }
    ],
    "Devilled Sides (500g / 1Kg)": [
        { name: "Chicken", price: "1200 / 1800" },
        { name: "Fish / Prawns", price: "1800 / 2500" },
        { name: "Pork", price: "1700 / 2900" },
        { name: "Sausage", price: "900 / 1700" },
        { name: "Potato Chips", price: "1000 / 1800" },
        { name: "Special Mix", price: "2000 / 3200" }
    ],
    "Fried Sides (500g / 1Kg)": [
        { name: "Chicken", price: "1100 / 1800" },
        { name: "Fish", price: "1700 / 2500" },
        { name: "Prawns", price: "1800 / 2500" },
        { name: "Pork", price: "1700 / 2900" },
        { name: "Sausage", price: "900 / 1700" }
    ],
    "Stew Sides (500g / 1Kg)": [
        { name: "Chicken", price: "1450 / 2500" },
        { name: "Fish", price: "1800 / 2500" },
        { name: "Prawns", price: "1850 / 2700" },
        { name: "Pork", price: "1800 / 2700" }
    ],
    "Hot Buttered & BBQ": [
        { name: "HB Mushroom", price: "1000" },
        { name: "HB Cuttle Fish", price: "1500" },
        { name: "HB Prawns", price: "1600" },
        { name: "Grilled Jumbo Sausages", price: "800" },
        { name: "Grilled Fish", price: "1000" },
        { name: "BBQ / Grilled Chicken", price: "1200 / 1100" },
        { name: "BBQ / Grilled Pork", price: "1300 / 1300" }
    ],
    "Desserts": [
        { name: "Ice Cream (2/3 scoops)", price: "220 / 300" },
        { name: "Mixed Ice Cream (S/L)", price: "350 / 640" },
        { name: "Watalappam / Puddings", price: "200" },
        { name: "Jelly Yoghurt", price: "150" },
        { name: "Regular Yoghurt", price: "100" },
        { name: "Curd", price: "80" }
    ]
};

let currentPage = 0;
const CATEGORIES_PER_PAGE = 6;
let isFirstRender = true;

function renderMenu() {
    const container = document.getElementById('menu-container');
    const categories = Object.keys(menuData);
    
    // Fade out
    if (!isFirstRender) {
        container.style.opacity = 0;
    }
    
    setTimeout(() => {
        container.innerHTML = '';
        const startIdx = currentPage * CATEGORIES_PER_PAGE;
        let pageCategories = categories.slice(startIdx, startIdx + CATEGORIES_PER_PAGE);
        
        container.className = `menu-container count-${pageCategories.length}`;
        
        pageCategories.forEach(categoryName => {
            const items = menuData[categoryName];
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            
            let itemsHtml = items.map(item => `
                <div class="dish">
                    <div class="dish-header">
                        <span class="dish-name">${item.name}</span>
                        <span class="dish-dots"></span>
                        <span class="dish-price">${item.price}</span>
                    </div>
                </div>
            `).join('');
            
            categoryDiv.innerHTML = `
                <h2 class="category-title">${categoryName}</h2>
                ${itemsHtml}
            `;
            container.appendChild(categoryDiv);
        });
        
        // Fade in
        container.style.opacity = 1;
        isFirstRender = false;
        
        // Increment page
        currentPage++;
        if (currentPage * CATEGORIES_PER_PAGE >= categories.length) {
            currentPage = 0;
        }
    }, isFirstRender ? 0 : 500); // Wait 500ms for fade out, 0ms if first render
}

const PAGE_INTERVAL = 10;
let countdownRemaining = PAGE_INTERVAL;

function tick() {
    // Update Clock
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    clockElement.textContent = `${hours}:${minutes} ${ampm}`;
    
    // Update Countdown
    countdownRemaining--;
    if (countdownRemaining <= 0) {
        renderMenu();
        countdownRemaining = PAGE_INTERVAL;
    }
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = `Next Page In: ${countdownRemaining}s`;
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    tick(); // Initial call
    
    // Unified interval for both clock and countdown
    setInterval(tick, 1000);
});

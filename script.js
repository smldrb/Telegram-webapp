let tg = window.Telegram.WebApp;
tg.expand();  // Expand full-screen

// Sample categories (replace with API call)
let categories = ["Mobile Phones", "Laptops", "Accessories", "Home Appliances"];

function renderCategories() {
    let container = document.getElementById("categories");
    container.innerHTML = "";

    categories.forEach((category, index) => {
        let row = document.createElement("div");
        row.classList.add("category-row");

        let name = document.createElement("span");
        name.classList.add("category-name");
        name.innerText = "📁 " + category;

        let buttonGroup = document.createElement("div");
        buttonGroup.classList.add("button-group");

        let renameBtn = document.createElement("button");
        renameBtn.innerText = "✏";
        renameBtn.classList.add("rename");
        renameBtn.onclick = () => renameCategory(index);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => deleteCategory(index);

        let trendBtn = document.createElement("button");
        trendBtn.innerText = "📈";
        trendBtn.classList.add("trend");
        trendBtn.onclick = () => viewTrend(index);

        buttonGroup.appendChild(renameBtn);
        buttonGroup.appendChild(deleteBtn);
        buttonGroup.appendChild(trendBtn);

        row.appendChild(name);
        row.appendChild(buttonGroup);
        container.appendChild(row);
    });
}

function renameCategory(index) {
    let newName = prompt("Enter new category name:");
    if (newName) {
        categories[index] = newName;
        renderCategories();
    }
}

function deleteCategory(index) {
    if (confirm("Are you sure you want to delete this category?")) {
        categories.splice(index, 1);
        renderCategories();
    }
}

function viewTrend(index) {
    alert("Showing trends for " + categories[index]);
}

document.getElementById("addCategory").onclick = () => {
    let newCategory = prompt("Enter category name:");
    if (newCategory) {
        categories.push(newCategory);
        renderCategories();
    }
};

// Initial render
renderCategories();


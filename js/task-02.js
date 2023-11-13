const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
const ul = document.getElementById('ingredients');
ul.innerHTML = markup;
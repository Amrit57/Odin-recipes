
import recipeOneImage from './images/chicken.jpg';
import recipeTwoImage from './images/recipe2.jpg';
import recipeThreeImage from './images/recipe3.jpg';

export default function homeRender() {
   const menu = document.createElement('div');
   menu.setAttribute('id', 'menu-text');

   const recipeOne = document.createElement('div');
   const recipeOneText = document.createElement('div');
   const recipeOneName = document.createElement('h2')
   const recipeONeInfo = document.createElement('p')
   const recipeONePrice = document.createElement('p')
   const recipeOneImg = document.createElement('img')
   recipeOneImg.src = recipeOneImage;
   recipeONePrice.classList.add('price');
   recipeOneName.textContent = 'Chicken Marinade';
   recipeONeInfo.textContent = 'These savory-sweet shrimp skewers are easy to make and cook in just a few minutes, however use what you have on hand'
   recipeONePrice.textContent = '$15'
   recipeOne.appendChild(recipeOneImg)
   recipeOne.appendChild(recipeOneText)
   recipeOneText.appendChild(recipeOneName)
   recipeOneText.appendChild(recipeONeInfo)
   recipeOneText.appendChild(recipeONePrice)

   const recipeTwo = document.createElement('div');
   const recipeTwoText = document.createElement('div');
   const recipeTwoImg = document.createElement('img')
   const recipeTwoName = document.createElement('h2')
   const recipeTwoInfo = document.createElement('p')
   const recipeTwoPrice = document.createElement('p')
   recipeTwoName.textContent = 'Chicken Sekuwa';
   recipeTwoInfo.textContent = 'These savory-sweet shrimp skewers are easy to make and cook in just a few minutes, however use what you have on hand';
   recipeTwoPrice.textContent = '$10';
   recipeTwoImg.src = recipeTwoImage;
   recipeTwoPrice.classList.add('price');

   recipeTwo.appendChild(recipeTwoImg)
   recipeTwo.appendChild(recipeTwoText)
   recipeTwoText.appendChild(recipeTwoName)
   recipeTwoText.appendChild(recipeTwoInfo)
   recipeTwoText.appendChild(recipeTwoPrice)

   const recipeThree = document.createElement('div');
   const recipeThreeText = document.createElement('div');
   const recipeThreeImg = document.createElement('img')
   const recipeThreeName = document.createElement('h2')
   const recipeThreeInfo = document.createElement('p')
   const recipeThreePrice = document.createElement('p')
   recipeThreeName.textContent = 'Pork Sekuwa';
   recipeThreeInfo.textContent = 'These savory-sweet shrimp skewers are easy to make and cook in just a few minutes, however use what you have on hand'
   recipeThreePrice.textContent = '$20';
   recipeThreeImg.src = recipeThreeImage;
   recipeThreePrice.classList.add('price');

   recipeThree.appendChild(recipeThreeImg)
   recipeThree.appendChild(recipeThreeText)
   recipeThreeText.appendChild(recipeThreeName)
   recipeThreeText.appendChild(recipeThreeInfo)
   recipeThreeText.appendChild(recipeThreePrice)

   menu.appendChild(recipeOne)
   menu.appendChild(recipeTwo)
   menu.appendChild(recipeThree)

   return menu;

}
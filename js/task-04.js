const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    updateCounterValue();
  };
  const decrement = () => {
    counterValue -= 1;
    updateCounterValue();
  };
  const updateCounterValue = () => { 
    counterValueSpan.textContent = counterValue; 
};
decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);





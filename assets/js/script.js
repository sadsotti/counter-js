document.addEventListener('DOMContentLoaded', () => {
    let counterValue = 0;

    const counterContainer = document.getElementById('counter');

    const updateCounterDisplay = (value) => {
        const counterDisplay = document.getElementById('counter-display');
        if (counterDisplay) {
            counterDisplay.textContent = value;
        }
    };

    const incrementCounter = () => {
        counterValue++;
        updateCounterDisplay(counterValue);
    };

    const decrementCounter = () => {
        counterValue--;
        updateCounterDisplay(counterValue);
    };

    const resetCounter = () => {
        counterValue = 0;
        updateCounterDisplay(counterValue);
    };

    const createCounterUI = () => {
        const counterDisplay = document.createElement('div');
        counterDisplay.id = 'counter-display';
        counterDisplay.classList.add('counter-value');
        counterDisplay.textContent = counterValue;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        const decrementButton = document.createElement('button');
        decrementButton.id = 'decrement-btn';
        decrementButton.classList.add('button', 'decrement');
        decrementButton.textContent = '−';
        decrementButton.addEventListener('click', decrementCounter);

        const incrementButton = document.createElement('button');
        incrementButton.id = 'increment-btn';
        incrementButton.classList.add('button', 'increment');
        incrementButton.textContent = '+';
        incrementButton.addEventListener('click', incrementCounter);

        const resetButton = document.createElement('button');
        resetButton.id = 'reset-btn';
        resetButton.classList.add('button', 'reset');
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click', resetCounter);

        buttonsContainer.appendChild(decrementButton);
        buttonsContainer.appendChild(incrementButton);
        buttonsContainer.appendChild(resetButton);

        counterContainer.appendChild(counterDisplay);
        counterContainer.appendChild(buttonsContainer);
    };

    createCounterUI();
});
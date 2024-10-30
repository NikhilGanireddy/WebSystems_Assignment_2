// Smooth Animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});

// Reverse a String Function
function reverseString() {
    const input = document.getElementById('stringInput').value;
    const reversedString = input.split('').reverse().join('');
    document.getElementById('reverseResult').textContent = `Reversed String: ${reversedString}`;
}

// Palindrome Check Function
function checkPalindrome() {
    const input = document.getElementById('numberInput').value;
    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        document.getElementById('palindromeResult').textContent = `${input} is a palindrome.`;
    } else {
        document.getElementById('palindromeResult').textContent = `${input} is not a palindrome.`;
    }
}

// Tip Calculator Function
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentageInput').value);

    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
        const tipAmount = subtotal * (tipPercentage / 100);
        const totalAmount = subtotal + tipAmount;
        document.getElementById('totalResult').textContent = `Total Amount to Pay: $${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById('totalResult').textContent = 'Please enter valid numbers for subtotal and tip percentage.';
    }
}

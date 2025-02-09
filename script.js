
const messages = ["NO? if you say no, I will be really sad...",
    "Still No ? I will be very sad...",
    "I will be very very very sad...",
    "Cutie Plz",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
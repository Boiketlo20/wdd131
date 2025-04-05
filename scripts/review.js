document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.size > 0) {
        let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        
        const feedback = document.createElement('div');
        feedback.className = 'review-feedback';
        feedback.innerHTML = `
            <p>Review submitted!</p>
            <p>Total reviews: ${reviewCount}</p>
        `;
        document.querySelector('main').prepend(feedback);
    }
});

const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

console.log(today.getFullYear()); 
console.log(document.lastModified);
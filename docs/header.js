document.documentElement.style.background = '#181310';
document.body.style.background = '#181310';

// Simplified header insertion
if (!document.querySelector('header')) {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
}

// No event listeners on links - let normal navigation happen
// This prevents content from disappearing during navigation

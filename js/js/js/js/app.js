// WA.io Main App
document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW registered'))
            .catch(err => console.log('SW error:', err));
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update wallet UI
    if (typeof wallet !== 'undefined' && wallet.address) {
        const text = document.getElementById('walletText');
        if (text) {
            text.textContent = wallet.address.substring(0,6) + '...' + wallet.address.substring(38);
        }
    }

    console.log('⚡ WA.io App Ready');
});

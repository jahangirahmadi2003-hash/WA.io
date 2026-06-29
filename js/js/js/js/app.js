// WA.io Main Application
document.addEventListener('DOMContentLoaded', () => {
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

    // Update wallet UI if connected
    if (wallet.address) {
        document.getElementById('walletText').textContent = 
            wallet.address.substring(0, 6) + '...' + wallet.address.substring(38);
    }

    console.log('⚡ WA.io Initialized');
    console.log('🔒 Security: Active');
    console.log('📊 Supply: 10,000,000,000 (Fixed)');
});

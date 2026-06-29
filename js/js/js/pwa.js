// WA.io PWA Manager
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button after 10 seconds
    setTimeout(() => {
        showInstallButton();
    }, 10000);
});

function showInstallButton() {
    const btn = document.createElement('button');
    btn.id = 'installBtn';
    btn.className = 'install-btn';
    btn.innerHTML = '📲 نصب اپلیکیشن';
    btn.addEventListener('click', installApp);
    document.body.appendChild(btn);
    
    // Hide after 30 seconds
    setTimeout(() => {
        const el = document.getElementById('installBtn');
        if (el) el.style.display = 'none';
    }, 30000);
}

function installApp() {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((result) => {
        if (result.outcome === 'accepted') {
            console.log('App installed');
        }
        deferredPrompt = null;
        const el = document.getElementById('installBtn');
        if (el) el.remove();
    });
}

// Handle app installed
window.addEventListener('appinstalled', () => {
    console.log('WA.io installed as app');
    const el = document.getElementById('installBtn');
    if (el) el.remove();
});

// Detect standalone mode (app-like)
if (window.matchMedia('(display-mode: standalone)').matches || 
    navigator.standalone) {
    document.body.classList.add('app-mode');
}

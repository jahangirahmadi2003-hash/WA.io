// WA.io Wallet System - Optimized
// No UI blocking | Async | Secure

class WAWallet {
    constructor() {
        this.address = null;
        this.points = 0;
        this.lastMine = null;
        this.referrals = 0;
        this.load();
    }

    connect(address) {
        if (this.validateAddress(address)) {
            this.address = address;
            this.save();
            return true;
        }
        return false;
    }

    disconnect() {
        this.address = null;
        this.points = 0;
        this.lastMine = null;
        this.referrals = 0;
        localStorage.removeItem('wa_wallet');
    }

    validateAddress(addr) {
        return /^0x[a-fA-F0-9]{40}$/.test(addr);
    }

    save() {
        const data = {
            address: this.address,
            points: this.points,
            lastMine: this.lastMine,
            referrals: this.referrals
        };
        try {
            localStorage.setItem('wa_wallet', JSON.stringify(data));
        } catch (e) {
            console.error('Save failed:', e);
        }
    }

    load() {
        try {
            const data = localStorage.getItem('wa_wallet');
            if (data) {
                const parsed = JSON.parse(data);
                this.address = parsed.address || null;
                this.points = parsed.points || 0;
                this.lastMine = parsed.lastMine || null;
                this.referrals = parsed.referrals || 0;
            }
        } catch (e) {
            console.error('Load failed:', e);
            this.reset();
        }
    }

    reset() {
        this.address = null;
        this.points = 0;
        this.lastMine = null;
        this.referrals = 0;
    }
}

// Create wallet instance
const wallet = new WAWallet();

// ==================== UI Functions ====================
function updateWalletUI() {
    const btn = document.getElementById('walletBtn');
    const text = document.getElementById('walletText');
    
    if (!btn || !text) return;
    
    if (wallet.address) {
        const short = wallet.address.substring(0, 6) + '...' + wallet.address.substring(38);
        text.textContent = short;
        btn.classList.add('connected');
        btn.title = 'کلیک برای مشاهده اطلاعات';
    } else {
        text.textContent = 'اتصال کیف پول';
        btn.classList.remove('connected');
        btn.title = '';
    }
}

function showWalletInfo() {
    if (!wallet.address) return;
    
    const msg = [
        `آدرس: ${wallet.address}`,
        `امتیاز: ${wallet.points.toLocaleString()}`,
        `دعوت‌ها: ${wallet.referrals}`,
        '',
        'برای قطع اتصال، دکمه را نگه دارید'
    ].join('\n');
    
    alert(msg);
}

function showConnectDialog() {
    // Use a fast, non-blocking approach
    const addr = window.prompt('آدرس کیف پول BSC خود را وارد کنید:\n(مثال: 0x...)');
    
    if (!addr) return;
    
    const trimmed = addr.trim();
    
    if (!trimmed) return;
    
    if (wallet.connect(trimmed)) {
        updateWalletUI();
        // Use requestAnimationFrame to avoid INP issues
        requestAnimationFrame(() => {
            alert('✅ کیف پول با موفقیت متصل شد!');
        });
    } else {
        requestAnimationFrame(() => {
            alert('❌ آدرس نامعتبر است!\nآدرس باید با 0x شروع شود و ۴۰ کاراکتر باشد');
        });
    }
}

function handleDisconnect() {
    if (!wallet.address) return;
    
    if (confirm('آیا مطمئن هستید که می‌خواهید کیف پول را قطع کنید؟\nامتیازات شما ذخیره می‌شوند.')) {
        wallet.disconnect();
        updateWalletUI();
        requestAnimationFrame(() => {
            alert('کیف پول قطع شد. امتیازات شما پاک شد.');
        });
    }
}

// ==================== Event Listeners ====================
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('walletBtn');
    
    if (!btn) return;
    
    // Single click - connect or show info
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (wallet.address) {
            showWalletInfo();
        } else {
            // Use setTimeout to avoid blocking the main thread
            setTimeout(() => {
                showConnectDialog();
            }, 100);
        }
    });
    
    // Long press - disconnect
    let pressTimer;
    btn.addEventListener('mousedown', () => {
        if (wallet.address) {
            pressTimer = setTimeout(() => {
                handleDisconnect();
            }, 1500);
        }
    });
    
    btn.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });
    
    btn.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });
    
    // Touch events for mobile
    btn.addEventListener('touchstart', () => {
        if (wallet.address) {
            pressTimer = setTimeout(() => {
                handleDisconnect();
            }, 1500);
        }
    });
    
    btn.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });
    
    // Initial UI update
    updateWalletUI();
});

// Keyboard shortcut: Ctrl+W to connect/disconnect
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        if (wallet.address) {
            handleDisconnect();
        } else {
            setTimeout(() => {
                showConnectDialog();
            }, 100);
        }
    }
});

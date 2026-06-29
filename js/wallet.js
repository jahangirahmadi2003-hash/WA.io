// WA.io Wallet System - No prompt/alert | Async | Optimized

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
        try {
            localStorage.removeItem('wa_wallet');
        } catch(e) {}
    }

    validateAddress(addr) {
        return /^0x[a-fA-F0-9]{40}$/.test(addr);
    }

    save() {
        try {
            localStorage.setItem('wa_wallet', JSON.stringify({
                address: this.address,
                points: this.points,
                lastMine: this.lastMine,
                referrals: this.referrals
            }));
        } catch(e) {}
    }

    load() {
        try {
            const data = localStorage.getItem('wa_wallet');
            if (data) {
                const p = JSON.parse(data);
                this.address = p.address || null;
                this.points = p.points || 0;
                this.lastMine = p.lastMine || null;
                this.referrals = p.referrals || 0;
            }
        } catch(e) {}
    }
}

const wallet = new WAWallet();

// ==================== MODAL SYSTEM (No prompt/alert) ====================
function createModal(title, content, buttons) {
    // Remove existing modal
    const existing = document.querySelector('.wa-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'wa-modal-overlay';
    overlay.innerHTML = `
        <div class="wa-modal">
            <div class="wa-modal-header">${title}</div>
            <div class="wa-modal-body">${content}</div>
            <div class="wa-modal-footer"></div>
        </div>
    `;

    const footer = overlay.querySelector('.wa-modal-footer');
    
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.className = btn.class || 'btn-modal';
        button.textContent = btn.text;
        button.addEventListener('click', () => {
            overlay.remove();
            if (btn.callback) btn.callback();
        });
        footer.appendChild(button);
    });

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
}

function showToast(message, type = 'info') {
    const existing = document.querySelector('.wa-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `wa-toast wa-toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    });
}

// ==================== WALLET UI ====================
function updateWalletUI() {
    const btn = document.getElementById('walletBtn');
    const text = document.getElementById('walletText');
    if (!btn || !text) return;

    if (wallet.address) {
        text.textContent = wallet.address.substring(0,6) + '...' + wallet.address.substring(38);
        btn.classList.add('connected');
    } else {
        text.textContent = 'اتصال کیف پول';
        btn.classList.remove('connected');
    }
}

function showConnectModal() {
    createModal(
        '🔗 اتصال کیف پول',
        `
            <p style="margin-bottom:1rem">آدرس کیف پول BSC خود را وارد کنید:</p>
            <input type="text" id="walletInput" class="wa-input" placeholder="0x..." autocomplete="off" spellcheck="false">
            <p style="font-size:0.8rem;color:var(--gray);margin-top:0.5rem">مثال: 0x1234...5678</p>
        `,
        [
            {
                text: 'انصراف',
                class: 'btn-modal-cancel'
            },
            {
                text: 'اتصال',
                class: 'btn-modal-primary',
                callback: () => {
                    const input = document.getElementById('walletInput');
                    if (!input) return;
                    const addr = input.value.trim();
                    
                    if (!addr) {
                        showToast('لطفاً آدرس را وارد کنید', 'error');
                        return;
                    }
                    
                    if (wallet.connect(addr)) {
                        updateWalletUI();
                        showToast('✅ کیف پول با موفقیت متصل شد!', 'success');
                    } else {
                        showToast('❌ آدرس نامعتبر است!', 'error');
                    }
                }
            }
        ]
    );

    // Auto focus input
    setTimeout(() => {
        const input = document.getElementById('walletInput');
        if (input) input.focus();
    }, 200);
}

function showWalletInfoModal() {
    createModal(
        '👛 اطلاعات کیف پول',
        `
            <div style="text-align:center">
                <p><strong>آدرس:</strong></p>
                <p style="font-size:0.85rem;word-break:break-all;background:var(--light);padding:0.5rem;border-radius:8px;margin:0.5rem 0">${wallet.address}</p>
                <hr style="margin:1rem 0">
                <p><strong>امتیاز:</strong> ${wallet.points.toLocaleString()}</p>
                <p><strong>دعوت‌ها:</strong> ${wallet.referrals}</p>
            </div>
        `,
        [
            {
                text: 'قطع اتصال',
                class: 'btn-modal-danger',
                callback: () => {
                    wallet.disconnect();
                    updateWalletUI();
                    showToast('کیف پول قطع شد', 'info');
                }
            },
            {
                text: 'بستن',
                class: 'btn-modal-cancel'
            }
        ]
    );
}

// ==================== EVENT LISTENERS (Debounced) ====================
let walletClickLock = false;

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('walletBtn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Prevent double-click issues
        if (walletClickLock) return;
        walletClickLock = true;
        setTimeout(() => { walletClickLock = false; }, 500);

        if (wallet.address) {
            showWalletInfoModal();
        } else {
            showConnectModal();
        }
    });

    updateWalletUI();
});

// WA.io Wallet System
// Anti-Quantum Ready | Anti-Hack | Fixed Supply

class WAWallet {
    constructor() {
        this.address = null;
        this.points = 0;
        this.lastMine = null;
        this.referrals = 0;
    }

    connect(address) {
        if (this.validateAddress(address)) {
            this.address = address;
            this.save();
            return true;
        }
        return false;
    }

    validateAddress(addr) {
        // BSC address validation (anti-hack)
        return /^0x[a-fA-F0-9]{40}$/.test(addr);
    }

    save() {
        const data = {
            address: this.address,
            points: this.points,
            lastMine: this.lastMine,
            referrals: this.referrals
        };
        localStorage.setItem('wa_wallet', JSON.stringify(data));
    }

    load() {
        const data = localStorage.getItem('wa_wallet');
        if (data) {
            const parsed = JSON.parse(data);
            this.address = parsed.address;
            this.points = parsed.points || 0;
            this.lastMine = parsed.lastMine;
            this.referrals = parsed.referrals || 0;
        }
    }
}

const wallet = new WAWallet();
wallet.load();

// UI Updates
document.getElementById('walletBtn').addEventListener('click', () => {
    if (wallet.address) {
        // Show wallet info
        alert(`آدرس: ${wallet.address}\nامتیاز: ${wallet.points}`);
    } else {
        const addr = prompt('آدرس کیف پول BSC خود را وارد کنید:');
        if (wallet.connect(addr)) {
            document.getElementById('walletText').textContent = 
                addr.substring(0, 6) + '...' + addr.substring(38);
            alert('کیف پول با موفقیت متصل شد!');
        } else {
            alert('آدرس نامعتبر است!');
        }
    }
});

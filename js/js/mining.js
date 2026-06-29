// WA.io Mining System - No alert

class MiningSystem {
    constructor() {
        this.baseReward = 5;
        this.referralReward = 10;
        this.loyaltyReward = 100;
        this.miningInterval = 24 * 60 * 60 * 1000;
        this.totalSupply = 10000000000;
    }

    canMine() {
        if (!wallet.lastMine) return true;
        return (Date.now() - wallet.lastMine) >= this.miningInterval;
    }

    getRemainingTime() {
        if (!wallet.lastMine) return '۰ دقیقه';
        const diff = this.miningInterval - (Date.now() - wallet.lastMine);
        if (diff <= 0) return '۰ دقیقه';
        const hours = Math.floor(diff / (60 * 60 * 1000));
        const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        return `${hours}h ${minutes}m`;
    }

    mine() {
        if (!wallet.address) {
            showToast('ابتدا کیف پول خود را متصل کنید!', 'error');
            return false;
        }

        if (!this.canMine()) {
            showToast(`⏳ ${this.getRemainingTime()} صبر کنید`, 'info');
            return false;
        }

        wallet.points += this.baseReward;
        wallet.lastMine = Date.now();
        wallet.save();

        showToast(`✅ +${this.baseReward} امتیاز | کل: ${wallet.points.toLocaleString()}`, 'success');
        return true;
    }
}

const mining = new MiningSystem();

let miningLock = false;

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('startBtn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (miningLock) return;
        miningLock = true;
        mining.mine();
        setTimeout(() => { miningLock = false; }, 3000);
    });
});

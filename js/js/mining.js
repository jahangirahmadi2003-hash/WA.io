// WA.io Mining System - Optimized

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
        return `${hours} ساعت و ${minutes} دقیقه`;
    }

    mine() {
        if (!wallet.address) {
            requestAnimationFrame(() => {
                alert('ابتدا کیف پول خود را متصل کنید!');
            });
            return false;
        }

        if (!this.canMine()) {
            const remaining = this.getRemainingTime();
            requestAnimationFrame(() => {
                alert(`⏳ باید ${remaining} صبر کنید`);
            });
            return false;
        }

        wallet.points += this.baseReward;
        wallet.lastMine = Date.now();
        wallet.save();

        requestAnimationFrame(() => {
            alert(`✅ ${this.baseReward} امتیاز دریافت کردید!\nکل امتیاز: ${wallet.points.toLocaleString()}`);
        });
        
        return true;
    }

    addReferral() {
        wallet.points += this.referralReward;
        wallet.referrals++;
        wallet.save();
    }
}

const mining = new MiningSystem();

// Start button with debounce
let miningInProgress = false;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    
    if (!startBtn) return;
    
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (miningInProgress) return;
        
        miningInProgress = true;
        
        // Non-blocking mining
        setTimeout(() => {
            mining.mine();
            miningInProgress = false;
        }, 50);
    });
});

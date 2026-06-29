// WA.io Mining System
// 1 Point = 1 Future Token | Fixed Supply: 10B

class MiningSystem {
    constructor() {
        this.baseReward = 5;
        this.referralReward = 10;
        this.loyaltyReward = 100;
        this.miningInterval = 24 * 60 * 60 * 1000; // 24 hours
        this.totalSupply = 10000000000; // 10 Billion - FIXED
    }

    canMine() {
        if (!wallet.lastMine) return true;
        const now = Date.now();
        return (now - wallet.lastMine) >= this.miningInterval;
    }

    mine() {
        if (!wallet.address) {
            alert('ابتدا کیف پول خود را متصل کنید!');
            return false;
        }

        if (!this.canMine()) {
            const remaining = this.getRemainingTime();
            alert(`باید ${remaining} صبر کنید تا دوباره امتیاز بگیرید`);
            return false;
        }

        wallet.points += this.baseReward;
        wallet.lastMine = Date.now();
        wallet.save();
        
        alert(`✅ ${this.baseReward} امتیاز دریافت کردید!\nکل امتیاز: ${wallet.points}`);
        return true;
    }

    getRemainingTime() {
        if (!wallet.lastMine) return '۰ دقیقه';
        const now = Date.now();
        const diff = this.miningInterval - (now - wallet.lastMine);
        const hours = Math.floor(diff / (60 * 60 * 1000));
        const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        return `${hours} ساعت و ${minutes} دقیقه`;
    }

    addReferral() {
        wallet.points += this.referralReward;
        wallet.referrals++;
        wallet.save();
    }
}

const mining = new MiningSystem();

document.getElementById('startBtn').addEventListener('click', () => {
    mining.mine();
});

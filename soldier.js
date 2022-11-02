const soldier = {
    name: 'Ranger',
    health: 10,
    gun: { nameOfGun: 'Javelin', numberOfRounds: 3 },
    supplies: 3,
    shoot: function () {
        this.gun.numberOfRounds > 0 ? `${console.log('bang-bang')} ${this.gun.numberOfRounds--} ` : console.log('the clip is empty. Re - secure');
    },
    recharge: function () {
            this.supplies > 0 ? 
            `${console.log('перезарядка...')} ${this.gun.numberOfRounds = 30} ${this.supplies--}` &&
            setTimeout(() => console.log("ok"), 4000)
            : console.log('не осталось припасов')
    },
    toHurt: function () {
        this.health > 0 ? this.health-- : console.log('Ты проиграл');
    },
}

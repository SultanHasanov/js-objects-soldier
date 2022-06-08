const soldier = {
    name: 'Raybek',
    health: 10,
    weapon: {
        nameWeapon: 'Ак-47',
        cartridges: 30 
    },
    supplies: 3,
    fire: function (){
        if(this.weapon.cartridges = 0){
            console.log('Обойма пуста. Перезаредитесь') 
        } else { 
            this.weapon.cartridges -= 1
            console.log('бах-бах')
        }         
    },
    recharge: function (){
        this.weapon.cartridges = 30
        this.supplies -= 1    
    },
    hurt: function () {
        this.health = 0
        console.log('Ты проиграл')
    },
    getStatus: function (){
        return `Имя: ${this.name}, Здоровье: ${this.health}, Патроны: ${this.weapon.cartridges}, Припасы: ${this.supplies}`
    }
}
soldier.fire()
// soldier.recharge()
console.log(soldier.getStatus())



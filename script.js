class monster{
    constructor(name) {
        this.name = name
        this.weight = Math.floor(Math.random() * 1000 )+1
        this.height = Math.round(Math.random() * 200) / 10 +1
        this.strength = Math.floor(Math.random() * 100 )+1
        this.speed = Math.round(Math.random() * 200) / 10 +1
        this.cuteness = Math.floor(Math.random() * 20)-10
    }    
        
        powerScaling(){
            let scaling = this.weight + this.height + this.strength + this.speed - this.cuteness;
            let result = Math.floor(scaling / 5)
            return result
        }
    

}
let display = new monster()

//console.log('power-level' + '' + display.powerScaling())

function createMon(size) {
    let counter = 1
    let array = []
    let ps = ''
    while(counter < size) {
        array[counter] = new monster('SCP-' + counter)
        array[ps] = display.powerScaling()
        console.log(array[counter])
        counter = counter + 1
    }
    return array
}
let createMons = createMon(6)
//console.log(createMon)
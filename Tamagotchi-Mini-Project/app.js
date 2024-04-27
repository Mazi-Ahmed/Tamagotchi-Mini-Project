// Create a class
class Tamagotchi {
    constructor(name){
        this.name = name
        this.hunger = 5
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
// Functions for feed, sleep, play, and age
    feed() {
        this.hunger = Math.max(this.hunger - 1, 0)
    }
    sleep() {
        this.sleepiness = Math.max(this.sleepiness - 1, 0)
    }
    play() {
        this.boredom = Math.max(this.boredom - 1, 0)
    }  
    upAge () {
        this.age++
    }
// Metrics interval
    metricsIncrease() {
        this.hunger++
        this.sleepiness++
        this.boredom++
        
        if(this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
            console.log(`${this.name} has fainted!`);
        }
    }
}
// Domcontent for Metrics
let tamagotchi;

document.addEventListener('DOMContentLoaded', () => {
    const pokeImg = document.getElementById('egg');
    const nameSpan = document.getElementById('name');
    const hungerSpan = document.getElementById('hunger');
    const sleepinessSpan = document.getElementById('sleepiness');
    const boredomSpan = document.getElementById('boredom');
    const ageSpan = document.getElementById('age');
}) 

// Set Name Function -- NOT WORKING
 document.getElementById('setName').addEventListener('click', () => {
    const putName = document.getElementById('putName');
    tamagotchi = new Tamagotchi(putName.value);
    nameSpan.textContent = tamagotchi.name
 })
// Button Functions for Metrics
 document.getElementById('feed').addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.feed();
        hungerSpan.textContent = tamagotchi.hunger;
    }
 })
 
 document.getElementById('sleep').addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.sleep();
        sleepinessSpan.textContent = tamagotchi.sleep;
    }
 })
 
document.getElementById('play').addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.play(); 
        boredomSpan.textContent = tamagotchi.boredom;
    }
})

const updateMetrics = () => {
    if(tamagotchi) {
        tamagotchi.metricsIncrease();
        hungerSpan.textContent = tamagotchi.hunger;
        sleepinessSpan.textContent = tamagotchi.sleep;
        boredomSpan.textContent = tamagotchi.boredom;
    }
}

tamagotchi = new Tamagotchi('Tamagotchi')
nameSpan.textContent = tamagotchi.name; 

tamagotchi.interval = setInterval(() => {
    tamagotchi.upAge();
    metricsIncrease();
}, 6000);


const message = document.getElementById('messages')

// Create a class
class Tamagotchi {
    constructor(name){
        this.name = name + 'mon'
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
        }
    }
// Variables
let tamagotchi;

const pokeImg = document.getElementById('egg');
const nameSpan = document.getElementById('name');
const hungerSpan = document.getElementById('hunger');
const sleepinessSpan = document.getElementById('sleepiness');
const boredomSpan = document.getElementById('boredom');
const ageSpan = document.getElementById('age');
const feedButton = document.getElementById('feed');
const lightsButton = document.getElementById('sleep');
const playButton = document.getElementById('play');

const disableControls = () => {
    feedButton.disabled = true;
    lightsButton.disabled = true;
    playButton.disabled = true;
  };

  const enableControls = () => {
    feedButton.disabled = false;
    lightsButton.disabled = false;
    playButton.disabled = false;
  };

const updateMetrics = () => {
    if (tamagotchi) {
        tamagotchi.metricsIncrease();
        hungerSpan.textContent = tamagotchi.hunger;
        sleepinessSpan.textContent = tamagotchi.sleepiness;
        boredomSpan.textContent = tamagotchi.boredom;
    
    if(tamagotchi.hunger === 10 || tamagotchi.sleepiness === 10 || tamagotchi.boredom === 10) {
            message.textContent = (`${tamagotchi.name} has fainted!`);
            clearInterval(tamagotchi.interval);
            disableControls();
    }
    if (tamagotchi.age === 1) {
        pokeImg.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7948d7f-37fa-43f3-b3ad-69390c3ec4ce/d6b3l7g-c8aa2c72-3233-4e86-bb2f-c273cf58e739.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3OTQ4ZDdmLTM3ZmEtNDNmMy1iM2FkLTY5MzkwYzNlYzRjZVwvZDZiM2w3Zy1jOGFhMmM3Mi0zMjMzLTRlODYtYmIyZi1jMjczY2Y1OGU3MzkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.69YO8IOy6hEVC9DvtbXQUhblAxIOAqFsAT4goYlZX_k'
        alert('Oh?')
    }
    if (tamagotchi.age === 8) {
        pokeImg.src = 'https://64.media.tumblr.com/a00892f48f92f5006d9f55e99b17253d/tumblr_nozmvuXqCf1scncwdo1_540.gif'
        alert(`What? ${tamagotchi.name} is evolving!`)
    }
    if (tamagotchi.age === 12) {
        pokeImg.src = 'https://31.media.tumblr.com/d35d35b0e9ad02705290fa10ba995556/tumblr_ms7wd8K2tL1scncwdo1_500.gif'
        alert(`What? ${tamagotchi.name} is evolving!`)
    }
    ageSpan.textContent = tamagotchi.age;
}
}

// Set Name Function 
document.getElementById('setName').addEventListener('click', () => {
    const putName = document.getElementById('putName');
    if (putName.value.trim() !== '') {
        tamagotchi = new Tamagotchi(putName.value.trim());
        nameSpan.textContent = tamagotchi.name;
        enableControls();
        tamagotchi.interval = setInterval(() => {
            tamagotchi.upAge();
            updateMetrics();
        }, 5000);
    } else {
        alert('Please enter a Nickname.')
    }
 })

// Button Functions for Metrics
 feedButton.addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.feed();
        hungerSpan.textContent = tamagotchi.hunger;
    }
 })
 
lightsButton.addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.sleep();
        sleepinessSpan.textContent = tamagotchi.sleepiness
    }
 })
 
playButton.addEventListener('click', () => {
    if(tamagotchi) {
        tamagotchi.play(); 
        boredomSpan.textContent = tamagotchi.boredom;
    }
})

tamagotchi = new Tamagotchi('Poke')
nameSpan.textContent = tamagotchi.name; 



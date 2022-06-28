const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const replay_btn = document.getElementById('raplay')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))
replay_btn.addEventListener('click', () => screens[2].classList.add('up'))


choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    letter = generate_random_letter()

    const insect = document.createElement('div')
    insect.setAttribute("data-key", `${letter}`);
    insect.classList.add('insect')
    //let divs = document.querySelectorAll('div');
    const rand = (multi) => {
        return parseInt(multi * Math.random() ,10);
      }
  
      // get width and height of the window
      let ww = window.innerWidth;
      let wh = window.innerHeight;
  
      // define biggest possible value as constraint
      let constraint = Math.min(ww, wh);
  
      // move the dots by changing the CSS values
      function move(){
  
        // loop over all DIV elements
  
          // Balls can be the width of the constraint 
          // or less
          let w = rand(constraint);
  
  
          let x = rand((ww - w));
          let y = rand((wh - w));
  
          // apply styles
          insect.style.width = w + 'px'; 
          insect.style.height = w + 'px'; 
          insect.style.top = y + 'px'; 
          insect.style.left = x + 'px';
  
          // 'move' dot with 900ms or more
          insect.style.transition = (rand(100) + 900) + 'ms';
  
      }
  
      // change dots every second
      window.setInterval(move, 1000);
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}"  />`

    insect.addEventListener('keypress', catchInsect)

    game_container.appendChild(insect)
}


function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}

document.addEventListener('keypress', (event) => {
    var name = (event.key).toUpperCase();
    kill_with_piano(name)
}, false);

function kill_with_piano(name){
    div = document.querySelector(`div[data-key="${name}"]`)
    div.remove()
    increaseScore()
    createInsect()
}


function generate_random_letter(){
    //random generate letters
    letter = '';
    random_num = Math.floor(Math.random() * 9);
    switch(random_num){
        case 1:
            letter = 'A'
            break
        case 2:
            letter = 'S'
            break
        case 3:
            letter = 'D'
            break
        case 4:
            letter = 'F'
            break
        case 5:
            letter = 'G'
            break
        case 6:
            letter = 'W'
            break
        case 7:
            letter = 'E'
            break
        case 8:
            letter = 'T'
            break
    }
    return(letter)
}

        


//Generate div on load and after kill

window.addEventListener('load', (event) => {
    generate_div_affter_kill()

},false);

function generate_div_affter_kill(){
    letter = generate_random_letter()

    //get body
    body = document.getElementById("body");
    div = document.createElement("div");
    div.setAttribute("data-key", `${letter}`);
    div.style = ' color: black ;'
    div.appendChild(document.createTextNode('BUG'));
    body.appendChild(div)

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

document.addEventListener('keypress', (event) => {
    var name = (event.key).toUpperCase();
 
    
    //get the cross poinding aduio
    //alert(`audio[data-key="${name}"]`)
    audio = document.querySelector(`audio[data-key="${name}"]`)
    audio.play()

    //get the div data-key
    //alert(`div[data-key="${name}"]`)
    div = document.querySelector(`div[data-key="${name}"]`)
    //div.remove()
    //setTimeout(() => {generate_div_affter_kill()}, 5000);
   
    
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);
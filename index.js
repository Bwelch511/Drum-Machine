let txt = document.getElementById('txt');

let q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');//heater1
let w = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');//p1
let e = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3');//2
let a = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3');//3
let s = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'); //closed hh
let d = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3');//open HH
let z = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'); //kick
let x = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3');//brk snare
let c = new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3');//kick snr



window.addEventListener('keydown', lilly)


function lilly(event){
    const keypress = event.key;
    switch(true){
        case(keypress == 'q'): 
        txt.textContent = 'Heater';
        q.play()
        break;
        case(keypress == 'w'): 
        txt.textContent = 'piano 1';
        w.play()
        break;
        case(keypress == 'e'): 
        txt.textContent = 'piano 2';
        e.play()
        break;
        case(keypress == 'a'): 
        txt.textContent = 'piano 3';
        a.play()
        break;
        case(keypress == 's'): 
        txt.textContent = 'Closed HH';
        s.play()
        break;
        case(keypress == 'd'): 
        txt.textContent = 'Open HH';
        d.play()
        break;
        case(keypress == 'z'): 
        txt.textContent = 'Kick';
        z.play()
        break;
        case(keypress == 'x'): 
        txt.textContent = 'Brk Snare';
        x.play()
        break;
        case(keypress == 'c'): 
        txt.textContent = 'Kick Snare';
        c.play()
        break;
    }
}

let Qbtn = document.getElementById('Qbtn');
let Wbtn = document.getElementById('Wbtn');
let Ebtn = document.getElementById('Ebtn');
let Abtn = document.getElementById('Abtn');
let Sbtn = document.getElementById('Sbtn');
let Dbtn = document.getElementById('Dbtn');
let Zbtn = document.getElementById('Zbtn');
let Xbtn = document.getElementById('Xbtn');
let Cbtn = document.getElementById('Cbtn');

Qbtn.addEventListener('click', () => {q.play(); txt.textContent = 'heater'});
Wbtn.addEventListener('click', () => {w.play(); txt.textContent = 'p1'})
Ebtn.addEventListener('click', () => {e.play(); txt.textContent = 'p2'})
Abtn.addEventListener('click', () => {a.play(); txt.textContent = 'p3'})
Sbtn.addEventListener('click', () => {s.play(); txt.textContent = 'closed HH'})
Dbtn.addEventListener('click', () => {d.play(); txt.textContent = 'open HH'})
Zbtn.addEventListener('click', () => {z.play(); txt.textContent = 'kick'})
Xbtn.addEventListener('click', () => {x.play(); txt.textContent = 'brk snare'})
Cbtn.addEventListener('click', () => {c.play(); txt.textContent = 'kick snr'})



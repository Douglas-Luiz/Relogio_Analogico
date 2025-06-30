const paletteHour = document.querySelector('.hour');
const paletteMinute = document.querySelector('.minute');
const paletteSecond = document.querySelector('.second');

const body = document.querySelector('body')
const rNumber = document.querySelectorAll('.number')


const wallpaper = document.querySelector('.wallpaper')
const btChange = document.getElementById('btchange')
const input = document.querySelector(".changeWallpaper input");
const ckLight = document.getElementById('light');


function urlWallpaper(){
    localStorage.setItem('wallpaper', input.value)
    input.value = ''
   
}

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        urlWallpaper()
    }
 });
 

setInterval(() => {
    
    changeWallpaper();
     
    if(input.value == ''){
        btChange.innerHTML  = 'Remover wallpaper';
    } else {
        btChange.innerHTML = 'Alterar wallpaper';
    }
    
    
    
    
    if(ckLight.checked == true){
        paletteHour.style.backgroundColor = '#fff'
        paletteMinute.style.backgroundColor = '#fff'
        for (let i = 0; i < rNumber.length; i++) {
            rNumber[i].classList.add('light-mode');
        }
        localStorage.setItem('ckbox', ckLight.checked)
        
        
        
    } else {
        
        paletteHour.style.backgroundColor = '#000'
        paletteMinute.style.backgroundColor = '#000'
        
        for (let i = 0; i < rNumber.length; i++) {
            rNumber[i].classList.remove('light-mode');
        }
        localStorage.setItem('ckbox', ckLight.unchecked);
    }

    
    
}, 100);

function changeWallpaper(){
    
    if(localStorage.getItem('wallpaper') == ''){
        wallpaper.style.background = ''
        wallpaper.style.backgroundColor = '#fff' 
    }
    else if(localStorage.getItem('wallpaper') == 'reset'){
     reset();
    }
    else{
        wallpaper.style.background = ` url('${localStorage.getItem('wallpaper')}') no-repeat center`
        wallpaper.style.backgroundSize = `cover`;
        wallpaper.style.opacity = '1'; 
    }
};




function reset(){
    const date = new Date();
    
    localStorage.setItem('wallpaper', 'reset');
    
    if(date.getHours() >= 00 && date.getHours() < 5 ){
        wallpaper.style.background = ` url('./img/madrugada.jpg') no-repeat center`
        wallpaper.style.backgroundSize = `cover`;
        wallpaper.style.opacity = '0.5'
    }
    if(date.getHours() >= 5 && date.getHours() < 16 ){
        wallpaper.style.background = ` url('./img/dia.jfif') no-repeat bottom`
        wallpaper.style.backgroundSize = `cover`;
        wallpaper.style.opacity = '0.9'
    }
    if(date.getHours() >= 16 && date.getHours() < 18){
        wallpaper.style.background = ` url('./img/tarde.jfif') no-repeat `
        wallpaper.style.backgroundSize = `cover`;
        wallpaper.style.opacity = '0.8'
    }
    if(date.getHours() >= 18 && date.getHours() < 24 ){
        wallpaper.style.background = ` url('./img/noite.jfif') no-repeat center`
        wallpaper.style.backgroundSize = `cover`;
        wallpaper.style.opacity = '1';
    }
    
};




setInterval(() => {
    
    
    const getTime = () => {
        
        const date = new Date();
        
    return{
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        };
    }
    
    
    
    const { hours, minutes, seconds } = getTime();
    
    paletteHour.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
    paletteMinute.style.transform = `translate(0, -50%) rotate(${minutes  * 6}deg)`
    paletteSecond.style.transform = `translate(0, -50%) rotate(${seconds  * 6}deg)`;
}, 100);

const checked = JSON.parse(localStorage.getItem("ckbox"));
ckLight.checked = checked;

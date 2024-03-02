
const plane = document.querySelector('.plane');
const road = document.querySelector('.road');
const sky = document.querySelector('.sky');
let gravity = 2;
let planeleft=20;
let planebottom=500;
let timer;
let skyv = 1510;
function startGame()
{
    planebottom-=gravity;
    plane.style.bottom = planebottom+'px';
    plane.style.left = planeleft+'px';
    if(planebottom <= 100)
    {
        planebottom = 95;
    }
    if(planeleft <=1)
    {
        planeleft=1;
    }
    if(planebottom >=500)
    {
        planebottom = 500;
    }
} 
timer = setInterval(startGame,20);
function jump1()
{
    if(planebottom<650)
    {
        planebottom +=50;
        planeleft +=50;
        SourceBufferList.style.bottom = planebottom+'px';
        SourceBufferList.style.left = planeleft+'px';
        
    }
}
function jump2()
{
    if(planebottom<650)
    {
        planebottom +=50;
        planeleft -=50;
        
    }
}
function control(e)
{
    if(e.keyCode===32 || e.keyCode===38 || e.keyCode===87 ||e.keyCode===39)
    {
     jump1()
    }
    if(e.keyCode===37 || e.keyCode===40 ||e.keyCode===39 )
    {
     jump2()
    }
}
document.addEventListener('keyup',control)
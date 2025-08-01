var toggle1 = false
document.getElementById('box1').addEventListener('click', () => {
    if(!toggle1){
        document.getElementById('box1').style.backgroundColor = 'red';
    }else{
        document.getElementById('box1').style.backgroundColor = 'transparent';
    }
    toggle1 = !toggle1
});

var toggle2 = false
document.getElementById('box2').addEventListener('click', () => {
    if(!toggle2){
        document.getElementById('box2').style.backgroundColor = 'blue';
    }else{
        document.getElementById('box2').style.backgroundColor = 'transparent';
    }
    toggle2 = !toggle2
});

var toggle3 = false
document.getElementById('box3').addEventListener('click', () => {
    if(!toggle3){
        document.getElementById('box3').style.backgroundColor = 'lightgreen';
    }else{
        document.getElementById('box3').style.backgroundColor = 'transparent';
    }
    toggle3 = !toggle3
});

var toggle4 = false
document.getElementById('box4').addEventListener('click', () => {
    if(!toggle4){
        document.getElementById('box4').style.backgroundColor = 'yellow';
    }else{
        document.getElementById('box4').style.backgroundColor = 'transparent';
    }
    toggle4 = !toggle4
});

document.getElementById('sub-btn').addEventListener('click', () => {
    n = document.getElementById('name').value
    if(n !== ""){
        document.getElementById('greet').innerHTML = "Hello, " + n;
    }
});

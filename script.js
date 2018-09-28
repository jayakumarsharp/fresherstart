function pageload(){
document.getElementById("name").value = "Johnny Bravo";
}
pageload();
function callonclickevent() {
    var name = document.getElementById('name').value;
    alert(name);
    console.log(name);
    document.getElementById('displayname').innerHTML=name;
    console.log('called method');
    var a = 10;
    var b = 20;
    var c = 'chennai';
    console.log('intialized variable');

    var d = a + b;
    console.log('after adding');
    console.log(d);

    //alert('you have clicked')
}

function callonclickevent1() {
    alert('you have clicked 1')
}

function callonclickevent2() {
    alert('you have clicked 2')
}

function callonclickevent3() {
    alert('you have clicked 3')
}
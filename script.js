// var div = document.querySelector('div');
var div = document.getElementById('div1');
div.addEventListener('click',cloneOnClick);
function cloneOnClick() {
    var newDiv = div.cloneNode(true);
    newDiv.style.backgroundColor=('rgb('+Math.random() *255+','+Math.random() *255+','+Math.random() *255+')');
    document.body.append(newDiv);
}




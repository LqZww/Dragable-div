var div1 = document.createElement('div')
div1.className = 'demo'

document.body.appendChild(div1)

//是否开启拖动
var dragging = false

var lastX
var lastY

div1.onmousedown = function(e){
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function(e){
    if(dragging === true){
        console.log(lastX,lastY)
        console.log(e.clientX,e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        div1.style.top = top + deltaY + 'px'
        div1.style.left= left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}

div1.onmouseup = function(){
    dragging = false
}
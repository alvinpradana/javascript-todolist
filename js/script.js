const input = document.querySelector("#add")
const btn = document.querySelector("#btn")
const list = document.querySelector("#list")
var el = document.getElementsByTagName('li')

btn.onclick = function() {
    var txt = input.value
    if (txt == '') {
        alert('You must add something.')
    } else {
        li = document.createElement('li')
        li.innerHTML = txt
        list.insertBefore(li, list.childNodes[0])
        input.value = ''
    }
}

list.onclick = function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
}
const checked = document.getElementsByClassName('checked')
const item = document.getElementsByClassName('item')


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(){   
        checked[i].style.display = 'inline';
        item[i].style.filter = 'contrast(0.8)'
    });
}

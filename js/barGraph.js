function setDayOfWeek(days) {
    let columns = document.querySelectorAll('#bar-graph .columns .column');
    for(let i = 0; i < columns.length; i++){
        for (var property in days) {
            if (days.hasOwnProperty(property)) {
                if(columns[i].children[0].className === ('inner-' + property)) {
                    let height = 207*(days[property] / 100);
                    let realValue = 60*(days[property] / 100);
                    columns[i].firstElementChild.setAttribute('style', 'height:' + [height] + 'px');
                    columns[i].lastElementChild.setAttribute('style', 'margin-bottom:' + [height] + 'px');
                    columns[i].lastElementChild.firstElementChild.innerHTML = Math.floor(realValue);
                }
            }
        }
    }
}

function setColumnValueVisibility() {
    let columns = document.querySelectorAll('#bar-graph .columns .column');
    for(let i = 0; i < columns.length; i++){
        columns[i].firstElementChild.addEventListener('mouseenter', function(e){
            e.target.parentElement.lastElementChild.hidden = false;
        });
        columns[i].firstElementChild.addEventListener('mouseleave', function(e){
            e.target.parentElement.lastElementChild.hidden = true;
        });
    }    
}

let days = {
    //in percent
    mon: 23,
    tues: 46,
    wed: 54,
    thu: 100,
    fri: 43,
    sat: 66,
    sun: 36
}

window.addEventListener("load", function () {
    setColumnValueVisibility();
    setTimeout(function () {
        setDayOfWeek(days);
    }, 500);
});


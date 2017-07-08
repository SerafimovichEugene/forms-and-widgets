function setDayOfWeek(days) {
    let columns = document.querySelectorAll('#bar-graph .columns .column');
    columns.forEach((column) => {
        for (var property in days) {
            if (days.hasOwnProperty(property)) {
                
                if(column.children[0].className === ('inner-' + property)) {
                    let height = 207*(days[property] / 100);
                    let realValue = 60*(days[property] / 100);
                    column.firstElementChild.style.height = height;
                    column.lastElementChild.style.marginBottom = height;
                    column.lastElementChild.firstElementChild.innerHTML = Math.floor(realValue);
                    
                }
            }
        }        
    });
}

function showColumnValue() {
    let columns = document.querySelectorAll('#bar-graph .columns .column');
    columns.forEach((column) => {
        column.firstElementChild.addEventListener('mouseenter', function(e){
            e.target.parentElement.lastElementChild.hidden = false;
        });
        column.firstElementChild.addEventListener('mouseleave', function(e){
            e.target.parentElement.lastElementChild.hidden = true;
        });
    });
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
    showColumnValue();
    setTimeout(function () {
        setDayOfWeek(days);
    }, 500);
});

const tablOne = document.querySelector('#tabOneContent');
const tablTwo = document.querySelector('#tabTwoContent');
const tabTwoTrigger = document.querySelector('#tabTrigger_2');
const tabOneTrigger = document.querySelector('#tabTrigger_1');

const showTabOne = _ => {
    tablTwo.style.display = 'none';
    tabTwoTrigger.classList.remove('selectedTab');

    tablOne.style.display = 'block';
    tabOneTrigger.classList.add('selectedTab');
}

const showTabTwo = _ => {
    tablTwo.style.display = 'block';
    tabTwoTrigger.classList.add('selectedTab');

    tablOne.style.display = 'none';
    tabOneTrigger.classList.remove('selectedTab');
}

const glide = new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 4
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// ******
glide.mount();
showTabOne();
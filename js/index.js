const tablOne = document.querySelector('#tabOneContent');
const tablTwo = document.querySelector('#tabTwoContent');


const toggleTab = tabNumber => {
    if (tabNumber === 1) {
        tablTwo.style.display = 'none';
        tablOne.style.display = 'block';
    } else {
        tablTwo.style.display = 'block';
        tablOne.style.display = 'none';
    }
}
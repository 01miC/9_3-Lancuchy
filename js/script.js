var femaleNames = ['Asia', 'Kasia', 'Monika', 'Sylwia', 'Jadwiga', 'Ania'];
var maleNames = [ 'Tomek', 'Wojtek', 'Jakub', 'Kacper', 'Marcin' ];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

console.log(allNames);
if (allNames.indexOf(newName) === -1 ) {
    allNames.push(newName);
    console.log(allNames);
}else {
    console.log('Zle dane');
}

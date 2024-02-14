function paint(color) {
    var circle = document.getElementById('circleID');
    circle.style.backgroundColor = color;
}
function random() {
    var circle = document.getElementById('circleID');
    var randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }).toUpperCase();
    console.log(randomColor);
    circle.style.backgroundColor = randomColor;
}

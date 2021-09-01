let select = document.querySelector("select");
let body = document.querySelector("body");

select.addEventListener("change", setTheme);

function setTheme() {
    let option = select.value;
    switch (option) {
        case "White":
            body.style.backgroundColor = "White";
            body.style.color = "Black";
            break;
        case "Black":
            body.style.backgroundColor="Black";
            body.style.color="White";
            break;
        case "Purple": 
            body.style.backgroundColor ="Purple";
            body.style.color="White";break;
        case "Yellow":
            body.style.backgroundColor="Yellow";
            body.style.color="Red";
            break;
        case "Green":
            body.style.backgroundColor="Green";
            body.style.color="Orange";
    }
}
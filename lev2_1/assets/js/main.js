

function changeMe(){
    const navHome = document.getElementById("navHome");

    navHome.style.backgroundColor = "pink";
    navHome.style.color= "black";
    navHome.innerHTML = reverseString(navHome.innerHTML);
}

function reverseString(str){
    let splitString =str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")

    return joinArray
}
function getUserInput(){
    const vorname = (document.getElementById('vorname')).value;
    const nachname = (document.getElementById('nachname')).value;
    let land = (document.getElementById('land')).value;

    console.log(vorname + " " + nachname + " "+ land);
}
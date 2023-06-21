export function initHeader(){
    
    var asd = window.location.href;
    console.log(asd)
    // || (asd=="https://ваш-сайт.ru /index.php")
    if ((asd=="http://localhost:8000/") || (asd=="http://192.168.0.231:8000/")) {
        console.log('kek')
        document.getElementById("up").style.backgroundColor = "var(--bej)";
        document.getElementById("up").style.position = "sticky";
    }
}
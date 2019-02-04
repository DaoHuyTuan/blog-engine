const main = document.getElementById("main");
let data;
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

        main.innerHTML += http.responseText;
        data = http.responseXML;
        getTag();
    }
}
http.open("GET","https://cors-anywhere.herokuapp.com/https://daohuytuan-1fdfa.firebaseapp.com/blog/index.xml",true);
http.send();

function getTag() {
    let items = data.getElementsByTagName("item");
    console.log(items[0].getElementsByTagName("leftDescription").item(0).innerHTML)

}


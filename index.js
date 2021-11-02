// console.log("Hi");
let api = "https://api.github.com/repos/ssiwapetcharakorn/ssiwapetcharakorn.github.io/branches/main";

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

httpGetAsync(api, (res) => {
    let info = JSON.parse(res);
    let author = info.commit.commit.author;
    let updateTime = new Date(author.date);
    let msg = `Last update by ${author.name} @${updateTime.toLocaleString()}`;
    // console.log(msg);
    document.getElementById("footer").innerHTML = msg;
});
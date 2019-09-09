var sul = 'https://www.googleapis.com/customsearch/v1?q=' + new URLSearchParams(window.location.search).getAll('q') + '&cx=004515914683076720641%3Auhie5a7ygv4&key=AIzaSyD68PxO_gYStrq9WEHdxnwO_R56Wly1Nbs'

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

alert(sul)
loadJSON(sul,
         function(data) {
           getSearchData(data)
         },
         function(xhr) { alert("An error has occoured!")}
);

function getSearchData(data) {
    var htmlse = ""
    data['items'].forEach(function(element){
        htmlse += '<div class="card w-75"><div class="card-body"><h5 class="card-title">' + element['title'] + '</h5><p class="card-text">' + element['snippet'] + '</p> <a href="' + element['link'] + '">' + element['displayLink'] + '</a></div> </div>'
    });
    document.getElementById("content").innerHTML = htmlse
}
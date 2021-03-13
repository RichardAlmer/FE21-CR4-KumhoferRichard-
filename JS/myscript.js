// ---------------------------JS for index.html-------------------------

// --------------------------------AddCards-----------------------------

var moviesJ = JSON.parse(movies);

function cardCreater(moviesJ) {

    let movie = "";

    for (let i = 0; i < moviesJ.length; i++) {
        movie += `       
            <div id="card" + ${[i]} class="row cardContainer">
                <div class="col-5">
                    <img class="mainImg" src="${moviesJ[i].img}" alt="${moviesJ[i].movieName}">
                </div>
                <div class="col-7">
                    <div class="mybody card-body">
                        <h5 class="mytitle card-title">${moviesJ[i].movieName}</h5>
                        <p class="mydes card-text">${moviesJ[i].description}</p>
                        <button id="like" + ${[i]} type="button" class="mybtn btn">Like &#128077;</button>
                        <button id="info" + ${[i]} type="button" class="mybtn2 btn">more infos</button>
                        <p id="clicks" + ${[i]} class="myC">${moviesJ[i].likes}</p>
                    </div>
                </div>
            </div>   
        `
    }
    return movie
}

document.getElementById("mainContent").innerHTML += cardCreater(moviesJ);


// --------------------------------Likes per Click-----------------------------

var likes = document.querySelectorAll("[id*=like]");
var click = document.querySelectorAll("[id*=clicks]");
    console.log(likes);

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click",function(){
        moviesJ[i].likes += 1;
        var newClicks = moviesJ[i].likes;
        click[i].innerHTML = newClicks;
    });
}


// -------------------------------Sort Button---------------------------------------

var order = document.querySelectorAll("[id*=card]");

for (let i = 0; i < order.length; i++) {
    document.getElementById("sortBtnML").addEventListener("click", function(){
        var newOrder = moviesJ[i].likes;
        order[i].style.order = "-"+newOrder;
    });
}

for (let i = 0; i < order.length; i++) {
    document.getElementById("sortBtnLL").addEventListener("click", function(){
        var newOrder = moviesJ[i].likes;
        order[i].style.order = newOrder;
    });
}


// ------------------------------Show more Info and Trailer----------------------------------------------------

var infoBtn = document.querySelectorAll("[id*=info]");

for (let i = 0; i < infoBtn.length; i++) {
    infoBtn[i].addEventListener("click", function(){
        var index = i;
        document.getElementById("mainContent").style.display = "none";
        document.getElementById("mainHead").style.display = "none";

        function infoTable(moviesJ) {

            let infoTable = `
                <div class="movieTrailer">
                    <img class="movieBg" src="./img/cinemacurtains.jpg" alt="">
                    <iframe width="443" height="274" src="${moviesJ[index].trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="movieInfo">
                    <p id="infoTitle">${moviesJ[index].movieName}</p>
                    <hr>
                    <p>Director: ${moviesJ[index].director}</p>
                    <p>Actors: ${moviesJ[index].actors}</p>
                    <p>Genre: ${moviesJ[index].genre}</p>
                    <p>Length: ${moviesJ[index].length}</p>
                    <p>Released: ${moviesJ[index].releaseDate}</p>
                    <hr>
                    <p id="infoDes">${moviesJ[index].description}</p>
                </div>
            `;
            
            return infoTable
        }
        
        document.getElementById("infos").innerHTML += infoTable(moviesJ);
    });
}
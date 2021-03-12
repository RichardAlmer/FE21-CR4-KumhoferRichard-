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

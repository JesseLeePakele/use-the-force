var oReqPeople = new XMLHttpRequest();

oReqPeople.addEventListener("load", getPeopleData);
oReqPeople.open("GET", "https://swapi.co/api/people/");
oReqPeople.send();

function getPeopleData(){
    var data = JSON.parse(this.responseText);
    for(var i = 0; i < 4; i++){
        var person = document.createElement("ul");
        person.innerHTML = data.results[i].name;
        peopleResult.appendChild(person);

        var height = document.createElement("li");
        height.innerHTML = data.results[i].height;
        peopleResult.appendChild(height);

        var mass = document.createElement("li");
        mass.innerHTML = data.results[i].mass;
        peopleResult.appendChild(mass);

        var birthyear = document.createElement("li");
        birthyear.innerHTML = data.results[i].birthyear;
        peopleResult.appendChild(birthyear);

        var gender = document.createElement("li");
        gender.innerHTML = data.results[i].gender;
        peopleResult.appendChild(gender);
    }
}

var oReqFilm = new XMLHttpRequest();

oReqFilm.addEventListener("load", getFilmData);
oReqFilm.open("GET", "https://swapi.co/api/films/");
oReqFilm.send();

function getFilmData(){
    var data = JSON.parse(this.responseText);
    for(var i = 0; i < 8; i++){
        var film = document.createElement("ul");
        film.innerHTML = data.results[i].name;
        filmsResult.appendChild(film);

        var director = document.createElement("li");
        director.innerHTML = data.results[i].director;
        filmsResult.appendChild(director);

        var episode = document.createElement("li");
        episode.innerHTML = data.results[i].episode;
        filmsResult.appendChild(episode);
    }
}

var oReqPlanet = new XMLHttpRequest();

oReqPlanet.addEventListener("load", getPlanetData);
oReqPlanet.open("GET", "https://swapi.co/api/planets/");
oReqPlanet.send();

function getPlanetData(){
    var data = JSON.parse(this.responseText);
    for(var i = 0; i < 11; i++){
        var planet = document.createElement("ul");
        planet.innerHTML = data.results[i].name;
        planetsResult.appendChild(planet);    
    }
}
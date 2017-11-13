'use strict';

var abusers = ['Janna', 'Nami', 'Karma', 'Soraka', 'Sona'];
var marked = false;

var champions = document.querySelectorAll('.ChampionBox.Ranked');
if (champions[0]) {
    var name = champions[0].querySelectorAll('.Face')[0].attributes.title.value;
    if (abusers.indexOf(name) != -1) {
        marked = true;
    }
}

if (marked) {
    document.querySelectorAll('.LeagueName')[0].innerHTML = 'Ardent Abusers';
    document.querySelectorAll('.tierRank')[0].innerHTML = document.querySelectorAll('.tierRank')[0].innerHTML.replace(/[a-zA-Z]*/, 'Ardent');
    document.querySelectorAll('.ProfileImage')[0].src = '//opgg-static.akamaized.net/images/lol/item/3504.png';
    document.querySelectorAll('.Name')[0].innerHTML = 'Egrill '.concat(document.querySelectorAll('.Name')[0].innerHTML);

    champions.forEach(function (champion) {
        champion.querySelectorAll('.ChampionImage')[0].src = '//opgg-static.akamaized.net/images/lol/item/3504.png';
        champion.querySelectorAll('.ChampionName a')[0].innerHTML = 'Ardent';
    });
}
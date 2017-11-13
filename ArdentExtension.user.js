// ==UserScript==
// @name         Egrill spotter
// @version      0.1
// @description  spot egrills on opgg
// @author       ChypRiotE
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match        http://*.op.gg/summoner/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
    /* jshint esnext: false */
    /* jshint esversion: 6 */

    const abusers = [
        'Janna',
        'Nami',
        'Karma',
        'Soraka',
        'Sona'
    ];
    let marked = false;

    let champions = document.querySelectorAll('.ChampionBox.Ranked');
    if (champions[0]) {
        let name = champions[0].querySelectorAll('.Face')[0].attributes.title.value;
        if (abusers.indexOf(name) != -1) {
            marked = true;
        }
    }

    if (marked) {
        document.querySelectorAll('.LeagueName')[0].innerHTML = 'Ardent Abusers';
        document.querySelectorAll('.tierRank')[0].innerHTML = document.querySelectorAll('.tierRank')[0].innerHTML.replace(/[a-zA-Z]*/, 'Ardent');
        document.querySelectorAll('.ProfileImage')[0].src = '//opgg-static.akamaized.net/images/lol/item/3504.png';
        document.querySelectorAll('.Name')[0].innerHTML = 'Egrill '.concat(document.querySelectorAll('.Name')[0].innerHTML);

        champions.forEach((champion) => {
            champion.querySelectorAll('.ChampionImage')[0].src = '//opgg-static.akamaized.net/images/lol/item/3504.png';
            champion.querySelectorAll('.ChampionName a')[0].innerHTML = 'Ardent';

        });
    }

/* jshint ignore:start */
]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);
/* jshint ignore:end */
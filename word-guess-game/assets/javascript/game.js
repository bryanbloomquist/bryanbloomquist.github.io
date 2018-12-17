//define the array of monsters
var monsters = [
    {name: "beholder", image: "assets/images/beholder.jpg"},
    {name: "doppleganger", image: "assets/images/doppleganger.jpg"},
    {name: "black_dragon", image: "assets/images/blackDragon.jpeg"},
    {name: "drider", image: "assets/images/drider.jpeg"},
    {name: "flumph", image: "assets/images/flumph.jpeg"},
    {name: "gelatinous_cube", image: "assets/images/GelatinousCube.jpeg"},
    {name: "githyanki", image: "assets/images/githyanki.png"},
    {name: "gnoll", image: "assets/images/gnoll.jpg"},
    {name: "mind_flayer", image: "assets/images/mindFlayer.jpg"},
    {name: "lich", image: "assets/images/lich.jpeg"},
    {name: "mimic", image: "assets/images/mimic.jpeg"},
    {name: "owlbear", image: "assets/images/owlbear.jpeg"},
    {name: "death_slaad", image: "assets/images/deathSlaad.jpg"},
    {name: "troll", image: "assets/images/troll.jpeg"},
    {name: "vampire", image: "assets/images/vampire.jpeg"},
    {name: "wraith", image: "assets/images/wraith.jpeg"},
    {name: "displacer_beast", image: "assets/images/displacerBeast.jpg"},
    {name: "drow", image: "assets/images/drow.jpg"},
    {name: "black_pudding", image: "assets/images/blackPudding.jpeg"},
    {name: "ochre_jelly", image: "assets/images/ochreJelly.jpeg"},
    {name: "red_dragon", image: "assets/images/redDragon.jpeg"},
    {name: "zombie_wyvern", image: "assets/images/zombieWyvern.jpg"},
    {name: "zombie", image: "assets/images/zombie.jpg"},
    {name: "grey_ooze", image: "assets/images/greyOoze.jpg"},
    {name: "tarrasque", image: "assets/images/tarrasque.jpeg"},
    {name: "rust_monster", image: "assets/images/rustMonster.jpeg"},
    {name: "hill_giant", image: "assets/images/hillGiant.jpeg"},
    {name: "frost_giant", image: "assets/images/frostGiant.jpeg"},
    {name: "kuo_toa", image: "assets/images/kuotoa.jpg"},
    {name: "yuan_ti", image: "assets/images/yuanti.jpg"},
    {name: "umber_hulk", image: "assets/images/umberHulk.jpg"},
    {name: "kobold", image: "assets/images/kobold.jpeg"},
    {name: "aboleth", image: "assets/images/aboleth.jpeg"},
    {name: "animated_armor", image: "assets/images/animatedArmor.jpg"},
    {name: "banshee", image: "assets/images/banshee.jpeg"},
    {name: "basilisk", image: "assets/images/basilisk.jpeg"},
    {name: "behir", image: "assets/images/behir.jpeg"},
    {name: "spectator", image: "assets/images/spectator.png"},
    {name: "death_tyrant", image: "assets/images/deathTyrant.jpg"},
    {name: "vine_blight", image: "assets/images/vineBlight.jpg"},
    {name: "bugbear", image: "assets/images/bugbear.jpeg"},
    {name: "bulette", image: "assets/images/bulette.jpg"},
    {name: "bullywug", image: "assets/images/bullywug.jpg"},
    {name: "cambion", image: "assets/images/cambion.jpg"},
    {name: "carrion_crawler", image: "assets/images/carrionCrawler.jpg"},
    {name: "centaur", image: "assets/images/centaur.jpg"},
    {name: "chimera", image: "assets/images/chimera.jpeg"},
    {name: "chuul", image: "assets/images/chuul.jpg"},
    {name: "cockatrice", image: "assets/images/cockatrice.jpg"},
    {name: "cyclops", image: "assets/images/cyclops.jpg"},
    {name: "death_knight", image: "assets/images/deathKnight.jpeg"},
    {name: "demilich", image: "assets/images/demilich.jpg"},
    {name: "balor", image: "assets/images/balor.jpeg"},
    {name: "barlgura", image: "assets/images/barlgura.png"},
    {name: "glabrezu", image: "assets/images/glabrezu.jpeg"},
    {name: "marilith", image: "assets/images/marilith.jpeg"},
    {name: "nalfeshnee", image: "assets/images/nalfeshnee.jpg"},
    {name: "quasit", image: "assets/images/quasit.jpeg"},
    {name: "yochlol", image: "assets/images/yochlol.jpg"},
    {name: "pit_fiend", image: "assets/images/pitFiend.jpeg"},
    {name: "dracolich", image: "assets/images/dracolich.jpeg"},
    {name: "flameskull", image: "assets/images/flameskull.png"},
    {name: "ghast", image: "assets/images/ghast.jpeg"},
    {name: "gibbering_mouther", image: "assets/images/gibberingMouther.jpeg"},
    {name: "svirfneblin", image: "assets/images/svirfneblin.jpeg"},
    {name: "flesh_golem", image: "assets/images/fleshGolem.jpeg"},
    {name: "gorgon", image: "assets/images/gorgon.jpg"},
    {name: "grell", image: "assets/images/grell.jpg"},
    {name: "grick", image: "assets/images/grick.jpg"},
    {name: "griffon", image: "assets/images/griffon.jpeg"},
    {name: "hell_hound", image: "assets/images/hellHound.jpg"},
    {name: "helmed_horror", image: "assets/images/helmedHorror.jpg"},
    {name: "hippogriff", image: "assets/images/hippogriff.jpeg"},
    {name: "homunculus", image: "assets/images/homunculus.jpeg"},
    {name: "hook_horror", image: "assets/images/hookHorror.jpg"},
    {name: "hydra", image: "assets/images/hydra.jpeg"},
    {name: "intellect_devourer", image: "assets/images/intellectDevourer.jpg"},
    {name: "kenku", image: "assets/images/kenku.jpg"},
    {name: "weretiger", image: "assets/images/weretiger.jpeg"},
    {name: "manticore", image: "assets/images/manticore.jpg"},
    {name: "medusa", image: "assets/images/medusa.jpeg"},
    {name: "mummy", image: "assets/images/mummy.jpg"},
    {name: "myconid", image: "assets/images/myconid.png"},
    {name: "spirit_naga", image: "assets/images/spiritNaga.jpg"},
    {name: "bone_naga", image: "assets/images/nagaBone.jpg"},
    {name: "nothic", image: "assets/images/nothic.jpg"},
    {name: "orc_war_chief", image: "assets/images/orc.jpg"},
    {name: "otyugh", image: "assets/images/otyugh.jpeg"},
    {name: "purple_worm", image: "assets/images/purpleWorm.jpeg"},
    {name: "quaggoth", image: "assets/images/quaggoth.jpg"},
    {name: "scarecrow", image: "assets/images/scarecrow.jpg"},
    {name: "shambling_mound", image: "assets/images/shamblingMound.jpeg"},
    {name: "minotaur_skeleton", image: "assets/images/minotaurSkeleton.jpeg"},
    {name: "treant", image: "assets/images/treant.jpeg"},
    {name: "troglodyte", image: "assets/images/troglodyte.jpg"},
    {name: "water_weird", image: "assets/images/waterWeird.jpg"},
    {name: "wight", image: "assets/images/wight.jpeg"},
    {name: "xorn", image: "assets/images/xorn.jpeg"},
    {name: "beholder_zombie", image: "assets/images/beholderZombie.jpeg"},
    {name: "yeti", image: "assets/images/yeti.jpg"},
]



//set the initial variables for the game
var level = 1;
var health = 10;
var guessesRemaining = 10;
var lettersUsed = [">"];
var answerArray = [];
var currentOpacity = 0;
var randomNumber = Math.floor(Math.random()*monsters.length);
var word = monsters[randomNumber].name;
var currentImage = monsters[randomNumber].image;



//set the game function
function game() {
    randomNumber = Math.floor(Math.random()*monsters.length);
    word = monsters[randomNumber].name;
    currentImage = monsters[randomNumber].image;
        console.log(word);
    //seperate random word into new array
    guessWord = word.split("");
        console.log(guessWord);
    //create __ for each letter in array
    for (var i = 0; i < guessWord.length; i++) {
        answerArray.push("_");
    }
    //display the word to be guessed in html
    document.getElementById("wordSpan").innerHTML = answerArray.join(" ");
    document.getElementById("monsterImage").src = currentImage;
}



//set the reset function
function reset () {
    guessesRemaining = 10;
    monsterImage.style.opacity = 0;
    lettersUsed = [">"];
    answerArray = [];
    currentOpacity = 0;
    game ();
}



//check the users guess with the words in the array
function checkGuess (letter) {
    var letterMatch = false;
    for (var i=0; i < guessWord.length; i++) {
        if (guessWord[i]===letter) {
            letterMatch = true;
        }
    }
    //if their guess is in the word
    if (letterMatch) {
        for (var i=0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                answerArray[i]=letter;
                currentOpacity += .02;
                monsterImage.style.opacity = currentOpacity;
            }
        }
    } 
    //if their guess is not in the word
    else {
        currentOpacity += .05;
        monsterImage.style.opacity = currentOpacity;
        lettersUsed.push(letter);
        guessesRemaining--;
    }
    console.log(currentOpacity);
}



//check if the user won the game
function gameWin () {
    //if they won
    if (guessWord.toString() === answerArray.toString ()) {
        document.getElementById("adventure-log").innerHTML = "You defeated the "+word+"!<br>You gained 1 Exp Level.<br>";
        level++;
        document.getElementById("expLevel").innerHTML = +level;
        reset();
    //if they lost but have more than 1 hit point remaining
    } else if (guessesRemaining === 0 && health > 1) {
        document.getElementById("adventure-log").innerHTML = "The "+word+" hit you!<br>You lost 1 Hit Point.";
        health--;
        document.getElementById("healthPoints").innerHTML = +health;
        reset ();
    // if they lost but have only 1 hit point
    } else if (guessesRemaining === 0 && health === 1) {
        health--;
        document.getElementById("healthPoints").innerHTML = +health;
        document.getElementById("logo").src="assets/images/youdied.png";
        document.getElementById("gameover").innerHTML = "Refresh Your Browser To Play Again.";
    //if they neither won nor lost and the game continues
    }
    document.getElementById("wordSpan").innerHTML = " "+answerArray.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}



//run the game
game ();



//get the users guess
document.onkeyup = function(event) {
    var guess = event.key;
    guess = guess.toLowerCase();
        console.log(guess);
    checkGuess(guess);
    gameWin();
    document.getElementById("lettersGuessed").innerHTML = " " + lettersUsed.join("  ");
}
//define the array of monsters
var monsters = [
    { name: "aboleth", image: "assets/images/aboleth.jpeg" },
    { name: "animated_armor", image: "assets/images/animatedArmor.jpg" },
    { name: "balor", image: "assets/images/balor.jpeg" },
    { name: "banshee", image: "assets/images/banshee.jpeg" },
    { name: "barlgura", image: "assets/images/barlgura.png" },
    { name: "basilisk", image: "assets/images/basilisk.jpeg" },
    { name: "behir", image: "assets/images/behir.jpeg" },
    { name: "beholder", image: "assets/images/beholder.jpg" },
    { name: "beholder_zombie", image: "assets/images/beholderZombie.jpg" },
    { name: "black_dragon", image: "assets/images/blackDragon.jpeg" },
    { name: "black_pudding", image: "assets/images/blackPudding.jpeg" },
    { name: "bone_naga", image: "assets/images/boneNaga.jpg" },
    { name: "bugbear", image: "assets/images/bugbear.jpeg" },
    { name: "bulette", image: "assets/images/bulette.jpg" },
    { name: "bullywug", image: "assets/images/bullywug.jpg" },
    { name: "cambion", image: "assets/images/cambion.jpg" },
    { name: "carrion_crawler", image: "assets/images/carrionCrawler.jpg" },
    { name: "centaur", image: "assets/images/centaur.jpg" },
    { name: "chimera", image: "assets/images/chimera.jpeg" },
    { name: "chuul", image: "assets/images/chuul.jpg" },
    { name: "cockatrice", image: "assets/images/cockatrice.jpg" },
    { name: "cyclops", image: "assets/images/cyclops.jpg" },
    { name: "death_knight", image: "assets/images/deathKnight.jpeg" },
    { name: "death_slaad", image: "assets/images/deathSlaad.jpg" },
    { name: "death_tyrant", image: "assets/images/deathTyrant.jpg" },
    { name: "demilich", image: "assets/images/demilich.jpg" },
    { name: "displacer_beast", image: "assets/images/displacerBeast.jpg" },
    { name: "doppleganger", image: "assets/images/doppleganger.jpg" },
    { name: "dracolich", image: "assets/images/dracolich.jpeg" },
    { name: "drider", image: "assets/images/drider.jpeg" },
    { name: "drow", image: "assets/images/drow.jpg" },
    { name: "flameskull", image: "assets/images/flameskull.png" },
    { name: "flesh_golem", image: "assets/images/fleshGolem.jpeg" },
    { name: "flumph", image: "assets/images/flumph.jpeg" },
    { name: "frost_giant", image: "assets/images/frostGiant.jpeg" },
    { name: "gelatinous_cube", image: "assets/images/GelatinousCube.jpeg" },
    { name: "ghast", image: "assets/images/ghast.jpeg" },
    { name: "gibbering_mouther", image: "assets/images/gibberingMouther.jpeg" },
    { name: "githyanki", image: "assets/images/githyanki.png" },
    { name: "glabrezu", image: "assets/images/glabrezu.jpeg" },
    { name: "gnoll", image: "assets/images/gnoll.jpg" },
    { name: "gorgon", image: "assets/images/gorgon.jpg" },
    { name: "grell", image: "assets/images/grell.jpg" },
    { name: "grey_ooze", image: "assets/images/greyOoze.jpg" },
    { name: "grick", image: "assets/images/grick.jpg" },
    { name: "griffon", image: "assets/images/griffon.jpeg" },
    { name: "hell_hound", image: "assets/images/hellHound.jpg" },
    { name: "helmed_horror", image: "assets/images/helmedHorror.jpg" },
    { name: "hill_giant", image: "assets/images/hillGiant.jpeg" },
    { name: "hippogriff", image: "assets/images/hippogriff.jpeg" },
    { name: "homunculus", image: "assets/images/homunculus.jpeg" },
    { name: "hook_horror", image: "assets/images/hookHorror.jpg" },
    { name: "hydra", image: "assets/images/hydra.jpeg" },
    { name: "intellect_devourer", image: "assets/images/intellectDevourer.jpg" },
    { name: "kenku", image: "assets/images/kenku.jpg" },
    { name: "kobold", image: "assets/images/kobold.jpeg" },
    { name: "kuo_toa", image: "assets/images/kuotoa.jpg" },
    { name: "lich", image: "assets/images/lich.jpeg" },
    { name: "manticore", image: "assets/images/manticore.jpg" },
    { name: "marilith", image: "assets/images/marilith.jpeg" },
    { name: "medusa", image: "assets/images/medusa.jpeg" },
    { name: "mimic", image: "assets/images/mimic.jpeg" },
    { name: "mind_flayer", image: "assets/images/mindFlayer.jpg" },
    { name: "minotaur_skeleton", image: "assets/images/minotaurSkeleton.jpeg" },
    { name: "mummy", image: "assets/images/mummy.jpg" },
    { name: "myconid", image: "assets/images/myconid.png" },
    { name: "nalfeshnee", image: "assets/images/nalfeshnee.jpg" },
    { name: "nothic", image: "assets/images/nothic.jpg" },
    { name: "ochre_jelly", image: "assets/images/ochreJelly.jpeg" },
    { name: "orc_war_chief", image: "assets/images/orc.jpg" },
    { name: "otyugh", image: "assets/images/otyugh.jpeg" },
    { name: "owlbear", image: "assets/images/owlbear.jpeg" },
    { name: "pit_fiend", image: "assets/images/pitFiend.jpeg" },
    { name: "purple_worm", image: "assets/images/purpleWorm.jpeg" },
    { name: "quaggoth", image: "assets/images/quaggoth.jpg" },
    { name: "quasit", image: "assets/images/quasit.jpeg" },
    { name: "red_dragon", image: "assets/images/redDragon.jpeg" },
    { name: "rust_monster", image: "assets/images/rustMonster.jpeg" },
    { name: "scarecrow", image: "assets/images/scarecrow.jpg" },
    { name: "shambling_mound", image: "assets/images/shamblingMound.jpeg" },
    { name: "spectator", image: "assets/images/spectator.png" },
    { name: "spirit_naga", image: "assets/images/spiritNaga.jpg" },
    { name: "svirfneblin", image: "assets/images/svirfneblin.jpeg" },
    { name: "tarrasque", image: "assets/images/tarrasque.jpeg" },
    { name: "treant", image: "assets/images/treant.jpeg" },
    { name: "troglodyte", image: "assets/images/troglodyte.jpg" },
    { name: "troll", image: "assets/images/troll.jpeg" },
    { name: "umber_hulk", image: "assets/images/umberHulk.jpg" },
    { name: "vampire", image: "assets/images/vampire.jpeg" },
    { name: "vine_blight", image: "assets/images/vineBlight.jpg" },
    { name: "water_weird", image: "assets/images/waterWeird.jpg" },
    { name: "weretiger", image: "assets/images/weretiger.jpeg" },
    { name: "wight", image: "assets/images/wight.jpeg" },
    { name: "wraith", image: "assets/images/wraith.jpeg" },
    { name: "xorn", image: "assets/images/xorn.jpeg" },
    { name: "yeti", image: "assets/images/yeti.jpg" },
    { name: "yochlol", image: "assets/images/yochlol.jpg" },
    { name: "yuan_ti", image: "assets/images/yuanti.jpg" },
    { name: "zombie", image: "assets/images/zombie.jpeg" },
    { name: "zombie_wyvern", image: "assets/images/zombieWyvern.jpg" },
]



//define valid keys for guesses
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



//set the initial variables for the games
var wins = 0;
var losses = 0;
var level = 1;
var health = 10;
var guessesRemaining = 10;
var lettersUsed = [">"];
var answerArray = [];
var currentOpacity = 0;
var randomNumber = Math.floor(Math.random() * monsters.length);
var word = monsters[randomNumber].name;
var currentImage = monsters[randomNumber].image;



function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array [randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
monsters = shuffle(monsters);


//set the game function
function game() {
    var x = wins + losses;
    word = monsters[x].name;
    currentImage = monsters[x].image;
    //seperate random word into new array
    guessWord = word.split("");
    //create __ for each letter in array
    for (var i = 0; i < guessWord.length; i++) {
        answerArray.push("_");
    }
    //display the word to be guessed in html
    document.getElementById("wordSpan").innerHTML = answerArray.join(" ");
    document.getElementById("monsterImage").src = currentImage;
}



//set the reset function
function reset() {
    guessesRemaining = 10;
    monsterImage.style.opacity = 0;
    lettersUsed = [">"];
    answerArray = [];
    currentOpacity = 0;
    game();
}



//check the users guess with the words in the array
function checkGuess(letter) {
    var letterMatch = false;
    for (var i = 0; i < guessWord.length; i++) {
        if (guessWord[i] === letter) {
            letterMatch = true;
        }
    }
    //if their guess is in the word
    if (letterMatch) {
        for (var i = 0; i < guessWord.length; i++) {
            if (guessWord[i] == letter) {
                answerArray[i] = letter;
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
}



//check if the user won the game
function gameWin() {
    var y = wins + losses;
    //if they won
    if (guessWord.toString() === answerArray.toString() && y < monsters.length-1) {
        document.getElementById("adventure-log").innerHTML = "You defeated the " + word + "!<br>You gained 1 Exp Level.<br>";
        var audio = document.createElement("audio");
        audio.setAttribute("src", "assets/victorybyte.wav");
        audio.play();
        level++;
        wins++;
        document.getElementById("expLevel").innerHTML = +level;
        reset();
        //if they lost but have more than 1 hit point remaining
    } else if (guessesRemaining === 0 && health > 1) {
        document.getElementById("adventure-log").innerHTML = "The " + word + " hit you!<br>You lost 1 Hit Point.";
        var audio = document.createElement("audio");
        audio.setAttribute("src", "assets/wilhelmscream.wav");
        audio.play();
        health--;
        losses++;
        document.getElementById("healthPoints").innerHTML = +health;
        reset();
        //if they won and they cleared the whole array
    } else if (guessWord.toString() === answerArray.toString() && y === monsters.length-1) {
        var audio = document.createElement("audio");
        audio.setAttribute("src", "assets/gamewin.wav");
        audio.play();
        level++;
        wins++;
        document.getElementById("expLevel").innerHTML = +level;
        currentOpacity =1;
        monsterImage.style.opacity = currentOpacity;
        document.getElementById("logo").src = "assets/images/youwon.png";
        document.getElementById("monsterImage").src = "assets/images/critwin.jpg";
        document.getElementById("gameover").innerHTML = "Refresh Your Browser To Play Again.";
        document.getElementById("adventure-log").innerHTML = "You Won All Of D&D! <br> Refresh Your Broswer To Play Again.";
         // if they lost but have only 1 hit point
    } else if (guessesRemaining === 0 && health === 1) {
        health--;
        document.getElementById("healthPoints").innerHTML = +health;
        document.getElementById("logo").src = "assets/images/youdied.png";
        document.getElementById("monsterImage").src = "assets/images/critFail.jpg";
        document.getElementById("gameover").innerHTML = "Refresh Your Browser To Play Again.";
        document.getElementById("adventure-log").innerHTML = "You Died! <br> Refresh Your Broswer To Play Again.";
        var audio = document.createElement("audio");
        audio.setAttribute("src", "assets/wilhelmscream.wav");
        audio.play();
        //if they neither won nor lost and the game continues
    }
    document.getElementById("wordSpan").innerHTML = " " + answerArray.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
}



//run the game
game();



//get the users guess
document.onkeyup = function (event) {
    var guess = event.key;
    guess = guess.toLowerCase();
    if (alphabet.includes(guess)) {
        console.log(guess);
        checkGuess(guess);
        gameWin();
        document.getElementById("lettersGuessed").innerHTML = " " + lettersUsed.join("  ");
    } else { }
}
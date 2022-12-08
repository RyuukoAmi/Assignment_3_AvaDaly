// variable set up
// pokemon go damage calculator [o.5xpowerx(attack/defence)]+1
//Array order: health, active health, attack, defense, move1, mv1power, mv1pp, move2, mv2power, mv2pp, move3, mv3power mv3pp, move4, mv4pover, mv4pp, 
//moves are baces on gen 7, via bulbapedia



// I wrote this in origional js because I understood it better and wanted to eliminate potential problems upfrount. started to move it into JQueary, didnt finish it though. it does work with the both which is nice. Jqueary helped make some of my functions smaller for sure.

// I wrote a version of this in compsci, it is included in the notes folder. essentialy I took the js and gave it visuals. I hope its okay that I reused my old work, I enjoyed revisiting it.




var playername
var enemyname
var playerPokemon1
var playerPokemon2
var playerPokemon3
var enemyPokemon1 
var enemyPokemon2 
var enemyPokemon3 
var activeEnemypokemon = enemyPokemon1
var activePlayerPokemon
var activeEnemypokemonFainted
var activePlayerPokemonFainted

var userHealthPotions = 3
var userEnhancPotions = 3
var enemyHealthPoitons = 3
var enemyEnhancPotions = 3
// pokemon array list order:
var venusaur =  {"name": "Venusaur", "hp":80, "activeHP":80,"atk":82,"def":83,"move1":['Vine Whip',45,25],"move2":['Razor Leaf',55,25],"move3":['Tackle',40,35],"move4":['Growl',0,20]}
var charizard = {"name": "Charizard","hp":78,"activeHP":78,"atk":84,"def":78,"move1":['Wing Attack',60,35],"move2":['Flamethrower',90,40],"move3":['Ember',40,25],"move4":['Headbutt',70,15]}
var blastoise = {"name": "Blastoise","hp":79,"activeHP":79,"atk":83,"def":100,"move1":['Water Gun',40,25],"move2":['Bubble',40,30],"move3":['Headbutt',70,15],"move4":['Bite',60,25]}
var pidgeot =   {"name": "Pidgeot","hp":83,"activeHP":83,"atk":80,"def":75,"move1":['Wing Attack',60,35],"move2":['Quick Attack',40,30],"move3":['Tackle',40,35],"move4":['Headbutt',70,15]}
var magikarp =  {"name": "Magikarp","hp":20,"activeHP":20,"atk":10,"def":55,"move1":['splash',null,40],"move2":['Tackle',40,35],"move3":['Flail',null,15],"move4":[null,10000,null]}
var ninetails = {"name": "Ninetails","hp":73,"activeHP":73,"atk":76,"def":75,"move1":['Quick Attack',40,30],"move2":['Ember',40,25],"move3":['Tackle',40,35],"move4":['Tail Whip',null,30]}
var raichu =    {"name": "Raichu","hp":60,"activeHP":60,"atk":90,"def":55,"move1":['Thunder Punch',75,15],"move2":['Fake Out',40,10],"move3":['Quick Attack',40,30],"move4":['Tail Whip',null,30]}
var snorlax =   {"name": "Snorlax","hp":160,"activeHP":160,"atk":110,"def":65,"move1":['Tackle',40,35],"move2":['Lick',30,30],"move3":['Headbutt',70,15],"move4":['Body Slam',85,15,]}


const assignGif = (activepokemon, ifplayer)=>{
	console.log('assignGif')
    var imgHTML = '<img id="' + ifplayer.toLowerCase() + 'SpriteImg" src="assets/' + activepokemon +  ifplayer +'.gif"></img>'
    var idContruct = '#'+ ifplayer.toLowerCase() + 'Sprite'
    console.log('imgHTML = ' + imgHTML)
    console.log('idconst = ' + idContruct)
    $(idContruct).html(imgHTML);
		console.log('end assignGif')
}

const numberRangeModifier = (min, max) =>{
  var additive = Math.floor(Math.random()*(max-min))+min;
  console.log(`random ${additive}`);
  return additive;
};
const assignEnemyPokemon =(pokemon)=>{
	var enemypok = 'enemypokemon'+ pokemon
	var enemyrandom = numberRangeModifier(1,8)
	console.log(enemypok + ":"+enemyrandom)
	switch (enemyrandom) {
		case 1:
			 enemypok = venusaur;
			 return enemypok
		break;
		case 2:
			 enemypok = charizard;
			 return enemypok
		break;
		case 3:
			 enemypok = blastoise;//fine
			 return enemypok
		break;
		case 4:
			 enemypok = pidgeot;
			 return enemypok
		break;
		case 5:
			 enemypok = magikarp;
			 return enemypok
		break;
		case 6:
			 enemypok = ninetails;
			 return enemypok
		break;
		case 7:
			 enemypok = raichu;
			 return enemypok
		break;
		case 8:
			 enemypok = snorlax;
			 return enemypok
		break;}
		console.log(enemypok)
}

function assignArray(pokeChoice){
	// console.log(pokeChoice);
	switch (pokeChoice) {
		case 'venusaur':
			var pokeArray = venusaur;
		break;
		case 'charizard':
			var pokeArray = charizard;
		break;
		case 'blastoise':
			var pokeArray = blastoise;
		break;
		case 'pidgeot':
			var pokeArray = pidgeot;
		break;
		case 'magikarp':
			var pokeArray = magikarp;
		break;
		case 'ninetails':
			var pokeArray = ninetails;
		break;
		case 'raichu':
			var pokeArray = raichu;
		break;
		case 'snorlax':
			var pokeArray = snorlax;
		break;
	}
	// console.log(`PokeArray: ${pokeArray}`)
	return pokeArray;
}

function validatePokemonForm (){
	playername = document.forms["pokemonselection"]["pname"].value;
	enemyname = document.forms["pokemonselection"]["ename"].value;
	playerPokemon1 = document.forms["pokemonselection"]["pokemon1"].value;
	playerPokemon2 = document.forms["pokemonselection"]["pokemon2"].value;
	playerPokemon3 = document.forms["pokemonselection"]["pokemon3"].value;
	playername == '' ? playername = 'Blue' : console.log('player name filled');
	enemyname == '' ? enemyname = 'Red' : console.log('enemy name filled');

	enemyPokemon1 = assignEnemyPokemon(1);
	enemyPokemon2 = assignEnemyPokemon(2);
	enemyPokemon3 = assignEnemyPokemon(3);

	playerPokemon1 = assignArray(playerPokemon1);
	playerPokemon2 = assignArray(playerPokemon2);
	playerPokemon3 = assignArray(playerPokemon3);
	activePlayerPokemon = playerPokemon1
	activeEnemypokemon = enemyPokemon1	

	console.log(`playername = ${playername}`);
	console.log(`enemyname = ${enemyname}`);
	console.log(`playerPokemon1 = ${playerPokemon1}`);
	console.log(`playerPokemon2 = ${playerPokemon2}`);
	console.log(`playerPokemon3 = ${playerPokemon3}`);
	console.log(`playerPokemon1 = ${playerPokemon1['name']}`);
	console.log(`playerPokemon2 = ${playerPokemon2['name']}`);
	console.log(`playerPokemon3 = ${playerPokemon3['name']}`);
	console.log(`enemyPokemon1 = ${enemyPokemon1}`)
	console.log(`enemyPokemon1 = ${enemyPokemon1['name']}`);
	console.log(`enemyPokemon2 = ${enemyPokemon2['name']}`);
	console.log(`enemyPokemon3 = ${enemyPokemon3['name']}`);
	console.log(`activeEnemypokemon = ${activeEnemypokemon}`);
    $("#firstForms").css('display', 'none')
	//document.getElementById("firstForms").style.display = "none" ;
	assignGif(activePlayerPokemon["name"], 'Player');
	assignGif(activeEnemypokemon["name"], 'Enemy');
	setTimeout(roundstart, 500);
	
}

const roundstart =()=>{
	console.log('round start')
	document.getElementById("alertBoxText").innerHTML = "The battle has begun!" ;
	setTimeout(userRound, 500);
}

const userRound =()=>{
	console.log('userRound')
	document.getElementById("enemyHealthBarText").innerHTML =`${activeEnemypokemon["name"]} ${activeEnemypokemon["activeHP"]}/${activeEnemypokemon["hp"]}hp`
	document.getElementById("playerHealthBarText").innerHTML =`${activePlayerPokemon["name"]} ${activePlayerPokemon["activeHP"]}/${activePlayerPokemon["hp"]}hp`
	document.getElementById("alertBoxText").innerHTML =`It\'s your turn!\n${activePlayerPokemon["name"]} has ${activePlayerPokemon["activeHP"]} HP. ${activeEnemypokemon["name"]} has ${activeEnemypokemon["activeHP"]} HP.\n What would you like to do?`;
	document.getElementById("button1").setAttribute("onclick", "userFightMenu()");
	document.getElementById("button1").innerHTML='Fight';
	document.getElementById("button2").setAttribute("onclick", "userRun()");
	document.getElementById("button2").innerHTML='Run';
	document.getElementById("button3").setAttribute("onclick", "userBag()");
	document.getElementById("button3").innerHTML='Bag';
	document.getElementById("button4").setAttribute("onclick", "userPokemonSwitchMenu(false)");
	document.getElementById("button4").innerHTML='Pokemon';
}

const userFightMenu =()=>{
	console.log('userFightMenu')
	document.getElementById("button1").setAttribute("onclick", "userFight('move1')");
	document.getElementById("button1").innerHTML=activePlayerPokemon["move1"][0];
	document.getElementById("button2").setAttribute("onclick", "userFight('move2')");
	document.getElementById("button2").innerHTML=activePlayerPokemon['move2'][0];
	document.getElementById("button3").setAttribute("onclick", "userFight('move3')");
	document.getElementById("button3").innerHTML= activePlayerPokemon['move3'][0];
	document.getElementById("button4").setAttribute("onclick", "userFight('move4')");
	document.getElementById("button4").innerHTML=activePlayerPokemon["move4"][0];
}

function userFight(moveNumber){
	console.log(`userFight ${moveNumber}`)
	document.getElementById("button1").setAttribute("onclick", "");
	document.getElementById("button2").setAttribute("onclick", "");
	document.getElementById("button3").setAttribute("onclick", "");
	document.getElementById("button4").setAttribute("onclick", "");
	// pokemon go damage calculator [o.5xpowerx(attack/defence)]+1
	var movepower = activePlayerPokemon[moveNumber][1]
	var playerattack = activePlayerPokemon['atk']
	var enemyDefence = activeEnemypokemon['def']
	console.log(`movepower ${movepower}`)
	console.log(`atk ${playerattack}`)
	console.log(`def ${enemyDefence}`)
	var damage = Math.round((0.5*movepower*(playerattack/enemyDefence))+1)
	console.log(` damage =${damage}`)
	document.getElementById("alertBoxText").innerHTML =`${activePlayerPokemon["name"]} used ${activePlayerPokemon[moveNumber][0]}!`;
	setTimeout(()=>{document.getElementById("alertBoxText").innerHTML =`${activePlayerPokemon["name"]} did ${damage} damage!`;}, 2000);
	setTimeout(enemyTakeDamage(damage), 500)

}
const enemyTakeDamage=(damageDelt)=>{
	activeEnemypokemon['activeHP'] -= damageDelt;
	if (activeEnemypokemon['activeHP']<0){activeEnemypokemon['activeHP']=0};
	console.log(`${activeEnemypokemon['activeHP']} ${activeEnemypokemon['hp']}`)
	var healthpercent = Math.round((activeEnemypokemon['activeHP']/activeEnemypokemon['hp'])*100)
	console.log(`healthpercent = ${healthpercent}`)
	document.getElementById("enemyHealthBarProgress").style.width = healthpercent + '%';
	if (document.getElementById("enemyHealthBarProgress").style.width== '0%'){
		document.getElementById("enemyHealthBarProgress").style.display ='none';
	};
	setTimeout(()=>{ document.getElementById("enemyHealthBarText").innerHTML =`${activeEnemypokemon["name"]} ${activeEnemypokemon["activeHP"]}/${activeEnemypokemon["hp"]}hp`;}, 1000);
 	if (activeEnemypokemon['activeHP']==0) {document.getElementById("alertBoxText").innerHTML =`${activeEnemypokemon['name']} fainted!`;
	activeEnemypokemonFainted = true; enemySwitchPokemon()}else{
	setTimeout(enemyDoDamage, 4000);	
	}
	

}
const enemyDoDamage=()=>{
	console.log('enemy do damage')
	if (activeEnemypokemonFainted){console.log('enemy fainted')}
document.getElementById("alertBoxText").innerHTML =`It is your oponents turn.`
  console.log(`enemy health${activeEnemypokemon['activeHP']}`)
    	var moveNumber = 'move' + numberRangeModifier(1,3); 
    	console.log(`move = ${moveNumber}`)
	    var movepower = activeEnemypokemon[moveNumber][1]
		var enemyattack = activeEnemypokemon['atk'];
		var playerDefence = activePlayerPokemon['def']
		console.log(`movepower ${movepower}`);
		console.log(`atk ${enemyattack}`);
		console.log(`def ${playerDefence}`);
		var damage = Math.round((0.5*movepower*(enemyattack/playerDefence))+1)
		console.log(` damage = ${damage}`)
		document.getElementById("alertBoxText").innerHTML =`${activeEnemypokemon["name"]} used ${activeEnemypokemon[moveNumber][0]}!`;
		setTimeout(()=>{document.getElementById("alertBoxText").innerHTML =`${activeEnemypokemon["name"]} did ${damage} damage!`;}, 800);
		console.log(`enemy health ${activeEnemypokemon['activeHP']}`);
		setTimeout(()=>{playerTakeDamage(damage);}, 2000);
}

const playerTakeDamage=(damageDelt)=>{
	activePlayerPokemon['activeHP'] -= damageDelt;
	if (activePlayerPokemon['activeHP']<0){activePlayerPokemon['activeHP']=0};
	console.log(`${activePlayerPokemon['activeHP']} ${activePlayerPokemon['hp']}`);
	var healthpercent = Math.round((activePlayerPokemon['activeHP']/activePlayerPokemon['hp'])*100);
	console.log(`healthpercent = ${healthpercent}`);
	document.getElementById("playerHealthBarProgress").style.width = healthpercent + '%';
	if (document.getElementById("playerHealthBarProgress").style.width== '0%'){
		document.getElementById("playerHealthBarProgress").style.display ='none';
	};
	document.getElementById("playerHealthBarText").innerHTML =`${activePlayerPokemon["name"]} ${activePlayerPokemon["activeHP"]}/${activePlayerPokemon["hp"]}hp`;

 	if (activePlayerPokemon['activeHP']== 0) {
 		document.getElementById("alertBoxText").innerHTML =`${activeEnemypokemon['name']} fainted!`;
		activePlayerPokemonFainted = true;
		setTimeout(userPokemonSwitchMenu(true), 2500);
	}else{
		setTimeout(userRound,4000);	
	};
	
}

const enemySwitchPokemon =()=> {
	if (activeEnemypokemonFainted) {
		switch (activeEnemypokemon["name"]){
			case enemyPokemon1['name']:
				activeEnemypokemon = enemyPokemon2
				// enemyPokemon1 = null
				var healthpercent = Math.round((activeEnemypokemon['activeHP']/activeEnemypokemon['hp'])*100)
				console.log(`healthpercent = ${healthpercent}`)
                $("#enemyHealthBarProgress").css(width, healthpercent + '%')
				// document.getElementById("enemyHealthBarProgress").style.width = healthpercent + '%';
				document.getElementById("enemyHealthBarProgress").style.display ='block'
				assignGif(activeEnemypokemon['name'], 'Enemy')
				setTimeout(enemyDoDamage, 4000);
			break;
			case enemyPokemon2["name"]:
				activeEnemypokemon = enemyPokemon3
				// enemyPokemon2 = null
				var healthpercent = Math.round((activeEnemypokemon['activeHP']/activeEnemypokemon['hp'])*100)
				console.log(`healthpercent = ${healthpercent}`)
				document.getElementById("enemyHealthBarProgress").style.width = healthpercent + '%';
				document.getElementById("enemyHealthBarProgress").style.display ='block'
				assignGif(activeEnemypokemon['name'], 'Enemy')
				setTimeout(enemyDoDamage, 4000);
			break;
			case enemyPokemon3["name"]:
				// activeEnemypokemon = null
				// enemyPokemon3 = null
				playerWin()
			break;
		}
	} else {console.log('no')}
}

const playerWin=()=>{
	console.log('playerwin')
}
const userBag =()=>{
	console.log('userBag')
	document.getElementById("button1").setAttribute("onclick", "");
	document.getElementById("button2").setAttribute("onclick", "");
	document.getElementById("button3").setAttribute("onclick", "");
	document.getElementById("button4").setAttribute("onclick", "");
	document.getElementById("alertBoxText").innerHTML =`you don't have anything in your bag!`;
	setTimeout(userRound, 1500);
}

const userPokemonSwitchMenu=(forced)=>{
	console.log('userPokemonSwitch')
	document.getElementById("alertBoxText").innerHTML =`who do you want to switch to?`;
	document.getElementById("button1").setAttribute("onclick", "userSwitchPokemon(1)");
	document.getElementById("button1").innerHTML=playerPokemon1['name'];
	document.getElementById("button2").setAttribute("onclick", "userSwitchPokemon(2)");
	document.getElementById("button2").innerHTML=playerPokemon2['name'];
	document.getElementById("button3").setAttribute("onclick", "userSwitchPokemon(3)");
	document.getElementById("button3").innerHTML= playerPokemon3['name'];
	if (forced){
		document.getElementById("button4").setAttribute('onclick', '');
		document.getElementById("button4").innerHTML= "";
	}else{
		document.getElementById("button4").setAttribute("onclick", "userRound()");
		document.getElementById("button4").innerHTML= "back";
	};
}

function userSwitchPokemon(pokevar){
	document.getElementById("button1").setAttribute("onclick", "");
	document.getElementById("button2").setAttribute("onclick", "");
	document.getElementById("button3").setAttribute("onclick", "");
	document.getElementById("button4").setAttribute("onclick", "");
  if(activePlayerPokemon['activeHP']== 0 ){
     
  }
	console.log(`pokevar = ${pokevar}`);
	var pokeholder = activePlayerPokemon
	switch(activePlayerPokemon['name']){
		case playerPokemon1['name']:
			playerPokemon1 = pokeholder;
			break;
		case playerPokemon2['name']:
			playerPokemon2 = pokeholder;
			break;
		case playerPokemon3['name']:
			playerPokemon3 = pokeholder;
			break;
	}
	console.log(`pokeholder = ${pokeholder}`);
	console.log(`pokeholder = ${pokeholder['name']}`);
	switch(pokevar){
		case 1:
			activePlayerPokemon = playerPokemon1
			break;
		case 2:
			activePlayerPokemon = playerPokemon2
			break;
		case 3:
			activePlayerPokemon = playerPokemon3
			break;
	}
		
	$('#alertBoxText').innerHTML =`You're now using ${activePlayerPokemon['name']}`; 
	assignGif(activePlayerPokemon['name'], 'Player'); 
	setTimeout(enemyDoDamage, 4000)
}

const userRun=()=>{
	console.log('userRun')
	document.getElementById("button1").setAttribute("onclick", "");
	document.getElementById("button2").setAttribute("onclick", "");
	document.getElementById("button3").setAttribute("onclick", "");
	document.getElementById("button4").setAttribute("onclick", "");
	document.getElementById("alertBoxText").innerHTML =`You can't run!`
	setTimeout(userRound, 1500);
}
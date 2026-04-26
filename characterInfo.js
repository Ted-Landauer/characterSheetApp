console.log("hello world!")

//Test data
const testSheet = {
   "characterSheet":{
      "name":"Searcher",
      "species":"",
      "classInfo":{
         "classes":[
            "wizard"
         ],
         "levels":[
            14
         ],
         "hitDie":[
            "d6"
         ]
      },
      "abilityScores":{
         "str":[
            8,
            false
         ],
         "dex":[
            14,
            false
         ],
         "con":[
            16,
            false
         ],
         "int":[
            23,
            true
         ],
         "wis":[
            12,
            true
         ],
         "cha":[
            8,
            false
         ]
      },
      "hp": 100,
      "ac": 15,
      "profBonus": 8,
      "speeds":{
         "walk":30,
         "fly":20,
         "swim":0,
         "climb":0,
         "burrow":0
      },
      "skills":{
         "acrobatics":[
            false,
            false,
            0
         ],
         "animalHandling":[
            false,
            false,
            0
         ],
         "arcana":[
            false,
            false,
            0
         ],
         "athletics":[
            false,
            false,
            0
         ],
         "deception":[
            false,
            false,
            0
         ],
         "history":[
            false,
            false,
            0
         ],
         "insight":[
            false,
            false,
            0
         ],
         "intimidation":[
            false,
            false,
            0
         ],
         "investigation":[
            false,
            false,
            0
         ],
         "medicine":[
            false,
            false,
            0
         ],
         "nature":[
            false,
            false,
            0
         ],
         "perception":[
            false,
            false,
            0
         ],
         "performance":[
            false,
            false,
            0
         ],
         "persuasion":[
            false,
            false,
            0
         ],
         "religion":[
            false,
            false,
            0
         ],
         "sleightOfHand":[
            false,
            false,
            0
         ],
         "stealth":[
            false,
            false,
            0
         ],
         "survival":[
            false,
            false,
            0
         ]
      },
      "weapons":[
         
      ],
      "armors":[
         
      ],
      "tools":[
         
      ],
      "languages":[
         
      ],
      "classAbilities":{
         "test":[
			"1",
			"2",
			"3"
         ]
      },
      "spells":{
         "castingStats":[
			"int"
         ],
         "cantrips":[
            
         ],
         "first":[
            
         ],
         "second":[
            
         ],
         "third":[
            
         ],
         "fourth":[
            
         ],
         "fifth":[
            
         ],
         "sixth":[
            
         ],
         "seventh":[
            
         ],
         "eighth":[
            
         ],
         "ninth":[
            
         ]
      }
   }
}

/*
console.log("JSON FORMAT TESTING")
console.log(testSheet["characterSheet"]) //all info under character sheet
console.log(testSheet["characterSheet"]["name"]) //searcher
console.log(testSheet["characterSheet"]["classInfo"])
console.log(testSheet["characterSheet"]["classInfo"]["classes"])
console.log(testSheet["characterSheet"]["abilityScores"])
console.log(testSheet["characterSheet"]["abilityScores"]["str"])
console.log(testSheet["characterSheet"]["speeds"])
console.log(testSheet["characterSheet"]["speeds"]["walk"])
console.log(testSheet["characterSheet"]["skills"])
console.log(testSheet["characterSheet"]["skills"]["acrobatics"])
console.log(testSheet["characterSheet"]["classAbilities"]["test"])
console.log(testSheet["characterSheet"]["spells"])
console.log(testSheet["characterSheet"]["spells"]["castingStats"])
*/

//const TESTURL = "file:///C:/Users/tedla/Documents/codeProjects/characterSheetApp/docs/infoEntry/characterInfoEntry.html"

//empty json to fill in with user form input
let sheetData = {
	"characterSheet": {
		"name": "",
		"species":"",
		"classes": {
			"hitdie": 0
		},
		"abilityScores":{
			"str":{
				"score": 10,
				"mod": 0,
				"proficient": false,
				"save": 0
			},
			"dex":{
				"score": 10,
				"mod": 0,
				"proficient": false,
				"save": 0
			},
			"con":{
				"score": 10,
				"mod": 0,
				"proficient": false,
				"save": 0
			},
			"intel":{
				"score": 1,
				"mod": 0,
				"proficient": false,
				"save": 0
			},
			"wis":{
				"score": 10,
				"mod": 0,
				"proficient": false,
				"save": 0
			},
			"cha":{
				"score": 10,
				"mod": 0,
				"proficient": false,
				"save": 0
			}
		},
		"hp": 0,
		"ac": 10,
		"profBonus": 2,
		"speeds":{
			"walk": 0,
			"fly": 0,
			"swim": 0,
			"climb": 0,
			"burrow": 0
		},
		"skills":{
			"ACRO":{
				"abl": "dex",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"ANHAN":{
				"abl": "wis",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"ARCA":{
				"abl": "intel",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"ATHL":{
				"abl": "str",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"DECE":{
				"abl": "cha",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"HIST":{
				"abl": "intel",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"INSI":{
				"abl": "wis",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"INTI":{
				"abl": "cha",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"INVES":{
				"abl": "intel",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"MEDI":{
				"abl": "wis",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"NATU":{
				"abl": "intel",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"PERC":{
				"abl": "wis",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"PERF":{
				"abl": "cha",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"PERS":{
				"abl": "cha",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"RELI":{
				"abl": "intel",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"SLOH":{
				"abl": "dex",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"STEL":{
				"abl": "dex",
				"prof": false,
				"exper": false,
				"bonus": 0
			},
			"SURV":{
				"abl": "wis",
				"prof": false,
				"exper": false,
				"bonus": 0
			}
		},
		"weaponsArmors":[
			 
		],
		"tools":[
			 
		],
		"languages":[
			 
		],
		"background":{
		},
		"classAbilities":{
			"test":[
				"1",
				"2",
				"3"
			]
		},
		"spells":{
			"castingStats":[
				"int"
			],
			"cantrips":[
				
			],
			"first":[
				
			],
			"second":[
				
			],
			"third":[
				
			],
			"fourth":[
				
			],
			"fifth":[
				
			],
			"sixth":[
				
			],
			"seventh":[
				
			],
			"eighth":[
				
			],
			"ninth":[
				
			]
		}
	
	}
};

//list of abilities to use in some key comparisons down below
const ABILITIES = [
	"ACRO",
	"ANHAN",
	"ARCA",
	"ATHL",
	"DECE",
	"HIST",
	"INSI",
	"INTI",
	"INVES",
	"MEDI",
	"NATU",
	"PERC",
	"PERF",
	"PERS",
	"RELI",
	"SLOH",
	"STEL",
	"SURV",
	"str_Prof",
	"dex_Prof",
	"con_Prof",
	"intel_Prof",
	"wis_Prof",
	"cha_Prof"
	]

//get the input data
const formTemp = document.querySelector("#FullForm");

//create a new FormData Object and store it/pass it along
async function sendData() {
	//const formData = new FormData(formTemp);
	let inputFormData = new FormData(formTemp);
	
	console.log("formdata")
	console.log(inputFormData)
	
	collectData(inputFormData);
	
}

//listed for the user submit button press
formTemp.addEventListener("submit", (event) => {
	event.preventDefault();
	sendData();
});

//populate the empty json object above
function collectData(charData) {
	sheetData.characterSheet.name = charData.get("charName");
	sheetData.characterSheet.species = charData.get("charSpecies");
	
	//function call because multiclassing is a thing
	setClasses(charData.get("charClass"), charData.get("charLevel"));
	
	sheetData.characterSheet.abilityScores.str.score = charData.get("str");
	sheetData.characterSheet.abilityScores.dex.score = charData.get("dex");
	sheetData.characterSheet.abilityScores.con.score = charData.get("con");
	sheetData.characterSheet.abilityScores.intel.score = charData.get("int");
	sheetData.characterSheet.abilityScores.wis.score = charData.get("wis");
	sheetData.characterSheet.abilityScores.cha.score = charData.get("cha");
	
	//setting values with a function call because ability scores have a modifier tied to them
	sheetData.characterSheet.abilityScores.str.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.str.score);
	sheetData.characterSheet.abilityScores.dex.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.dex.score);
	sheetData.characterSheet.abilityScores.con.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.con.score);
	sheetData.characterSheet.abilityScores.intel.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.intel.score);
	sheetData.characterSheet.abilityScores.wis.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.wis.score);
	sheetData.characterSheet.abilityScores.cha.mod = calculateAbilityModifier(sheetData.characterSheet.abilityScores.cha.score);
	
	sheetData.characterSheet.abilityScores.str.save = sheetData.characterSheet.abilityScores.str.mod;
	sheetData.characterSheet.abilityScores.dex.save = sheetData.characterSheet.abilityScores.dex.mod;
	sheetData.characterSheet.abilityScores.con.save = sheetData.characterSheet.abilityScores.con.mod;
	sheetData.characterSheet.abilityScores.intel.save = sheetData.characterSheet.abilityScores.intel.mod;
	sheetData.characterSheet.abilityScores.wis.save = sheetData.characterSheet.abilityScores.wis.mod;
	sheetData.characterSheet.abilityScores.cha.save = sheetData.characterSheet.abilityScores.cha.mod;
	
	sheetData.characterSheet.profBonus = calculateLevelValues(Object.values(sheetData.characterSheet.classes));
	
	//loop through all of the keys in the form data
	for (const key of charData.keys()) {
		
		//time to compare to the abilities list from above
		if (!ABILITIES.includes(key)) {
			continue;
		} else {
			
			//function call to set the correct skill and save Proficiencies
			setProficiencies(key, charData.get(key))
		}
	}
	
	sheetData.characterSheet.background[charData.get("charBackgroundTitle")] = charData.get("charBackgroundDetail");
	
	setWeaponArmorProf(charData.get("charWepArmProf"));
	setToolProf(charData.get("charToolProf"));
	setLanguageProf(charData.get("charLangProf"));
	
	
	sheetData.characterSheet.speeds.walk = charData.get("walk");
	sheetData.characterSheet.speeds.fly = charData.get("fly");
	sheetData.characterSheet.speeds.climb = charData.get("climb");
	sheetData.characterSheet.speeds.swim = charData.get("swim");
	sheetData.characterSheet.speeds.burrow = charData.get("burrow");
	
	setClassAbilities(charData.get("charClassAbility"));
	
	
	
	console.log("saved sheet data")
	console.log(sheetData)
	
}

//calculate the total character level in order to determine the correct proficiency bonus
//takes an array of numerical strings
function calculateLevelValues(charLevels) {
	
	let characterLevel = 0;
	
	//default bonus is 2 in d&d 5e
	let levelBonus = 2;
	
	//loop through all of the entries in the level array that's passed in
	for (const level of charLevels) {
		
		//check that the current item is actually a numerical string
		let intLevel = parseInt(level)
		if (intLevel === NaN) {
			continue;
		}
		
		//total it all up
		characterLevel += intLevel;
	}
	
	//switch case for a true evaluation to determine the characters proficiency bonus
	switch (true) {
		case (4 < characterLevel && characterLevel < 9):
			levelBonus = 3;
			break;
		case (8 < characterLevel && characterLevel < 13):
			levelBonus = 4;
			break;
		case (12 < characterLevel && characterLevel < 17):
			levelBonus = 5;
			break;
		case (16 < characterLevel):
			levelBonus = 6;
			break;
		default:
			break;
	}
	
	return levelBonus;
	
	//check the character's total level
		// charLevels should be a list of all levels
		// add the values together for total character level
		
	//calculate proficiency bonus
		// pb starts at +2 until level 5
		// iff 4 < total level < 9 => pb == +3
		// iff 8 < total level < 13 => pb == +4
		// iff 12 < total level < 17 => pb == +5
		// iff 16 < total level => pb == +6

}

//Calculate the modifier for each ability score, takes a single int value
function calculateAbilityModifier(ablScore) {
	
	/*
	// in d&d 5e, ability score modifier (ASM) is equal to 0 at 10, and increases by 1 for 
	// every even number above 10 up to the max AS.
	// It also decreses by 1 for every odd number below 10 down to 1.
	// This modifier is what is applied to every skill, attack roll, and save in the game
	*/
	
	let modifierStep = Math.floor(ablScore / 2);
	let modifier = 0;
	
	//check if our ability score is between 10 and 20 (most common case)
	if (modifierStep >= 5 && modifierStep <= 10) {
		switch (modifierStep) {
			case 10:
				modifier = 5;
				break;
			case 9:
				modifier = 4;
				break;
			case 8:
				modifier = 3;
				break;
			case 7:
				modifier = 2;
				break;
			case 6:
				modifier = 1;
				break;
			case 5:
				modifier = 0;
				break;
		}
		
		return modifier;
	}
	
	//check if our ability score is below 10 (next most common case)
	if (modifierStep < 5) {
		switch (modifierStep) {
			case 4:
				modifier = -1;
				break;
			case 3:
				modifier = -2;
				break;
			case 2:
				modifier = -3;
				break;
			case 1:
				modifier = -4;
				break;
			case 0:
				modifier = -5;
				break;
		}
		
		return modifier;
	}
	
	//check if our score is above 20 (rare but possible)
	if (modifierStep > 10) {
		switch (modifierStep) {
			case 11:
				modifier = 6;
				break;
			case 12:
				modifier = 7;
				break;
			case 13:
				modifier = 8;
				break;
			case 14:
				modifier = 9;
				break;
			case 15:
				modifier = 10;
				break;
		}
		
		return modifier;
	}
	
	//calculate str modifier
		// if str score is over 10
		// divide the score by 2 and take the floor
		// 5 == +0, 6 == +1, 7 == +2, 8 == +3, 9 == +4, 10 == +5, ..., 15 == +10
		// 4 == -1, 3 == -2, 2 == -3, 1 == -4, 0 == -5
			// The above covers the negative modifier cases
	
}

//set the weapon proficiencies json array after splitting a comma delimited string
//NOTE: should be able to simplity things a bit here by combining the next three funcitons as they all do the same thing
// just need to add a parameter that determines what area of the json we should write to
function setWeaponArmorProf (itemList) {
	sheetData.characterSheet.weaponsArmors = itemList.split(", ");
}

function setToolProf (toolList) {
	sheetData.characterSheet.tools = toolList.split(", ");
	
}

function setLanguageProf (langList) {
	sheetData.characterSheet.languages = langList.split(", ");
}

//set the key value pair for class: level in the json
function setClasses (charClass, charLevels) {
	
	//according to the docs, .split preserves order so we're good there
	// If that changes for some reason then it will need to be addressed
	let classArray = charClass.split(", ");
	let levelArray = charLevels.split(", ");
	
	for (let i = 0; i < classArray.length; i++) {
		sheetData.characterSheet.classes[classArray[i]] = levelArray[i]; 
	}
	
}

//TODO:
function calculateSpellcasting (abilityScore) {
	//calculate spellcasting info
	
	// this whole aspect of a character sheet is going to be terrible to implement...
	
	//spell save dc
	//spell attack modifier
	
}

//when provided with a skill name and the input value for that skill, set proficiencies
function setProficiencies (skillKey, skillValue) {
	
	//grab the already set proficiency bonus
	let profBonus = sheetData.characterSheet.profBonus;
	
	//this checks to see if a character is proficient in saves for a specific ability
	// the value is gathered from a checkbox in the html form
	if (skillValue == "on"){
		
		//split on the name of the checkbox and take only the name of the ability
		let ability = skillKey.split("_")[0];
		
		//if we're in here, then the character is proficient and needs a score set
		sheetData.characterSheet.abilityScores[ability].proficient = true;
		sheetData.characterSheet.abilityScores[ability].save += profBonus;
		
		//hard exit as we don't want the rest of this code running in this case
		return;
	}
	
	//grab the relevant ability for a particular skill
	let ability = sheetData.characterSheet.skills[skillKey].abl;
	
	//grab the modifier for said relevant ability
	let abilityModifier = sheetData.characterSheet.abilityScores[ability].mod;
	
	//check if proficient and set correct values
	if (skillValue === "P") {
		sheetData.characterSheet.skills[skillKey].prof = true;
		sheetData.characterSheet.skills[skillKey].bonus = profBonus + abilityModifier;
		
	//check if expertise and set correct values
	} else if (skillValue == "E") {
		sheetData.characterSheet.skills[skillKey].prof = true;
		sheetData.characterSheet.skills[skillKey].exper = true;
		sheetData.characterSheet.skills[skillKey].bonus = profBonus + profBonus + abilityModifier;
	
	//otherwise set the modifier as is
	} else {
		sheetData.characterSheet.skills[skillKey].bonus = abilityModifier;
	}
	
}

//WIP:
function setClassAbilities (classData) {
	let classArray = classData.split("\n");
	let className = "unformatted";
	let index = 0;
	
	console.log("classdata")
	console.log(classArray)
	
	for (const data of classArray) {
		
		if (data.startsWith("!")) {
			
			index = 0;
			
			console.log("data with !")
			console.log(data)
			
			className = data.substring(1, data.length);
			sheetData.characterSheet.classAbilities[className] = [];
			
			continue;
		} else {
			sheetData.characterSheet.classAbilities[className] = [];
		}
		
		console.log("data without !")
		console.log(data)
		
		console.log("index value")
		console.log(index)
		
		sheetData.characterSheet.classAbilities[className][index] = data;
		index++;
		
		console.log("entry value")
		console.log(sheetData.characterSheet.classAbilities[className][index-1])
		
	}
	
	console.log(sheetData.characterSheet.classAbilities.unformatted)
	console.log(sheetData.characterSheet.classAbilities.unformatted[42])
}

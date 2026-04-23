console.log("hello world!")

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
let sheetData = {
	"characterSheet": {
		"name": "",
		"species":"",
		  "classInfo":{
			 "classes":[
				""
			 ],
			 "levels":[
				0
			 ],
			 "hitDie":[
				""
			 ]
		  },
		  "abilityScores":{
			 "str":[
				10,
				false
			 ],
			 "dex":[
				10,
				false
			 ],
			 "con":[
				10,
				false
			 ],
			 "int":[
				10,
				false
			 ],
			 "wis":[
				10,
				false
			 ],
			 "cha":[
				10,
				false
			 ]
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
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "ANHAN":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "ARCA":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "ATHL":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "DECE":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "HIST":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "INSI":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "INTI":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "INVES":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "MEDI":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "NATU":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "PERC":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "PERF":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "PERS":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "RELI":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "SLOH":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "STEL":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 },
			 "SURV":{
				"prof": false,
				"exper": false,
				"bonus": 0
			 }
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
};

//get the input data
const formTemp = document.querySelector("#FullForm");

async function sendData() {
	//const formData = new FormData(formTemp);
	let inputFormData = new FormData(formTemp);
	
	console.log("formdata")
	console.log(inputFormData)
	
	collectData(inputFormData);
	
	
	
}

formTemp.addEventListener("submit", (event) => {
	event.preventDefault();
	sendData();
});

function collectData(charData) {
	sheetData.characterSheet.name = charData.get("charName");
	sheetData.characterSheet.species = charData.get("charSpecies");
	
	sheetData.characterSheet.classInfo.classes[0] = charData.get("charClass");
	sheetData.characterSheet.classInfo.levels[0] = charData.get("charLevel");
	
	sheetData.characterSheet.abilityScores.str[0] = charData.get("str");
	sheetData.characterSheet.abilityScores.dex[0] = charData.get("dex");
	sheetData.characterSheet.abilityScores.con[0] = charData.get("con");
	sheetData.characterSheet.abilityScores["int"][0] = charData.get("int");
	sheetData.characterSheet.abilityScores.wis[0] = charData.get("wis");
	sheetData.characterSheet.abilityScores.cha[0] = charData.get("cha");
	
	
	
	for (const key of charData.keys()) {
		setProficiencies(key, charData.get(key))
		
	}
	
	
	
	
	
	
	
	
	
	console.log("saved sheet data")
	console.log(sheetData)
	
	
	
}

function calculateLevelValues(charLevels) {
	
	console.log("form data at 0")
	console.log(inputFormData[0])
	
	console.log("form data at char name")
	console.log(inputFormData["charNameTest"])
	
	console.log("form data at 0 at char name")
	console.log(inputFormData[0]["charNameTest"])
	
	
	
	
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

function calculateStrValues(strScore) {
	
	
	
	
	
	//calculate str modifier
		// if str score is over 10
		// divide the score by 2 and take the floor
		// 5 == +0, 6 == +1, 7 == +2, 8 == +3, 9 == +4, 10 == +5, ..., 15 == +10
	
	//atheltics = str mod + (pb if proficient)
	//save bonus = str mod + (pb if proficient)
	//to hit = str mod + pb
	
}

function calculateDexValues(dexScore) {
	//calculate dex modifier
		// same logic as for strength score
		
	//acrobatics
	//sleight of handle
	//stealth
	//initiative bonus
	//save bonus
	//to hit (for dex based attacks)
	
}

function calculateConValues(conScore) {
	//calculate con modifier
		// same logic as for strength score
		
	//save bonus
	//additional hp: con mod * total level
	
}

function calculateIntValues(intScore) {
	//calculate int modifier
		// same logic as for strength score
		
	//arcana
	//history
	//investigation
	//nature
	//religion
	//save bonus
	
}

function calculateWisValues(wisScore) {
	//calculate wis modifier
		// same logic as for strength score
		
	//animal handling
	//insight
	//medicine
	//perception
	//survival
	//save bonus
	
}

function calculateChaValues(chaScore) {
	//calculate cha modifier
		// same logic as for strength score
		
	//deception
	//intimidation
	//performance
	//persuasion
	
}

function calculateSpellcasting(abilityScore) {
	//calculate spellcasting info
	
	//spell save dc
	//spell attack modifier
	
}

function setProficiencies(skillKey, skillValue) {
	
	if (skillValue === "P") {
		sheetData.characterSheet.skills.skillKey.prof = true;
		
	} else if (skillValue == "E") {
		sheetData.characterSheet.skills.skillKey.prof = true;
		sheetData.characterSheet.skills.skillKey.exper = true;
		
	}
	
}




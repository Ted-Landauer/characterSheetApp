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


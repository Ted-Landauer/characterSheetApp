console.log("hello, world!");

document.write("hello, world!");


		
const userInput = prompt("Please input your ability scores in order and separated by a \",\": ").split(",");
let alreadySet = false;
let data;
let skills;


console.log(`User Input: ${userInput}`);

function setScores(input) {
	if (alreadySet === false) {
		
		data = [{
			STR: `${userInput[0]}`,
			DEX: `${userInput[1]}`,
			CON: `${userInput[2]}`,
			INT: `${userInput[3]}`,
			WIS: `${userInput[4]}`,
			CHA: `${userInput[5]}`,
			},
        ];
		
		alreadySet = true;
		
	} else {
		alert("You've already set the scores");
	}
	
	fillSkills();
	
}

setScores();

function fillSkills() {
	let skillTable = '<table border="1"><tr>';
	
	skills = [{
			Athletics: 0,
			Acrobatics: 0,
			Sleight_of_hand: 0,
			Stealth: 0,
			Arcana: 0,
			History: 0,
			Investigation: 0,
			Nature: 0,
			Religion: 0,
			Animal_handling: 0,
			Insight: 0,
			Medicine: 0,
			Perception: 0,
			Survival: 0,
			Deception: 0,
			Intimidation: 0,
			Performance: 0,
			Persuasion: 0,
		},
	];
	
		
	Object.keys(skills[0]).forEach(key => {
		skillTable += `<th>${key}</th>`;
	});
	
	skillTable += '</tr>';
	
	skills.forEach(item => {
		skillTable += '<tr>';
		Object.values(item).forEach(value => {
			skillTable += `<td>${value}</td>`;
		});
	});
	
	
	
	skillTable += '</table>';
	
	document.body.innerHTML += skillTable;
}


//9,10,12,13,14,15

// Handling user input
if (userInput !== null) {
	alert("Hello, " + userInput + "!");
} else {
	alert("You canceled the input.");
}



function createTableWithInnerHTML() {
	let tableHTML = '<table border="1"><tr>';

	Object.keys(data[0]).forEach(key => {
		tableHTML += `<th>${key}</th>`;
	});

	tableHTML += '</tr>';

	data.forEach(item => {
		tableHTML += '<tr>';
		Object.values(item).forEach(value => {
			tableHTML += `<td>${value}</td>`;
		});
		tableHTML += '</tr>';
	});

	tableHTML += '</table>';

	document.body.innerHTML += tableHTML;
}

createTableWithInnerHTML();

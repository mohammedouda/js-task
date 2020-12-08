const task = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

console.log(" topping ");
for (var i in task) {
    console.log(task[i].topping);
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

console.log(" batters ");
for (let x in task) {
    console.log(task[x].batters);
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

var sum = 0;
var count = 0;
console.log(" Ppu sum and Ppu average ");
for (let y in task) {
    sum += task[y].ppu
    count++;
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

console.log("ppu sum = " + sum);
console.log("ppu average = " + sum / count);
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

console.log(" IDs ");
for (let f in task) {
	console.log(task[f].id);
	for (var i in task[f].topping) {
        var temp = task[f].topping;
        console.log(temp[i].id);
	}
	
    for (var i in task[f].batters.batter) {
        var temp = task[f].batters.batter;
        console.log(temp[i].id);
    }

    

}
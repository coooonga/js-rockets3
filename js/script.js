// this function
var bailar = function () {
	var currentClassName = document.getElementById('baile').className;
	// changing class name
	if (currentClassName == 'baile') {
		document.getElementById('baile').className = 'baile red';
	} else {
	 	document.getElementById('baile').className = 'baile';
	}

var sayMyName = function (name) {
	alert('My name is: '+name);
}



var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1', 
		'seat 2', 
		'seat 3', 
		'seat 4'
		],
		turnOn: function () {
			this.isTurnedOn = true;
		},
		fly: function() {
			alert('fly');
		},
		switchCar: function (isOn) {
			console.log('turn car '+isOn)
			;
			if (isOn == true) {
				this.isTurnedOn = true
			} else {
				this.isTurnedOn = false
			};

console.log('hello there friends!')
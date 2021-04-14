// this function
console.log('hello there friends!');

var hacerUnBaile = function () {

	var currentClassName = document.getElementById('baile').className;

		if (currentClassName == 'baile') {
			document.getElementById('baile').className = 'baile red';
	 	} else {
		document.getElementById('baile').className = 'baile';
		};
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
			};
function isOn () {
				this.isTurnedOn = true;
				};
var fly = function() {
				alert('fly');
				};
var switchCar = function (isOn) {
				console.log('turn car '+isOn)};
				if (isOn == true) {
					this.isTurnedOn = true
				} else {
					this.isTurnedOn = false
					};
				};
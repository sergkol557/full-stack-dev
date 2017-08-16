var ATM = {
	is_auth: false, 
	current_user:false,
	current_type:false,
	reports:"",
	// all cash of ATM
	cash: 2000,
	// all available users
	users: [
		{number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
		{number: "0025", pin: "123", debet: 675, type: "user"}
	],
	// authorization
	auth: function(number, pin) {

		if (this.is_auth && this.current_type && this.current_user){
			console.log("you must log out first");
			return;
		}
		var id;

		for (id = 0; id < this.users.length; id ++) {
			if (number == this.users[id].number && pin == this.users[id].pin) {

				this.is_auth = true;
				this.current_type = this.users[id].type;
				this.current_user = id;
				console.log("welocme "+this.users[id].type);
				return;
			}
		}
		console.log("unknown user");

	},
	// check current debet
	check: function() {
		if (this.current_user) {

			console.log("you debet is "+this.users[this.current_user].debet);
			this.reports += "user "+ this.users[this.current_user].number + 
							" check current debet\r\n";
		
		} else {
			console.log("you must authorize first");
		}

	},
	// get cash - available for user only
	getCash: function(amount) {
		if  (this.current_type == "user" && this.is_auth){

			if (amount > this.users[this.current_user].debet) {
				console.log("you dont have enought money");
				return;
			}
			this.users[this.current_user].debet -= amount;
			this.cash -= amount;
			this.reports += "user "+ this.users[this.current_user].number + 
							" get " + amount + "cash\r\n";
			console.log("you debet is " + this.users[this.current_user].debet)
		}

	},
	// load cash - available for user only
	loadCash: function(amount){

		if  (this.current_type == "user" && this.is_auth){

			if(amount < 0) {
				console.log("please check the amount");
				return;
			}

			this.users[this.current_user].debet += amount;
			this.cash += amount;
			console.log("you balance is "+this.users[this.current_user]['debet']);
			this.reports += "user "+ this.users[this.current_user].number + 
							" put " + amount + "cash\r\n";
		} else {

			console.log("you cant load cash");
		}
	},
	// load cash to ATM - available for admin only - EXTENDED
	load_cash: function(addition) {

		if (this.current_type == "admin" && this.is_auth) {

			this.cash += addition;
			this.reports += "admin "+ this.users[this.current_user].number+ 
							" put " + addition + "cash\r\n";
			console.log ("cash in bankomat is"+this.cash);

		} else {

			console.log ("you dont have permission to load_cash");
		}

	},
	// get report about cash actions - available for admin only - EXTENDED
	getReport: function() {
		if (this.current_type == "admin" && this.is_auth){

			console.log(this.reports);
		} else {

			console.log("you dont have permission to get report");
		}
	},
	// log out
	logout: function() {
		if (this.is_auth && this.current_type && this.current_user){

			this.is_auth = false;
			this.current_type = false;
			this.current_type = false;
			console.log("you logout succefully");

		} else {
			
			console.log("you cant logout, you must authorized first");
		}
	}
};

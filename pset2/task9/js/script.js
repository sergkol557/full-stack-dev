function countEntranceFloor() {
	var floors = document.getElementById('floors').value;
	var entrances = document.getElementById('entrances').value;
	var flats_on_floor = document.getElementById('flats_on_floor').value;
	var flat_number = document.getElementById('flat_number').value;
	var flats_in_entrance = floors * flats_on_floor;
	var result_floor = 1;
	var result_entrance = 1;

	while (flats_in_entrance * result_entrance < flat_number) {
		result_entrance++;
	}

	if (result_entrance > entrances) {
		alert('подъездов должно быть на ' + String(result_entrance - entrances) + ' больше');
		return;
	}

	flat_number -=  flats_in_entrance * (result_entrance - 1);

	while (flats_on_floor * result_floor < flat_number) {
		result_floor ++;
	}
	

	document.getElementById('result').innerText = 'Эта квартира находится на ' +
															result_floor +' этаже и в ' +
															result_entrance + ' подьезде';
}
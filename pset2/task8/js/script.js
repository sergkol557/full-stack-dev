function table(rows,cols, c1, c2, z){

    var temp = document.getElementsByTagName("table")[0];

    if (temp != null) {
        temp.parentNode.removeChild(temp);
    }

    var table = document.createElement('TABLE');
    document.body.appendChild(table);
    var tr = document.createElement('TR');
    var td = document.createElement('TD');

    td.style.width = z+'px';
    td.style.height = z+'px';

    for (var i = 0; i < rows; i ++){
        table.appendChild(tr.cloneNode(true));

        for(var j = 0; j < cols; j ++){
            var _tr = table.getElementsByTagName('TR')[i];
            _tr.appendChild(td.cloneNode(true));
            var _td = table.getElementsByTagName('TR')[i].getElementsByTagName('TD')[j];
            _td.style.backgroundColor = ((i % 2 == 0 && j % 2 == 0) || i % 2 == 1 && j % 2 == 1) ? c2 : c1;
        }
    }
}

function drawBoard() {
    var width = document.getElementById('value1').value;
    var height = document.getElementById('value2').value;
    var size = parseInt(screen.availWidth / width);


    table(width, height, 'white', 'black', size);
}
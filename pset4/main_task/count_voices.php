<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>show results</title>
	<script type="text/javascript" src="js/loader.js"></script>
</head>
<body>
	<div align="center">
		<div id="piechart" style="width: 900px; height: 500px;">
			<?php
			if (!empty($_POST['phone'])) {
				$voice = $_POST['phone'];
				$json = file_get_contents('results.json');
				$json = json_decode($json, true);
				$json[$voice]++;
				$android = $json['android'];

				if(!isset($android)) {
					$android = 0;
					$json['android'] = 0;
				}

				$iphone = $json['iphone'];

				if(!isset($iphone)) {
					$iphone = 0;
					$json['iphone'] = 0;
				}

				$windowsphone = $json['windowsphone'];

				if(!isset($windowsphone)) {
					$windowsphone = 0;
					$json['windowsphone'] = 0;
				}

				$json = json_encode($json, JSON_PRETTY_PRINT);
				file_put_contents('results.json', $json);
			} else {
				echo "make your choice, please";
		    }
			?>
		</div>
	</div>
	<script>
	 google.charts.load('current', {'packages':['corechart']});
	 google.charts.setOnLoadCallback(drawChart);
		 function drawChart() {

			 var data = google.visualization.arrayToDataTable([
				 ['Phone', 'Voutes'],
				 ['Iphone',       <?php echo $iphone; ?>],
				 ['Android',      <?php echo $android; ?>],
				 ['Windowsphone',  <?php echo $windowsphone; ?>]
			 ]);

			 var options = {
				 title: 'results of votation'
			 };

			 var chart = new google.visualization.PieChart(document.getElementById('piechart'));

			 chart.draw(data, options);
		 }
	 </script>
</body>
</html>
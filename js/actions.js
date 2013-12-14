//actions
//Usmos las instancias de jQTjs para que funciones las transiciones y animaciones
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
	document.addEventListener("deviceready", function(){
		//Acelerometro
		var watchAC = null;
		$('#acelerometro.individual li').tap(function(){
			if($(this).index()==0){
				if(watchAC == null){
					watchAC = navigator.accelerometer.watchAcceleration(function(acc){
						$('#acelerometro h2').html('Aceleration<br>'+
						'X: '+acc.x+'<br>'+
						'Y: '+acc.y+'<br>'+
						'Z: '+acc.z);
					}, function(){
						alert('Error al iniciar');
					}, {frecuency: 5000});
				}
			}else{
				if(watchAC != null){
					navigator.accelerometer.clearWatch(watchAC);
					watchAC = NULL;
					$('#accelerometro h2').html('Detenido');
				}
			}
		});
		var watchBrujula = null;
		$('#brujula ul.individual li'). tap(function(){
			if($(this).index() == 0){
				watchBrujula = navigator.compass.watchHeading(function(h){
					$('#brujula .scroll h2').text(h.magneticHeading);
				}, function(err){
					alert(err.code);
				},{frequency: 500});
			}else{
				if(watchBrujula){
					navigator.compass.clearWatch(watchBrujula);
					watchBrujula = null;
					$('#brujula .scroll h2').text('Detenido');
				}
			
			}
		});
	},false);
});
//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
	document.addEventListener("deviceready", function(){
		//Acelerometro
		var watchID = null;
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
	},false);
});
	function copiarTexto(){

		console.log("Click en el boton");
		
		var txt = document.getElementById('txt_1').value;

		if(txt.length == 0){
			console.log("Tienes que escribir");
		
			$('.alert_2').show(3000);
			$('.alert_1').hide(3000);
			$('.btnInput').attr('disabled', 'disabled');

		}else{
			document.getElementById('res').innerHTML = txt;
			document.getElementById('txt_1').value = "";
	

			console.log("El valor es: "+txt)
		}	
	}

	function botonAceptar(){
		console.log("clic en el boton Aceptar");
		$('.alert_1').show();
		$('.alert_2').hide();
		$('.btnInput').removeAttr('disabled');
	}


	function edadNombre(){
		console.log("Click en el boton de la edad y nombre");
		var nombre = document.getElementById('txtNombre').value;
		var edad = document.getElementById('txtEdad').value;


		if (edad >= 18) {
			$('.mayor').show();
			console.log("Es MAYOR de edad");
			document.getElementById('resNombre').innerHTML = nombre;
			document.getElementById('resEdad').innerHTML = edad;


			
		}else{

			$('.menor').show();
			console.log("Es MENOR de edad");
			document.getElementById('resNombre').innerHTML = nombre;
			document.getElementById('resEdad').innerHTML = edad;
		}


		document.getElementById('txtNombre').value = "";
		document.getElementById('txtEdad').value = "";

		console.log("El nombre es: "+nombre+ " y su edad es: "+edad)

	}


function pesoDolar(){
	var peso = document.getElementById('txtPeso').value;
	console.log("Cantidad de Pesos son: "+peso);
	var dolar = document.getElementById('txtDolar').value;
    console.log("Cantidad de Dolares: "+dolar);


    var conversion = peso/dolar;
    var conDecimal = conversion.toFixed(2);
    //var x = Math.round(conversion);
    //console.log("El cantidad total es: "+x);
    console.log("La cantidad total es: "+conversion);

    document.getElementById('resPeso').innerHTML = peso;
    document.getElementById('resDolar').innerHTML = conDecimal;

}


function baseAltura(){
	var base = document.getElementById('txtBase').value;
	var altura = document.getElementById('txtAltura').value;
	console.log("La base es: "+base+" y la altura es: "+altura);

	var area = base * altura;


	document.getElementById('resArea').innerHTML = area;

}

function perimetro(){
	var longitud = document.getElementById('txtLongitud').value;
	console.log("La longitud es: "+longitud);

	var perimetro = 4 * longitud;

	document.getElementById('resPerimetro').innerHTML = perimetro;

}

function esfera(){
	var radio = document.getElementById('txtRadio').value;
	console.log("El radio es: "+radio);

	var radio2 = Math.pow(radio, 3);
	console.log("Elevado al cuadrado: "+radio2);

	var piRadio = Math.PI * radio2;
	var divicion = 4/3;
 	//var decimal = conversion.toFixed(2);
	var volumen = (divicion * piRadio).toFixed(2);


	console.log("El volumen de la esfera es: "+volumen);

	document.getElementById('resEsfera').innerHTML = volumen;

}


function valor(){
	var valor = document.getElementById('txtValor').value;
	console.log("El valor es: "+valor);

	if(valor >= 100){
		document.getElementById('resValor').innerHTML = valor;
		$('.valorMayor').show();
	}else {
		document.getElementById('resValor').innerHTML = valor;
		$('.valorMenor').show();
	}

}

function primerSegunda(){
	var nombrePrimera = document.getElementById('txtPrimerNombre').value;
	var edadPrimera = document.getElementById('txtPrimerEdad').value; 
	console.log("El nombre es: "+nombrePrimera+" y la edad es: "+edadPrimera);

	var nombreSegunda = document.getElementById('txtSegundaNombre').value;
	var edadSegunda = document.getElementById('txtSegundaEdad').value;
	console.log("El nombre es: "+nombreSegunda+" y la edad es: "+edadSegunda);

	if(edadPrimera > edadSegunda){
		document.getElementById('resPrimeraSegunda').innerHTML = edadSegunda;

	}else if(edadSegunda > edadPrimera){
		document.getElementById('resPrimeraSegunda').innerHTML = edadPrimera;

	}else{
		$('.argumento').hide();
		document.getElementById('resPrimeraSegunda').innerHTML = "Las 2 Edades son iguales";
	}

}


function numeroPromedio(){
	var numero1 = document.getElementById('txtNumero1').value;
	console.log("El numero 1: "+numero1);

	var numero2 = document.getElementById('txtNumero2').value;
	console.log("El numero 2: "+numero2);

	var numero3 = document.getElementById('txtNumero3').value;
	console.log("El numero 3: "+numero3);

	var numero4 = document.getElementById('txtNumero4').value;
	console.log("El numero 4: "+numero4);

	var numero5 = document.getElementById('txtNumero5').value;
	console.log("El numero 5: "+numero5);


	var suma = parseFloat(numero1)+parseFloat(numero2)+parseFloat(numero3)+parseFloat(numero4)+parseFloat(numero5);
	var promedio = suma/5

	console.log("El promedio es: "+promedio);

}

function sucesionFibonacci(){
	var num = parseInt(document.getElementById('txtSucesion').value);
	var cont = 0;
	var n = 0;
	var x = 1;

	for(var i=1; i < num; i++) {
		console.log("Esta en el siglo for");
		if(i<=0){
			cont = n + i;
			console.log("posicion "+i+": "+cont);
		}
	}

}
















	
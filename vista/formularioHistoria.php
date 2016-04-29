<!DOCTYPE html>
<html>
	<head>
		<title>título</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="estilo-formulario.css">
	</head>
	<body>
		<form class="contact_form">
			<ul>
			<li>
	        	<h2>Nueva historia de usuario</h2>
	         	<span class="campo_requerido">* Indica campo requerido</span>
		    </li>
		    <li>
		        <label for="name">Nombre:</label>
		        <input type="text" name="name" placeholder="Nombre de historia" required="required" pattern="[a-zA-ZáéíóíñÁÉÍÓÚÑ\. ]+"/>
		    </li>
		    <li>
			    <label for="etiqueta">Etiqueta:</label>
			    <input name="etiqueta"  placeholder="Opcional"/>
			</li>
			<li>
			    <label for="descripcion">Descripcion:</label>
			    <textarea name="descripcion" cols="40" rows="6" ></textarea>
			</li>
			<li>
			    <label for="valor">Valor de negocio:</label>
			    <input type="number" name="valor"></input>
			</li>
			<li>
			    <button class="submit" type="submit">Enviar</button>
			</li>
			</ul>
		</form>
	</body>
</html>


# Primer challenge de alura: Amigo secreto
- Ingresamos los datos en la carpeta creada y la conectamos correctamente con github
- Creamos las funcionalidades para que la pagina para generar un amigo aleatorio de muchos funcione correctamente
- Posibles mejoras, generar un boton de reinicio que despues de generar el amigo secreto podamos borrar toda la lista y volver a buscar
### Principales funcionalidades
**function limpiarCaja() **
- Esta funcion limpia la caja de texto donde escribimos el nombre

**function asignarTextoId(id,texto)**
- Funcion que agrega un texto especificando solo el id, utilizamos innerHTML

**function agregarAmigo()**
- Esta funcion ingresa en el array creado los amigos ingresados en la caja de texto verificando que no sean campos nulos,no sean repetidos, y finalmente limpian la caja de texto

**function sortearAmigo()**
- Por ultimo esta funcion genera un numero aleatorio Math.floor(Math.random() * amigos.length), garantizando asi que el numero aleatorio sea un indice posible de la lista amigos, ademas muestra en la consola el numero elegido y a que elemento de la lista pertenece, por ultimo limpia la lista de amigos generada en la pagina y muestra el amigo secreto.

**Extra:**
Podemos agregar nuevamente amigos con el boton Añadir esto limpia la lista y el nombre ganador,ojo no elimina los elementos de la lista solo agrega nuevos elementos a la lista ya existente, esto se realizo por si se olvidaron de un amigo, o un participante mas y no quieren volver a ingresar los antiguos amigos
 
 **Imagenes**
 
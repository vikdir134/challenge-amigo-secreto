# Primer challenge de alura: Amigo secreto
- Ingresamos los datos en la carpeta creada y la conectamos correctamente con github
- Creamos las funcionalidades para que la pagina para generar un amigo aleatorio de muchos funcione correctamente
- Posibles mejoras, generar un boton de reinicio que despues de generar el amigo secreto podamos borrar toda la lista y volver a buscar
### Principales funcionalidades
**function limpiarCaja() **

![Imagen Alt](https://github.com/vikdir134/challenge-amigo-secreto/blob/83f53da569104f754c8291d0bacc88d5931ea127/Captura%20de%20pantalla%202025-07-24%20131005.png)
- Esta funcion limpia la caja de texto donde escribimos el nombre

**function asignarTextoId(id,texto)**

![Imagen Alt]()
- Funcion que agrega un texto especificando solo el id, utilizamos innerHTML

**function agregarAmigo()**

![Imagen Alt[]()](https://github.com/vikdir134/challenge-amigo-secreto/blob/0423b0d31f48785bbb3d7ca87386c9fd4c7d9e5f/Captura%20de%20pantalla%202025-07-24%20131013.png)
- Esta funcion ingresa en el array creado los amigos ingresados en la caja de texto verificando que no sean campos nulos,no sean repetidos, y finalmente limpian la caja de texto

**function sortearAmigo()**

![Imagen Alt](https://github.com/vikdir134/challenge-amigo-secreto/blob/0aaaf753ead64e942bf72d2891675006e1a49f5a/Captura%20de%20pantalla%202025-07-24%20131016.png)
- Por ultimo esta funcion genera un numero aleatorio Math.floor(Math.random() * amigos.length), garantizando asi que el numero aleatorio sea un indice posible de la lista amigos, ademas muestra en la consola el numero elegido y a que elemento de la lista pertenece, por ultimo limpia la lista de amigos generada en la pagina y muestra el amigo secreto.

**Extra:**
Podemos agregar nuevamente amigos con el boton Añadir esto limpia la lista y el nombre ganador,ojo no elimina los elementos de la lista solo agrega nuevos elementos a la lista ya existente, esto se realizo por si se olvidaron de un amigo, o un participante mas y no quieren volver a ingresar los antiguos amigos
 
 **Imagenes**
 

COMENTARIO IMPORTANTE: me la jugué agregando una ALERTA para que el/la usuario/a pueda ver las fotos en una nueva ventana, al aceptar.
Funciona muy bien cuando se carga el servidor desde el VSC.
El objetivo es poder subir muchas fotos sin tener que estar retrocediendo el servidor en el navegador.

AL ABRIR EL SERVIDOR POR PRIMERA VEZ: Lo que puede pasar es que salga un error al recargar el servidor ya que pedirá ACEPTAR la subida de una imagen
que aún no se sube. Se mostrará la ventana nueva donde debiera ir la nueva foto, pero como aún no se sube esta foto saldrá este error:
Cannot GET /assets/uploads/null
que significa que la URL tiene un valor NULL (no existe en este caso)

Sin embargo la página inicial, Index.html se mantiene y se puede hacer el requerimiento de la prueba ahí, sin problemas.

No tengo el conocimiento aún para lograr que index.html retorne al estado original al recargar la página sin que se active la alerta

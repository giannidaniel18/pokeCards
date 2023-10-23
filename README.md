## Por hacer
+


*---------------
Index
*---------------
- inventar un inicio
    - 
- Agregar skeletons de carga
- Agregar un max with en el layout principal
- Agregar un paginado, por ejemplo si elijo que sean 50 resultados, deberia poder mostrar en la primer pagina los primneros 50 y en la 2da los otros 50 y asi.

https://pokemontcg.guru/search?view=List&order=name&sort=Asc&supertypes%5B%5D=Trainer&commit=Search

*-------------------
NavBar
*-------------------



*---------
Fixes y refactors
*-----------------
- Poder filtrar x mas de 1 tipo
- Arreglar el filter button
- Que los filter tags se muestren despues de aplicarlos, no en el onChange.
- Revisar el efecto selected en los types
- SORTS
- fixear posicion responsive del filter container

*------------------
SelectedCard
*-----------------
- convertir <PokemonCard> en un link a una ruta en donde se obtenga el pokemon By id usando la funcion del CustomHook.
- Mostrar la carta mas grande con sus repsectivas fortalezas y debilidades


*-----------------
Futuras ideas
*-----------------
- Autenticacion de usuarios
- generar sobres con efectos y mostrar que tan valioso fue el sobre


*------
- Ver si podemos agregar server side rendering para la carga inicial y despues manejar eso con un estado global para ahorrar peticiones.
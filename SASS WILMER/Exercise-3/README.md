
Modify the exercise 2 code about mixin by creating a module for all declared variables.
Then, create a module with a function. This function should accept a number as parameter and return the value converted into rem. 1rem is equal to 16px
This function should be applied in the main stylesheet, so that the only sizing unit is rem.

**Suggestion:**

@function rem(...
@return calc(...
}

@use "functions" as f;
...


Modifique el código del ejercicio 2 sobre mixin creando un módulo para todas las variables declaradas.
Luego, crea un módulo con una función. Esta función debería aceptar un número como parámetro y devolver el valor convertido a rem. 1rem es igual a 16px
Esta función debe aplicarse en la hoja de estilo principal, de modo que la única unidad de tamaño sea rem.
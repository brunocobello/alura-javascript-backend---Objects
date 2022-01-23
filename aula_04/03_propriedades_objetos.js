const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
   ]}

   console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))


// Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;

// Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;

//Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
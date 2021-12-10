# Conversor-Valor-Bitcoin
Un pequeño conversor del valor de Bitcoin (BTC) a Dolares Americanos (USD)

Este proyecto es un trabajo en equipo realizado para la clase de Computacion tolerante a fallas, seccion D06.

Los participantes son:

  -Javier Tapia Echegollen
  
  -Jesus Arturo Gonzalez Peña
  
  -Benjamin Rivas Varela
  
Se genero una sencilla pagina hecha en html que genera la conversion de dolares a su equivalente en bitcoin. Se va convirtiendo el valor en cuanto se ingresa en el cuadro de texto y se actualiza con cada digito que se ingresa. el valor de bitcoin se actualiza cada que se refresca la pagina.

![cap1](https://user-images.githubusercontent.com/86432373/144897806-d80cfc33-1c2b-4199-b416-a9cb9c6b245f.png)

![cap2](https://user-images.githubusercontent.com/86432373/144898026-b252e2a7-4101-439f-9dee-e0bb4af9ef3d.png)

De igual manera, se genero una pequeña pagina secundaria solo para dividir servicios. Aqui se registran las visitas generadas a la pagina con flask y una pequeña base de datos integrada.

![cap3](https://user-images.githubusercontent.com/86432373/144898187-106f2c05-b08c-49e4-9f58-e0f4decef7d6.png)

Habiendo generado las paginas anteriores, se montaron en una carpeta conjunta en donde se añadieron los archivos necesarios para ejecutarlo en docker. Para ello se hizo uso de los comandos:
  
  docker-compose build
  
  docker-compose up
  
Con esto se cargaran las imagenes necesarias para soportar el contenedor de la aplicacion.
  
![image](https://user-images.githubusercontent.com/86432373/144899781-6d15a57a-bb34-47e2-a62b-23b6c128199a.png)

![image](https://user-images.githubusercontent.com/86432373/144899822-dee9b216-9f1c-487a-9ccf-80c66ea38410.png)


Video del proyecto: https://youtu.be/_HzTTMZUfsE

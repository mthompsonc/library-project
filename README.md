# A(ddi)CTIVE

Una mini librería que sirve para atraer la atención del usuario a tu página web por medio de divertidas animaciones proporcionadas a los divs de tu html.


## Instalación

Si posees npm, puedes guardarlo de la siguiente manera

```
npm install addictive --save
```

Si no, puedes forkear este repositorio y clonarlo en tu proyecto

```
git clone https://github.com/mthompsonc/library-project
```
Cuando estés listo para subir tu proyecto, solo tendrás que pedir un Pull Request al repositorio original.


## Aplicandolo a tu proyecto

Primero, debes adjuntar el script que se encuenntra en las carpetqas assets/js

```html
<script src="assets/js//addictive.js"></script>
```

Luego, simplemente utilizas las funciones encontradas en la librería al llamarlas y pasarles como argumento el elemento al que quieras proprcionarle la función (elemento al que llames por medio de DOM o jQuery).

```js
var div1 = $("#div1");
slideRight(div1);
```


#### Requerimientos técnicos:
Para realizar este proyecto implementamos las siguientes complementos:
* node.js `~v.8.9.4`
* npm `~v.5.6.0`
* bootstrap `~v.4.0.0`
* jQuery `~v.3.2.1`
* git `~v.2.16.0`
* eslint `~v.4.15.0`
* babel `v.6.23.0`


# A(ddi)CTIVE

A mini-library you can use in your webpage to draw the attention of your users with fun animations given to any div (if not all!) of your html.


## Install

If you have npm, you can install it by the following command

```
npm install addictive --save
```

else, you can fork this repository and clone it in your project

```
git clone https://github.com/mthompsonc/library-project
```
when you are ready to upload your project you only have to ask for a Pull Request to this repository.


## Setup

First, you need to attach the script located in the folders assets/js 

```html
<script src="assets/js//addictive.js"></script>
```

Then, you can simply trigger the animations by calling the function you want, with the element you want to animate as the argument (element you can call by DOM or Jquery)

```js
var div1 = $("#div1");
slideRight(div1);
```


#### Technical requirements:
To make this project we used the following components:
* node.js `~v.8.9.4`
* npm `~v.5.6.0`
* bootstrap `~v.4.0.0`
* jQuery `~v.3.2.1`
* git `~v.2.16.0`
* eslint `~v.4.15.0`
* babel `v.6.23.0`
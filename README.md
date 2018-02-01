![img](https://image.ibb.co/hgvcuR/addictive_logo.png)


Una mini librería que sirve para atraer la atención del usuario a tu página web por medio de divertidas animaciones proporcionadas a los divs de tu html.


## Instalación

Si posees npm, puedes guardarlo de la siguiente manera

```
npm install libraryproject --save
```

Si no, puedes forkear este repositorio y clonarlo en tu proyecto

```
git clone https://github.com/mthompsonc/library-project
```


## Aplicandolo a tu proyecto

Primero, debes adjuntar el script que se encuentra en la carpeta src

```html
<script src="src/addictive.js"></script>
```

O bien, añadir el CDN de la librería, en caso que no desees descargarla.

```html
<script src="https://cdn.rawgit.com/mthompsonc/library-project/developer/src/addictive.js"></script>
```

Luego, simplemente utilizas los plugins encontrados en la librería aplicándolos al elemento que desees (elemento al que llames por medio de DOM o jQuery).

```js
$("#cualquierDiv").slideRight();
$("#cualquierDiv").slideLeft();
$("#cualquierDiv").slideTop();
```

Para hacer uso del plugin slideTop es necesario aplicarlo a un div vacío, ya que la librería le agregará el botón.

```html
<div id='cualquierDiv'></div>
```

#### Requerimientos técnicos:
Para realizar este proyecto implementamos las siguientes complementos:
* node.js `~v.8.9.4`
* npm `~v.5.6.0`
* bootstrap `~v.4.0.0`
* jQuery `~v.3.3.1`
* git `~v.2.16.0`
* eslint `~v.4.15.0`
* babel `v.6.23.0`
* chai `v.4.1.2`
* mocha `v.5.0.0`
* jsdom `v.11.6.1`

***

![img](https://image.ibb.co/hgvcuR/addictive_logo.png)


A mini-library you can use in your webpage to draw the attention of your users with fun animations given to any div (if not all!) of your html.


## Install

If you have npm, you can install it by the following command

```
npm install libraryproject --save
```

else, you can fork this repository and clone it in your project

```
git clone https://github.com/mthompsonc/library-project
```


## Setup

First, you need to attach the script located in the folder src

```html
<script src="src/addictive.js"></script>
```

Or else, if you do not wish to download the library, you could attach the CDN

```html
<script src="https://cdn.rawgit.com/mthompsonc/library-project/developer/src/addictive.js"></script>
```

Then, you can simply trigger the animations by applying the plugins to any element you want (element you can call by DOM or Jquery)

```js
$("#anyDiv").slideRight();
$("#anyDiv").slideLeft();
$("#anyDiv").slideTop();
```

To work with the plugin slideTop it's necessary to apply it to an empty div, being that the library will add the button.

```html
<div id='anyDiv'></div>
```


#### Technical requirements:
To make this project we used the following components:
* node.js `~v.8.9.4`
* npm `~v.5.6.0`
* bootstrap `~v.4.0.0`
* jQuery `~v.3.3.1`
* git `~v.2.16.0`
* eslint `~v.4.15.0`
* babel `v.6.23.0`
* chai `v.4.1.2`
* mocha `v.5.0.0`
* jsdom `v.11.6.1`

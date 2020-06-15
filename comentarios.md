Querida Tefi, estoy muy contenta viendo tu trabajo final. Todo lo que aprendiste a lo largo de la cursada se nota aca, y todo tu esfuerzo esta bien representado. Detalles como hacer la paginacion a mano, el cuidado que le pusiste a la maqueta, lo lindo que esta en estilado, lo comodo que es usar tu pagina: todo revela una pasión por lo que estas haciendo que es dificil de encontrar. Se nota que esto te gusta. Se nota que tenes talento para esto. Es un privilegio poder ver como fuiste creciendo y encontrandote en el mundo del front end. Desde ya, estas aprobadisima, ya que este trabajo demuestra la comprension de los principios de React y JavaScript, asi como de maquetado y todas las herramientas accesorias que fuimos viendo. Pero mas que eso, este trabajo demuestra pasión: y cuando se tiene eso, nada más es necesario. Gracias por permitirme ser parte. 

Como siempre, dejo algunos comentarios para tomar en cuenta en este trabajo y en los que vengan a partir de ahora:

- Es costumbre poner en el README de Github los pasos que tiene que hacer alguien para poder correr tu codigo. En React lo habitual es contar que hay que clonar el repo, hacer npm install y que la app corre en el puerto localhost:3000. Te recomiendo agregarlo, ya que suma bastante para los lectores de tu github. 

- Tenes muuuuuuuuuuchos warnings, errores y console.log en la consola. Es algo que cualquier persona que evalúe tu código - ya sea para un challenge tecnico o en un eventual trabajo - va a mirar, y ademas suelen ser consejos útiles para ir mejorando el código. Te recomiendo que los revises y los vayas sacando. Intentare marcalos cuando me los cruce con una mirada desaprobatoria: ಠ_ಠ

- Tu tabulado es bastante prolijo, lo que tiene mucho merito en tu nivel de aprendizaje. Pero vas saltando entre usar dos o cuatro espacios, lo que no se recomienda: siempre es bueno mantener ese tipo de estilos consistentes. Acostumrate a prestarle atencion. Mi consejo es que te bajes una extension como prettier - funciona con clic derecho + format element, y lo podes configurar para que se adapte a tu estilo preferido, dos o cuatro espacios, usar comillas simples o dobles, etc. 

- Hay varias ocasiones donde usas React Fragment (<>) innecesariamente. Atención a esos detalles. 

- Movies y Tv podrian ser el mismo componente, si usan useParams() para determinar en que ruta estan. 

- Trata de respetar las convenciones en los nombres de tus variables: camelCase para las variables, como titleMedia en lugar de titlemedia. Simplifica la lectura, pero mas importante aun, en el mundo del desarrollo trabajamos en equipo y es importante que todos usemos la misma convención para evitar problemas a futuro (tus compañeros de trabajo van a escribir titleMedia y su codigo no va a funcionar si vos escribis titlemedia sin mayuscula)

- Usas el codigo de paginacion en varios componentes, asi que deberias componentizarlo - no deberia repetirse tres veces. Si te trae problemas hacerlo, escribime!!

- El substring "https://api.themoviedb.org/3/" se repite muchas, muchas veces a lo largo del codigo, y es logico ya que es la base de todas las url de nuestra api. Lo habitual y preferible en este caso es convertirla en una variable global. Por ejemplo en la carpeta /assets podemos hacer un archivo (lo usual es que se llame constants.js) y ahi asignarles una variable a estos strings que se usan siempre. Luego se lo exporta, y se lo importa en donde se necesite. 

Por ejemplo:


```js 
const API_URL = "https://api.themoviedb.org/3/";

export default API_URL
```

Y al usar la variable escribimos: 

```js
API URL + 'trending/movie/week?api_key=' + API_KEY 
```




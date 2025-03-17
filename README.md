# Parcial React Joan Amaya 202011318

Esta es una aplicación desarrollada en React que permite a los usuarios explorar un catálogo de alimentos, tiendas y gestionar su carrito de compras. La aplicación tiene como objetivo brindar una experiencia accesible y multilingüe, centrada en la reducción del desperdicio de alimentos.

## Requisitos Previos

Para ejecutar la aplicación es necesario contar con Node.js versión 18 o superior y npm versión 9 o superior. También es necesario disponer de conexión a internet para la instalación de las dependencias y para acceder a los recursos externos utilizados en la aplicación.

## Instalación

Primero se debe clonar el repositorio del proyecto. Una vez dentro de la carpeta raíz, se deben instalar las dependencias. Es importante usar la opción `--legacy-peer-deps` para evitar conflictos en la resolución de versiones entre las diferentes dependencias. A continuación se detallan los comandos a ejecutar.

npm install react-intl --legacy-peer-deps  
npm install react-router-dom  
npm install bootstrap  

Otra opción es instalar todas las dependencias listadas en el package.json de una sola vez, usando el comando siguiente. En este caso también es necesario incluir la opción `--legacy-peer-deps`.

npm install --legacy-peer-deps

## Ejecución de la Aplicación

Para ejecutar la aplicación en un entorno de desarrollo se debe utilizar el siguiente comando.

npm start

Esto levantará un servidor de desarrollo que se ejecutará en la dirección http://localhost:3000. Desde ahí se puede visualizar y probar la aplicación en el navegador.

## Dependencias Principales

Se utilizaron tres dependencias clave en el desarrollo de esta aplicación. La primera es react-intl, la cual permite la internacionalización de los textos en pantalla. La segunda es react-router-dom, que facilita la navegación entre pantallas a través de rutas. La tercera es bootstrap, que se empleó para mejorar el diseño y la experiencia de usuario, haciendo que la interfaz sea responsiva y estéticamente agradable.

## Decisiones Técnicas

Se tomó la decisión de estructurar la aplicación en componentes funcionales, cada uno encargado de una responsabilidad específica. Por ejemplo, el componente Login se encarga de manejar el formulario de autenticación, mientras que HomeCard gestiona la navegación a través de enlaces visuales a otras secciones de la aplicación.

Se utilizaron importaciones de componentes de la librería react-bootstrap como Form, ya que proporciona componentes de formularios preconstruidos que se integran fácilmente con el diseño de la aplicación y garantizan una buena experiencia de usuario en dispositivos móviles y de escritorio.

El enrutamiento se realizó con react-router-dom para permitir la navegación entre las vistas sin necesidad de recargar la página. Se usaron los hooks useNavigate y useParams para gestionar la navegación dinámica según la selección del usuario.

Para la internacionalización, se optó por react-intl debido a su facilidad para gestionar múltiples idiomas y formatos de mensajes. Se hizo uso del hook useIntl y del componente FormattedMessage para mostrar textos traducidos dinámicamente según la configuración de idioma seleccionada por el usuario. La decisión de usar react-intl también responde a su flexibilidad para manejar pluralización y formatos de fecha y número, aunque en este proyecto inicialmente solo se aplicaron traducciones simples de mensajes.

En cuanto a los estilos, se optó por dividirlos en archivos CSS individuales por componente. Esto permite un mejor mantenimiento y escalabilidad, ya que los estilos están organizados de acuerdo al componente que afectan. Por ejemplo, el archivo login.css contiene únicamente los estilos relacionados al componente Login.

Para garantizar que los nombres de las rutas se mantuvieran consistentes con el idioma actual, se manejaron las rutas dinámicamente en el componente HomeCard. Dependiendo del idioma configurado, las rutas cambian su valor, por ejemplo, 'MENU' o 'MENÚ'.

Finalmente, en el componente Food se realizó una validación de rutas para que al cambiar el idioma se actualice la ruta actual automáticamente. Además, se realizó una llamada a un endpoint externo para obtener la información de los productos, simulando una integración con una fuente de datos real.

## Componentes Desarrollados

La aplicación está estructurada en varios componentes funcionales que cumplen con responsabilidades específicas dentro del flujo de la aplicación:

### Componente `Login`

Este componente se encarga de gestionar el formulario de inicio de sesión. Incluye validación del campo de contraseña, que debe tener al menos ocho caracteres, y muestra mensajes de error si no se cumple esta condición. Se emplea `react-intl` para los mensajes multilingües, `react-bootstrap` para el diseño del formulario y `react-router-dom` para la navegación hacia la vista principal después del login exitoso.

### Componente `Home`

Este componente representa la página principal de la aplicación después del inicio de sesión. Actúa como contenedor del componente `HomeCard`, que es el encargado de mostrar los accesos rápidos a las diferentes secciones como menú, tiendas y carrito.

### Componente `HomeCard`

Este componente contiene una interfaz visual con iconos que permiten al usuario navegar a las diferentes secciones de la aplicación. Se utiliza `react-router-dom` para gestionar las rutas dinámicas basadas en el idioma actual. Se hace uso de `react-intl` para mostrar los textos en el idioma correspondiente.

### Componente `Food`

Este componente gestiona la vista de detalle de cada sección como MENÚ, TIENDAS y CARRO. Se obtiene el parámetro de la ruta para identificar qué vista mostrar, y se traduce dinámicamente el título según el idioma seleccionado por el usuario. Además, realiza una llamada a un API simulada para cargar productos y mostrarlos en tarjetas dentro de la vista. Se usa `react-bootstrap` para incluir un carrusel de imágenes en la parte superior.

### `index.js` y `App`

En `index.js` se monta la aplicación dentro del DOM y se configura el `IntlProvider` de `react-intl` para permitir la internacionalización global en la aplicación. También se define el enrutamiento principal utilizando `react-router-dom`, incluyendo las rutas para las vistas de `Login`, `Home` y `Food`. El componente `App` centraliza estas configuraciones y proporciona la estructura general de navegación.

# Ejecución ejemplo gráfico
Primero ejecutamos el app y nos redirecciona al Login
![image](https://github.com/user-attachments/assets/c8fe5757-c568-4db2-b67a-8a45db99b716)
Si cambiamos de idioma se nos cambian algunos Labels estaticos
![image](https://github.com/user-attachments/assets/2192f788-4465-4312-a612-ad6c894b50b1)

Ahora iniciando sesión vamos a la pagina de home, así es en español
![image](https://github.com/user-attachments/assets/01a6073f-e20d-4d5c-a7de-bacb7b8ce001)
Ahora si cambiamos a inglés obtenemos los textos en dicho idioma 
![image](https://github.com/user-attachments/assets/8d87c959-bab5-4796-9c3b-cd821fee1ab4)
Ahora si vamos a una de las páginas el titulo nos queda de acuerdo a lo que clickeamos
![image](https://github.com/user-attachments/assets/2a80e560-bd71-49c7-8df2-524bc101c13b)
Si cambiamos de idioma nos redirige a la página correspondiente del idioma:
![image](https://github.com/user-attachments/assets/8acb4296-d97a-4407-a391-7fff295d749a)












# Parcial Reac Joan Amaya 202011318

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

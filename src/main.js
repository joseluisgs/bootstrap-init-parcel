// Fichero JS principal donde cargarmos las configuraciones por defecto
// console.log('hola mundo con Parcel.js');

// Importamos los recursos genéricos
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';
// Para usar JQuery
import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

// Mis estilos
import './scss/main.scss';

// Vamos cargando nuestros cripts y los llamamos
import { index } from './scripts/index';
index();


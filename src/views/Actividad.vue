<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Analizar los principios de funcionamiento, tipos y aplicaciones de los dispositivos LED y <i>displays</i>.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué significa la sigla LED en inglés?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>Light Emitting Display</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<i>Light Emitting Diode</i>.',
              esCorrecta: true,
            },
            { id: 'c', texto: '<i>Low Energy Diode</i>.', esCorrecta: false },
            {
              id: 'd',
              texto: '<i>Long Emission Diode</i>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué material se utiliza comúnmente en LEDs rojos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aluminio.', esCorrecta: false },
            { id: 'b', texto: 'GaP (fosfuro de galio).', esCorrecta: true },
            { id: 'c', texto: 'Silicio.', esCorrecta: false },
            { id: 'd', texto: 'Cobre.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es la función principal de un LED?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Emitir luz.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Medir la corriente eléctrica.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Generar calor.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Bloquear el paso de corriente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué determina el color de la luz emitida por un LED?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El tamaño del LED.', esCorrecta: false },
            { id: 'b', texto: 'El material semiconductor.', esCorrecta: true },
            {
              id: 'c',
              texto: 'La cantidad de energía eléctrica.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El voltaje aplicado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de los siguientes es un tipo de <i>display</i>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'LED verde.', esCorrecta: false },
            { id: 'b', texto: 'Diodo infrarrojo.', esCorrecta: false },
            {
              id: 'c',
              texto: '<i>Display</i> de 7 segmentos.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Diodo de potencia.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué se utiliza para representar caracteres y símbolos especiales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'LED infrarrojo.', esCorrecta: false },
            {
              id: 'b',
              texto: '<i>Display</i> de 5 segmentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<i>Display</i> alfanumérico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<i>Display</i> de alta frecuencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una aplicación común de los LED?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Señalización y pantallas de dispositivos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Almacenamiento de energía.', esCorrecta: false },
            { id: 'c', texto: 'Regulación de voltaje.', esCorrecta: false },
            { id: 'd', texto: 'Medición de temperatura.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de conexión se utiliza en los <i>displays</i> de ánodo común?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conexión al positivo.', esCorrecta: true },
            { id: 'b', texto: 'Conexión al negativo.', esCorrecta: false },
            { id: 'c', texto: 'Conexión a tierra.', esCorrecta: false },
            { id: 'd', texto: 'Conexión en paralelo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los LED pueden emitir luz en todo el espectro de luz visible.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Un LED verde suele estar compuesto de GaP.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

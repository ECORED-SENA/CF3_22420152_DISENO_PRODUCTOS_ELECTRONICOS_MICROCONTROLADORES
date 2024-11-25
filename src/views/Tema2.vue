<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 #[i Display]
    .row.bg-c6
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row.mb-3
                .col-12
                  .p-3.bg-c2
                    p.mb-0 Un #[i display] o visualizador es una unidad de presentación de información que permite mostrar dígitos numéricos, caracteres alfanuméricos y símbolos especiales. Común en diversos aparatos electrónicos, este dispositivo facilita la presentación de datos al usuario y tuvo su origen con la incorporación de #[i displays] en calculadoras, cajas registradoras e instrumentos de medición electrónica.
              p.mb-0 Inicialmente, los #[i displays] usaban lámparas para iluminar leyendas, similares a los indicadores de ascensores. Con el tiempo, se introdujeron los tubos Nixie, semejantes a lámparas de neón con varios ánodos, que permitían la representación de símbolos. La invención del visualizador de 7 segmentos fue un avance importante en este ámbito.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='', style='width: 350px').m-auto
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Funcionamiento de un #[i display]
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 El funcionamiento de un #[i display] se basa en el encendido y apagado de una serie de luces que componen los siete segmentos necesarios para formar números. Cada segmento está conectado a una patilla específica que recibe la señal para encender o apagar el segmento correspondiente.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 350px').m-auto
    .row.bg-c7.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-down")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Ánodo común]
                    p.mb-0 En este tipo, todos los ánodos de los LED o segmentos están conectados internamente a una patilla común, la cual debe conectarse a un potencial positivo (nivel “1”). Para encender un segmento, se aplica un potencial negativo (nivel “0”) mediante la patilla correspondiente, a través de una resistencia que regula la corriente.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img5.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b Cátodo común]
                    p.mb-0 En esta configuración, todos los cátodos de los LED o segmentos están unidos a una patilla común, que debe conectarse a un potencial negativo (nivel “0”). El encendido de cada segmento individual se logra aplicando un potencial positivo (nivel “1”) a través de la patilla correspondiente, utilizando una resistencia para limitar el flujo de corriente.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img6.png', alt='', style='width: 400px').m-auto
                .row.justify-content-center
                  .col-lg-5.mb-4.mb-lg-0
                    p #[b #[i Display] de 7 segmentos]
                    p.mb-0 Este #[i display] está diseñado para representar números del 0 al 9 y algunas letras, tanto en mayúsculas (como la A) como en minúsculas (como la b o la d).
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema2/img7.png', alt='', style='width: 400px').m-auto
    .row.bg-c6
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 #[i Displays] alfanuméricos
          p.mb-5(data-aos="fade-right") Los #[i displays] alfanuméricos se utilizan para representar tanto números como letras y símbolos especiales, permitiendo así una comunicación visual más completa en comparación con los #[i displays] numéricos. A continuación, se describen los tipos más comunes:
          .row.justify-content-center.mb-5
            .col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
              .p-4.bg-c8
                figure.mb-3
                  img(src='@/assets/curso/tema2/img8.png', alt='', style='width: 100px').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2
                      p.mb-0 #[b 16 segmentos]
                p.text-center.mb-0 Similar al #[i display] de siete segmentos, pero con dieciséis segmentos que permiten representar una mayor variedad de caracteres y símbolos especiales.
            .col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
              .p-4.bg-c8
                figure.mb-3
                  img(src='@/assets/curso/tema2/img9.png', alt='', style='width: 100px').m-auto
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2
                      p.mb-0 #[b 35 puntos]
                p.text-center.mb-0 Consiste en una matriz de puntos dispuestos en siete filas de cinco puntos cada una, lo que permite una representación más precisa de caracteres y símbolos en comparación con el #[i display] de 16 segmentos. Los segmentos pueden tener diferentes colores, siendo el rojo el más común por su facilidad de visualización.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Aplicaciones
          p.mb-4(data-aos="fade-right") Los #[i displays] se utilizan en circuitos electrónicos que controlan el encendido de luces para mostrar números y datos como tiempo, kilometraje, peso, temperatura, entre otros parámetros. Además, son empleados para monitorear cantidades y otras variables en diversos sistemas.
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img10.png', alt='', style='width: 900px').m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

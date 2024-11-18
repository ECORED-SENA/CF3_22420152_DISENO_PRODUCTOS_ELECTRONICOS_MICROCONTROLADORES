<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 LED
    .row.justify-content-center.mb-4
      .col-md-7.col-lg.bg-c2.order-2.order-lg-1(data-aos="fade-right")
        .p-4.h-100
          .row.align-items-center.h-100
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width:100px").m-auto
            .col
              p.mb-0 El LED (#[i Light-Emitting Diode], Diodo Emisor de Luz) es un dispositivo semiconductor que emite luz incoherente de espectro reducido al polarizar directamente la unión PN, a través de la cual circula una corriente eléctrica. 
      .col-md-7.col-lg-auto.ps-lg-0.px-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width:380px").m-auto
    p.mb-0(data-aos="fade-down") El color de la luz emitida depende del material semiconductor utilizado en la construcción del diodo y puede abarcar desde el ultravioleta, pasando por el espectro de luz visible, hasta el infrarrojo. Estos últimos se denominan diodos IRED (#[i Infra-Red Emitting Diode]).
    .row.bg-c3
      .col-12
        .px-5.pt-5
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Tipos de LED
          p.mb-5(data-aos="fade-right") Los LED se presentan en diversas formas, tamaños y colores. Existen LED redondos, cuadrados, rectangulares, triangulares y de otras configuraciones. Los colores básicos son rojo, verde y azul, aunque también los hay en tonos naranjas, amarillos e incluso en luz blanca. Las dimensiones de los LED redondos suelen ser de 3 mm, 5 mm, 10 mm y un tamaño gigante de 20 mm, mientras que los de formas poliédricas presentan medidas aproximadas de 5 x 5 mm.
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 LED de colores
          p.mb-5(data-aos="fade-right") Los LEDs de colores varían según los materiales semiconductores utilizados en su construcción, lo que permite la emisión de diferentes longitudes de onda y, por ende, colores específicos. A continuación, se describen los tipos más comunes de LED de colores, detallando sus composiciones y aplicaciones.
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-down")
            .row.align-items-center(titulo="LED rojo")
              .col-lg-8
                p.mb-0 Compuesto de GaP, se caracteriza por una unión p-n obtenida mediante crecimiento epitaxial del cristal en fase líquida sobre un sustrato. La fuente luminosa está formada por una capa de cristal p junto con un complejo de ZnO, cuya concentración se controla para evitar la saturación de luminosidad a altas densidades de corriente. Funciona con baja densidad de corriente y es útil en equipos portátiles. Los LED de GaAsP, con una capa p obtenida por difusión de Zn durante el crecimiento de un cristal n de GaAsP sobre un sustrato de GaAs, se producen por el método de crecimiento epitaxial en fase gaseosa. Actualmente, el LED de GaAlAs es preferido por su mayor luminosidad, alcanzando un pico de radiación en la longitud de onda de 660 nm.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 350px').m-auto
            .row.align-items-center(titulo="LED anaranjado y amarillo")
              .col-lg-8
                p.mb-0 Al igual que los LED rojos, están compuestos de GaAsP. Para generar luz anaranjada y amarilla, se incrementa la proporción de fósforo en el semiconductor, ampliando el ancho de la “banda prohibida” y generando una longitud de onda más corta. La fabricación es similar a la de los diodos rojos, con crecimiento epitaxial en fase gaseosa y formación de la unión p-n mediante difusión de Zn. En estos LED se integra una trampa isoelectrónica de nitrógeno para mejorar el rendimiento.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 350px').m-auto
            .row.align-items-center(titulo="LED verde")
              .col-lg-8
                p.mb-0 Compuesto de GaP, se fabrica mediante crecimiento epitaxial del cristal en fase líquida para formar la unión p-n. También utiliza una trampa isoelectrónica de nitrógeno para optimizar su rendimiento. Debido a su baja probabilidad de transición fotónica, se prioriza la mejora de la cristalinidad en la capa n, disminuyendo impurezas para extender la vida de los portadores y mejorar la emisión, alcanzando su máxima intensidad en la longitud de onda de 555 nm.
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='', style='width: 350px').m-auto
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Funcionamiento
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 El LED es un dispositivo semiconductor en el cual, al recibir corriente, los electrones se desplazan a través del material semiconductor y algunos pasan a un estado de menor energía. Durante este proceso, se emite la energía excedente en forma de luz. La longitud de onda, y por ende el color, se ajusta mediante la selección de materiales semiconductores y técnicas de manufactura específicas. La dispersión de la longitud de onda de la luz emitida es relativamente breve, resultando en colores más intensos.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img6.png', alt='', style='width: 350px').m-auto
          .row.mb-4
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 50px')
                .col
                  h3.mb-0 Aplicaciones
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 Las matrices de LED son arreglos en los cuales cada LED puede encenderse y apagarse individualmente desde un microcontrolador. Funcionan como pantallas de baja resolución, en las que se pueden proyectar gráficos y textos, tanto estáticos como en movimiento.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.png', alt='', style='width: 350px').m-auto
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img8.png', alt='', style='width: 350px').m-auto
            .col-lg-8(data-aos="fade-left")
              .row
                .col-12
                  .p-3.bg-c5
                    p.mb-0 Los diodos LED son ampliamente utilizados en indicadores de estado (encendido/apagado), dispositivos de señalización (señales de tráfico, luces de emergencia, etc.) y en paneles informativos. También se emplean en la iluminación de pantallas de cristal líquido de teléfonos móviles, calculadoras y dispositivos electrónicos similares, así como en bicicletas y otros productos.
      
</template>

<script>
export default {
  name: 'Tema1',
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

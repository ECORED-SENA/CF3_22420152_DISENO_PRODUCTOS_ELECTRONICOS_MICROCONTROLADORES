<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Los LED y displays son componentes clave en la tecnología de visualización actual, presentes en dispositivos desde móviles hasta señales de tráfico. Los LED, o diodos emisores de luz, son semiconductores que generan luz en distintos colores según el material utilizado. Esta versatilidad los convierte en ideales para aplicaciones que requieren eficiencia, durabilidad y una amplia gama de colores, desde indicadores hasta iluminación de ambientes.
        .row
          .col-12
            .p-3.bg-c1
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/intro/img1.svg", alt="", style="width:100px").m-auto
                .col
                  p.mb-0 Por su parte, los displays permiten mostrar información en formatos como dígitos, caracteres y símbolos especiales. Los más comunes son los displays de 7 segmentos y alfanuméricos, empleados en relojes, calculadoras y paneles informativos. Juntos, LED y displays son esenciales en la interacción visual con dispositivos electrónicos, facilitando la comunicación y la transmisión de datos.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.png", alt="", style="width:350px").m-auto
    figure(data-aos="fade-right")
      img(src="@/assets/curso/intro/img2.png", alt="", style="width:1270px").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

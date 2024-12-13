export default {
  global: {
    componenteFormativo: 'Manejo de salidas: LED y <i>Display</i>',
    descripcionCurso:
      'El componente formativo aborda el funcionamiento y aplicaciones de LED y <i>displays</i>. Los LED, semiconductores que emiten luz en diversos colores según el material, se usan en indicadores y señalización. Los <i>displays</i>, que presentan información en dígitos y símbolos, operan encendiendo segmentos de luz. Ambos dispositivos son fundamentales en tecnologías de visualización en electrónica y comunicación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'LED',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<i>Display</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22420152_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'LED',
      referencia:
        'Mentalidad De Ingeniería. (2023). Cómo Funcionan los LED - Descubre los Misterios de Cómo Funcionan los LED. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=PugXcHWBt_M&ab_channel=MentalidadDeIngenier%C3%ADa',
    },
    {
      tema: 'LED',
      referencia:
        'Sanchis, E., y  Ejea, J. B. (2008). B.5. El diodo de emisión de luz (LED). Universidad de Valencia.',
      tipo: 'Documento',
      link: 'https://www.uv.es/=esanchis/cef/pdf/Temas/B_T3.pdf',
    },
    {
      tema: '<i>Display</i>',
      referencia:
        'Androbot TECH. (2021). EL DISPLAY LED - Electronica Digital. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=e67cMsP9IWU&ab_channel=AndrobotTECH',
    },
    {
      tema: '<i>Display</i>',
      referencia:
        'Electronica y comunicaciones. (2022).DISPLAY 7 SEGMENTOS ANODO COMÚN. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=EsJ3JrlcEQ4&ab_channel=Electronicaycomunicaciones',
    },
    {
      tema: '<i>Display</i>',
      referencia:
        'codigoelectronica (2020). Display 7 segmentos cátodo común. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=4na0IsW_0Fo&ab_channel=codigoelectronica',
    },
  ],
  glosario: [
    {
      termino: 'Ánodo común',
      significado:
        'tipo de conexión en <i>displays</i> donde todos los ánodos se conectan a un potencial positivo.',
    },
    {
      termino: 'Cátodo común',
      significado:
        'tipo de conexión en <i>displays</i> donde todos los cátodos se conectan a un potencial negativo',
    },
    {
      termino: 'Diodo Emisor de Luz',
      significado:
        'otro nombre para el LED, que destaca su capacidad de emitir luz.',
    },
    {
      termino: '<i>Display</i> alfanumérico',
      significado:
        'tipo de <i>display</i> capaz de mostrar caracteres y símbolos más complejos mediante segmentos adicionales.',
    },
    {
      termino: '<i>Display</i> de 7 segmentos',
      significado:
        'dispositivo que utiliza siete segmentos iluminados para representar dígitos y letras simples.',
    },
    {
      termino: 'GaAsP',
      significado:
        'arseniuro de galio y fósforo, empleado en LED de colores específicos como rojo y amarillo.',
    },
    {
      termino: 'GaP',
      significado:
        'fosfuro de galio, material utilizado en algunos LED, especialmente en los de color rojo.',
    },
    {
      termino: 'LED',
      significado:
        'dispositivo semiconductor que emite luz cuando recibe una corriente eléctrica.',
    },
    {
      termino: 'Matriz de LED',
      significado:
        'conjunto de LED dispuestos en una cuadrícula, controlados individualmente para formar imágenes o textos.',
    },
    {
      termino: 'Unión PN',
      significado:
        'estructura en los semiconductores que permite el flujo de corriente en una sola dirección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boylestad, R. L., & Nashelsky, L. (2013). Electronic Devices and Circuit Theory (11th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Kasap, S. O. (2017). Principles of Electronic Materials and Devices (4th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Forrest, S. R. (2013). "The path to ubiquitous and low-cost organic electronic appliances on plastic." Nature, 428(6986), 911-918.',
      link: '',
    },
    {
      referencia:
        'Rashid, M. H. (2004). Power Electronics: Circuits, Devices, and Applications (3rd ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Wolfe, C. M., & Holonyak, N. (1999). Physical Properties of Semiconductors. Prentice Hall.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

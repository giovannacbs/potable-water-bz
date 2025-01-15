var config = {
  style: "mapbox://styles/gserafim/cm18hthjl00dz01qk5c9p8fkw?fresh=true",
  accessToken:
    "pk.eyJ1IjoiZ3NlcmFmaW0iLCJhIjoiY20wbnNpb2Z1MDExaTJqcHRpMWdodmsydCJ9.abEuXWbmNaspBtcR9DeMcw",
  showMarkers: false,
  theme: "light",
  title: "By the river and \n without drinking water",
  subtitle:
    "Most schools in the Médio Juruá region, in the state of Amazonas, lack access to drinking water",
  footer: "See the reality of schools near you:",
  chapters: [
    {
      id: "intro",
      alignment: "left",
      title: "",
      imaxge: "",
      hidden: true,
      description: "",
      location: {
        center: [-55.72178, -6.0568],
        zoom: 3,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "satellite",
          opacity: 1.0,
        },
        {
          layer: "escolas_nao",
          opacity: 0.0,
        },
        {
          layer: "escolas",
          opacity: 0.0,
        },
        {
          layer: "rio",
          opacity: 0.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.0,
        },
      ],
      onChapterExit: [
        {
          layer: "satellite",
          opacity: 0.0,
        },
      ],
    },
    {
      id: "escolas_sem_agua",
      alignment: "center",
      title: "Millions without water",
      image: "",
      hidden: false,
      description:
        "According to the 2023 School Census, about <b>1.2 million</b> students in Brazil study in institutions <b>without access to drinking water</b>.",
      location: {
        center: [-55.72178, -15.0568],
        zoom: 3.41,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "escolas",
          opacity: 0.0,
        },
        {
          layer: "escolas_nao",
          opacity: 0.5,
        },
        {
          layer: "rio",
          opacity: 0.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.0,
        },
        {
          layer: "satellite",
          opacity: 0.0,
        },
      ],
      onChapterExit: [
        {
          layer: "escolas_nao",
          opacity: 0.0,
        },
      ],
    },
    {
      id: "AL",
      alignment: "right",
      title: "The situation in the Legal Amazon",
      image: "",
      description:
        "On the map, the <b>Legal Amazon</b> region is marked in green.",
      location: {
        center: [-58.72178, -6.0568],
        zoom: 4,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "escolas",
          opacity: 0.0,
        },
        {
          layer: "escolas_nao",
          opacity: 0.0,
        },
        {
          layer: "rio",
          opacity: 0.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.3,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "escolas_na_AL",
      alignment: "left",
      title: "Drinking water",
      image: "",
      description:
        "Schools with drinking water are marked with <strong style='color: #2c4077;'>blue</strong> icons, and those without drinking water, with <strong style='color: #810808;'>red</strong> icons.",
      location: {
        center: [-58.72178, -6.0568],
        zoom: 4,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "escolas",
          opacity: 0.5,
        },
        {
          layer: "ti",
          opacity: 0.0,
        },
        {
          layer: "rio",
          opacity: 0.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.3,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "complemento_AL",
      alignment: "center",
      title: "Remote locations",
      image: "",
      description:
        "In Brazil, most schools <b>without access to drinking water</b> are located in <b>rural areas</b> (74%), followed by indigenous and quilombola territories.",
      location: {
        center: [-58.72178, -6.0568],
        zoom: 4,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "escolas",
          opacity: 0.5,
        },
        {
          layer: "ti",
          opacity: 0.0,
        },
        {
          layer: "rio",
          opacity: 0.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.3,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "rios",
      alignment: "center",
      title: "Water everywhere",
      image: "",
      description:
        "In the Legal Amazon, the situation is similar but even more shocking due to the <b>abundance of water resources</b>, such as rivers, lakes, and streams.",
      location: {
        center: [-58.72178, -7.0568],
        zoom: 5,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "rio",
          opacity: 1.0,
        },
      ],
      onChapterExit: [
        {
          layer: "rio",
          opacity: 0.0,
        },
      ],
    },
    {
      id: "jurua",
      alignment: "right",
      title: "The Juruá River",
      image: "",
      description:
        "Among the many rivers in the Amazon, there is the <b>Juruá</b>, which originates in Peru and crosses the states of Amazonas and Acre in Brazil, cutting through reserves and indigenous territories. Its course is unique, and the <b>number of schools along its banks without access to drinking water is alarming</b>.",
      location: {
        center: [-67.748257, -5.694546],
        zoom: 8,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "satellite",
          opacity: 1.0,
        },
        {
          layer: "amazonialegal",
          opacity: 0.0,
        },
        {
          layer: "rios",
          opacity: 0.0,
        },
        {
          layer: "escolas",
          opacity: 1.0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "escola",
      alignment: "left",
      title: "The school without water",
      image: "",
      description:
        "This small red dot is the <b>Municipal School Gelcione Calisto</b>. Located on the banks of the Juruá River, it not only lacks access to drinking water but also <b>has no water access at all</b>. And it is not alone—this is the situation of more than 3,000 Brazilian schools.",
      location: {
        center: [-67.748257, -5.694546],
        zoom: 13,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "escolas",
          opacity: 1.0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "6",
      alignment: "right",
      title: "A closer look",
      image: "",
      description:
        "The satellite image reveals more details of the region, showing that the <b>school is located on the riverbank</b>. The lack of drinking water is a serious problem that worsens disease spread, increases school dropout rates, and deepens existing inequalities.",
      location: {
        center: [-67.748984, -5.695084],
        zoom: 17.91,
        pitch: 30,
        bearing: 109.6,
      },
      onChapterEnter: [
        {
          layer: "satellite",
          opacity: 1.0,
        },
      ],
      onChapterExit: [],
    },
  ],
};

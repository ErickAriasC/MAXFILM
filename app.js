

//FUNCIONALIDAD PARA EL MENU HAMBURGUEZA
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navBar = document.querySelector(".content-nav-bar");
    
    menuButton.addEventListener("click", function () {
        navBar.classList.toggle("active");
    });
});


const sectionSeries = document.querySelector(".sectionC-series")
const sectionMovies = document.querySelector(".sectionC-movies")

//BD- PARA MOVIES Y SERIES

//MOVIES
const moviesData = [
    {
        id: 1,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/jurassic park 2.jpg",
        horizontal_cover: " ",
        tittle: "Jurassic Park",
        description: "Un parque temático de dinosaurios se convierte en un peligroso caos cuando los depredadores prehistóricos quedan libres. Los visitantes deben unirse para sobrevivir y escapar de la isla. Jurassic Park es conocida por sus efectos especiales innovadores y tensión palpable, convirtiéndose en un clásico del cine con varias secuelas.",
        director: "Steven Spielberg",
        category: "Adventure",
        year: 1993,
        duration: "2h",
        url: "https://youtu.be/lc0UehYemQA?si=w3MNNxcoaO_z8oBt"
    },
    {
        id: 2,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/indiana jones.jpg",
        horizontal_cover: " ",
        tittle: "Indiana Jones",
        description: "Indiana Jones se embarca en una misión durante la Guerra Fría para encontrar una misteriosa Calavera de Cristal con poderes extraterrestres. Con nuevos aliados y enfrentando enemigos, enfrenta peligros y resuelve enigmas en su búsqueda.",
        director: "Steven Spielberg",
        category: "Adventure",
        year: 2008,
        duration: "2h",
        url: "https://youtu.be/s942xnT-Lhs?si=lsQskM69t9iUJEgG"
    },
    {
        id: 3,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/señor de los anillos.jpg",
        horizontal_cover: " ",
        tittle: "The Lord of the Rings",
        description: "Frodo Baggins emprende una peligrosa misión para destruir el Anillo Único y evitar que caiga en manos del malvado Sauron. Con la ayuda de la Comunidad del Anillo, enfrentan desafíos y peligros en la Tierra Media en su camino hacia el Monte del Destino. La película destaca por su impresionante paisaje visual y efectos especiales, junto con una narrativa envolvente.",
        director: "Peter Jackson",
        category: "Adventure",
        year: 2001,
        duration: "2h 58min",
        url: "https://youtu.be/1YjXoRqUgVk?si=8ry9wa9KG9fOFxFF"
    },
    {
        id: 4,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/que paso ayer.jpg",
        horizontal_cover: " ",
        tittle: "The Hangover",
        description: "Cuatro amigos se despiertan en Las Vegas sin recordar lo ocurrido en su despedida de soltero. Deben seguir pistas para encontrar al novio desaparecido antes de que sea demasiado tarde. En el camino, enfrentan situaciones cómicas y surrealistas en una noche llena de excesos y sorpresas.",
        director: "Todd Phillips",
        category: "Comedy",
        year: 2009,
        duration: "1h 40min",
        url: "https://youtu.be/wnNgGp1KVWQ?si=SgeMFHFsbMREPxA7"
    },
    {
        id: 5,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/son como niños.jpg",
        horizontal_cover: " ",
        tittle: "Grown Ups",
        description: "Un grupo de amigos de la infancia se reúne para homenajear a su fallecido entrenador de baloncesto. Pasan el fin de semana cerca de un lago, reviviendo viejas rivalidades y bromas. La película muestra las situaciones hilarantes que surgen entre estos adultos que a veces actúan como niños.",
        director: "Dennis Dugan",
        category: "Comedy",
        year: 2010,
        duration: "1h 42min",
        url: "https://youtu.be/yMEDiKD7cyE?si=gC4Rqz3vCknFLDdC"
    },
    {
        id: 6,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/y donde estan las rubias.jpg",
        horizontal_cover: " ",
        tittle: "White Chicks",
        description: "Dos agentes del FBI, los hermanos Marcus, se disfrazan como herederas millonarias rubias para protegerlas de un complot criminal. Se enfrentan a hilarantes situaciones mientras intentan mantener la fachada y resolver el caso.",
        director: "Keenen Ivory Wayans",
        category: "Comedy",
        year: 2004,
        duration: "1h 49min",
        url: "https://youtu.be/UxER50XHW-I?si=MleGYXF8R_eF8cEH"
    },
    {
        id: 7,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/El Exorcista 1.jpg",
        horizontal_cover: " ",
        tittle: "The Exorcist",
        description: "El Exorcista sigue a Chris MacNeil y su hija Regan, quienes enfrentan fenómenos aterradores en su casa. A medida que Regan muestra comportamientos perturbadores, Chris busca ayuda y descubre que su hija podría estar poseída por una entidad demoníaca. El Padre Damien Karras, un sacerdote con dudas sobre su fe se convierte en el principal exorcista encargado de enfrentar el mal que posee a Regan.",
        director: "William Friedkin",
        category: "Terror",
        year: 1973,
        duration: "2h",
        url: "https://youtu.be/opBpPS-n30s?si=hL0ZtN0QeGqIcF_l"
    },
    {
        id: 8,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/la monja.jpg",
        horizontal_cover: " ",
        tittle: "La Monja",
        description: "Un sacerdote con un pasado oscuro y una novicia enviada por el Vaticano investigan el suicidio de una monja en una abadía en Rumania. Descubren la presencia de una malévola entidad conocida como La Monja, que amenaza la vida espiritual y física de todos. Juntos, deben enfrentarse a fuerzas oscuras y desentrañar el misterio detrás de la entidad antes de que sea demasiado tarde.",
        director: "Corin Hardy",
        category: "Terror",
        year: 2018,
        duration: "1h 36min",
        url: "https://youtu.be/eqVjGwYFVqQ?si=DsUAhUCQLGPC4tOg"
    },
    {
        id: 9,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/el resplandor 2.jpg",
        horizontal_cover: " ",
        tittle: "El Resplandor",
        description: "Jack Torrance se convierte en el cuidador de un hotel aislado con su familia durante el invierno. Su hijo, Danny, posee una habilidad psíquica llamada el resplandor. Con el tiempo, fuerzas malignas del hotel afectan a Jack, poniendo en peligro a su familia.",
        director: "Stanley Kubrick",
        category: "Terror",
        year: 1980,
        duration: "2h 26min",
        url: "https://youtu.be/A3q03BBwMp4?si=zcK1vS0D2xvWob1a"
    },
    {
        id: 10,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/the truman show.jpg",
        horizontal_cover: " ",
        tittle: "The Truman Show",
        description: "Truman Burbank es el protagonista sin saberlo de un programa de televisión de realidad totalitaria. Vive en un mundo artificial y empieza a sospechar de su realidad. Busca descubrir la verdad y escapar de su vida controlada en el set de televisión.",
        director: "Peter Weir",
        category: "Drama",
        year: 1998,
        duration: "1h 43min",
        url: "https://youtu.be/U6jYmOnnImI?si=SGKpZB5hwYlCoxds"
    },
    {
        id: 11,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/el  padrino.jpg",
        horizontal_cover: " ",
        tittle: "El Padrino",
        description: "La trama sigue a la familia Corleone, una influyente familia de la mafia en Nueva York, liderada por Vito Corleone. La historia aborda conflictos, traiciones y luchas por el poder en el mundo del crimen organizado a lo largo de varias décadas. La película explora temas de lealtad y venganza en un entorno brutal y complejo.",
        director: "Francis Ford Coppola",
        category: "Drama",
        year: 1972,
        duration: "2h 55min",
        url: "https://youtu.be/iOyQx7MXaz0?si=X5YTJIX_FaOcWJbW"
    },
    {
        id: 12,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/titanic 1.jpg",
        horizontal_cover: " ",
        tittle: "Titanic",
        description: "narra la apasionada historia de amor entre Jack, un artista sin recursos, y Rose, una joven aristócrata comprometida. Su romance se ve amenazado por el desastre inminente cuando el Titanic se hunde en 1912, cambiando sus vidas para siempre.",
        director: "James Cameron",
        category: "Drama",
        year: 1997,
        duration: "3h 15min",
        url: "https://youtu.be/tA_qMdzvCvk?si=JxBKkdfKQKVTnbVI"
    },
    {
        id: 13,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/duro de matar 5.jpg",
        horizontal_cover: " ",
        tittle: "Duro De Matar",
        description: "John McClane, un policía de Nueva York se enfrenta a un grupo de terroristas liderados por Hans Gruber que toman un rascacielos en Los Ángeles durante una fiesta de Navidad. McClane se convierte en la última esperanza para los rehenes y lucha por detener los malévolos planes de Gruber. ",
        director: "Jhon McTiernan",
        category: "Action",
        year: 2013,
        duration: "2h 11min",
        url: "https://youtu.be/PVw40p8ZLkw?si=MXdq1KSpb9C2zzp2"
    },
    {
        id: 14,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/mad max 1.jpg",
        horizontal_cover: " ",
        tittle: "Mad Max: Fury Road",
        description: "En un mundo post-apocalíptico, Max y Furiosa se unen para escapar de Immortan Joe, un tirano despiadado. Furiosa transporta un grupo de mujeres esclavizadas en una peligrosa carrera por la libertad. Enfrentamientos y persecuciones épicas se desatan en su travesía a través del desierto desolado.",
        director: "George Miller",
        category: "Action",
        year: 2015,
        duration: "2h",
        url: "https://youtu.be/8TyoKn5Kmbo?si=bhusQUXr3Ic_4-rA2"
    },
    {
        id: 15,
        vertical_cover: "IMG/PORTADAS/VERTICAL/PELICULAS/el caballero de la noche 1.jpg",
        horizontal_cover: " ",
        tittle: "El Caballero De La Noche",
        description: "Batman, interpretado por Christian Bale, se enfrenta al Joker, interpretado por Heath Ledger, un psicópata que busca sembrar el caos en Gotham City. La película explora temas de caos, moralidad y el papel de los héroes en la sociedad, desafiando la identidad de Batman como defensor de la justicia.",
        director: "Christopher Nolan",
        category: "Action",
        year: 2008,
        duration: "2h 32min",
        url: "https://youtu.be/emYLYfuZAbU?si=t-5ZEsIa9AeCANRN"
    }
]

const selectedMovies = [];

function generateRandomMovieCard() {
    if (selectedMovies.length === moviesData.length) {
        selectedMovies.length = 0;
    }
    
    let randomIndex;
    let randomMovie;

  do {
    randomIndex = Math.floor(Math.random() * moviesData.length);
    randomMovie = moviesData[randomIndex];
  } while (selectedMovies.includes(randomMovie));

  selectedMovies.push(randomMovie);

  const container_card_movie = document.createElement("div");
  container_card_movie.classList.add("container-card");

  const cover = document.createElement("img");
  cover.src = randomMovie.vertical_cover;

  const tittle = document.createElement("h2");
  tittle.textContent = randomMovie.tittle;

  const information = document.createElement("p");
  information.classList.add("description");
  information.textContent = `Duration: ${randomMovie.duration}`;


  container_card_movie.appendChild(cover);
  container_card_movie.appendChild(tittle);
  container_card_movie.appendChild(information);

  return container_card_movie;
}

function showRandomMovieCards(count) {
  for (let i = 0; i < count; i++) {
    if (selectedMovies.length === moviesData.length) {
      // Todas las películas han sido mostradas
      showMoreButton.disabled = true;
      break;
    }
    const randomMovieCard = generateRandomMovieCard();
    sectionMovies.appendChild(randomMovieCard);
  }
}

// Función para mostrar 4 películas aleatorias inicialmente
function showInitialRandomMovies() {
  showRandomMovieCards(4);
}


// Llama a la función para mostrar 4 películas aleatorias inicialmente
showInitialRandomMovies();



// //SERIES
let seriesData = [
    {
        id: 1,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/BlackMirror.jpg",
        horizontal_cover: " ",
        tittle: "Black Mirror",
        description: "Antología de ciencia ficción dominada por el extrañamiento y la inminencia del futuro, donde la tecnología más avanzada choca contra los instintos más oscuros.",
        year: 2011,

        director: "Charlie Brooker",
        category: "Ciencia ficción",
        seasons: 6,
        season_1: "3 capítulos",
        season_2: "3 capítulos",
        season_3: "6 capítulos",
        season_4: "6 capítulos",
        season_5: "3 capítulos",
        season_6: "5 capítulos",
        url: "https://www.youtube.com/watch?v=C3Hg8qgU4ss"
    },
    {
        id: 2,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Stranger Things.jpg",
        horizontal_cover: " ",
        tittle: "Stranger Things",
        description: "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
        year: 2016,
        director: "The Duffer Brothers",
        category: "Ciencia ficción",
        seasons: 4,
        season_1: "8 capítulos",
        season_2: "9 capítulos",
        season_3: "8 capítulos",
        season_4: "9 capítulos",
        url: "https://www.youtube.com/watch?v=Wre1F5YyIlA"
    },
    {
        id: 3,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/The Mandalorian.jpg",
        horizontal_cover: " ",
        tittle: "The Mandalorian",
        description: "Tras las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. 'The Mandalorian' se sitúa después de la caída del Imperio y antes de la aparición de la Primera Orden. Seguimos las tribulaciones de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República....",
        year: 2019,
        director: "Jon Favreau",
        category: "Ciencia ficción",
        seasons: 3,
        season_1: "8 capítulos",
        season_2: "8 capítulos",
        season_3: "8 capítulos",
        url: "https://www.youtube.com/watch?v=aOC8E8z_ifw"
    },
    {
        id: 4,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/mindhunter.jpg",
        horizontal_cover: " ",
        tittle: "Mindhunter",
        description: "Un agente del FBI, experto en asesinos en serie, inventa técnicas de creación de perfiles mientras persigue a violadores y asesinos famosos.",
        year: 2017,
        director: "David Fincher",
        category: "Misterio",
        seasons: 2,
        season_1: "10 capítulos",
        season_2: "9 capítulos",
        url: "https://www.youtube.com/watch?v=Fz5au4VLZjo"
    },
    {
        id: 5,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/sherlock.jpg",
        horizontal_cover: " ",
        tittle: "Sherlock",
        description: "Sherlock Holmes es un detective privado que vive en el Londres del siglo XXI. Es un genio en la resolución de crímenes, pero también es excéntrico, antisocial y tiene problemas para relacionarse con los demás.",
        year: 2010,
        director: "Paul McGuigan",
        category: "Misterio",
        seasons: 4,
        season_1: "3 capítulos",
        season_2: "3 capítulos",
        season_3: "3 capítulos",
        season_4: "3 capítulos",
        url: "https://www.youtube.com/watch?v=9UcR9iKArd0"
    },
    {
        id: 6,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Peaky Blinders.jpg",
        horizontal_cover: " ",
        tittle: "Peaky Blinders",
        description: "En 1919, Thomas Shelby, un veterano de la Primera Guerra Mundial, regresa a Birmingham para hacerse cargo del negocio familiar. Thomas es un hombre inteligente y ambicioso, y está decidido a llevar a los Peaky Blinders a la cima del mundo criminal.",
        year: 2013,
        director: "Steven Knight",
        category: "Misterio",
        seasons: 6,
        season_1: "6 capítulos",
        season_2: "6 capítulos",
        season_3: "6 capítulos",
        season_4: "6 capítulos",
        season_5: "6 capítulos",
        season_6: "6 capítulos",
        url: "https://www.youtube.com/watch?v=ZHZG6UArE3I"
    },
    {
        id: 7,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Game of Thrones.jpg",
        horizontal_cover: " ",
        tittle: "Game of Thrones",
        description: "En un mundo ficticio de fantasía medieval, varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.",
        year: 2011,
        director: "David Benioff",
        category: "Drama",
        seasons: 8,
        season_1: "10 capítulos",
        season_2: "10 capítulos",
        season_3: "10 capítulos",
        season_4: "10 capítulos",
        season_5: "10 capítulos",
        season_6: "10 capítulos",
        season_7: "7 capítulos",
        season_8: "6 capítulos",
        url: "https://www.youtube.com/watch?v=KPLWWIOCOOQ"
    },
    {
        id: 8,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Breaking Bad.jpg",
        horizontal_cover: " ",
        tittle: "Breaking Bad",
        description: "Walter White (Bryan Cranston) es un profesor de química de instituto con un sueldo modesto, casado con Skyler (Anna Gunn) y padre de dos hijos, Walter Jr. (RJ Mitte) y Holly (Skyler White). Cuando le diagnostican cáncer de pulmón terminal, Walter decide entrar en el mundo del narcotráfico para asegurar el futuro económico de su familia.",
        year: 2008,
        director: "Vince Gilligan",
        category: "Drama",
        seasons: 5,
        season_1: "7 capítulos",
        season_2: "13 capítulos",
        season_3: "13 capítulos",
        season_4: "13 capítulos",
        season_5: "16 capítulos",
        url: "https://www.youtube.com/watch?v=Bi3mMWw_cJ4"
    },
    {
        id: 9,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/The Crown.jpg",
        horizontal_cover: " ",
        tittle: "The Crown",
        description: "La serie comienza con la boda de Isabel y Felipe, y sigue su vida desde la abdicación de su tío, Eduardo VIII, hasta el presente. La serie explora temas como la política, la familia, el amor y el poder.",
        year: 2016,
        director: "Stephen Daldry",
        category: "Drama",
        seasons: 6,
        season_1: "10 capítulos",
        season_2: "10 capítulos",
        season_3: "10 capítulos",
        season_4: "10 capítulos",
        season_5: "10 capítulos",
        season_6: "10 capítulos",
        url: "https://www.youtube.com/watch?v=zzBjNG1GKu4"
    },
    {
        id: 10,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Friends.jpg",
        horizontal_cover: " ",
        tittle: "Friends",
        description: "Narra las aventuras y desventuras de seis jóvenes de Nueva York. Rachel forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.",
        year: 1994,
        director: "Kevin S. Bright",
        category: "Comedy",
        seasons: 10,
        season_1: "24 capítulos",
        season_2: "22 capítulos",
        season_3: "25 capítulos",
        season_4: "24 capítulos",
        season_5: "24 capítulos",
        season_6: "25 capítulos",
        season_7: "24 capítulos",
        season_8: "24 capítulos",
        season_9: "24 capítulos",
        season_10: "18 capítulos",
        url: "https://www.youtube.com/watch?v=LTpmw0Ac6Zs"
    },
    {
        id: 11,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/The office (US).jpg",
        horizontal_cover: " ",
        tittle: "The Office (US)",
        description: "La serie sigue las vidas y aventuras de los empleados de la sucursal de Scranton, Pensilvania, de la empresa de papel Dunder Mifflin.",
        year: 2005,
        director: "Ken Kwapis",
        category: "Comedy",
        seasons: 9,
        season_1: "6 capítulos",
        season_2: "22 capítulos",
        season_3: "24 capítulos",
        season_4: "19 capítulos",
        season_5: "26 capítulos",
        season_6: "22 capítulos",
        season_7: "26 capítulos",
        season_8: "24 capítulos",
        season_9: "27 capítulos",
        url: "https://www.youtube.com/watch?v=LHOtME2DL4g"
    },
    {
        id: 12,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/Brooklin Nine-NIne.jpg",
        horizontal_cover: " ",
        tittle: "Brooklyn Nine-Nine",
        description: "La serie sigue las vidas y aventuras de los detectives del Departamento de Policía de Nueva York en la comisaría 99 de Brooklyn. El equipo está liderado por el capitán Raymond Holt, un hombre serio y estricto que está decidido a hacer que su comisaría sea la mejor.",
        year: 2013,
        director: "Michael Schur",
        category: "Comedy",
        seasons: 8,
        season_1: "22 capítulos",
        season_2: "23 capítulos",
        season_3: "23 capítulos",
        season_4: "22 capítulos",
        season_5: "22 lcapítulos",
        season_6: "18 capítulos",
        season_7: "13 capítulos",
        season_8: "10 capítulos",
        url: "https://www.youtube.com/watch?v=l94tBy1XwbY"
    },
    {
        id: 13,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/American Horror History.jpg",
        horizontal_cover: " ",
        tittle: "American Horror History",
        description: "Es una serie antológica que explora diferentes géneros de terror en cada temporada. Cada temporada tiene una trama y un elenco de personajes completamente nuevos, aunque algunos actores han aparecido en varias temporadas interpretando diferentes personajes.",
        year: 2011,
        director: "Ryan Murphy",
        category: "Terror",
        seasons: 11,
        season_1: "12 capítulos",
        season_2: "13 capítulos",
        season_3: "13 capítulos",
        season_4: "13 capítulos",
        season_5: "13 capítulos",
        season_6: "10 capítulos",
        season_7: "11 capítulos",
        season_8: "9 capítulos",
        season_9: "9 capítulos",
        season_10: "10 capítulos",
        season_11: "7 capítulos",
        url: "https://www.youtube.com/watch?v=1clnzxy31d0"
    },
    {
        id: 14,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/The Haunting Of Hill House.jpg",
        horizontal_cover: " ",
        tittle: "The Haunting Of Hill House",
        description: "The Haunting of Hill House sigue la historia de los Crain, una familia que se muda a la mansión Hill para restaurarla y venderla. Sin embargo, pronto descubren que la casa está embrujada y que su presencia comienza a afectarlos de formas horribles.",
        year: 2018,
        director: "Mike Flanagan",
        category: "Terror",
        seasons: 1,
        season_1: "10 capítulos",
        url: "https://www.youtube.com/watch?v=mTvNeafShH0"
    },
    {
        id: 15,
        vertical_cover: "IMG/PORTADAS/VERTICAL/SERIES/The Walking Dead.jpg",
        horizontal_cover: " ",
        tittle: "The Walking Dead",
        description: "La historia comienza con Rick Grimes, un sheriff de un pequeño pueblo de Georgia que se despierta de un coma para encontrarse en un mundo devastado por los zombis. Rick se reúne con su familia y un grupo de sobrevivientes, y juntos comienzan un viaje para encontrar un lugar seguro para vivir.",
        year: 2010,
        director: "Frank Darabont.",
        category: "Terror",
        seasons: 11,
        season_1: "6 capítulos",
        season_2: "13 capítulos",
        season_3: "16 capítulos",
        season_4: "16 capítulos",
        season_5: "16 capítulos",
        season_6: "16 capítulos",
        season_7: "16 capítulos",
        season_8: "16 capítulos",
        season_9: "15 capítulos",
        season_10: "22 capítulos",
        season_11: "24 capítulos",
        url: "https://www.youtube.com/watch?v=kKYtY7CC1Gc"
    }
]


const buttonSerie = document.getElementById("buttonSerie");

buttonSerie.addEventListener("click", function () {
    sectionMovies.style.display = "none"
    sectionSeries.style.display='flex'

    buttonSerie.style.backgroundColor= "#03738C"
    buttonMovie.style.backgroundColor= ""

    buttonSerie.style.borderRadius= "2rem"
    buttonMovie.style.borderRadius= ""

    button_byCategory.style.backgroundColor= ""
    button_byCategory.style.borderRadius= " "

    optionsCategory.style.display='none';

})

const buttonMovie = document.getElementById("button-Movies");

buttonMovie.addEventListener("click", function(){
    sectionSeries.style.display ="none"
    sectionMovies.style.display='flex'

    buttonMovie.style.backgroundColor= "#03738C"
    buttonSerie.style.backgroundColor= ""

    
    buttonMovie.style.borderRadius= "2rem"
    buttonSerie.style.borderRadius= ""

    button_byCategory.style.backgroundColor= ""
    button_byCategory.style.borderRadius= " "

    optionsCategory.style.display='none';


})

const optionsCategory=document.querySelector('.container_categories')
optionsCategory.style.display='none';

const button_byCategory=document.querySelector('.ancla2');

button_byCategory.addEventListener('click', optionCategory);
let categorysVisible = false;

function optionCategory() {
    button_byCategory.style.backgroundColor= "#03738C"
    button_byCategory.style.borderRadius= "2rem"

    buttonMovie.style.backgroundColor= ""
    buttonSerie.style.backgroundColor= ""

    buttonSerie.style.borderRadius= ""
    buttonMovie.style.borderRadius= ""

    if(categorysVisible){

        optionsCategory.style.display='none';
    }else{
        optionsCategory.style.display='flex';
    }

    categorysVisible=!categorysVisible
}


const selectedSeries = [];

function generateRandomSerieCard() {
  if (selectedSeries.length === seriesData.length) {
    selectedSeries.length = 0;
  }

  let randomIndex;
  let randomSerie;

  do {
    randomIndex = Math.floor(Math.random() * seriesData.length);
    randomSerie = seriesData[randomIndex];
  } while (selectedSeries.includes(randomSerie));

  selectedSeries.push(randomSerie);

  const container_card_Serie = document.createElement("div");
  container_card_Serie.classList.add("container-card");

  const cover = document.createElement("img");
  cover.src = randomSerie.vertical_cover;

  const tittle = document.createElement("h2");
  tittle.textContent = randomSerie.tittle;

  const information = document.createElement("p");
  information.classList.add("description");
  information.textContent = `Temporadas: ${randomSerie.seasons}`;
  container_card_Serie.appendChild(cover);
  container_card_Serie.appendChild(tittle);
  container_card_Serie.appendChild(information);

  return container_card_Serie;
}

function showRandomSerieCards(count) {
  for (let i = 0; i < count; i++) {
    if (selectedSeries.length === seriesData.length) {
      // Todas las series han sido mostradas
      showMoreSeries.disabled = true;
      break;
    }
    const randomSerieCard = generateRandomSerieCard();
    sectionSeries.appendChild(randomSerieCard);
  }
}

// Función para mostrar 4 series aleatorias inicialmente
function showInitialRandomSeries() {
  showRandomSerieCards(4);
}



// Llama a la función para mostrar 4 series aleatorias inicialmente
showInitialRandomSeries();


const showMore=document.querySelector('.show-more')

showMore.addEventListener('click', buttonShowMore)
let remainingSeries ;
let remainingMovies ;

function buttonShowMore() {
    //en Series
    if (sectionMovies.style.display === 'none') {
         remainingSeries = seriesData.length - selectedSeries.length;
        showRandomSerieCards(remainingSeries);

    } else if (sectionSeries.style.display === 'none') {
         remainingMovies = moviesData.length - selectedMovies.length;
        showRandomMovieCards(remainingMovies);

    }
}





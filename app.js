document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navBar = document.querySelector(".content-nav-bar");
  
    menuButton.addEventListener("click", function () {
      navBar.classList.toggle("active");
    });
  });



  let seriesData = [
    {
        "Title": "Black Mirror",
        "Description": "Antología de ciencia ficción dominada por el extrañamiento y la inminencia del futuro, donde la tecnología más avanzada choca contra los instintos más oscuros.",
        "Creation Date": "4 diciembre 2011",
        "Director": "Charlie Brooker",
        "Category": "Ciencia ficción",
        "Seasons": 6,
        "Season 1": "3 capítulos",
        "Season 2": "3 capítulos",
        "Season 3": "6 capítulos",
        "Season 4": "6 capítulos",
        "Season 5": "3 capítulos",
        "Season 6": "5 capítulos",
        "url": "https://www.youtube.com/watch?v=C3Hg8qgU4ss"
    },
    {
        "Title": "Stranger Things",
        "Description": "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
        "Creation Date": "15 de julio de 2016 (Netflix)",
        "Director": "The Duffer Brothers",
        "Category": "Ciencia ficción",
        "Seasons": 4,
        "Season 1": "8 capítulos",
        "Season 2": "9 capítulos",
        "Season 3": "8 capítulos",
        "Season 4": "9 capítulos",
        "url": "https://www.youtube.com/watch?v=Wre1F5YyIlA"
    },
    {
        "Title": "The Mandalorian",
        "Description": "Tras las historias de Jango y Boba Fett, otro guerrero emerge en el universo de Star Wars. 'The Mandalorian' se sitúa después de la caída del Imperio y antes de la aparición de la Primera Orden. Seguimos las tribulaciones de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República....",
        "Creation Date": "12 de noviembre de 2019 (Estados Unidos)",
        "Director": "Jon Favreau",
        "Category": "Ciencia ficción",
        "Seasons": 3,
        "Season 1": "8 capítulos",
        "Season 2": "8 capítulos",
        "Season 3": "8 capítulos",
        "url": "https://www.youtube.com/watch?v=aOC8E8z_ifw"
    },
    {
        "Title": "Mindhunter",
        "Description": "Un agente del FBI, experto en asesinos en serie, inventa técnicas de creación de perfiles mientras persigue a violadores y asesinos famosos.",
        "Creation Date": "13 de octubre de 2017 (Netflix)",
        "Director": "David Fincher",
        "Category": "Drama",
        "Seasons": 2,
        "Season 1": "10 capítulos",
        "Season 2": "9 capítulos",
        "url": "https://www.youtube.com/watch?v=Fz5au4VLZjo"
    },
    {
        "Title": "Sherlock",
        "Description": "Sherlock Holmes es un detective privado que vive en el Londres del siglo XXI. Es un genio en la resolución de crímenes, pero también es excéntrico, antisocial y tiene problemas para relacionarse con los demás.",
        "Creation Date": "25 de julio de 2010 (Reino Unido)",
        "Director": "Paul McGuigan",
        "Category": "Misterio",
        "Seasons": 4,
        "Season 1": "3 capítulos",
        "Season 2": "3 capítulos",
        "Season 3": "3 capítulos",
        "Season 4": "3 capítulos",
        "url": "https://www.youtube.com/watch?v=9UcR9iKArd0"
    },
    {
        "Title": "Peaky Blinders",
        "Description": "En 1919, Thomas Shelby, un veterano de la Primera Guerra Mundial, regresa a Birmingham para hacerse cargo del negocio familiar. Thomas es un hombre inteligente y ambicioso, y está decidido a llevar a los Peaky Blinders a la cima del mundo criminal.",
        "Creation Date": "12 de septiembre de 2013 (Reino Unido)",
        "Director": "Steven Knight",
        "Category": "Drama",
        "Seasons": 6,
        "Season 1": "6 capítulos",
        "Season 2": "6 capítulos",
        "Season 3": "6 capítulos",
        "Season 4": "6 capítulos",
        "Season 5": "6 capítulos",
        "Season 6": "6 capítulos",
        "url": "https://www.youtube.com/watch?v=ZHZG6UArE3I"
    },
    {
        "Title": "Game of Thrones",
        "Description": "En un mundo ficticio de fantasía medieval, varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.",
        "Creation Date": "17 de abril de 2011 (Estados Unidos)",
        "Director": "David Benioff",
        "Category": "Drama",
        "Seasons": 8,
        "Season 1": "10 capítulos",
        "Season 2": "10 capítulos",
        "Season 3": "10 capítulos",
        "Season 4": "10 capítulos",
        "Season 5": "10 capítulos",
        "Season 6": "10 capítulos",
        "Season 7": "7 capítulos",
        "Season 8": "6 capítulos",
        "url": "https://www.youtube.com/watch?v=KPLWWIOCOOQ"
    },
    {
        "Title": "Breaking Bad",
        "Description": "Walter White (Bryan Cranston) es un profesor de química de instituto con un sueldo modesto, casado con Skyler (Anna Gunn) y padre de dos hijos, Walter Jr. (RJ Mitte) y Holly (Skyler White). Cuando le diagnostican cáncer de pulmón terminal, Walter decide entrar en el mundo del narcotráfico para asegurar el futuro económico de su familia.",
        "Creation Date": "20 de enero de 2008 (Estados Unidos)",
        "Director": "Vince Gilligan",
        "Category": "Drama",
        "Seasons": 5,
        "Season 1": "7 capítulos",
        "Season 2": "13 capítulos",
        "Season 3": "13 capítulos",
        "Season 4": "13 capítulos",
        "Season 5": "16 capítulos",
        "url": "https://www.youtube.com/watch?v=Bi3mMWw_cJ4"
    },
    {
        "Title": "The Crown",
        "Description": "La serie comienza con la boda de Isabel y Felipe, y sigue su vida desde la abdicación de su tío, Eduardo VIII, hasta el presente. La serie explora temas como la política, la familia, el amor y el poder.",
        "Creation Date": "4 de noviembre de 2016 (Reino Unido)",
        "Director": "Stephen Daldry",
        "Category": "Drama",
        "Seasons": 6,
        "Season 1": "10 capítulos",
        "Season 2": "10 capítulos",
        "Season 3": "10 capítulos",
        "Season 4": "10 capítulos",
        "Season 5": "10 capítulos",
        "Season 6": "10 capítulos",
        "url": "https://www.youtube.com/watch?v=zzBjNG1GKu4"
    },
    {
        "Title": "Friends",
        "Description": "\"Friends\" narra las aventuras y desventuras de seis jóvenes de Nueva York. Rachel forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.",
        "Creation Date": "22 de septiembre de 1994 (Estados Unidos)",
        "Director": "Kevin S. Bright",
        "Category": "Comedia",
        "Seasons": 10,
        "Season 1": "24 capítulos",
        "Season 2": "22 capítulos",
        "Season 3": "25 capítulos",
        "Season 4": "24 capítulos",
        "Season 5": "24 capítulos",
        "Season 6": "25 capítulos",
        "Season 7": "24 capítulos",
        "Season 8": "24 capítulos",
        "Season 9": "24 capítulos",
        "Season 10": "18 capítulos",
        "url": "https://www.youtube.com/watch?v=LTpmw0Ac6Zs"
    },
    {
        "Title": "The Office (US)",
        "Description": "La serie sigue las vidas y aventuras de los empleados de la sucursal de Scranton, Pensilvania, de la empresa de papel Dunder Mifflin.",
        "Creation Date": "24 de marzo de 2005 (Estados Unidos)",
        "Director": "Ken Kwapis",
        "Category": "Comedia",
        "Seasons": 9,
        "Season 1": "6 capítulos",
        "Season 2": "22 capítulos",
        "Season 3": "24 capítulos",
        "Season 4": "19 capítulos",
        "Season 5": "26 capítulos",
        "Season 6": "22 capítulos",
        "Season 7": "26 capítulos",
        "Season 8": "24 capítulos",
        "Season 9": "27 capítulos",
        "url": "https://www.youtube.com/watch?v=LHOtME2DL4g"
    },
    {
        "Title": "Brooklyn Nine-Nine",
        "Description": "La serie sigue las vidas y aventuras de los detectives de la comisaría 99 del Departamento de Policía de Nueva York, en el distrito de Brooklyn.",
        "Creation Date": "17 de septiembre de 2013 (Estados Unidos)",
        "Director": "Michael Schur",
        "Category": "Comedia",
        "Seasons": 8,
        "Season 1": "22 capítulos",
        "Season 2": "23 capítulos",
        "Season 3": "23 capítulos",
        "Season 4": "22 capítulos",
        "Season 5": "22 lcapítulos",
        "Season 6": "18 capítulos",
        "Season 7": "13 capítulos",
        "Season 8": "10 capítulos",
        "url": "https://www.youtube.com/watch?v=l94tBy1XwbY"
    },
    {
        "Title": "The Witcher",
        "Description": "Geralt de Rivia, un cazador de monstruos solitario, lucha por encontrar su lugar en un mundo donde las personas suelen ser más malvadas que las bestias.",
        "Creation Date": "20 de diciembre de 2019 (Netflix)",
        "Director": "Alik Sakharov",
        "Category": "Fantasía",
        "Seasons": 2,
        "Season 1": "8 capítulos",
        "Season 2": "8 capítulos",
        "url": "https://www.youtube.com/watch?v=kKYtY7CC1Gc"
    },
    {
        "Title": "Stranger Things",
        "Description": "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
        "Creation Date": "15 de julio de 2016 (Netflix)",
        "Director": "The Duffer Brothers",
        "Category": "Ciencia ficción",
        "Seasons": 4,
        "Season 1": "8 capítulos",
        "Season 2": "9 capítulos",
        "Season 3": "8 capítulos",
        "Season 4": "9 capítulos",
        "url": "https://www.youtube.com/watch?v=1clnzxy31d0"
    },
    {
        "Title": "Money Heist (La Casa de Papel)",
        "Description": "Un grupo de ladrones, dirigidos por 'El Profesor', prepara y lleva a cabo los asaltos más grandes de la historia: la Casa de la Moneda de España y la Fábrica Nacional de Moneda y Timbre.",
        "Creation Date": "2 de mayo de 2017 (España)",
        "Director": "Álex Pina",
        "Category": "Drama",
        "Seasons": 5,
        "Season 1": "15 capítulos",
        "Season 2": "9 capítulos",
        "Season 3": "8 capítulos",
        "Season 4": "8 capítulos",
        "Season 5": "10 capítulos",
        "url": "https://www.youtube.com/watch?v=mTvNeafShH0"
    }
]


let moviesData = [
  {
      "Title": "Jurassic Park",
      "Description": "An adventure 65 million years in the making.",
      "Director": "Steven Spielberg",
      "Genre": "Science Fiction/Adventure",
      "Release Year": 1993,
      "URL": "https://youtu.be/lc0UehYemQA?si=w3MNNxcoaO_z8oBt"
  },
  {
      "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
      "Description": "The adventure continues...",
      "Director": "Steven Spielberg",
      "Genre": "Action/Adventure",
      "Release Year": 2008,
      "URL": "https://youtu.be/s942xnT-Lhs?si=lsQskM69t9iUJEgG"
  },
  {
      "Title": "The Lord of the Rings: The Fellowship of the Ring",
      "Description": "One ring to rule them all...",
      "Director": "Peter Jackson",
      "Genre": "Adventure/Fantasy",
      "Release Year": 2001,
      "URL": "https://youtu.be/1YjXoRqUgVk?si=8ry9wa9KG9fOFxFF"
  },
  {
      "Title": "The Hangover",
      "Description": "Some guys just can't handle Vegas.",
      "Director": "Todd Phillips",
      "Genre": "Comedy",
      "Release Year": 2009,
      "URL": "https://youtu.be/wnNgGp1KVWQ?si=SgeMFHFsbMREPxA7"
  },
  {
      "Title": "Grown Ups",
      "Description": "Boys will be boys... some longer than others.",
      "Director": "Dennis Dugan",
      "Genre": "Comedy",
      "Release Year": 2010,
      "URL": "https://youtu.be/yMEDiKD7cyE?si=gC4Rqz3vCknFLDdC"
  },
  {
      "Title": "White Chicks",
      "Description": "This summer, a man will become a maid.",
      "Director": "Keenen Ivory Wayans",
      "Genre": "Comedy",
      "Release Year": 2004,
      "URL": "https://youtu.be/UxER50XHW-I?si=MleGYXF8R_eF8cEH"
  },
  {
      "Title": "The Exorcist",
      "Description": "The scariest movie of all time has returned.",
      "Director": "William Friedkin",
      "Genre": "Horror",
      "Release Year": 1973,
      "URL": "https://youtu.be/opBpPS-n30s?si=hL0ZtN0QeGqIcF_l"
  },
  {
      "Title": "Breaking Bad",
      "Description": "All Hail the King.",
      "Director": "Vince Gilligan",
      "Genre": "Crime/Drama",
      "Release Year": 2008,
      "URL": "https://youtu.be/eqVjGwYFVqQ?si=DsUAhUCQLGPC4tOg"
  },
  {
      "Title": "The Crown",
      "Description": "Two houses, two courts, one Crown.",
      "Director": "Peter Morgan",
      "Genre": "Biography/Drama/History",
      "Release Year": 2016,
      "URL": "https://youtu.be/A3q03BBwMp4?si=zcK1vS0D2xvWob1a"
  },
  {
      "Title": "Friends",
      "Description": "They're the ones who know everything about you. And they still love you.",
      "Director": "Kevin S. Bright, Marta Kauffman, David Crane",
      "Genre": "Comedy/Romance",
      "Release Year": 1994,
      "URL": "https://youtu.be/U6jYmOnnImI?si=SGKpZB5hwYlCoxds"
  },
  {
      "Title": "The Office (US)",
      "Description": "A mediocre paper company in the hands of Scranton's worst, Michael Scott.",
      "Director": "Greg Daniels",
      "Genre": "Comedy",
      "Release Year": 2005,
      "URL": "https://youtu.be/iOyQx7MXaz0?si=X5YTJIX_FaOcWJbW"
  },
  {
      "Title": "Brooklyn Nine-Nine",
      "Description": "Their unit is BIGGER than your unit.",
      "Director": "Michael Schur, Daniel J. Goor",
      "Genre": "Comedy/Crime",
      "Release Year": 2013,
      "URL": "https://youtu.be/tA_qMdzvCvk?si=JxBKkdfKQKVTnbVI"
  },
  {
      "Title": "The Walking Dead",
      "Description": "The world we knew is gone. An epidemic of apocalyptic proportions has swept the globe, causing the dead to rise and feed on the living.",
      "Director": "Frank Darabont",
      "Genre": "Drama/Horror/Thriller",
      "Release Year": 2010,
      "URL": "https://youtu.be/PVw40p8ZLkw?si=MXdq1KSpb9C2zzp2"
  },
  {
      "Title": "American Horror Story",
      "Description": "Be of like mind.",
      "Director": "Brad Falchuk, Ryan Murphy",
      "Genre": "Drama/Horror/Thriller",
      "Release Year": 2011,
      "URL": "https://youtu.be/8TyoKn5Kmbo?si=bhusQUXr3Ic_4-rA2"
  },
  {
      "Title": "The Haunting Of Hill House",
      "Description": "This is not a true story. This is true terror.",
      "Director": "Mike Flanagan",
      "Genre": "Drama/Horror/Mystery",
      "Release Year": 2018,
      "URL": "https://youtu.be/emYLYfuZAbU?si=t-5ZEsIa9AeCANRN"
  }
]

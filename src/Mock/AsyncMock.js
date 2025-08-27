const productos = [
  {
    id: "01",
    nombre: "Soporte para celular",
    imagen:
      "https://fbi.cults3d.com/uploaders/19538170/illustration-file/033568aa-e9da-43cc-8c31-2fb344168d8c/SOPORTE-CELU-3.56.png",
    descripcion: "Soporte ajustable para teléfono",
    precio: 850.0,
    category: "promos",

    stock: 5,
  },
  {
    id: "02",
    nombre: "Maceta geométrica",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRcY4tVQf_I0mPUnQQbDXj1wk9pBeKIEfhg&s",
    descripcion: "Maceta decorativa estilo poligonal",
    precio: 1200.0,
    category: "mayorista",
    stock: 5,
  },
  {
    id: "03",
    nombre: "Llaveros personalizados",
    imagen:
      "https://trica3d.com.ar/wp-content/uploads/2024/05/llaveros-3d-personalizados-Mario-trica-posadas-misiones.jpg",
    descripcion: "Llavero con nombre o logotipo",
    precio: 500.0,
    category: "promos",

    stock: 5,
  },
  {
    id: "04",
    nombre: "Organizador de escritorio",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72arBRpvwhzSX0TjW9fPR0_l6m-UvQQCOfQ&s",
    descripcion: "Mantén ordenados tus accesorios",
    precio: 1575.0,
    category: "mayorista",
    stock: 5,
  },
  {
    id: "05",
    nombre: "Porta auriculares",
    imagen:
      "https://d22fxaf9t8d39k.cloudfront.net/f2c7a63836931c22f1afc975a991f62e9e77f6307ada1ec2e2d0127a4ac9d9be32164.jpeg",
    descripcion: "Enrolla y guarda tus auriculares",
    precio: 690.0,
    category: "promos",

    stock: 5,
  },
  {
    id: "06",
    nombre: "Soporte para joystick",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_871455-MLA54971434560_042023-O.webp",
    descripcion: "Base para mando de videojuegos",
    precio: 980.0,
    category: "mayorista",
    stock: 5,
  },
  {
    id: "07",
    nombre: "Mini lámpara LED",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aB8AvLSBf9a_AM88ndUCYoI3hUD87qovPA&s",
    descripcion: "Lámpara portátil con diseño único",
    precio: 1420.0,
    category: "promos",

    stock: 5,
  },
  {
    id: "08",
    nombre: "Caja organizadora",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqXGQdFpe1QNk-h9Z00_8sNitlBxAhe1K0A&s",
    descripcion: "Caja pequeña con tapa",
    precio: 750.0,
    category: "mayorista",
    stock: 5,
  },
  {
    id: "09",
    nombre: "Posavasos temático",
    imagen: "https://m.media-amazon.com/images/I/61ZJZIcW4WL.jpg",
    descripcion: "Diseño geek y resistente al calor",
    precio: 460.0,
    category: "promos",

    stock: 5,
  },
  {
    id: "10",
    nombre: "Soporte para reloj",
    imagen:
      "https://img1.yeggi.com/page_images_cache/391045_watch-stand-base-porta-reloj-de-pulsera-by-fedevalla",
    descripcion: "Base para reloj de pulsera",
    precio: 1040.0,
    category: "mayorista",
    stock: 5,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let producto = productos.find((item) => item.id === id);
      resolve(producto);
    }, 2000);
  });
};

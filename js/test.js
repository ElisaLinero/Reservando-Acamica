var assert = chai.assert;
var expect = chai.expect;

describe("reservar horario", function() {
  it("Deberia eliminar el horario reservado de la lista de horarios del restaurante", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );
    var horarioAnterior = restauranteTest.horarios.length;
    restauranteTest.reservarHorario("13:00");
    expect(restauranteTest.horarios.length).to.equal(horarioAnterior - 1);
  });
  it("Deberia mantenerse igual el array cuando se reserva un horario que no posee", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );
    var horarioAnterior = restauranteTest.horarios.length;
    restauranteTest.reservarHorario("14:00");
    expect(restauranteTest.horarios.length).to.eql(horarioAnterior);
  });
  it("Deberia mantenerse igual el array cuando no se le pasa ningun parametro a la funcion", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );
    var horarioAnterior = restauranteTest.horarios.length;
    restauranteTest.reservarHorario("");
    expect(restauranteTest.horarios.length).to.eql(horarioAnterior);
  });
});

describe("obtenerPuntuacion", function() {
  it("Deberia obtener el promedio de la puntuacion", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );
    expect(restauranteTest.obtenerPuntuacion()).to.equal(7.4);
  });

  it("Deberia obtener 0 en puntuacion si no tiene calificaciones", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [0]
    );
    expect(restauranteTest.obtenerPuntuacion()).to.equal(0);
  });
});

describe("calificar", function() {
  it("Deberia guardar la nueva calificacion en calificaciones", function() {
    var restauranteTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );
    restauranteTest.calificar(3);
    expect(restauranteTest.calificaciones).to.eql([6, 7, 9, 10, 5, 3]);
  });
});

describe("buscarRestaurante", function() {
  it("Deberia buscar el restaurante por el id en la lista de restaurantes", function() {
    var listadoRestosTest = [
      new Restaurant(
        1,
        "TAO Uptown",
        "Asiática",
        "Nueva York",
        ["13:00", "15:30", "18:00"],
        "../img/asiatica1.jpg",
        [6, 7, 9, 10, 5]
      ),
      new Restaurant(
        2,
        "Mandarín Kitchen",
        "Asiática",
        "Londres",
        ["15:00", "14:30", "12:30"],
        "../img/asiatica2.jpg",
        [7, 7, 3, 9, 7]
      )
    ];

    var restauranteCorrectoTest = new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    );

    listadoRestosTest = new Listado(listadoRestosTest);

    expect(listadoRestosTest.buscarRestaurante(1)).to.eql(
      restauranteCorrectoTest
    );
  });
});

describe("obtenerRestaurante", function() {
  it("Deberia buscar el restaurante por el id en la lista de restaurantes", function() {
    var listadoRestosTest = [
      new Restaurant(
        1,
        "TAO Uptown",
        "Asiática",
        "Nueva York",
        ["13:00", "15:30", "18:00"],
        "../img/asiatica1.jpg",
        [6, 7, 9, 10, 5]
      ),
      new Restaurant(
        2,
        "Mandarín Kitchen",
        "Asiática",
        "Londres",
        ["15:00", "14:30", "12:30"],
        "../img/asiatica2.jpg",
        [7, 7, 3, 9, 7]
      )
    ];

    listadoRestosTest = new Listado(listadoRestosTest);

    var listadoFiltradoTest = [
      new Restaurant(
        1,
        "TAO Uptown",
        "Asiática",
        "Nueva York",
        ["13:00", "15:30", "18:00"],
        "../img/asiatica1.jpg",
        [6, 7, 9, 10, 5]
      )
    ];
    expect(
      listado.obtenerRestaurantes("Asiática", "Nueva York", "13:00")
    ).to.eql(listadoFiltradoTest);
  });
});
// se aplica TDD para el objeto reserva

describe("Precio Base Por Reserva", () => {
  it("Si realizo una reserva valida, obtengo el precio base", () => {
    var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

    expect(reserva1.calcularPrecioBase()).to.equal(2800);
  });
});

describe("Precio Total por Reserva", () => {
  it("Si realizo una reserva valida, obtengo el precio final", () => {
    var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

    expect(reserva1.calcularPrecioFinal()).to.equal(2450);
  });
});

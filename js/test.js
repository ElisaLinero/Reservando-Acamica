var assert = chai.assert;

describe("restaurant", function() {
  describe("reservarHorario", function() {
    it("Deberia eliminar horario reservado del array", function() {
      listadoDeRestaurantes[0].reservarHorario("13:00");
      assert(listadoDeRestaurantes[0].horarios.length, 2);
    });
    it("Deberia mantenerse igual el array cuando se reserva un horario que no posee", function() {
      listadoDeRestaurantes[0].reservarHorario("14:00");
      assert(listadoDeRestaurantes[0].horarios.length, 3);
    });
    it("Deberia mantenerse igual el array cuando no se le pasa ningun parametro a la funcion", function() {
      listadoDeRestaurantes[0].reservarHorario("");
      assert(listadoDeRestaurantes[0].horarios.length, 3);
    });
  });
  describe("obtenerPuntuacion", function() {
    it("Deberia obtener el promedio de la puntuacion", function() {
      listadoDeRestaurantes[1].calificar(5, 5, 5);
      assert(listadoDeRestaurantes[1].obtenerPuntuacion, 7);
    });
    it("Deberia obtener 0 en puntuacion si no tiene calificaciones", function() {
      listadoDeRestaurantes[1].calificar();
      assert(listadoDeRestaurantes[1].obtenerPuntuacion, 0);
    });
  });
  describe("calificar", function() {
    it("Deberia guardar la nueva calificacion en calificaciones", function() {
      listadoDeRestaurantes[2].calificar(8);
      assert(listadoDeRestaurantes[2].calificaciones, 8);
    });
  });
});
describe("listado", function() {
  describe("buscarRestaurante", function() {
    it("Deberia buscar el restaurante por el id en la lista de restaurantes", function() {
      listado.buscarRestaurante("Bleecker Street Pizza");
      assert(listadoDeRestaurantes[3].id, "Bleecker Street Pizza");
    });
  });
  describe("obtenerRestaurante", function() {
    it("Deberia filtrar restaurantes de acuerdo a lo seleccionado en los filtros", function() {
      listado.obtenerRestaurantes("Pasta", "Roma", "14:30");
      assert(listadoDeRestaurantes[15].rubro, "Pasta");
      assert(listadoDeRestaurantes[15].ubicacion, "Roma");
      assert(listadoDeRestaurantes[15].horarios, "14:30");
    });
  });
});

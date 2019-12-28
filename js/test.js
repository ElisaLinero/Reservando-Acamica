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
      listadoDeRestaurantes[1].calificar(6, 7, 8);
      assert(listadoDeRestaurantes[1].obtenerPuntuacion, 7);
    });
    it("Deberia obtener O en puntuacion si no tiene calificaciones", function() {
      listadoDeRestaurantes[1].calificar();
      assert(listadoDeRestaurantes[1].obtenerPuntuacion, 0);
    });
  });
});

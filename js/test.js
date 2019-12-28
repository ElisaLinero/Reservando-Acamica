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
});

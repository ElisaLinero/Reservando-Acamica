function Reserva(horarioReserva, cantPersonas, precioPersona, codigoDescuento) {
  this.horarioReserva = horarioReserva;
  this.cantPersonas = cantPersonas;
  this.precioPersona = precioPersona;
  this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.calcularPrecioBase = function() {
  return this.cantPersonas * this.precioPersona;
};

function descuentos(reserva) {
  var descuentos = 0;

  if (reserva.cantPersonas >= 4 && reserva.cantPersonas <= 6) {
    descuentos += reserva.calcularPrecioBase() * 0.05;
  }
  if (reserva.cantPersonas >= 7 && reserva.cantPersonas <= 8) {
    descuentos += reserva.calcularPrecioBase() * 0.1;
  }
  if (reserva.cantPersonas > 8) {
    descuentos += reserva.calcularPrecioBase() * 0.15;
  }

  switch (reserva.codigoDescuento) {
    case "DES15":
      descuentos += reserva.calcularPrecioBase() * 0.15;
      break;
    case "DES200":
      descuentos += 200;
      break;
    case "DES1":
      descuentos += reserva.precioPersona;
      break;
  }

  return descuentos;
}

function adicionales(reserva) {
  var adicionales = 0;

  // logica para adicionales segun hora de reserva //
  if (
    reserva.horarioReserva.getHours() >= 13 &&
    reserva.horarioReserva.getHours() <= 14
  ) {
    adicionales += reserva.calcularPrecioBase() * 0.05;
  }
  if (
    reserva.horarioReserva.getHours() >= 20 &&
    reserva.horarioReserva.getHours() <= 21
  ) {
    adicionales += reserva.calcularPrecioBase() * 0.05;
  }
  if (
    reserva.horarioReserva.getDay() == 5 ||
    reserva.horarioReserva.getDay() == 6 ||
    reserva.horarioReserva.getDay() == 0
  ) {
    adicionales += reserva.calcularPrecioBase() * 0.1;
  }

  return adicionales;
}

Reserva.prototype.calcularPrecioFinal = function() {
  return this.calcularPrecioBase() + adicionales(this) - descuentos(this);
};

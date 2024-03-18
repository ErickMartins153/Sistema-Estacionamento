export function convertType(type) {
  switch (type) {
    case "CAR":
      return "Carro";
    case "MOTORCYCLE":
      return "Moto";
    case "BUS":
      return "Onibus";
  }
}

export function reaisFormatter(value) {
  const formattedValue = parseFloat(value).toFixed(2);

  return "R$ " + formattedValue.replace(".", ",").toLocaleString("pt-BR");
}

export function vehicleTypeSanitizer(vehicleType) {
  switch (vehicleType) {
    case "Carro":
      return "CAR";
    case "Onibus":
      return "BUS";
    case "Moto":
      return "MOTORCYCLE";
  }
}

export function convertvehicleType(vehicleType) {
  switch (vehicleType) {
    case "CAR":
      return "Carro";
    case "BUS":
      return "Onibus";
    case "MOTORCYCLE":
      return "Moto";
  }
}

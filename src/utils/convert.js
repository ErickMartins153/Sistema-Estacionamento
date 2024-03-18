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

import axios from "axios";

const endPoint = "http://localhost:8081/estacionamento";

/*
ownerName
licensePlate
vehicleType
preferential
*/

export async function registerVehicle(vehicle) {
  let typeSanitizer;
  let preferentialSanitizer;

  const dummySpace = {
    parkingSpace: {
      id: 2,
      occupied: false,
      preferential: true,
      spaceType: "BUS",
      date: "17-03-2024",
      base_rate: 10,
      hourly_rate: 1,
    },
  };

  switch (vehicle.vehicleType) {
    case "Carro":
      typeSanitizer = "CAR";
    case "Onibus":
      typeSanitizer = "BUS";
    case "Moto":
      typeSanitizer = "MOTORCYCLE";
  }

  switch (vehicle.preferential) {
    case "Sim":
      preferentialSanitizer = true;
    case "Não":
      preferentialSanitizer = false;
  }
  const vehicleData = {
    ...vehicle,
    vehicleType: typeSanitizer,
    preferential: preferentialSanitizer,
    ...dummySpace,
  };

  try {
    console.log(vehicleData);
    const response = await axios.post(
      endPoint + "/registro/create",
      vehicleData
    );
    console.log("status: " + response.status);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

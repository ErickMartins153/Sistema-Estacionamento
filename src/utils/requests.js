import axios from "axios";
import { vehicleTypeSanitizer } from "./convert";

const endPoint = "http://localhost:8081";

/*
ownerName
licensePlate
vehicleType
preferential
*/

export async function getSlots() {
  try {
    const response = await axios.get(endPoint + "/parking_space");

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function registerVehicle(vehicle) {
  let typeSanitizer = vehicleTypeSanitizer(vehicle.vehicleType);
  let preferentialSanitizer = vehicle.preferential === "Sim" ? true : false;

  const vehicleData = {
    ...vehicle,
    vehicleType: typeSanitizer,
    preferential: preferentialSanitizer,
  };
  delete vehicleData.parkingSpace.enterTime;
  delete vehicleData.parkingSpace.exitTime;
  try {
    console.log(vehicleData);
    const response = await axios.post(
      endPoint + "/vehicles/create",
      vehicleData
    );
  } catch (error) {
    console.log("deu ruim");
    // console.error(error);
  }
}

export async function getDriverDetails(id) {
  const response = await axios.get(endPoint + "/vehicles/" + id);
  return response.data;
}

async function leaveVehicle(id) {
  const response = await axios.delete(endPoint + "/vehicles/delete/" + id);
}

export async function getPaymentData(slotData) {
  const leaveVehicleData = await leaveVehicle(slotData.vehicleId);
  try {
    const response = await axios.get(
      endPoint + "/parking_space/payment/" + slotData.spaceId
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("deu ruim");
  }
}

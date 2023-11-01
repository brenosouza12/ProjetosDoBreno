import { fetchBuses, insertBus, updateBus } from '../data/db';

export const getAllBuses = async () => {
  try {
    const result = await fetchBuses();
    const buses = result.rows._array;
    return buses;
  } catch (error) {
    throw error;
  }
};

export const addBus = async (company, model, year, plate, capacity) => {
  try {
    const result = await insertBus(company, model, year, plate, capacity);
    return result;
  } catch (error) {
    throw error;
  }
};

export const editBus = async (id, company, model, year, plate, capacity) => {
  try {
    await updateBus(id, company, model, year, plate, capacity);
    return id;
  } catch (error) {
    throw error;
  }
};

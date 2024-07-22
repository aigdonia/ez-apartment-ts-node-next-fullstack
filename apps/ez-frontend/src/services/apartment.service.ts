const API_URL = 'http://localhost:3296';

export async function fetchApartments () {
  const response = await fetch(`${API_URL}/properties`); 
  const data = await response.json();
  return data;
};

export async function fetchApartment (id: string) {
  const response = await fetch(`${API_URL}/properties/${id}`);
  const data = await response.json();
  return data;
};
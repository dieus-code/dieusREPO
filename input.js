    export const findInput = (stateInput) => {

  const cities = [
  { state: "Abia", city: "Umuahia" },
  { state: "Adamawa", city: "Yola" },
  { state: "Akwa Ibom", city: "Uyo" },
  { state: "Anambra", city: "Awka" },
  { state: "Bauchi", city: "Bauchi" },
  { state: "Bayelsa", city: "Yenagoa" },
  { state: "Benue", city: "Makurdi" },
  { state: "Borno", city: "Maiduguri" },
  { state: "Cross River", city: "Calabar" },
  { state: "Delta", city: "Asaba" },
  { state: "Ebonyi", city: "Abakaliki" },
  { state: "Edo", city: "Benin City" },
  { state: "Ekiti", city: "Ado Ekiti" },
  { state: "Enugu", city: "Enugu" },
  { state: "Gombe", city: "Gombe" },
  { state: "Imo", city: "Owerri" },
  { state: "Jigawa", city: "Dutse" },
  { state: "Kaduna", city: "Kaduna" },
  { state: "Kano", city: "Kano" },
  { state: "Katsina", city: "Katsina" },
  { state: "Kebbi", city: "Birnin Kebbi" },
  { state: "Kogi", city: "Lokoja" },
  { state: "Kwara", city: "Ilorin" },
  { state: "Lagos", city: "ikeja" },
  { state: "Nasarawa", city: "Lafia" },
  { state: "Niger", city: "Minna" },
  { state: "Ogun", city: "Abeokuta" },
  { state: "Ondo", city: "Akure" },
  { state: "Osun", city: "Oshogbo" },
  { state: "Oyo", city: "Ibadan" },
  { state: "Plateau", city: "Jos" },
  { state: "Rivers", city: "Port Harcourt" },
  { state: "Sokoto", city: "Sokoto" },
  { state: "Taraba", city: "Jalingo" },
  { state: "Yobe", city: "Damaturu" },
  { state: "Zamfara", city: "Gusau" },
  { state: "Abuja", city: "FCT" }
];
    if (!stateInput.value) {
        return []; 
    }
    const filterStates = cities.filter(item =>
        item.state.toLowerCase().includes(stateInput.value.toLowerCase())||item.city.toLowerCase().includes(stateInput.value.toLowerCase())
    );
    return filterStates;
};

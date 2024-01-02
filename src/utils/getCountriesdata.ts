
export const getCountriesData = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countriesInfo = data.map((country : any) => ({
            name: country.name.common,
            cca2: country.cca2,
            flag : country.flags.svg,
        }));
        // console.log('Countries Info:', countriesInfo);
        return countriesInfo;

    } catch (error) {
        console.error('Error fetching countries data:', error);
        // throw new Error("Error fetching countries data") // You can handle the error as needed
    }
};

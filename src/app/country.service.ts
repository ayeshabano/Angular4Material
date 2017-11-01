import {
    Injectable
} from '@angular/core';
import {
    CountryComponent
} from './country.component';
import {
    CityComponent
} from './city.component';

@Injectable()
export class CountryService {

    constructor() {
    };

    getCountries() {
        return [
            new CountryComponent('Saudi Arabia', 'Saudi Arabia'),
            new CountryComponent('Pakistan', 'Pakistan')
         /*   new CountryComponent('Australia', 'Australia'),
            new CountryComponent('New Zealand', 'New Zealand'),
            new CountryComponent('South Africa', 'South Africa'),
            new CountryComponent('United Kingdom', 'United Kingdom')*/
        ];
    }
    getCities() {
        return [
            new CityComponent('Riyadh', 'Saudi Arabia', 'Riyadh'),
            new CityComponent('Jeddah', 'Saudi Arabia', 'Jeddah'),
            new CityComponent('Mecca', 'Saudi Arabia', 'Mecca'),
            new CityComponent('Medina', 'Saudi Arabia', 'Medina'),
            new CityComponent('Al-Ahsa', 'Saudi Arabia', 'Al-Ahsa'),
            /*new CityComponent('California', 'United States', 'Colorado'),
            new CityComponent('Connecticut', 'United States', 'Connecticut'),
            new CityComponent('Delaware', 'United States', 'Delaware'),
            new CityComponent('Florida', 'United States', 'Florida'),
            new CityComponent('Georgia', 'United States', 'Georgia'),
            new CityComponent('Hawaii', 'United States', 'Hawaii'),
            new CityComponent('Idaho', 'United States', 'Idaho'),
            new CityComponent('Illinois', 'United States', 'Illinois'),
            new CityComponent('Indiana', 'United States', 'Indiana'),*/

            new CityComponent('Lahore', 'Pakistan', 'Lahore'),
            new CityComponent('Karachi', 'Pakistan', 'Karachi'),
            new CityComponent('Islamabad', 'Pakistan', 'Islamabad'),
            new CityComponent('Faisalabad', 'Pakistan', 'Faisalabad'),
            new CityComponent('Sialkot', 'Pakistan', 'Sialkot'),
            new CityComponent('Peshawar', 'Pakistan', 'Peshawar')
           /* new CityComponent(26, 3, 'New South Wales'),
            new CityComponent(27, 3, 'Tasmania'),
            new CityComponent(28, 3, 'Qweensland'),
            new CityComponent(29, 3, 'Western Australia'),
            new CityComponent(30, 3, 'Victoria'),
            new CityComponent(31, 4, 'Auckland'),
            new CityComponent(32, 4, 'Wellington'),
            new CityComponent(33, 4, 'Christchurch'),
            new CityComponent(34, 4, 'Hamilton'),
            new CityComponent(35, 4, 'Napier'),
            new CityComponent(31, 5, 'Eastern Cape'),
            new CityComponent(32, 5, 'Limpopo'),
            new CityComponent(33, 5, 'Mpumalanga'),
            new CityComponent(34, 5, 'North West'),
            new CityComponent(35, 5, 'Northern Cape'),
            new CityComponent(31, 6, 'Herefordshire'),
            new CityComponent(32, 6, 'Durham'),
            new CityComponent(33, 6, 'Manchester'),
            new CityComponent(34, 6, 'South Yorkshire'),
            new CityComponent(35, 6, 'Birmingham')*/
        ];
    }
}

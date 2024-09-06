import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    getData() {
        return [
          {
            id: 1000,
            name: 'James Butt',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'unqualified',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663,
            ticketNumber: 'c-101',
            ticketPrice: 40,
            cinema: 'Mall of Egypt',
            numberOfBuys: 2,
            ticketUrl: 'www.rtr.com/101',
            // New field
            numberOfPeople: 1
        },
        {
            id: 1001,
            name: 'Josephine Darakjy',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chanay, Jeffrey A Esq',
            date: '2019-02-09',
            status: 'proposal',
            verified: true,
            activity: 0,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 82429,
            ticketNumber: 'c-102',
            ticketPrice: 60,
            cinema: 'Carrefour',
            numberOfBuys: 5,
            ticketUrl: 'www.rtr.com/102',
            // New field
            numberOfPeople: 4
        },
        {
            id: 1002,
            name: 'Art Venere',
            country: {
                name: 'Panama',
                code: 'pa'
            },
            company: 'Chemel, James L Cpa',
            date: '2017-05-13',
            status: 'qualified',
            verified: false,
            activity: 63,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 28334,
            ticketNumber: 'c-103',
            ticketPrice: 50,
            cinema: 'Mall of Egypt',
            numberOfBuys: 1,
            ticketUrl: 'www.rtr.com/103',
            // New field
            numberOfPeople: 3
        },
        {
            id: 1003,
            name: 'Lenna Paprocki',
            country: {
                name: 'Slovenia',
                code: 'si'
            },
            company: 'Feltz Printing Service',
            date: '2020-09-15',
            status: 'new',
            verified: false,
            activity: 37,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 88521,
            ticketNumber: 'c-104',
            ticketPrice: 45,
            cinema: 'Carrefour',
            numberOfBuys: 3,
            ticketUrl: 'www.rtr.com/104',
            // New field
            numberOfPeople: 2
        },{
          id: 1004,
          name: 'Donette Foller',
          country: {
              name: 'South Africa',
              code: 'za'
          },
          company: 'Printing Dimensions',
          date: '2016-05-20',
          status: 'proposal',
          verified: true,
          activity: 57,
          representative: {
              name: 'Asiya Javayant',
              image: 'asiyajavayant.png'
          },
          balance: 93905,
          ticketNumber: 'c-105',
          ticketPrice: 30,
          cinema: 'City Stars',
          numberOfBuys: 4,
          ticketUrl: 'www.rtr.com/105',
          numberOfPeople: 5
      },
      {
          id: 1005,
          name: 'Simona Morasca',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Chapman, Ross E Esq',
          date: '2018-02-16',
          status: 'qualified',
          verified: false,
          activity: 33,
          representative: {
              name: 'Ivan Magalhaes',
              image: 'ivanmagalhaes.png'
          },
          balance: 50401,
          ticketNumber: 'c-106',
          ticketPrice: 55,
          cinema: 'Mall of Egypt',
          numberOfBuys: 2,
          ticketUrl: 'www.rtr.com/106',
          numberOfPeople: 1
      },
      {
          id: 1006,
          name: 'Mitsue Tollner',
          country: {
              name: 'Paraguay',
              code: 'py'
          },
          company: 'Morlong Associates',
          date: '2019-02-19',
          status: 'renewal',
          verified: true,
          activity: 26,
          representative: {
              name: 'Ivan Magalhaes',
              image: 'ivanmagalhaes.png'
          },
          balance: 58606,
          ticketNumber: 'c-107',
          ticketPrice: 35,
          cinema: 'City Stars',
          numberOfBuys: 3,
          ticketUrl: 'www.rtr.com/107',
          numberOfPeople: 3
      },
      {
          id: 1007,
          name: 'Leota Dilliard',
          country: {
              name: 'Serbia',
              code: 'rs'
          },
          company: 'Commercial Press',
          date: '2019-08-13',
          status: 'qualified',
          verified: false,
          activity: 51,
          representative: {
              name: 'Onyama Limba',
              image: 'onyamalimba.png'
          },
          balance: 26640,
          ticketNumber: 'c-108',
          ticketPrice: 50,
          cinema: 'Carrefour',
          numberOfBuys: 1,
          ticketUrl: 'www.rtr.com/108',
          numberOfPeople: 2
      },
      {
          id: 1008,
          name: 'Sage Wieser',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Truhlar And Truhlar Attys',
          date: '2021-11-21',
          status: 'unqualified',
          verified: true,
          activity: 28,
          representative: {
              name: 'Amy Elsner',
              image: 'amyelsner.png'
          },
          balance: 65436,
          ticketNumber: 'c-109',
          ticketPrice: 45,
          cinema: 'Mall of Egypt',
          numberOfBuys: 2,
          ticketUrl: 'www.rtr.com/109',
          numberOfPeople: 1
      },
      {
          id: 1009,
          name: 'Kris Marrier',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'King, Christopher A Esq',
          date: '2020-07-07',
          status: 'renewal',
          verified: true,
          activity: 78,
          representative: {
              name: 'Onyama Limba',
              image: 'onyamalimba.png'
          },
          balance: 74521,
          ticketNumber: 'c-110',
          ticketPrice: 60,
          cinema: 'City Stars',
          numberOfBuys: 5,
          ticketUrl: 'www.rtr.com/110',
          numberOfPeople: 4
      },
      {
          id: 1010,
          name: 'Minna Amigon',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Dorl, James J Esq',
          date: '2016-08-15',
          status: 'proposal',
          verified: false,
          activity: 89,
          representative: {
              name: 'Stephen Shaw',
              image: 'stephenshaw.png'
          },
          balance: 41447,
          ticketNumber: 'c-111',
          ticketPrice: 40,
          cinema: 'Mall of Egypt',
          numberOfBuys: 1,
          ticketUrl: 'www.rtr.com/111',
          numberOfPeople: 3
      },
      {
          id: 1011,
          name: 'Abel Maclead',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Rangoni Of Florence',
          date: '2017-03-02',
          status: 'qualified',
          verified: false,
          activity: 46,
          representative: {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
          },
          balance: 28470,
          ticketNumber: 'c-112',
          ticketPrice: 55,
          cinema: 'Carrefour',
          numberOfBuys: 4,
          ticketUrl: 'www.rtr.com/112',
          numberOfPeople: 2
      },

      {
          id: 1012,
          name: 'Kiley Caldarera',
          country: {
              name: 'Egypt',
              code: 'eg'
          },
          company: 'Feiner Bros',
          date: '2016-08-15',
          status: 'proposal',
          verified: false,
          activity: 89,
          representative: {
              name: 'Stephen Shaw',
              image: 'stephenshaw.png'
          },
          balance: 41447,
          ticketNumber: 'c-113',
          ticketPrice: 40,
          cinema: 'Mall of Egypt',
          numberOfBuys: 1,
          ticketUrl: 'www.rtr.com/113',
          numberOfPeople: 3
      },
        ];
    }

    constructor(private http: HttpClient) {}
    
    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};
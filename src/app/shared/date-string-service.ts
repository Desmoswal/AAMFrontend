import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class DateStringService {
  dateToString(date: Date): string {

    const dateString = date.getUTCFullYear() +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) +
      ('00' + date.getUTCDate()).slice(-2);
    return dateString;
  }

  stringToDate(string: string): Date {
    const day = parseInt(string.substring(0, 2), 10);
    const month = parseInt(string.substring(3, 5), 10);
    const year = parseInt(string.substring(6, 10), 10);
    return new Date(year, month - 1, day);
  }

}

import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snackBar: MatSnackBar) { }

  showMessageBtn(msg: string, button: string): void {

    this.snackBar.open(msg, button, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })

  }

  showMessage(msg: string): void {

    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  joinDatewithHours(data: Date, hora: string): Date {

    data = new Date(data);

    return new Date(data.getFullYear(), data.getMonth(), data.getDate(), + hora.split(":")[0], + hora.split(":")[1]);
  }

  dateToHours(date: Date): string {
    const datePipe = new DatePipe('en-US');
    const myDate = date;
    const formattedTime = datePipe.transform(myDate, 'HH:mm');
    return formattedTime;
  }

}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snackBar:MatSnackBar) { }

  showMessageBtn(msg: string, button:string): void {

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
}

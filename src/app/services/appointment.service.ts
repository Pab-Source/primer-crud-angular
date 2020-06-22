import { Injectable } from '@angular/core';

interface Iappointment {
  name: string;
  owner: string;
  symptoms: string;
  id: string;
}
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  appointments: Iappointment[] = [];

  addAppointment(appointment: Iappointment) {
    this.appointments.push(appointment);
    console.log(appointment);
  }

  deleteAppointment(id: string) {
    this.appointments = this.appointments.filter((app) => app.id !== id);
  }
}

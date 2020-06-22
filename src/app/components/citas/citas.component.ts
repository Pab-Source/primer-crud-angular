import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
})
export class CitasComponent {
  appointments: any = [];
  deleteItem: any;
  constructor(appointmentService: AppointmentService) {
    this.appointments = appointmentService.appointments;
    this.deleteItem = appointmentService.deleteAppointment;
  }
}

import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { generate } from 'shortid';
interface Iappointment {
  name: string;
  owner: string;
  symptoms: string;
  id: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  add: AppointmentService;

  appointment: Iappointment = {
    name: '',
    owner: '',
    symptoms: '',
    id: '',
  };

  constructor(add: AppointmentService) {
    this.add = add;
  }

  capt(valor: string, name: string) {
    this.appointment[name] = valor;
  }

  envCita() {
    this.appointment.id = generate();
    this.add.addAppointment({ ...this.appointment });
    this.appointment = { name: '', owner: '', symptoms: '', id: '' };
  }
}

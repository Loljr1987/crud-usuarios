import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

  planosSaude = [
    {
      id: 1,
      descricao: 'Plano Basic - Enfermaria'
    },
    {
      id: 2,
      descricao: 'Plano Select - Enfermaria'
    },
    {
      id: 3,
      descricao: 'Plano Pro - Apartamento'
    },
  ]

  planosOdonto = [
    {
      id: 1,
      descricao: 'Plano Basic'
    },
    {
      id: 2,
      descricao: 'Plano Select'
    },
    {
      id: 3,
      descricao: 'Plano Pro'
    },
  ]

  formUser: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder
  ) {}

    ngOnInit() {
      this.buildForm();
    }

    buildForm() {

      this.formUser = this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        sector: [null, [Validators.required, Validators.minLength(2)]],
        role: [null, [Validators.required, Validators.minLength(5)]],
        heathPlan: [''],
        dentalPlan: [''],
      });

    }

    closeModal() { this.dialogRef.close(); }

}

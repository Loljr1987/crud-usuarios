import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../interfaces/user';

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
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

    ngOnInit() {
      this.buildForm();
    }

    // GERENCIAMENTO DE USUÁRIOS
    saveUser() {
      const objUserForm: User = this.formUser.getRawValue();

      this.userService.addUser(objUserForm).then(
        (response: any) => {
          alert('Usuário salvo com sucesso');
          this.closeModal();
        })
        .catch(err => {
          alert('Erro ao salvar usuário!');
          console.error(err);
        });

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

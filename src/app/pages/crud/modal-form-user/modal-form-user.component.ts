import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  editUser: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

    ngOnInit() {
      this.buildForm();
      if(this.data && this.data.name) {
        this.editUser = true;
      }
    }

    // SALVAR USUÁRIO
    saveUser() {
      const objUserForm: User = this.formUser.getRawValue();

      if(this.data && this.data.name) {

        // EDITANDO USUÁRIOS
        this.userService.update(this.data.firebaseId, objUserForm).then(
          (response: any) => {
            alert('Usuário editado com sucesso');
            this.closeModal();
          })
          .catch(err => {
            alert('Erro ao salvar usuário!');
            console.error(err);
          });

      } else {
        // SALVANDO USUÁRIOS
        this.userService.addUser(objUserForm).then(
          (response: any) => {
            alert('Usuário salvo com sucesso!');
            this.closeModal();
          })
          .catch(err => {
            alert('Erro ao salvar usuário!');
            console.error(err);
          });
      }

    }

    buildForm() {
      this.formUser = this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        sector: [null, [Validators.required, Validators.minLength(2)]],
        role: [null, [Validators.required, Validators.minLength(5)]],
        healthPlan: [''],
        dentalPlan: [''],
      });

      if(this.data && this.data.name) {
        this.fillForm();
      }
    }

    // PREENCHIMENTO DO FORMULÁRIO PARA EDIÇÃO
    fillForm() {
      this.formUser.patchValue({
        name: this.data.name,
        email: this.data.email,
        sector: this.data.sector,
        role: this.data.role,
        healthPlan: this.data.healthPlan,
        dentalPlan: this.data.dentalPlan,
      })

    }

    closeModal() { this.dialogRef.close(); }

}

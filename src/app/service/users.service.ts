import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) {}

  // Obter os usuários e ordenar por nome
  getAllUser() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({ idField: 'firebaseId' }) as Observable<any[]>;
  }

  // Adicionar usuário
  addUser(user: User) {
    return this.dataBaseStore.collection('users').add(user);
  }

  // Atualizar usuário por id
  update(userId: string, user: User) {
    return this.dataBaseStore.collection('users').doc(userId).update(user); 
  }

  // Deletar usuário por id
  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}

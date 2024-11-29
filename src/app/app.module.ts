import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CrudComponent } from './pages/crud/crud.component';

// ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

// FIREBASE
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { ModalViewUserComponent } from './pages/crud/modal-view-user/modal-view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CrudComponent,
    ModalViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // ANGULAR MATERIAL
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,  
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'action'];
  dataSource = new MatTableDataSource<User>();
  listUsers: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog, 
  ) {}
    

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.listUsers = response;

        this.dataSource.data = this.listUsers;

        if (this.paginator && this.sort) {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // LOGICA DO MODAL
  openModalViewUser(user: User) {
    this.dialog.open(ModalViewUserComponent, {
      width: '700px',
      height: '330px',
      data: user
    })
  }
}

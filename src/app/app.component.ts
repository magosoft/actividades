
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { __spread } from 'tslib';
import { Actividad } from './models/actividad';
import { SpCrmService } from './services/sp-crm.service';




const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SpCrmService]
})
export class AppComponent implements AfterViewInit {
  title = 'Actividades';
  displayedColumns: string[] = ['tipo', 'name', 'etapa', 'status', 'date_entered', 'date_start', 'assigned_user_name'];
  dataSource: MatTableDataSource<Actividad>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _sp: SpCrmService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this._sp.listarActividadesProgramadoPorProspecto('438c7724-c3fd-4bde-ec81-611ff0fba828').subscribe({
      next:(result)=>{},
      error:(e)=>{}
    });
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }*/
}




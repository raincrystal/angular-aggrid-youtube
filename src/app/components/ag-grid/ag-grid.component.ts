import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  constructor() { }

  public columnDefs = [
    {field: 'make' },
    {field: 'model' },
    {field: 'price'}
  ];

  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  public gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
    },
    onGridReady: (params)  => {
      params.api.sizeColumnsToFit();
      window.addEventListener('resize', () => {
        setTimeout(() => {
          params.api.sizeColumnsToFit();
        });
      });
    },
  };

  ngOnInit(): void {
  }
}

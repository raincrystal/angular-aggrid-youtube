import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgGridComponent implements OnInit {
  @Input() columnDefs: any[];
  @Input() rowData: any[];
  @Input() rowSelection: string;

  @Output() changeSelectMode: EventEmitter<boolean> = new EventEmitter();

  private gridApi: GridApi;

  constructor(
    public cd: ChangeDetectorRef
  ) {}

  public selectMode = false;
  public selectedRows = 0;

  public gridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
    },
    onSelectionChanged: (params) => {
      this.selectedRows = params.api.getSelectedRows().length;
      this.cd.detectChanges();
    },
    allowContextMenuWithControlKey: true
  };

  ngOnInit(): void {
  }

  public handleSelectMode(event): void {
    this.selectMode = event.target.checked;
    this.changeSelectMode.emit(event.target.checked);
  }
}

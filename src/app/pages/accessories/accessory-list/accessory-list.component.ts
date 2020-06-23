import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import {AccessoriesService} from '../accessories.service';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: any[];
}

declare const $: any;

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
})
export class AccessoryListComponent implements OnInit {
  public dataTable: DataTable = {
    headerRow: [
      'ID',
      'Type Accessory',
      'Name',
      'Image Url',
      'AssetBundle Url',
      'Genre',
      'Actions',
    ],
    footerRow: [
      'ID',
      'Type Accessory',
      'Name',
      'Image Url',
      'AssetBundle Url',
      'Genre',
      'Actions', 
    ],
    dataRows: [],
  };
  constructor(
    private accessoriesService: AccessoriesService,
    private chRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.accessoriesService.getAccessories().subscribe(({data}) => {
      this.dataTable.dataRows = [...data];
      this.chRef.detectChanges();
      this.initializeTable();
    });
  }

  initializeTable() {
    $('#accessoryTable').DataTable({
      pagingType: 'full_numbers',
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
      ],
      responsive: true,
      language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search records',
      },
    });
    const table = $('#accessoryTable').DataTable();

    // Edit record
    table.on('click', '.edit', function(e) {
      let $tr = $(this).closest('tr');
      if ($($tr).hasClass('child')) {
        $tr = $tr.prev('.parent');
      }
      const data = table.row($tr).data();
      e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
      const $tr = $(this).closest('tr');
      table
        .row($tr)
        .remove()
        .draw();
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }

  deleteAccessory(accessory) {
    this.accessoriesService
      .deleteAccessory(accessory.accessoryId)
      .subscribe(() => {});
  }
}

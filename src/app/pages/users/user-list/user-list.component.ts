import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import {UsersService} from '../users.service';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: any[];
}

declare const $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public dataTable: DataTable = {
    headerRow: [
      'ID',
      'Name',
      'Last',
      'Email',
      'Phone',
      'Username',
      'Role',
      'Company',
      'Actions',
    ],
    footerRow: [
      'ID',
      'Name',
      'Last Name',
      'Email',
      'Phone',
      'Username',
      'Role',
      'Company',
      'Actions',
    ],
    dataRows: [],
  };
  constructor(
    private usersService: UsersService,
    private chRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(({data}) => {
      this.dataTable.dataRows = [...data];
      this.chRef.detectChanges();
      this.initializeTable();
    });
  }

  initializeTable() {
    $('#userTable').DataTable({
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
    const table = $('#userTable').DataTable();

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

  deleteUser(user) {
    this.usersService.deleteUser(user.userId).subscribe(() => {});
  }
}

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EventsService} from "../services/events.service";

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: any[];
}

declare const $: any;

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

    events: Array<Event>;

    public dataTable: DataTable = {
        headerRow: [
            'Event Type ID',
            'World ID',
            'Name',
            'Short Description',
            'Long Description',
            'Visibility',
            'Start Date',
            'End Date',
            'Organizer Url',
            'Capacity',
            'Actions'
        ],
        footerRow: [
            'Event Type ID',
            'World ID',
            'Name',
            'Short Description',
            'Long Description',
            'Visibility',
            'Start Date',
            'End Date',
            'Organizer Url',
            'Capacity',
            'Actions'
        ],
        dataRows: [],
    };

    constructor(
        private eventsService: EventsService,
        private chRef: ChangeDetectorRef,
    ) {
    }

    ngOnInit(): void {
        this.eventsService.getEvents().subscribe(({data}) => {
            this.events = data;
            this.dataTable.dataRows = [...this.events];
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
        table.on('click', '.edit', function (e) {
            let $tr = $(this).closest('tr');
            if ($($tr).hasClass('child')) {
                $tr = $tr.prev('.parent');
            }

            var data = table.row($tr).data();
            alert(
                'You press on Row: ' +
                data[0] +
                ' ' +
                data[1] +
                ' ' +
                data[2] +
                "'s row.",
            );
            e.preventDefault();
        });

        // Delete a record
        table.on('click', '.remove', function (e) {
            const $tr = $(this).closest('tr');
            table
                .row($tr)
                .remove()
                .draw();
            e.preventDefault();
        });

        $('.card .material-datatables label').addClass('form-group');
    }

}

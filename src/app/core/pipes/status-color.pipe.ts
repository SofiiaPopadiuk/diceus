import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusColor' })
export class StatusColorPipe implements PipeTransform {
  statuses = [
    {
      name: 'New',
      color: '#3b82f6',
      class: 'new',
    },
    {
      name: 'Pending Review',
      color: '#fdd261',
      class: 'pendind',
    },
    {
      name: 'Completed',
      color: '#3bb979',
      class: 'completed',
    },
  ];

  transform(value: string, key: keyof (typeof this.statuses)[0]): string {
    let statusFound = this.statuses.find(status => status.name === value);
    if (statusFound === undefined) {
      statusFound = this.statuses[0];
    }
    return statusFound[key];
  }
}

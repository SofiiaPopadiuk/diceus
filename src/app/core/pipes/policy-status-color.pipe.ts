import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'policyStatusColor' })
export class PolicyStatusColorPipe implements PipeTransform {
  statuses = [
    {
      name: 'Active',
      color: '#3bb979',
      class: 'active',
    },
    {
      name: 'Pending',
      color: '#fdd261',
      class: 'pendind',
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

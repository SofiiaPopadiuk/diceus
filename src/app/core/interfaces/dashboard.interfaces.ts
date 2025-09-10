export interface WorkItem {
  id: number;
  originator: string;
  client: string;
  line: string;
  type: string;
  status: 'New' | 'Pending Review' | 'Completed';
  created: string;
}

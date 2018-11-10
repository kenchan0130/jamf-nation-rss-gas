export class GetEvent {
  queryString!: string;
  parameter!: { [indx: string]: string; };
  parameters!: { [indx: string]: [string]; };
  contentLength!: number;
  contentPath!: string;
}

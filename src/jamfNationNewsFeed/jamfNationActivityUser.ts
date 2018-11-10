import { cast, Castable } from '@bitr/castable';

export class JamfNationActivityUser extends Castable {
  @cast id!: number;
  @cast username!: string;
  @cast avatar!: URL;
}

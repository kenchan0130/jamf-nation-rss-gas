import { cast, Castable } from '@bitr/castable';
import { JamfNationActivityUser } from './jamfNationActivityUser';

export class JamfNationActivity extends Castable {
  @cast id!: number;
  @cast title!: string;
  @cast createdOn!: Date;
  @cast url!: URL;
  @cast createdBy!: JamfNationActivityUser;
  @cast type!: string;
  @cast contentId!: number;
  @cast stickyExpireTime!: Date;
  @cast postCount!: number;
  @cast answered!: boolean;
  @cast lastPoster!: JamfNationActivityUser;
  @cast updatedOn!: Date;
  @cast pinned!: boolean;
}

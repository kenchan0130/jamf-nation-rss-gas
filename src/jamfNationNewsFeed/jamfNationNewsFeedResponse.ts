import { cast, element, Castable } from '@bitr/castable';
import { JamfNationActivity } from './jamfNationActivity';

export class JamfNationNewsFeedResponse extends Castable {
  @cast @element(JamfNationActivity) data!: JamfNationActivity[];
}

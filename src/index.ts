import { GetEvent } from './getEvent';
import { JamfNationNewsFeedClient } from './jamfNationNewsFeed/jamfNationNewsFeedClient';
import { FeedForJamfNationNews } from './feedForJamfNationNews';

export function doGet(_: GetEvent): GoogleAppsScript.Content.TextOutput {
  const jamfNationNewsFeedClient = new JamfNationNewsFeedClient();
  const feed = new FeedForJamfNationNews();
  feed.addItems(jamfNationNewsFeedClient.getActivityList());

  return ContentService.createTextOutput(
    feed.generateFeed()).setMimeType(ContentService.MimeType.RSS);
}

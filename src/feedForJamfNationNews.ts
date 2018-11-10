import { Feed } from 'feed';
import { JamfNationActivity } from './jamfNationNewsFeed/jamfNationActivity';

export class FeedForJamfNationNews {
  private title = 'Jamf Nation News Feed';
  private description = 'Jamf Nation News Feed';
  private id = new URL('https://www.jamf.com/jamf-nation/');
  private link = new URL('https://www.jamf.com/jamf-nation/');
  private copyright = 'All rights reserved 2018, Tadayuki Onishi';
  private feedLink: string;
  private _feed?: Feed;

  constructor() {
    this.feedLink = ScriptApp.getService().getUrl();
  }

  addItems(activityList: JamfNationActivity[]): void {
    activityList.forEach((activity) => {
      this.feed().addItem({
        title: activity.title,
        id: activity.id.toString(),
        link: activity.url.href,
        date: activity.updatedOn,
        description: `${activity.lastPoster.username} posts a new article.`,
        guid: activity.url.href,
        published: activity.createdOn,
      });
    });
  }

  generateFeed(): string {
    return this.feed().atom1();
  }

  private feed(): Feed {
    if (this._feed) return this._feed;

    const feed = new Feed({
      id: this.id.toString(),
      title: this.title,
      feed: this.feedLink,
      feedLinks: {
        atom: this.feedLink,
      },
      link: this.link.toString(),
      description: this.description,
      copyright: this.copyright,
    });
    this._feed = feed;
    return feed;
  }
}

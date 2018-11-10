import { JamfNationNewsFeedResponse } from './jamfNationNewsFeedResponse';
import { JamfNationActivity } from './jamfNationActivity';
import { URL } from 'url';
import * as clone from 'clone';

export class JamfNationNewsFeedClient {
  private _url?: URL;
  private baseUrl = new URL('https://www.jamf.com/jamf-nation/api/v1/newsfeed');
  private pageNumber = 0;
  private pageSize = 20;

  getActivityList(): JamfNationActivity[] {
    const httpResponse = UrlFetchApp.fetch(this.url().toString());
    const rawResponse = JSON.parse(httpResponse.getContentText('UTF-8'));
    const jamfNaionNewsFeedResponse = new JamfNationNewsFeedResponse(rawResponse);
    return jamfNaionNewsFeedResponse.data;
  }

  private url(): URL {
    if (this._url) return this._url;

    const baseUrl = clone(this.baseUrl);
    const params = new URLSearchParams();
    params.append('pageNumber', this.pageNumber.toString());
    params.append('pageSize', this.pageSize.toString());
    baseUrl.search = params.toString();
    this._url = baseUrl;

    return baseUrl;
  }
}

import { Inject, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class Ng2EmbedlyService {

  protocol: string = 'https';
  oembedUrl: string = this.protocol + '://api.embed.ly/1/oembed';
  extractUrl: string = this.protocol + '://api.embed.ly/1/extract';

  constructor(private http: Http, @Inject('EMBEDLY_KEY') private EMBEDLY_KEY: string) {
    // console.log('hello world from ng2embedly service');
    // console.log('EMBEDLY_KEY:', this.EMBEDLY_KEY);
  }

  /**
   * oEmbed is Embedly’s basic offering, providing a simple API for embedding content from any URL.
   * This method follows the oEmbed standard.
   *
   * @param inputUrl  The URL is to retrieve embedding information.
   * @param maxwidth  This is the maximum width of the embed in pixels. maxwidth is used for scaling
   *                  down embeds so they fit into a certain width.
   * @param scheme    scheme allows to set the protocol scheme explicitly to http or https.
   */
  oembed(inputUrl: string, maxwidth?: number, scheme?: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', inputUrl);

    if (typeof maxwidth !== 'undefined') {
      params.set('maxwidth', maxwidth.toString());
    }

    if (typeof scheme !== 'undefined') {
      params.set('scheme', scheme);
    }

    return this.http.get(this.oembedUrl, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  };

  /**
   * Extract allows users to dive into specifics on a site and beyond. With this API
   * we allow developers to extract article text, topics, and retrieve more meta-data
   * about articles, blog posts, and stories.
   *
   * @param inputUrl  The URL is to retrieve embedding information.
   */
  extract(inputUrl: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', encodeURI(inputUrl));

    return this.http.get(this.extractUrl, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

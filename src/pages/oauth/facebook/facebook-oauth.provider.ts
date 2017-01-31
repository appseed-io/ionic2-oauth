import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IOathProvider } from '../oauth.provider.interface';
import { CordovaOauth } from 'ng2-cordova-oauth/oauth';
import { Facebook } from 'ng2-cordova-oauth/provider/facebook';
import { Config } from '../../../config';

interface ILoginResponse {
	access_token: string;
}

@Injectable()
export class FacebookOauthProvider implements IOathProvider {
	private cordovaOauth: CordovaOauth;
	private http: Http;
	private config: Config;
	private facebook: Facebook;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
		this.facebook = new Facebook({ clientId: config.facebook.appId, appScope: config.facebook.scope });
		this.cordovaOauth = new CordovaOauth();
	}

	login(): Promise<string> {
		return this.cordovaOauth.login(this.facebook)
			.then((x: ILoginResponse) => x.access_token);
	}

}

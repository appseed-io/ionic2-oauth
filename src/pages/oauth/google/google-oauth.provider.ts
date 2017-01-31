import { Injectable } from '@angular/core';

import { IOathProvider } from '../oauth.provider.interface';
import { CordovaOauth } from 'ng2-cordova-oauth/oauth';
import { Google } from 'ng2-cordova-oauth/provider/google';
import { Config } from '../../../config';
import { Http } from '@angular/http';

interface ILoginResponse {
	access_token: string;
}

@Injectable()
export class GoogleOauthProvider implements IOathProvider {
	private http: Http;
	private config: Config;
	private cordovaOauth: CordovaOauth;
	private google: Google;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
		this.google = new Google({ clientId: config.google.appId, appScope: config.google.scope });
		this.cordovaOauth = new CordovaOauth();
	}

	login(): Promise<string> {
		return this.cordovaOauth.login(this.google).then((x: ILoginResponse) => x.access_token);
	}
}

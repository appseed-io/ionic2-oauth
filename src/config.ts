import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
	public facebook = {
		apiUrl: 'https://graph.facebook.com/v2.3/',
		appId: '927897987270774',
		scope: ['email']
	};
	public google = {
		apiUrl: 'https://www.googleapis.com/oauth2/v3/',
		appId: '400671186930-m07eu77bm43tgr30p90k6b9e1qgsva4p.apps.googleusercontent.com',
		scope: ['email']
	};
}

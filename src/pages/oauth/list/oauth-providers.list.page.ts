import { Component } from '@angular/core';
import { OAuthService } from '../oauth.service';

@Component({
	templateUrl: 'oauth-providers.list.html',
	providers: [OAuthService]
})
export class OAuthProvidersListPage {
	private oauthService: OAuthService;

	constructor(oauthService: OAuthService) {
		this.oauthService = oauthService;
	}

	public login(source: string) {
		this.oauthService.login(source)
			.then(
				() => console.log('Logged in successfully'),
				error => alert(error)
			);
	}
}

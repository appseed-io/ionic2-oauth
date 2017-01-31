import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { OAuthService } from '../../pages/oauth/oauth.service';

import { OAuthProvidersListPage } from './list/oauth-providers.list.page';
import { GoogleOauthProvider } from './google/google-oauth.provider';
import { FacebookOauthProvider } from './facebook/facebook-oauth.provider';

@NgModule({
	imports: [IonicModule],
	declarations: [
		OAuthProvidersListPage
	],
	entryComponents: [
		OAuthProvidersListPage
	],
	providers: [
		OAuthService,
		FacebookOauthProvider,
		GoogleOauthProvider
	]
})
export class OAuthModule {

}

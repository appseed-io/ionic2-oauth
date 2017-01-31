import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { OAuthProvidersListPage } from './list/oauth-providers.list.page';

@NgModule({
	imports: [IonicModule],
	declarations: [
		OAuthProvidersListPage
	],
	entryComponents: [
		OAuthProvidersListPage
	],
	providers: [
	]
})
export class OAuthModule {

}

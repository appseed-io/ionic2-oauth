import { OAuthProfile } from './models/oauth-profile.model';

export interface IOathProvider {
	login(): Promise<string>;
	getProfile(accessToken: string): Promise<OAuthProfile>;
}

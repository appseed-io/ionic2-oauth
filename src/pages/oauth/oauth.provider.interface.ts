export interface IOathProvider {
	login(): Promise<string>;
}

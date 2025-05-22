declare namespace jasmine {
	interface Matchers<T> {
		toBeValidForm(expected: boolean): boolean;
	}
}
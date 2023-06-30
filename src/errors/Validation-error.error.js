import IncorrectRequest from './Incorrect-request.error.js';

class ValidationError extends IncorrectRequest {

	constructor(error) {
		const errorMessages = Object.values(error.errors)
			.map(error => error.message)
			.join('; ')
		;

		super(`The following errors were found: ${errorMessages}`);
	}
}

export default ValidationError;

import BaseError from './base.error.js';

class IncorrectRequest extends BaseError {

	constructor(message='One or more data is incorrect!') {
		super(message, 400);
	}
}

export default IncorrectRequest;

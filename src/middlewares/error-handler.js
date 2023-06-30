import mongoose from 'mongoose';
import BaseError from '../errors/Base.error.js';
import IncorrectRequest from '../errors/Incorrect-request.error.js';
import ValidationError from '../errors/Validation-error.error.js';
import NotFoundError from '../errors/Not-found.errors.js';

function errorHandler(error, req, res, next) {
	if(error instanceof mongoose.Error.CastError) {
		new IncorrectRequest().sendResponse(res);
	}else if(error instanceof mongoose.Error.ValidationError) {
		new ValidationError(error).sendResponse(res);
	}else if(error instanceof NotFoundError) {
		new NotFoundError().sendResponse(res);
	}else {
		new BaseError().sendResponse(res);
	}
}

export default errorHandler;

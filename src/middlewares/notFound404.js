import NotFoundError from '../errors/Not-found.errors.js';

function notFound404(req, res, next) {
	const error404 = new NotFoundError();

	next(error404);
}

export default notFound404;

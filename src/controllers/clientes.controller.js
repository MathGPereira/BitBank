class ClienteController {

	static listarClientes = async (req, res) => {
		res.status(200).send({ message: "Route cliente is working!" });
	}
}

export default ClienteController;

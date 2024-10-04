class DatabaseConnection {
	static connection;
	static {
		if (process.env.NODE_ENV === "production") {
			DatabaseConnection.loadProductionConnection();
		} else {
			DatabaseConnection.loadDevelopmentConnection();
		}
	}

	static loadProductionConnection() {}

	static loadDevelopmentConnection() {}
}

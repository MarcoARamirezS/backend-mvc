const User = require('./../models/user.model')

class UserRepository {
    static async createUser (email, password) {
        // Implementar crear usuario
    }

    static async findByEmail (email) {
        // Implementar buscar por correo
    }
}

module.exports = UserRepository
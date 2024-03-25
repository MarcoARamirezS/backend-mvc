const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRepository = require('./../repositories/user.repository')

class UserService {
    static async registerUser (email, password) {
        // Codigo para registrar usuarios
    }

    static async loginUser (email, password) {
        // Codigo para login
    }
}

module.exports = UserService
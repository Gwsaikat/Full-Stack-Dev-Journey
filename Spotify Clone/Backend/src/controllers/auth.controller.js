
const userModel = require('../Models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { name, email, password, role = 'user' } = req.body;
        const userExists = await userModel.findOne({  // check if user exists
            $or: [
                { username },
                { email }]
        });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // hash password

        const user = await userModel.create({ name, email, password: hashedPassword, role });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // create token
        res.cookie('token', token); // set token in cookie

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ // check if user exists
            $or: [
                { username },
                { email }]
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password); // compare password
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // create token
        res.cookie('token', token); // set token in cookie

        res.status(200).json({ message: 'User signed in successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error signing in user', error });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error logging out user', error });
    }
}

module.exports = { signup, signin, logout };

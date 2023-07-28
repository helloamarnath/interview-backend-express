import bcrypt from 'bcryptjs';

export const comparePasswords = async (plainTextPassword, hash) => {
    try {
        return await bcrypt.compare(plainTextPassword, hash);
    } catch (ex) {
        return false;
    }
};

export const generateHash = async (plainTextPassword) => {
    try {
        return await bcrypt.hash(plainTextPassword, 10);
    } catch (ex) {
        return false;
    }
};

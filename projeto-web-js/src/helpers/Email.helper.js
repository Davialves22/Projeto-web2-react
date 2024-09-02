export const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}
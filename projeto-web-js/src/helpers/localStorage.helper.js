const USER_KEY = 'user';

const LocalStoregeHelper = {
    logIn(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    getUserLogged() {
        return JSON.parse(localStorage.getItem(USER_KEY));
    },
    logOut() {
        localStorage.clear();
    },
}

export default LocalStoregeHelper;
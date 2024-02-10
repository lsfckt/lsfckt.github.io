export function getFormData(target) {

    const formData = new FormData(target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');
    const title = formData.get('title');
    const topicEl = formData.get('topic');
    const topicText = topicEl.textContent;

    // const data = Object.fromEntries(formData);

    return {
        email,
        password,
        repass,
        title,
        topicText
    }
}

export function setUser(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}

export function getUser() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function delUser() {
    sessionStorage.removeItem('user');
}
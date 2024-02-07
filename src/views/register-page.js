import { html } from '../../lit-html/lit-html.js';
import { fetchRegister } from '../services/auth.js';
import { getFormData, setUser } from '../utils.js';

const regTemp = (onReg) => html`
<section id="register">
<div class="pad-large">
    <div class="glass narrow">
        <header class="tab layout">
            <a class="tab-item" href="/login">Login</a>
            <h1 class="tab-item active">Register</h1>
        </header>
        <form class="pad-med centered" @submit=${onReg}>
            <label class="block centered">Username: <input class="auth-input input" type="text"
                    name="username" /></label>
            <label class="block centered">Email: <input class="auth-input input" type="text"
                    name="email" /></label>
            <label class="block centered">Password: <input class="auth-input input" type="password"
                    name="password" /></label>
            <label class="block centered">Repeat: <input class="auth-input input" type="password"
                    name="repass" /></label>
            <input class="block action cta" type="submit" value="Create Account" />
        </form>
        <footer class="tab-footer">
            Already have an account? <a class="invert" href="/login">Sign in here</a>.
        </footer>
    </div>
</div>
</section>`;

export function regPage(ctx) {
    ctx.render(regTemp(onReg));

    async function onReg(e) {
        e.preventDefault();

        const userData = getFormData(e.target);

        if (!userData.email || !userData.password || !userData.repass) {
            alert('All fields are required! Please try again.');
            return;
        } else if (userData.password !== userData.repass) {
            alert('Both passwords must match! Please try again.');
            return;
        }

        const res = await fetchRegister(userData);

        try {
            setUser(res);
            ctx.page.redirect('/');
            
            return res;
        } catch (error) {
            alert(error.message);
        }
    }
}
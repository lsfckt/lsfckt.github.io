import { html } from '../../lit-html/lit-html.js';

import { setUser } from '../utils.js';
import { fetchLogin } from '../services/auth.js';
import { getFormData } from '../utils.js';

const loginTemp = (onLogin) => html`
<section id="login">
    <div class="pad-large">
        <div class="glass narrow">
            <header class="tab layout">
                <h1 class="tab-item active">Login</h1>
                <a class="tab-item" href="/register">Register</a>
            </header>
            <form class="pad-med centered" @submit=${onLogin}>
                <label class="block centered">Email: <input class="auth-input input" type="text"
                        name="email" /></label>
                <label class="block centered">Password: <input class="auth-input input" type="password"
                        name="password" /></label>
                <input class="block action cta" type="submit" value="Sign In" />
            </form>
            <footer class="tab-footer">
                Don't have an account? <a class="invert" href="/register">Create one here</a>.
            </footer>
        </div>
    </div>
</section>`;

export async function loginPage(ctx) {
  ctx.render(loginTemp(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    const userData = getFormData(e.target);

    if (!userData.email || !userData.password) {
      alert('All fields are required! Please try again.');
      return;
    }


    try {
      debugger;
      const res = await fetchLogin();
      setUser(res);
      ctx.page.redirect('/');

      return res;
    } catch (error) {
      alert(error.message);
    }
  }
}
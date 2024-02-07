import { html, render } from '../../lit-html/lit-html.js';

import { fetchLogout } from '../services/auth.js';
import { delUser } from '../utils.js';

const navBarTemp = (user, onLogout) => html`
<a class="logotype" href="/"><i class="fas fa-question-circle"></i><i
                        class="merge fas fa-check-circle"></i><span>Quiz Fever</span></a>
            <div class="navigation">
            <a class="nav-link" href="/browse">Browse</a>

        ${user
    ?
    html` <div id="user-nav">
              <a class="nav-link" href="/create">Create</a>
              <a class="nav-link profile-link" href="#"><i class="fas fa-user-circle"></i></a>
              <a id="logoutBtn" class="nav-link" href="javascript:void(0)" @click=${onLogout}>Logout</a>
          </div>`
    :
    html`<div id="guest-nav">
              <a class="nav-link" href="/login">Sign in</a>
          </div>`}
        </div>`;

export async function navBarView(ctx, next) {
  const user = ctx.user;

  render(navBarTemp(user, onLogout), document.querySelector('nav'));

  async function onLogout(e) {
    e.preventDefault();

    try {
      await fetchLogout();
      delUser();

      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  }

  next();
}


import page from './../page/page.mjs';

import { session } from './middlewares/session.js';
import { decorateContext } from './middlewares/decorate-context.js';
import { navBarView } from './middlewares/navigation-bar.js';
import { homePage } from './views/home-page.js';
import { loginPage } from './views/login-page.js';
import { regPage } from './views/register-page.js';
import { editPage } from './views/edit-album-page.js';
import { dashboardPage } from './views/dashboard-page.js';
import { editorPage } from './views/editor-page.js';
import { detailsPage } from './views/album-details.js';
import { browsePage } from './views/browse-page.js';
import { loaderView } from './middlewares/loader.js';

page(session);
page(navBarView);
page(decorateContext);
page(loaderView);

page('/', homePage);
page('/browse', browsePage)
page('/login', loginPage);
page('/register', regPage);
page('/edit/:id', editPage);
page('/dashboard', dashboardPage);
page('/editor', editorPage);
page('/details/:id', detailsPage);
page.start();
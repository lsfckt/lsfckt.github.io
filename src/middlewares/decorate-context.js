import { render } from '../../lit-html/lit-html.js';

export function decorateContext(ctx, next) {
    ctx.render = (temp) => render(temp, document.querySelector('main'));

    next();
}
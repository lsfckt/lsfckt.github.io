const loader = document.querySelector('#loader');

export function loaderView(ctx, next) {
    loader.style.display = 'none';

    next();
}
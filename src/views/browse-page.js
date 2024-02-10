import { html, nothing } from '../../lit-html/lit-html.js';

import { browse } from '../services/data.js';

const browseTemp = (data) => html`
<section id="browse">
                <header class="pad-large">
                    <form class="browse-filter">
                        <input class="input" type="text" name="query">
                        <select class="input" name="topic">
                            <option value="all">All Categories</option>
                            <option value="it">Languages</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Tools and Software</option>
                        </select>
                        <input class="input submit action" type="submit" value="Filter Quizes">
                    </form>
                    <h1>All quizes</h1>
                </header>

                <div class="pad-large alt-page">
                ${data ?
        data.map((quiz) => html`
                <article class="preview layout">
                        <div class="right-col">
                            <a class="action cta" href="#">View Quiz</a>
                        </div>
                        <div class="left-col">
                            <h3><a class="quiz-title-link" href="#">${quiz.title}</a></h3>
                            <span class="quiz-topic">Topic: ${quiz.topic}</span>
                            <div class="quiz-meta">
                                <span>15 questions</span>
                                <span>|</span>
                                <span>Taken 54 times</span>
                            </div>
                        </div>
                    </article>`)
        :
        nothing}
     
                </div>
            </section>`;

export async function browsePage(ctx) {

    const data = await browse();

    ctx.render(browseTemp(data));
}
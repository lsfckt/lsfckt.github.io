import { html } from '../../lit-html/lit-html.js';

import { createQuiz } from '../services/data.js';
import { getFormData } from '../utils.js';

const editorTemp = (onCreate) => html`
<section id="editor">

<header class="pad-large">
    <h1>New quiz</h1>
</header>

<div class="pad-large alt-page">
    <form @submit=${onCreate}>
        <label class="editor-label layout">
            <span class="label-col">Title:</span>
            <input class="input i-med" type="text" name="title"></label>
        <label class="editor-label layout">
            <span class="label-col">Topic:</span>
            <select class="input i-med" name="topic">
                <option value="all">All Categories</option>
                <option value="it">Languages</option>
                <option value="hardware">Hardware</option>
                <option value="software">Tools and Software</option>
            </select>
        </label>
        <input class="input submit action" type="submit" value="Save">
    </form>
</div>

<header class="pad-large">
    <h2>Questions</h2>
</header>

<div class="pad-large alt-page">

    <article class="editor-question">
        <div class="layout">
            <div class="question-control">
                <button class="input submit action"><i class="fas fa-check-double"></i>
                    Save</button>
                <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
            </div>
            <h3>Question 1</h3>
        </div>
        <form>
            <textarea class="input editor-input editor-text" name="text"
                placeholder="Enter question"></textarea>
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="0" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-0" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="1" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-1" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input class="input" type="radio" name="question-1" value="2" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input class="input" type="text" name="answer-2" />
                <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">
                <button class="input submit action">
                    <i class="fas fa-plus-circle"></i>
                    Add answer
                </button>
            </div>
        </form>
    </article>

    <article class="editor-question">
        <div class="layout">
            <div class="question-control">
                <button disabled class="input submit action"><i class="fas fa-check-double"></i>
                    Save</button>
                <button disabled class="input submit action"><i class="fas fa-times"></i>
                    Cancel</button>
            </div>
            <h3>Question 1</h3>
        </div>
        <form>
            <textarea disabled class="input editor-input editor-text" name="text"
                placeholder="Enter question"></textarea>
            <div class="editor-input">

                <label class="radio">
                    <input disabled class="input" type="radio" name="question-1" value="0" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input disabled class="input" type="text" name="answer-0" />
                <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input disabled class="input" type="radio" name="question-1" value="1" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input disabled class="input" type="text" name="answer-1" />
                <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">

                <label class="radio">
                    <input disabled class="input" type="radio" name="question-1" value="2" />
                    <i class="fas fa-check-circle"></i>
                </label>

                <input disabled class="input" type="text" name="answer-2" />
                <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="editor-input">
                <button disabled class="input submit action">
                    <i class="fas fa-plus-circle"></i>
                    Add answer
                </button>
            </div>
        </form>
        <div class="loading-overlay working"></div>
    </article>

    <article class="editor-question">
        <div class="layout">
            <div class="question-control">
                <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
            </div>
            <h3>Question 2</h3>
        </div>
        <form>
            <p class="editor-input">This is the second question.</p>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-2" value="0" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>Answer 0</span>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-2" value="1" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>Answer 1</span>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question-2" value="2" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>Answer 2</span>
            </div>
        </form>
    </article>

    <article class="editor-question">
        <div class="editor-input">
            <button class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add question
            </button>
        </div>
    </article>

</div>

</section>`;

export async function editorPage(ctx) {
    ctx.render(editorTemp(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        const data = getFormData(e.target);
        const title = data.title;
        const optionEl = document.querySelector('select').selectedOptions[0];
        const topic = optionEl.innerText;

        if (!title || topic === "All categories") {
            alert('All fields are required! Please try again.');
            return;
        }

        await createQuiz({ title, topic });

        try {
            ctx.page.redirect('/browse');
        } catch (error) {
            alert(error.message);
        }
    }
}
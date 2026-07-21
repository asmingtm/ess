<section id="buttons" class="flexy pad gap">
    <article class="flexy gap-small">
        <header class="topic">
            <p class="label">Buttons</p>
            <label for="info-buttons" class="action dull icon material-icons-round">
                <input type="checkbox" name="info" id="info-buttons">
            </label>
        </header>
        <div class="block flexy action">
            <p class="title">Note</p>
            <i class="info marb">Required to run and were used to build.</i>
            <span class="flex gap-small nolist">
                <li class="snippet">HTML</li>
                <li class="snippet">CSS</li>
            </span>
        </div>
        <div class="flexy">
            <p class="label">Types of buttons</p>
            <p class="info">
                There are 7 types of ready-made buttons available in this package;
            </p>
            <ol class="padx-large pady-small">
                <li>Primary</li>
                <p class="info">The main button that is used for positive interactions.</p>
                <li>Accent</li>
                <p class="info">The other main button that is used as an option for primary button.</p>
                <li>Warn</li>
                <p class="info">The button that is used for negative or confedintial interactions.</p>
                <li>Dull</li>
                <p class="info">They are used when you want to dismiss or give neutral interactions.</p>
                <li>Border</li>
                <p class="info">They are a option to Dull buttons.</p>
                <li>Text</li>
                <p class="info">They are basic plain text as buttons.</p>
                <li>shine</li>
                <p class="info">Special type of button with a small animation to use in areas where something can be purchased.</p>
            </ol>
        </div>
        <div class="highlight">
            <header class="topic">
                <i class="icon material-icons-round">info_outline</i>
                <p class="label">Note</p>
            </header>
            <i class="info">
                You don't have to use <code class="snippet">&ltbutton&gt</code> inorder to access button classes while developing. You can use any element you desire and it will work perfectly fine.
            </i> 
        </div>
    </article>
    <article class="flexy gap-small">
        <header class="topic">
            <p class="label size-large">Default buttons</p>
            <label for="code-buttons-default" class="action dull icon material-icons-round">
                <input type="checkbox" name="code" id="code-buttons-default">
            </label>
        </header>
        <code class="block for-code">
            <div class="topic">
                <p class="label">html</p>
                <button class="action dull icon material-icons-round">copy</button>
            </div>
            <pre class="lan-html">&ltbutton class="shine"&gt shine &lt/button&gt
&ltbutton class="primary"&gt Primary &lt/button&gt
&ltbuton class="accent"&gt Accent &lt/buton&gt
&ltbuton class="warn"&gt Warn &lt/buton&gt
&ltbutton class="dull"&gt Dull &lt/button&gt
&ltbutton class="border"&gt Border &lt/button&gt
&ltbutton class="text"&gt Text &lt/button&gt</pre>
        </code>
        <div class="gridbox gap-small">
            <button class="primary"> Primary </button>
            <buton class="accent"> Accent </buton>
            <button class="warn"> Warn </button>
            <button class="dull"> Dull </button>
            <button class="border"> Border </button>
            <button class="text"> Text </button>
        </div>
    </article>
    <article class="flexy gap-small mart">
        <header class="topic">
            <p class="label size-large">Buttons effects</p>
            <button class="primary icon"></button>
            <button class="accent icon"></button>
            <button class="warn icon"></button>
            <button class="dull icon"></button>
            <button class="border icon"></button>
            <label for="code-buttons-effects" class="action dull icon material-icons-round">
                <input type="checkbox" name="code" id="code-buttons-effects">
            </label>
        </header>
        <code class="block for-code">
            <div class="topic">
                <p class="label">html</p>
                <button class="action dull icon material-icons-round">copy</button>
            </div>
        <pre class="lan-html">&ltbutton class="primary shine"&gtShine&lt/button&gt
&ltbutton class="primary outline"&gtOutline&lt/button&gt
&ltbutton class="primary capsule"&gtCapsule&lt/button&gt
&ltbutton class="primary sharp"&gtSharp&lt/button&gt
&ltbutton class="primary hover0"&gtHover0&lt/button&gt
&ltbutton class="primary active0"&gtActive0&lt/button&gt
&ltbutton class="primary dead"&gtDead&lt/button&gt
&ltbutton class="primary disabled"&gtDisabled&lt/button&gtz</pre>
        </code>
        <div class="gridbox gap-small">
            <button class="primary shine">Shine</button>
            <button class="primary outline">Outline</button>
            <button class="primary capsule">Capsule</button>
            <button class="primary sharp">Sharp</button>
            <button class="primary hover0">Hover0</button>
            <button class="primary active0">Active0</button>
            <button class="primary dead">Dead</button>
            <button class="primary disabled">Disabled</button>
        </div>
    </article>
    <article class="flexy gap-small mart">
        <header class="topic">
            <p class="label size-large">Buttons with icons</p>
            <label for="code-buttons-icons" class="action dull icon material-icons-round">
                <input type="checkbox" name="code" id="code-buttons-icons">
            </label>
        </header>
        <code class="block for-code">
            <div class="topic">
                <p class="label">html</p>
                <button class="action dull icon material-icons-round">copy</button>
            </div>
        <pre class="lan-html">&ltbutton class="dull icon material-icons-round"&gt
email
&lt/button&gt
&ltbutton class="dull"&gt
&lti class="icon material-icons-round"&gtemail&lt/i&gt
&lt/button&gt
&ltbutton class="dull"&gt
&lti class="icon material-icons-round"&gtemail&lt/i&gt
&ltp class="label"&gtLabel&lt/p&gt
&lt/button&gt
&ltbutton class="dull"&gt
&ltp class="label"&gtLabel&lt/p&gt
&lti class="icon material-icons-round"&gtemail&lt/i&gt
&lt/button&gt</pre>
        </code>
        <div class="flex ai-c gap-small">
            <button class="dull icon material-icons-round">
                email
            </button>
            <button class="dull">
                <i class="icon material-icons-round">
                    email
                </i>
            </button>
            <button class="dull">
                <i class="icon material-icons-round">
                    email
                </i>
                <p class="label">Label</p>
            </button>
            <button class="dull">
                <p class="label">Label</p>
                <i class="icon material-icons-round">
                    email
                </i>
            </button>
        </div>
    </article>
    <article class="flexy gap-small">
        <header class="topic">
            <p class="label">How to use</p>
        </header>
    </article>
</section>
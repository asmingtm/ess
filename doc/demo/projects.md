<body class="flexy pad gap">
    <header id="ess-root-snackbar">
        <div class="snackbar">
            <p class="label">Copied text!</p>
        </div>
    </header>
    <header class="topic">
        <i class="icon material-icons-round">folder</i>
        <p class="label">Projects</p>
        <div class="action select">
            <label for="view-list">
                <input type="radio" name="view" id="view-list" checked>
                <i class="icon material-icons-round">menu</i>
            </label>
            <label for="view-grid">
                <input type="radio" name="view" id="view-grid">
                <i class="icon material-icons-round">grid_view</i>
            </label>
        </div>
    </header>
    <section class="solid">
        <div class="flex wrap">
            <i class="icon material-icons-round" style="color: var(--primary)">article</i>
            <p class="label">
                Docs
                <i class="icon material-icons-round">star</i>
            </p>
            <i class="info">22 Apr</i>
            <label for="ctxt-proj" class="action text circle icon material-icons-round">
                more_vert
            </label>
        </div>
    </section>

    <script type="module">
        import ess from "./index.js";
    </script>
</body>
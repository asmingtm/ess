/* ========== IMPORT ========== */

// core
import "./js/core/config.js";
import "./js/core/init.js";

// form
import "./js/widget/form/range.js";

// notification
import essContext from "./js/widget/notification/context.js";
import essSnackbar from "./js/widget/notification/snackbar.js";

/* ========== BUNDLE ========== */

const ess = {};

ess.snackbar = essSnackbar;
ess.context = essContext;

/* ========== TESTING ========== */



/* ========== EXPORT ========== */

export default ess;
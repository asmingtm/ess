/* ========== IMPORT ========== */

// core
import "./js/core/config.js";
import "./js/core/init.js";

// notification
import essContext from "./js/widget/notification/context.js";
import essSnackbar from "./js/widget/notification/snackbar.js";

/* ========== EXPORT ========== */

const ess = {};
ess.snackbar = essSnackbar;
ess.context = essContext;

export default ess;
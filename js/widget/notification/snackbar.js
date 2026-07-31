// [CAR = Component Anatomy Rules]

/* 
How?
    Start by creating a snackbar by providing it name, html and parent.
Name
    The name is the identifer for the snackbar. It is used in every other command and should never repeat.
html
    This is the snackbar's HTML which is to be displayed. Follow the CAR for building snackbars. All the diplayed snackbars are shown in header#ess-root-snackbar
*/

const essSnackbar = {};

// index of last snackbar
let iSB=0;
// created snackbars will show up here.
let createdSnackbar = [
    {
        id: 0, // nth numbered snackbar (for error handling)
        name: "test", // snackbar identifier
        visible: 0, // if snackbar is visible
        html: // displayed in header#ess-root-snackbars
        `<div class="snackbar"></div>`
    }
];

// create resuable snackbar
essSnackbar.create = function(inputName, inputHTML){
    const newID = iSB + 1; iSB = newID;
    createdSnackbar[iSB] = {
        id: newID,
        name: inputName,
        visible: 0,
        html: inputHTML,
    }
};

essSnackbar.edit = function(name, html){};
essSnackbar.delete = function(name){};
essSnackbar.show = function(name, duration){};
essSnackbar.hide = function(name, duration){};

// show snackbar detail (for debugging)
essSnackbar.console = function(name){
    let foundSB = {};
    createdSnackbar.forEach (snackbar => {
        if(snackbar.name === name){
            foundSB = snackbar
        }
    });

    if(foundSB.name === name){
        console.log(
        `name: ${foundSB.name}\nid: ${foundSB.id}\nvisible: ${foundSB.visible}\nhtml:\n${foundSB.html}`);
    }
    else{console.error("Could not find snackbar named: ", name);}
}
export default essSnackbar;
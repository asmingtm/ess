// [CAR = Component Anatomy Rules]

/* 
How?
    Start by creating a Context by providing it name, html and parent.
Name
    The name is the identifer for the Context. It is used in every other command and should never repeat.
html
    This is the Context's HTML which is to be displayed. Follow the CAR for building Contexts. All the diplayed Contexts are shown in header#ess-root-Context
*/

const essContext = {};

// index of last Context
let iCXT=0;
// created Contexts will show up here.
let createdContext = [
    {
        id: 0, // nth numbered Context (for error handling)
        name: "test", // context identifier
        visible: 0, // if context is visible
        html: // displayed in header#ess-root-contexts
        `<div class="context"></div>`
    }
];

essContext.create = function(inputName, inputHTML){
    const newID = iCXT + 1; iCXT = newID;
    createdContext[iCXT] = {
        id: newID,
        name: inputName,
        visible: 0,
        html: inputHTML,
    }
};

essContext.edit = function(name, html){};
essContext.delete = function(name){};
essContext.show = function(name, duration){};
essContext.hide = function(name, duration){};

essContext.console = function(name){
    let foundCXT = {};
    createdContext.forEach (context => {
        if(context.name === name){
            foundCXT = context
        }
    });

    if(foundCXT.name === name){
        console.log(
        `name: ${foundCXT.name}\nid: ${foundCXT.id}\nvisible: ${foundCXT.visible}\nhtml:\n${foundCXT.html}`);
    }
    else{console.error("Could not find context named: ", name);}
}
export default essContext;
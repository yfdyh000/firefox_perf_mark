/**
 * Created by Askeing on 2016/3/26.
 */
"use strict";

var options = {
    subtree: true,
    childList: true,
    attributes: false
};

var body_observer = new MutationObserver(
    function(mutations) {
        /*
        if(document.body) {
            performance.mark("The document.body is changed. " + window.location.href);
            body_observer.disconnect();
        }
        */
        mutations.forEach(function (mutation) {
            if(mutation.target.className == "kix-appview-editor") {
                console.log("Found kix-appview-editor changed");
                performance.mark("Found kix-appview-editor changed");
            }
            if(mutation.target.id == "docs-header") {
                console.log("Found docs-header changed");
                performance.mark("Found docs-header changed");
            }
        });
    }
);
body_observer.observe(document.documentElement, options);

/*
    var editor = document.querySelector('.kix-appview-editor');
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var entry = {
                mutation: mutation,
                el: mutation.target,
                value: mutation.target.textContent,
                oldValue: mutation.oldValue
            };
            console.log('Recording Mutation:', entry);
        });
    });
    var options = {
        subtree: true,
        childList: true,
        attributes: false
    };
    observer.observe(editor, options);
*/
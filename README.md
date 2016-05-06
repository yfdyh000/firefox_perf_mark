# Firefox Perf Mark Tools
The Firefox Add-Ons tools for finding performance problems

## [Perf Mark of Add-On Start and End](https://addons.mozilla.org/en-US/firefox/addon/perfmark-startend-google-docs/)

* Add-On folder: `perf_mark_startend_google_docs`
* Add-On Link: https://addons.mozilla.org/en-US/firefox/addon/perfmark-startend-google-docs/

Using Performance Mark to monitor the Add-On Start and End.
The Profiler can show the performance mark on profiling results at pageMod start and end.

Setup the URL Match Pattern to monitor the timing.

**Reference**:
https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod
```text
"start": Load content scripts immediately after the document element is inserted into the DOM, but before the DOM content itself has been loaded
"ready": Load content scripts once DOM content has been loaded, corresponding to the DOMContentLoaded event
"end": Load content scripts once all the content (DOM, JS, CSS, images) has been loaded, at the time the window.onload event fires
```

## [Sending Perf Mark by Hotkeys](https://addons.mozilla.org/en-US/firefox/addon/sending-perf-mark-by-hotkeys/)

* Add-On folder: `perf_mark_hotkeys`
* Add-On Link: https://addons.mozilla.org/en-US/firefox/addon/sending-perf-mark-by-hotkeys/

Using Hotkeys to send Performance Mark at Runtime.
The Profiler can show the performance mark on profiling results.
You can setup the mark's message on Add-On preferences page.

**Hotkeys**:
Ctrl+Shift+3, Ctrl+Shift+4, Ctrl+Shift+5, ..., Ctrl+Shift+0

## Perf Mark of Mutations for Google Docs

* Add-On folder: `perf_mark_mutations_google_docs`
* Add-On Link: TBD

TBD

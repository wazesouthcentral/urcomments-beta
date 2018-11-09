// ==UserScript==
// @name            WME URComments USA_SouthCentral - Beta
// @description     This script is for South Central editors for standard comments to be used with the script URComments
// @namespace       https://greasyfork.org/en/scripts/374178-wme-urcomments-usa-southcentral-beta
// @grant           none
// @grant           GM_info
// @version         2018.11.09.02
// @match           https://editor-beta.waze.com/*editor*
// @match           https://beta.waze.com/*editor*
// @match           https://www.waze.com/*editor*
// @author          Original script created by Rick Zabel '2014, Modified for use in SCR by Travis Turner (turnertr) turnertr_waze@gmail.com and assisted by Daniel Beames (dBsooner) daniel@dbsooner.com
// @license         MIT/BSD/X11
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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

// ==/UserScript==
/* Changelog
 * 5th update to the format
 * 0.0.1 - initial version
 * 0.0.10 - correct auto reminder/close positions
 * 0.0.11 - Corrections to update messaging
 * 2018.02.22.01 - New version numbering, update Address Adjustment, Added "Add Toll Pass to App", change "I" to "We". - dB
 * 2018.02.27.01 - Modified Address Adjustment, spellchecked. - dB
 * 2018.03.13.01 - Added Researching, moved Unlock Request, modified Speed Limit already correct. - dB
 * 2018.03.13.02 - Missed "," after a statement in array. - dB
 * 2018.08.15.01 - Changed match statements to match the parent script -tt
 * 2018.11.06.01 - Fixed index for default reminder position. Added Manual Tile Refresh. Revised Add Toll Pass to App. - dB
 * 2018.11.06.02 - Didn't escape quotations. My fault. :( - dB
 * 2018.11.06.03 - Updated Add Toll Pass to App verbage per karlcr9911's recommendations. Removed "Tolls - No User Transponder". Updated "Tolls - No User Transponder (avoid tolls)" to just be "Tolls - Avoid Tolls". - dB
 * 2018.11.09.01 - Rewrote to pull canned messages from Google sheets. - dB
 * 2018.11.09.02 - Updated namespace. - dB
 */

var URCommentUSA_SouthCentralVersion = GM_info.script.version;
var URCommentUSA_SouthCentralUpdateMessage = "yes"; // yes alert the user, no has a silent update.
var URCommentUSA_SouthCentralVersionUpdateNotes = "URC USA_SouthCentral List has been updated to v" + URCommentUSA_SouthCentralVersion;

if (URCommentUSA_SouthCentralUpdateMessage === "yes") {
    if (localStorage.getItem('URCommentUSA_SouthCentralVersion') !== URCommentUSA_SouthCentralVersion) {
        alert(URCommentUSA_SouthCentralVersionUpdateNotes);
        localStorage.setItem('URCommentUSA_SouthCentralVersion', URCommentUSA_SouthCentralVersion);
    }
}

const DEBUG = true;
function log(message) { console.log('SCR URC: ', message); }
function logError(message) { console.error('SCR URC: ', message); }
function logDebug(message) { if (DEBUG) console.debug('SCR URC: ', message); }
function logWarning(message) { console.warn('SCR URC: ', message); }

var parsedResults = [];
let reminderMsgIdx, closedNotIdentifiedIdx;

function setURCcommentsVars() {
    //Custom Configuration: this allows your "reminder", and close as "not identified" messages to be named what ever you would like.
    //the position in the list that the reminder message is at. (starting at 0 counting titles, comments, and ur status). in my list this is "4 day Follow-Up"
    //window.UrcommentsUSA_SouthCentralReminderPosistion = 30;

    //this is the note that is added to the the reminder link  option
    window.UrcommentsUSA_SouthCentralReplyInstructions = 'To reply, please either use the Waze app or go to '; //followed by the URL - superdave, rickzabel, t0cableguy 3/6/2015

    //the position of the close as Not Identified message (starting at 0 counting titles, comments, and ur status). in my list this is "7th day With No Response"
    //window.UrcommentsUSA_SouthCentralCloseNotIdentifiedPosistion = 6;

    //This is the list of Waze's default UR types. edit this list to match the titles used in your area!
    //You must have these titles in your list for the auto text insertion to work!
    window.UrcommentsUSA_SouthCentraldef_names = [];
    window.UrcommentsUSA_SouthCentraldef_names[6] = "Incorrect turn"; //"Incorrect turn";
    window.UrcommentsUSA_SouthCentraldef_names[7] = "Incorrect address"; //"Incorrect address";
    window.UrcommentsUSA_SouthCentraldef_names[8] = "Incorrect route"; //"Incorrect route";
    window.UrcommentsUSA_SouthCentraldef_names[9] = "Missing roundabout"; //"Missing roundabout";
    window.UrcommentsUSA_SouthCentraldef_names[10] = "General error"; //"General error";
    window.UrcommentsUSA_SouthCentraldef_names[11] = "Turn not allowed"; //"Turn not allowed";
    window.UrcommentsUSA_SouthCentraldef_names[12] = "Incorrect junction"; //"Incorrect junction";
    window.UrcommentsUSA_SouthCentraldef_names[13] = "Missing bridge overpass"; //"Missing bridge overpass";
    window.UrcommentsUSA_SouthCentraldef_names[14] = "Wrong driving direction"; //"Wrong driving direction";
    window.UrcommentsUSA_SouthCentraldef_names[15] = "Missing Exit"; //"Missing Exit";
    window.UrcommentsUSA_SouthCentraldef_names[16] = "Missing Road"; //"Missing Road";
    window.UrcommentsUSA_SouthCentraldef_names[18] = "Places - Missing Landmark"; //"Missing Landmark";
    window.UrcommentsUSA_SouthCentraldef_names[19] = "Blocked Road"; //"Blocked Road";
    window.UrcommentsUSA_SouthCentraldef_names[21] = "Missing Street Name"; //"Missing Street Name";
    window.UrcommentsUSA_SouthCentraldef_names[22] = "Incorrect Street Prefix or Suffix"; //"Incorrect Street Prefix or Suffix";
    window.UrcommentsUSA_SouthCentraldef_names[23] = "Speed Limit"; //"Missing or invalid speed limit";


    //below is all of the text that is displayed to the user while using the script
    window.UrcommentsUSA_SouthCentralURC_Text = [];
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip = [];
    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT = [];
    window.UrcommentsUSA_SouthCentralURC_URL = [];

    //zoom out links
    window.UrcommentsUSA_SouthCentralURC_Text[0] = "Zoom Out 0 & Close UR";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[0] = "Zooms all the way out and closes the UR window";

    window.UrcommentsUSA_SouthCentralURC_Text[1] = "Zoom Out 2 & Close UR";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[1] = "Zooms out to level 2 and closes the UR window (this is where I found most of the toolbox highlighting works)";

    window.UrcommentsUSA_SouthCentralURC_Text[2] = "Zoom Out 3 & Close UR";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[2] = "Zooms out to level 3 and closes the UR window (this is where I found most of the toolbox highlighting works)";

    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[3] = "Reload the map";

    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[4] = "Number of URs Shown";

    //tab names
    window.UrcommentsUSA_SouthCentralURC_Text[5] = "Comments";
    window.UrcommentsUSA_SouthCentralURC_Text[6] = "UR Filtering";
    window.UrcommentsUSA_SouthCentralURC_Text[7] = "Settings";

    //UR Filtering Tab
    window.UrcommentsUSA_SouthCentralURC_Text[8] = "Click here for Instructions";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[8] = "Instructions for UR filtering";
    window.UrcommentsUSA_SouthCentralURC_URL[8] = "https://docs.google.com/presentation/d/1zwdKAejRbnkUll5YBfFNrlI2I3Owmb5XDIbRAf47TVU/edit#slide=id.p";


    window.UrcommentsUSA_SouthCentralURC_Text[9] = "Enable URComments UR filtering";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[9] = "Enable or disable URComments filtering";

    window.UrcommentsUSA_SouthCentralURC_Text[10] = "Enable UR pill counts";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[10] = "Enable or disable the pill with UR counts";

    window.UrcommentsUSA_SouthCentralURC_Text[12] = "Hide Waiting";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[12] = "Only show URs that need work (hide in-between states)";

    window.UrcommentsUSA_SouthCentralURC_Text[13] = "Only show my URs";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[13] = "Hide URs where you have no comments";

    window.UrcommentsUSA_SouthCentralURC_Text[14] = "Show others URs past reminder + close";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[14] = "Show URs that other commented on that have gone past the reminder and close day settings added together";

    window.UrcommentsUSA_SouthCentralURC_Text[15] = "Hide URs Reminder needed";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[15] = "Hide URs where reminders are needed";

    window.UrcommentsUSA_SouthCentralURC_Text[16] = "Hide URs user replies";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[16] = "Hide UR with user replies";

    window.UrcommentsUSA_SouthCentralURC_Text[17] = "Hide URs close needed";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[17] = "Hide URs that need closing";

    window.UrcommentsUSA_SouthCentralURC_Text[18] = "Hide URs no comments";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[18] = "Hide URs that have zero comments";

    window.UrcommentsUSA_SouthCentralURC_Text[19] = "hide 0 comments without descriptions";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[19] = "Hide URs that do not have descriptions or comments";

    window.UrcommentsUSA_SouthCentralURC_Text[20] = "hide 0 comments with descriptions";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[20] = "Hide URs that have descriptions and zero comments";

    window.UrcommentsUSA_SouthCentralURC_Text[21] = "Hide Closed URs";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[21] = "Hide closed URs";

    window.UrcommentsUSA_SouthCentralURC_Text[22] = "Hide Tagged URs";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[22] = "Hide URs that are tagged with URO+ style tags ex. [NOTE]";

    window.UrcommentsUSA_SouthCentralURC_Text[23] = "Reminder days: ";

    window.UrcommentsUSA_SouthCentralURC_Text[24] = "Close days: ";

    //settings tab
    window.UrcommentsUSA_SouthCentralURC_Text[25] = "Auto set new UR comment";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[25] = "Auto set the UR comment on new URs that do not already have comments";

    window.UrcommentsUSA_SouthCentralURC_Text[26] = "Auto set reminder UR comment";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[26] = "Auto set the UR reminder comment for URs that are older than reminder days setting and have only one comment";

    window.UrcommentsUSA_SouthCentralURC_Text[27] = "Auto zoom in on new UR";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[27] = "Auto zoom in when opening URs with no comments and when sending UR reminders";

    window.UrcommentsUSA_SouthCentralURC_Text[28] = "Auto center on UR";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[28] = "Auto Center the map at the current map zoom when UR has comments and the zoom is less than 3";

    window.UrcommentsUSA_SouthCentralURC_Text[29] = "Auto click open, solved, not identified";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[29] = "Suppress the message about recent pending questions to the reporter and then depending on the choice set for that comment Clicks Open, Solved, Not Identified";

    window.UrcommentsUSA_SouthCentralURC_Text[30] = "Auto save after a solved or not identified comment";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[30] = "If Auto Click Open, Solved, Not Identified is also checked, this option will click the save button after clicking on a UR-Comment and then the send button";

    window.UrcommentsUSA_SouthCentralURC_Text[31] = "Auto close comment window";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[31] = "For the user requests that do not require saving this will close the user request after clicking on a UR-Comment and then the send button";

    window.UrcommentsUSA_SouthCentralURC_Text[32] = "Auto reload map after comment";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[32] = "Reloads the map after clicking on a UR-Comment and then send button. This does not apply to any messages that needs to be saved, since saving automatically reloads the map. Currently this is not needed but I am leaving it in encase Waze makes changes";

    window.UrcommentsUSA_SouthCentralURC_Text[33] = "Auto zoom out after comment";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[33] = "After clicking on a UR-Comment in the list and clicking send on the UR the map zoom will be set back to your previous zoom";

    window.UrcommentsUSA_SouthCentralURC_Text[34] = "Auto switch to the UrComments tab";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[34] = "Auto switch to the URComments tab when opening a UR, when the UR window is closed you will be switched to your previous tab";

    window.UrcommentsUSA_SouthCentralURC_Text[35] = "Close message - double click link (auto send)";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[35] = "Add an extra link to the close comment when double clicked will auto send the comment to the UR windows and click send, and then will launch all of the other options that are enabled";

    window.UrcommentsUSA_SouthCentralURC_Text[36] = "All comments - double click link (auto send)";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[36] = "Add an extra link to each comment in the list that when double clicked will auto send the comment to the UR windows and click send, and then will launch all of the other options that are enabled";

    window.UrcommentsUSA_SouthCentralURC_Text[37] = "Comment List";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[37] = "This shows the selected comment list. There is support for a custom list. If you would like your comment list built into this script or have suggestions on the Comments team’s list, please contact me at rickzabel @waze or @gmail";

    window.UrcommentsUSA_SouthCentralURC_Text[38] = "Disable done / next buttons";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[38] = "Disable the done / next buttons at the bottom of the new UR window";

    window.UrcommentsUSA_SouthCentralURC_Text[39] = "Unfollow UR after send";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[39] = "Unfollow UR after sending comment";

    window.UrcommentsUSA_SouthCentralURC_Text[40] = "Auto send reminders";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[40] = "Auto send reminders to my UR as they are on screen";

    window.UrcommentsUSA_SouthCentralURC_Text[41] = "Replace tag name with editor name";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[41] = "When a UR has the logged in editors name in the description or any of the comments of the UR (not the name Waze automatically add when commenting) replace the tag type with the editors name";

    window.UrcommentsUSA_SouthCentralURC_Text[42] = "(++)"; //double click to close links
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[42] = "Double click here to auto send - ";

    window.UrcommentsUSA_SouthCentralURC_Text[43] = "Don't show tag name on pill";
    window.UrcommentsUSA_SouthCentralURC_Text_tooltip[43] = "Don't show tag name on pill where there is a URO tag";


    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[0] = "UR Comments - You either have a older version of the custom comments file or a syntax error either will keep the custom list from loading. Missing: ";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[1] = "UR Comments - You are missing the following items from your custom comment list: ";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[2] = "List can not be found you can find the list and instructions at https://wiki.waze.com/wiki/User:Rickzabel/UrComments/";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[3] = "URComments - You can not set close days to zero";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[4] = "URComments - To use the double click links you must have the Auto click open, solved, not identified option enabled";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[5] = "URComments - Aborting FilterURs2 because both filtering, counts, and auto reminders are disabled";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[6] = "URComments: Loading UR data has timed out, retrying."; //this message is shown across the top of the map in a orange box, length must be kept short

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[7] = "URComments: Adding reminder message to UR: "; //this message is shown across the top of the map in a orange box, length must be kept short

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[8] = "URComment's UR Filtering has been disabled because URO+\'s UR filters are active."; //this message is shown across the top of the map in a orange box, length must be kept short

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[9] = "UrComments has detected that you have unsaved edits!\n\nWith the Auto Save option enabled and with unsaved edits you cannot send comments that would require the script to save. Please save your edits and then re-click the comment you wish to send.";

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[10] = "URComments: Can not find the comment box! In order for this script to work you need to have a UR open."; //this message is shown across the top of the map in a orange box, length must be kept short

    window.UrcommentsUSA_SouthCentralURC_USER_PROMPT[11] = "URComments - This will send reminders at the reminder days setting. This only happens when they are in your visible area. NOTE: when using this feature you should not leave any UR open unless you had a question that needed an answer from the wazer as this script will send those reminders."; //conformation message/ question
    window.UrcommentsUSA_SouthCentralArray2 = parsedResults;
    window.UrcommentsUSA_SouthCentralReminderPosistion = reminderMsgIdx;
    window.UrcommentsUSA_SouthCentralCloseNotIdentifiedPosistion = closedNotIdentifiedIdx;
}

function loadCommentsSpreadsheetAsync() {
    return new Promise((resolve, reject) => {
        $.get({
            url: 'https://spreadsheets.google.com/feeds/list/1O9zX369rcAqpn0B_n8jxDRUX76Q0thuKszcEsU1fKBM/5/public/values?alt=json',
            success: function(data) {
                let result = {error:null};
                for(let entryIdx = 0; entryIdx < data.feed.entry.length && !result.error; entryIdx++) {
                    let cellValue = data.feed.entry[entryIdx].title.$t;
                    if (entryIdx === 0) {
                        if (URCommentUSA_SouthCentralVersion < cellValue) {
                            result.error = GM_info.script.name + ' must be updated to at least version ' + cellValue + ' before the custom URC messages can be loaded.';
                        }
                    } else if (entryIdx === 1) {
                        // This is the index for the Reminder Message
                        reminderMsgIdx = eval(cellValue);
                    } else if (entryIdx === 2) {
                        // This is the index for the Closed Not Identified message
                        closedNotIdentifiedIdx = eval(cellValue);
                    } else {
                        // Process messages into array
                        let splitRow = cellValue.split("|");
                        if(splitRow[0] != "REMOVED" && splitRow[1] != "REMOVED" && splitRow[2] != "REMOVED") {
                            splitRow.forEach(function(val){
                                parsedResults.push(val);
                            });
                        }
                    }
                }
                log(parsedResults);
                log(reminderMsgIdx);
                resolve(result);
            },
            error: function() {
                reject({message: 'An error occurred while loading the ' + GM_info.script.name + ' custom URC messages definition spreadsheet.'});
            }
        });
    });
}

function init() {
    let t0 = performance.now();
    loadCommentsSpreadsheetAsync().then(result => {
        if (result.error) {
            logError(result.error);
            window.UrcommentsUSA_SouthCentralArray2 = [ "<br><b><font color=red>ERROR</font></b>", "", "Open", result.error, "", "Open" ];
            return;
        }
        logDebug('Loaded ' + parsedResults.length/3 + ' messages and headers in ' + Math.round(performance.now() - t0) + ' ms.');
        setURCcommentsVars();
        log('Initialized.');
    }).catch(err => {
        let msg;
        if (err && err.message) {
            msg = err.message;
        } else {
            msg = err;
        }
        logError(msg);
    });
}
function bootstrap() {
//    if (W && W.loginManager && W.map && W.loginManager.user && W.model && W.model.states && W.model.states.getObjectArray().length) {
        log('Initializing...');
        init();
//    } else {
//        log('Bootstrap failed. Trying again...');
//        setTimeout(function () {
//            bootstrap();
//       }, 1000);
//    }
}

bootstrap();

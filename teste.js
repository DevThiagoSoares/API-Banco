const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const driveactivity = google.driveactivity('v2');


function getTargetInfo(target) {
    if ('driveItem' in target) {
        const title = target.driveItem.title || 'unknown';
        return `driveItem:"${title}"`;
    }
    if ('drive' in target) {
        const title = target.drive.title || 'unknown';
        return `drive:"${title}"`;
    }
    if ('fileComment' in target) {
        const parent = target.fileComment.parent || {};
        const title = parent.title || 'unknown';
        return `fileComment:"${title}"`;
    }
    return `${getOneOf(target)}:unknown`;
}
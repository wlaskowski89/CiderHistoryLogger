const appendFileSync = require('fs').appendFileSync;
const existsSync = require('fs').existsSync;
const mkdirSync = require('fs').mkdirSync;

module.exports = class ciderHistoryLogger {
    constructor(env) {
        this.env = env
    }

    onReady(win) {
    }

    onRendererReady(win) {
    }

    onPlaybackStateDidChange(attributes) {
    }
	
    onNowPlayingItemDidChange(attributes) {
        if (!existsSync(`${this.env.dir}/logs`)) {
            mkdirSync(`${this.env.dir}/logs`);
        }
		var currentDate = new Date().toISOString();
		var message =  '[' + currentDate + '] ' + attributes.artistName + ' - ' + attributes.name + '\n';
		
		appendFileSync(`${this.env.dir}/logs/history.txt`, message)	
    }
	
    onBeforeQuit() {
    }
}

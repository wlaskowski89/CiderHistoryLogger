const appendFileSync = require('fs').appendFileSync;
const existsSync = require('fs').existsSync;
const mkdirSync = require('fs').mkdirSync;

module.exports = class nowPlayingPlugin {
    constructor(env) {
        this.env = env
    }

    // Called when the backend is ready
    onReady(win) {
    }

    // Called when the renderer is ready (app.init())
    onRendererReady(win) {
        console.log("\n\n\n [nowPlayingInfoPlugin] Ready \n\n\n");
    }

    onPlaybackStateDidChange(attributes) {
        if (!existsSync(`${this.env.dir}/dist`)) {
            mkdirSync(`${this.env.dir}/dist`);
        }

		var currentDate = new Date().toISOString();
		var message =  '[' + currentDate + '] ' + attributes.artistName + ' - ' + attributes.name + '\n';
		
		appendFileSync(`${this.env.dir}/dist/history.txt`, message)	
    }
	
    onNowPlayingItemDidChange(attributes) {
        if (!existsSync(`${this.env.dir}/dist`)) {
            mkdirSync(`${this.env.dir}/dist`);
        }
		var currentDate = new Date().toISOString();
		var message =  '[' + currentDate + '] ' + attributes.artistName + ' - ' + attributes.name + '\n';
		
		appendFileSync(`${this.env.dir}/dist/history.txt`, message)	
    }
	
    onBeforeQuit() {

    }
}

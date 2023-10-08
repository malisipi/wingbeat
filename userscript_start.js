// ==UserScript==
// @name         Wingbeat
// @namespace    http://github.com/malisipi/wingbeat
// @version      0.3.0
// @description  Wingbeat
// @author       malisipi
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.chrome = {
	storage: {
		local: {
			get: async (id) => {
				switch(id){
					case "old_branding": return {[id]:false};
					case "revert_quotes": return {[id]:false};
					case "spam_tweets": return {[id]:false};
					case "spam_tweet_value": return {[id]:3};
					case "custom_color": return {[id]:false};
					case "custom_color_value": return {[id]:"#ffffff"};
					case "disable_twemojies": return {[id]:false};
					default: {
						console.warn("Wingbeat (Missing Key):" + id);
						return {[id]:false};
					}
				}
			}
		}
	}
};

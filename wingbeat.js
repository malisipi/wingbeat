var wingbeat = {
    get_config: async (id) => {
        return (await chrome.storage.local.get(id))[id];
    },
    styling: `body {
    --my-color: %color;
}

main {
    background: color-mix(in srgb, var(--my-color) 20%, black);

    & div[data-testid="primaryColumn"] {
        background: color-mix(in srgb, var(--my-color) 40%, black);
    }
}

header,
.r-g2wdr4 {
    background: color-mix(in srgb, var(--my-color) 30%, black);
}

a[href="/compose/tweet"][role="link"],
div[role="button"][data-testid="tweetButtonInline"],
.r-l5o3uw,
div[data-testid="Dropdown"] {
    background: color-mix(in srgb, var(--my-color) 70%, black) !important;
}

div[role="radio"] {
    border-color: color-mix(in srgb, var(--my-color) 70%, black) !important;
    
    & div[dir] {
        color: #dddddd !important;
    }
}

.r-1cvl2hr {
    color: color-mix(in srgb, var(--my-color) 70%, black) !important;
}

svg {
    color: white !important;
}

svg[data-testid="icon-verified"] {
    color: color-mix(in srgb, var(--my-color) 60%, white) !important;
}`,
    load_old_icon: () => {
        setTimeout(()=>{
            if(!!document.querySelector("a[href='/home'][aria-label='Twitter'][role='link']")){
                document.querySelector("link[rel='shortcut icon']").href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-twitter' viewBox='0 0 16 16'%3E%3Cpath d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/%3E%3C/svg%3E";
            
		        let tweeter_svg = document.querySelector("a[href='/home'][aria-label='Twitter'][role='link']").querySelector("svg");
		        tweeter_svg.setAttribute("viewBox", "0 0 16 16");
		        tweeter_svg.querySelector("path").setAttribute("d","M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
            } else {
                return wingbeat.load_old_icon();
            }
        }, 500);
    },
    removed_spam_tweet_count: 0,
    remove_spam_tweets: () => {
        	document.addEventListener("scroll", () => {
		    document.querySelectorAll("article").forEach(
			    tweet => {
				    let hashtag_count = (tweet.innerText.match(/\#/g)||[]).length
				    let is_sponsored = !!tweet.querySelector("path[d='M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z']")
				    if (hashtag_count >= 3 && !is_sponsored){
					    console.info("Wingbeat: Spam Text Removed [" + (++wingbeat.removed_spam_tweet_count) + "]\n" + tweet.innerText)
					    tweet.remove();
				    };
			    }
		    );
	    });
    },
    change_theme_color: (the_color) => {
        setTimeout((_the_color) => {
            if(!!document.querySelector("a[href='/home'][aria-label='Twitter'][role='link']")){
                document.querySelectorAll("meta[name='theme-color']").forEach(e => e.content = the_color);
            } else {
                return wingbeat.change_theme_color(the_color);
            }
        }, 500, the_color)
    },
    load_style: (the_color) => {
        let the_style = document.createElement("style");
        the_style.setAttribute("class", "wingbeat");
        wingbeat.change_theme_color(the_color);
        the_style.innerHTML=wingbeat.styling.replace("%color", the_color);
        document.head.append(the_style);
    },
	init: async () => {
		console.info("Wingbeat!");
		if(await wingbeat.get_config("old_logo")) wingbeat.load_old_icon();
		if(await wingbeat.get_config("spam_tweets")) wingbeat.remove_spam_tweets();
		if(await wingbeat.get_config("custom_color")) wingbeat.load_style(await wingbeat.get_config("custom_color_value"));
	}
};

wingbeat.init();

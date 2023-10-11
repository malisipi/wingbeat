var wingbeat = {
    get_config: async (id) => {
        return (await chrome.storage.local.get(id))[id];
    },
    return_old_branding_styling:`
[data-testid="AppTabBar_Home_Link"] g path {
    d:path("M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z") !important;
    scale: calc(24/16);
}

[data-testid="AppTabBar_Explore_Link"] svg g path {
    d: path("M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z") !important;
    scale: calc(32/16);
    transform: translate(-2px, -2px);
}`,
    custom_color_styling: `body {
    --my-color: %color;
}

main,
.css-1dbjc4n.r-1awozwy.r-aqfbo4.r-kemksi.r-18u37iz.r-1h3ijdo.r-6gpygo.r-15ysp7h.r-1xcajam.r-ipm5af.r-1hycxz.r-136ojw6 {
    background: color-mix(in srgb, var(--my-color) 20%, black) !important;

    & div[data-testid="primaryColumn"] {
        border: none;
        background: color-mix(in srgb, var(--my-color) 40%, black) !important;
    }
}

div[aria-expanded="true"][data-viewportview="true"] > section[aria-labelledby="accessible-list-3"][role="region"] {
    border: none;
    background: color-mix(in srgb, var(--my-color) 40%, black) !important;
}

.r-kemksi {
    background: color-mix(in srgb, var(--my-color) 30%, black) !important;
}

header,
.r-g2wdr4,
aside[role="complementary"],
.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x,
.css-1dbjc4n.r-z32n2g.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-1777fci,
div:is([data-testid*="follow"], [data-testid="confirmationSheetConfirm"])[role="button"][tabindex] {
    background: color-mix(in srgb, var(--my-color) 30%, black) !important;
}

a[href="/compose/tweet"][role="link"],
div[role="button"][data-testid="tweetButtonInline"],
.r-l5o3uw,
div[data-testid="Dropdown"] {
    background: color-mix(in srgb, var(--my-color) 70%, black) !important;
}

:is([role="separator"], .css-1dbjc4n.r-1ssbvtb.r-1s2bzr4:has(.css-1dbjc4n.r-eqz5dr.r-1fz3rvf.r-1s2bzr4)),
div[role="radio"],
.r-vhj8yc,
.css-1dbjc4n.r-1bnu78o.r-16y2uox.r-1jgb5lz.r-14gqq1x.r-m5arl1,
.css-1dbjc4n.r-1bnu78o.r-1p0dtai.r-1d2f490.r-1jgb5lz.r-u8s1d.r-zchlnj.r-ipm5af.r-m5arl1{
    border-color: color-mix(in srgb, var(--my-color) 70%, black) !important;
    border: 1px solid;
    
    :not(&) {
        border: none !important;
    }
}

.css-1dbjc4n.r-1ssbvtb.r-1s2bzr4:has(.css-1dbjc4n.r-eqz5dr.r-1fz3rvf.r-1s2bzr4) {
    border: 1px solid;
    border-radius: 20px;
}

div[role="radio"] div[dir] {
    color: #dddddd !important;
}

.r-1cvl2hr {
    color: color-mix(in srgb, var(--my-color) 60%, white) !important;
}

.css-901oao {
    color: color-mix(in srgb, var(--my-color) 20%, white);
}

svg {
    color: white !important;
}

svg[data-testid="icon-verified"] {
    color: color-mix(in srgb, var(--my-color) 60%, white) !important;
}`,
    load_old_icon: () => {
        setTimeout(()=>{
            if(!!(document.querySelector("a:is([href='/home'],[href='/'])[aria-label='X'][role='link']") || document.querySelector(`[data-testid="TopNavBar"] svg`))){
                document.querySelector("link[rel='shortcut icon']").href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%231DA1F2' class='bi bi-twitter' viewBox='0 0 16 16'%3E%3Cpath d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/%3E%3C/svg%3E";
            
		        let tweeter_svg = document.querySelector("a:is([href='/home'],[href='/'])[aria-label='X'][role='link']")?.querySelector("svg");
		        if(!tweeter_svg) tweeter_svg = document.querySelector(`[data-testid="TopNavBar"]`)?.querySelector("svg");
		        tweeter_svg.setAttribute("viewBox", "0 0 16 16");
		        tweeter_svg.querySelector("path").setAttribute("d","M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z");
                wingbeat.load_old_branding.main();
            } else {
                return wingbeat.load_old_icon();
            }
        }, 500);
    },
    load_old_branding: {
        change_title: () => {
            document.title = document.title.replace("'", " ' ").split(" ").map(e => (e == "X") ? "Twitter" : e).join(" ").replace(" ' ", "'");
            wingbeat.old_title = document.title;
        },
        overwrite: (query, text) => {
            let object = document.querySelector(query);
            if (!!object) {
                object.innerText = text;
            } else {
                setTimeout(wingbeat.load_old_branding.overwrite, 100, query, text);
            };
        },
		load_style: () => {
			let the_style = document.createElement("style");
			the_style.setAttribute("class", "wingbeat");
			the_style.innerHTML=wingbeat.return_old_branding_styling;
			document.head.append(the_style);
		},
        main: () => {
            wingbeat.load_old_branding.overwrite(`a[href="/compose/tweet"] * * * * * *`, "Tweet");
            wingbeat.load_old_branding.overwrite(`div[data-testid="tweetButtonInline"][role="button"] * * *`, "Tweet");
            wingbeat.load_old_branding.load_style();
        },
        init: () => {
            (new MutationObserver(() => {
                if(wingbeat.old_title != document.title) {
                    wingbeat.load_old_branding.change_title();
                }
            })).observe(document.querySelector("head"), {childList: true, subtree: true});

            wingbeat.old_href = document.location.href;
            (new MutationObserver(() => {
                if (wingbeat.old_href != document.location.href) {
                    wingbeat.old_href = document.location.href;
                    wingbeat.load_old_branding.main();
                    wingbeat.revert_quotes();
                }
            })).observe(document.querySelector("body"), {childList: true, subtree: true});
        }
    },
    old_href: "",
    twemojies: {
	    init: () => {
	    	document.addEventListener("scroll", wingbeat.twemojies.replace_emojies);
	    	wingbeat.twemojies.replace_emojies();
	    },
	    replace_emojies: async () => {
	    	if(document.querySelectorAll("img[src*='/emoji/']").length > 0){
	    	    document.querySelectorAll("img[src*='/emoji/']").forEach(e=>{e.replaceWith(e.alt)});
	    	}
	    }
   	},
    removed_spam_tweet_count: 0,
    max_hashtag_count: null,
    remove_spam_tweets: async () => {
    		wingbeat.max_hashtag_count = Number(await wingbeat.get_config("spam_tweet_value"))
        	document.addEventListener("scroll", () => {
		    document.querySelectorAll("article").forEach(
			    tweet => {
				    let hashtag_count = (tweet.innerText.match(/\#/g)||[]).length
				    let is_sponsored = !!tweet.querySelector("path[d='M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z']")
				    if (hashtag_count > wingbeat.max_hashtag_count && !is_sponsored){
					    console.info("Wingbeat: Spam Text Removed [" + (++wingbeat.removed_spam_tweet_count) + "]\n" + tweet.innerText)
					    tweet.remove();
				    };
			    }
		    );
	    });
    },
    change_theme_color: (the_color) => {
        setTimeout((_the_color) => {
            if(!!(document.querySelector("a:is([href='/home'],[href='/'])[aria-label='X'][role='link']") || document.querySelector(`[data-testid="TopNavBar"] svg`))){
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
        the_style.innerHTML=wingbeat.custom_color_styling.replace("%color", the_color);
        document.head.append(the_style);
    },
	init: async () => {
		console.info("Wingbeat!");
		if(await wingbeat.get_config("old_branding")){
            wingbeat.load_old_icon();
		    wingbeat.load_old_branding.init();
		}
		wingbeat.revert_quotes();
		if(await wingbeat.get_config("spam_tweets")) wingbeat.remove_spam_tweets();
		if(await wingbeat.get_config("custom_color")) wingbeat.load_style(await wingbeat.get_config("custom_color_value"));
		if(await wingbeat.get_config("disable_twemojies")) wingbeat.twemojies.init();
	},
	revert_quotes: async () => {
		if (await wingbeat.get_config("revert_quotes")) return;
		if (wingbeat.old_href.match(/\/[a-zA-Z0-9\_\-\.]+\/status\/[0-9]+/g)?.length != 1) return;
		if (wingbeat.old_href.includes("/retweets/with_comments") || wingbeat.old_href.includes("/quotes")) return;
		if(!!document.querySelector("a[href] > time")?.parentElement?.parentElement?.parentElement){
			let space = document.createElement("span");
			space.innerText = " ";
			let quotes = document.createElement("a");
			quotes.href = wingbeat.old_href + "/retweets/with_comments";
			quotes.style.display = "contents";
			quotes.innerText = "Quotes";
			let tweet_description_box = document.querySelector("a[href] > time").parentElement.parentElement.parentElement;
			tweet_description_box.append(space);
			tweet_description_box.append(quotes);
		} else {
			setTimeout(wingbeat.revert_quotes, 500);
		}
	}
};

wingbeat.init();

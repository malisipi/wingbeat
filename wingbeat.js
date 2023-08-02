var wingbeat = {
    get_config: async (id) => {
        return (await chrome.storage.local.get(id))[id];
    },
    styling: `body {
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
            if(!!document.querySelector("a:is([href='/home'],[href='/'])[aria-label='Twitter'][role='link']")){
                document.querySelector("link[rel='shortcut icon']").href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' class='bi bi-twitter' viewBox='0 0 16 16'%3E%3Cpath d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/%3E%3C/svg%3E";
            
		        let tweeter_svg = document.querySelector("a:is([href='/home'],[href='/'])[aria-label='Twitter'][role='link']").querySelector("svg");
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
            document.title = document.title.split(" ").map(e => (e == "X") ? "Twitter" : e).join(" ");
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
        main: () => {
            wingbeat.load_old_branding.overwrite(`a[href="/compose/tweet"] * * * * * *`, "Tweet");
            wingbeat.load_old_branding.overwrite(`div[data-testid="tweetButtonInline"][role="button"] * * *`, "Tweet");
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
                }
            })).observe(document.querySelector("body"), {childList: true, subtree: true});
        }
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
            if(!!document.querySelector("a:is([href='/home'],[href='/'])[aria-label='Twitter'][role='link']")){
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
		if(await wingbeat.get_config("old_branding")){
            wingbeat.load_old_icon();
		    wingbeat.load_old_branding.init();
		}
		if(await wingbeat.get_config("spam_tweets")) wingbeat.remove_spam_tweets();
		if(await wingbeat.get_config("custom_color")) wingbeat.load_style(await wingbeat.get_config("custom_color_value"));
	}
};

wingbeat.init();

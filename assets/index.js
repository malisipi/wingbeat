let settings = ["old_branding", "spam_tweets", "disable_twemojies", "spam_tweet_value", "custom_color", "custom_color_value"];

settings.forEach(id => {
    document.getElementById(id).addEventListener("input", async e => {
        await chrome.storage.local.set({[e.target.id]: (e.target.type == "checkbox") ? e.target.checked : e.target.value });
    });
});

settings.forEach(async (id, index) => {
    if(Object.keys(await chrome.storage.local.get(id)).length == 0){
        let object = document.getElementById(id);
        await chrome.storage.local.set({[id]: (object.type == "checkbox") ? object.checked : object.value});
    };
    
    if(index == settings.length-1){
        settings.forEach(async id => {
            let data = (await chrome.storage.local.get(id))[id];
            let object = document.getElementById(id);
            if(object.type == "checkbox"){
                object.checked = data == true;
            } else if(object.type == "color"){
                if((data||"").startsWith("#")){
                    object.value = data;
                };
            } else {
                object.value = data;
            }
        });
    }
    
});

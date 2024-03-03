// Get the url
const site = window.location.hostname

console.log("Injector - The JavaScript has been injected to " + site + " | Injector Extention")

const background_color_colour = "#006f91" // hex colour/color | use this to get the hex colour/color https://htmlcolorcodes.com/color-picker/

const text_color_colour = "#FFFFFF" // hex colour/color | use this to get the hex colour/color https://htmlcolorcodes.com/color-picker/

// alert("Injector - The JavaScript has been injected to: " + site + " 🤖") // testing popup

// Add Custom CSS Function

const Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Add custom element

function createElement(tag,atrr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(atrr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

// Delete element

function deleteElement(id) {
    const ele = document.getElementById(id)
    document.removeChild(ele)
}

// Code for youtube

if (site.includes("youtube.com")) {
    Custom_CSS(`
        @font-face {
            font-family: "Rubik";
            src: url("https://files.caspergtag.co.uk/fonts/rubik/font/Rubik-Medium.ttf");
        }
        
        * {
            font-family: "Rubik" !important;
            /*color: ${text_color_colour} !important;*/
            /*background-color: ${background_color_colour} !important;/*
        }

        ytd-channel-about-metadata-renderer {
            zoom: 1;
        }

        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.1;
        }

        #js-custom-element {
            font-side: 52px;
            padding: 150px 0;
            color: ${text_color_colour} !important;
            background-color: #494949;
            position: fixed;
            top: 0;
            text-align: center;
            width: 100%;
            z-index: 999999;
        }

        .js-custom-element {
            font-side: 52px;
            padding: 150px 0;
            color: ${text_color_colour} !important;
            background-color: #3c3d3c;
            position: fixed;
            top: 0;
            text-align: center;
            width: 100%;
            z-index: 999999;
        }

    `) // to remove the comment remove this (/* /*)
}

// Code for Roblox

if (site.includes("roblox.com")) {
    Custom_CSS(`
    @font-face {
        font-family: "Rubik";
        src: url("https://files.caspergtag.co.uk/fonts/rubik/font/Rubik-Medium.ttf");
    }
        
    * {
        font-family: "Rubik" !important;
        /*color: ${text_color_colour} !important;*/
    }
    
    .dark-theme {
        background-color: ${background_color_colour};
        color: ${text_color_colour};
    }

    #HomeContainer {
        background-color: ${background_color_colour};
        color: ${text_color_colour} !important;
    }

    #rbx-body #wrap .container-main .content {
        background-color: ${background_color_colour};
        color: ${text_color_colour} !important;
    }

    #rbx-body #wrap .container-footer {
        background-color: #00000050;
        color: ${text_color_colour} !important;
    }

    .dark-theme .rbx-header {
        background-color: #00000050;
        color: ${text_color_colour} !important;
        border-width: 0 0 0px;
    }

    .dark-theme .rbx-left-col {
        background-color: #00000050;
        color: ${text_color_colour} !important;
    }
    `) // to remove the comment remove this (/* /*)
}

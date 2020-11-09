export const projService = {
    query
}


function query() {
    return gProjects
}

var gProjects = [
    {   
        id: 'p101',
        name: 'Friendly',
        img: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1603887299/friendly2_a0qtuh.jpg',
        gif: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604308220/friendly-gif_yrwffj.gif',
        url: 'https://friendly-cajul20.herokuapp.com/#',
        git: 'https://github.com/dimaVais/Friendly',
        langs: ['React.js  ', 'Sass  ', 'Node.js  ', 'MongoDB'],
        description: 'End to end project. Web app marketplace between animal shelter owners and potential adopters. First time working with a real back-end.'
    },
    {   
        id: 'p102',
        name: 'AppSus',
        img: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1603888718/appsus_d7uxnc.jpg',
        url: 'https://asafdulman.github.io/AppSus/',
        git: 'https://github.com/asafdulman/AppSus',
        gif: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604307438/appsus-gif_syeqku.gif',
        langs: ['React.js ', 'CSS'],
        description: 'Triple-google-like-apps including Emails, Keep and a Bookshop. Made with Reacts non-CLI version and with no external libraries. Sort, search and send emails. Add and keep notes, videos and send them as a email. Read details, and search for books via Google books API, add them to your store.'
    },
    {   
        id: 'p103',
        name: 'Mine Sweeper',
        url: 'https://asafdulman.github.io/MineSweeper/',
        git: 'https://github.com/asafdulman/MineSweeper',
        img: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1603961738/minesweeper1_pltijn.jpg',
        gif: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604306511/mine-gif_veeeic.gif',
        langs: ['Vanilla js ', 'CSS'],
        description: 'The nostalig game is coming back. This was my first project. Try to aviod the mines, use clean check, hints, and play at different levels.'
    },
    {   
        id: 'p104',
        name: 'Meme Generator',
        url: 'https://asafdulman.github.io/MemeGenerator/#',
        git: 'https://github.com/asafdulman/MemeGenerator',
        img: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1603962107/memegen_ghf9is.jpg',
        gif: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604307892/meme-gif_qwgbcr.gif',
        langs: ['Vanilla js ', 'CSS'],
        description: 'A meme generator app which lets you create your own memes! You can upload your own image, search and filter through existing ones, select an image to meme on, add , delete and move lines, change font, font size, color and outline color. You can save and download the meme.'
    },
    {   
        id: 'p105',
        name: 'Weather Center',
        url: 'https://asafdulman.github.io/weather-center/#/',
        git: 'https://github.com/asafdulman/weather-center',
        img: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604925442/Capture_mttepk.jpg',
        gif: 'https://res.cloudinary.com/dg0knvywy/image/upload/v1604925917/ezgif.com-gif-maker_1_r2ygw9.gif',
        langs: ['React js ', 'Sass'],
        description: 'Connect to the weather channel and find the place you want a 5 days weather forecast. Aware that you can save your favorite places for quick lookup'
    },
]

export class RandomName { // main class
    constructor(t, s, o, l) {
        this.text = t;
        this.slika = s;
        this.ocena = o;
        this.linkic = l;
    }
    set text(t) { // setter for text
        this._text = t;
    }
    get text() { // getter for text
        return this._text;
    }
    set slika(s) { // setter for picture
        this._slika = s;
    }
    get slika() { // getter for picture
        return this._slika;
    }
    set ocena(o) { // setter for score
        this._ocena = o;
    }
    get ocena() { // getter for score
        return this._ocena;
    }
    set linkic(l) { // setter for link
        this._linkic = l;
    }
    get linkic() { // getter for link
        return this._linkic;
    }
}

// Declaration of variables
let movie1 = new RandomName("Loki", "Images/loki.jpg", 9.8, "https://www.imdb.com/title/tt9140554/");
let movie2 = new RandomName("Ironman", "Images/ironman.jpg", 9.9, "https://www.imdb.com/title/tt0371746/");
let movie3 = new RandomName("Doctor Strange", "Images/doctorStrange.jpg", 9.3, "https://www.imdb.com/title/tt9419884/");
let movie4 = new RandomName("Nick Fury", "Images/nickFury.jpg", 1.7, "https://www.google.rs/search?q=nick+fury&sxsrf=AOaemvI8KhcwEOI2DKG76ukDr_in3AxYtg:1642549271452&source=lnms&tbm=isch&sa=X&ved=2ahUKEwicgOfuvLz1AhUOqaQKHbhDALgQ_AUoAXoECAEQAw&biw=889&bih=937&dpr=1");
let movie5 = new RandomName("Black Widow", "Images/blackWidow.jpeg", 2.8, "https://www.imdb.com/title/tt3480822/");
let movie6 = new RandomName("Thor", "Images/thor.jpg", 9.4, "https://www.imdb.com/title/tt3501632/?ref_=nv_sr_srsg_3");
let movie7 = new RandomName("Black Panther", "Images/blackPanther.jpg", 6.0, "https://www.imdb.com/title/tt1825683/");
let movie8 = new RandomName("Spiderman", "Images/spiderman.jpg", 4.2, "https://www.imdb.com/title/tt10872600/");
let movie9 = new RandomName("Hulk", "Images/hulk.jpg", 8.5, "https://www.imdb.com/title/tt0286716/");
let movie10 = new RandomName("War Machine", "Images/warMachine.jpg", 5.1, "https://www.google.rs/search?q=war+machine&sxsrf=AOaemvIam5KPCF6dOTT25RwPqWu545rFEQ:1642549396198&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjt1qSqvbz1AhXGCOwKHazVAVoQ_AUoAXoECAEQAw&biw=889&bih=937&dpr=1");
let movie11 = new RandomName("Omni Man", "Images/omniMan.jpg", 5.1, "https://www.imdb.com/title/tt6741278/");
let movie12 = new RandomName("Superman", "Images/superman.jpg", 5.5, "https://www.imdb.com/title/tt0770828/");
let movie13 = new RandomName("Batman", "Images/batman.jpg", 1.8, "https://www.imdb.com/title/tt1877830/");
let movie14 = new RandomName("Wonder Woman", "Images/wonderWoman.jpg", 2.0, "https://www.imdb.com/title/tt7126948/");
let movie15 = new RandomName("The Flash", "Images/theFlash.jpg", 3.4, "https://www.imdb.com/title/tt3107288/");
let movie16 = new RandomName("Aquaman", "Images/aquaman.jpg", 9.5, "https://www.imdb.com/title/tt1477834/");
let movie17 = new RandomName("Thanos", "Images/thanos.jpg", 6.6, "https://www.google.rs/search?q=thanos&tbm=isch&ved=2ahUKEwivkZ6svbz1AhUYrKQKHVG5BQwQ2-cCegQIABAA&oq=thanos&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgYIABAHEB46CwgAEIAEELEDEIMBOggIABCABBCxA1CsBViTC2CrDGgAcAB4AIABSYgBzgOSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=mFDnYa_lEJjYkgXR8pZg&bih=937&biw=889");
let movie18 = new RandomName("Starlord", "Images/starlord.jpg", 7.5, "https://www.imdb.com/title/tt2015381/");
let movie19 = new RandomName("Stepenwofl", "Images/stepenwolf.png", 5.5, "https://www.google.rs/search?q=steppenwolf&sxsrf=AOaemvI4rTsPV_6xGZm-Yk1MBeEhsdgC4g:1642549537000&source=lnms&tbm=isch&sa=X&ved=2ahUKEwij0rbtvbz1AhXIDOwKHRKoD34Q_AUoAXoECAEQAw&biw=889&bih=937&dpr=1");
let movie20 = new RandomName("Brainiac", "Images/brainiac.jpg", 3.8, "https://www.google.rs/search?q=brainiac&tbm=isch&ved=2ahUKEwjT8unuvbz1AhUKtKQKHYldBpEQ2-cCegQIABAA&oq=brainiac&gs_lcp=CgNpbWcQARgAMgcIIxDvAxAnMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgQIABAeOgUIABCABDoGCAAQBxAeOggIABCABBCxAzoICAAQsQMQgwE6BAgAEAM6BAgAEEM6CwgAEIAEELEDEIMBUN0EWPwNYKwTaABwAHgAgAFDiAGWBJIBATmYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=I1HnYZPVOIrokgWJu5mICQ&bih=937&biw=889");
let movie21 = new RandomName("Kratos", "Images/kratos.jpg", 6.2, "https://www.imdb.com/title/tt5838588/");

// Exporting array of movie variables inside
export let allMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20, movie21];

// Craeted by: Console logging (Just for fun)
export let crConsole = () => {
    console.log("// ENG //")
    console.log("Made by: Miljan Pantovic ©");
    console.log("But who actually cares.");
    setTimeout(() => {
        console.log("")
        console.log("// СРБ //");
        console.log("Направио: Миљан Пантовић ©");
        console.log("Али кога је заправо брига.");
    }, 2000)
}
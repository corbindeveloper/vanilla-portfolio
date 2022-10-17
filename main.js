// ====================================
// Redify ------------------

let redifyModal = () => {
    let modal = document.getElementById("redifyModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let redifyImages = [];
let i = 0;

redifyImages[0] = './assets/redify-photos/newHome.png';
redifyImages[1] = './assets/redify-photos/new_createTopic.png';
redifyImages[2] = './assets/redify-photos/new_createPost.png';
redifyImages[3] = './assets/redify-photos/new_viewPost.png';
redifyImages[4] = './assets/redify-photos/new_darkMode.png';
redifyImages[5] = './assets/redify-photos/comment.png';
redifyImages[6] = './assets/redify-photos/comment_appear.png';
redifyImages[7] = './assets/redify-photos/new_viewTopic.png';
redifyImages[8] = './assets/redify-photos/new_viewProfile.png';
redifyImages[9] = './assets/redify-photos/new_viewStats.png';
redifyImages[10] = './assets/redify-photos/new_viewSettings.png';
redifyImages[11] = './assets/redify-photos/sign_in.png';
redifyImages[12] = './assets/redify-photos/register.png';
// redifyImages[13] = './assets/redify-photos/playlist_card.png';
// Currently image isn't resize properly

let currentRedifyImage = document.getElementById('redifyGallery');


function redifyImageFunc(direction) {
    currentRedifyImage.src = redifyImages[i];

    if (direction == 'right') {
        currentRedifyImage.src = redifyImages[i++];
        
        if (i == redifyImages.length) {
            i = 0;
            currentRedifyImage.src = redifyImages[i]
        }
    }

    if (direction == 'left') {
        currentRedifyImage.src = redifyImages[i--];

        if (i == -1) {
            i = redifyImages.length - 1;
            currentRedifyImage.src = redifyImages[i];
        }
    }

    console.log(i);
    currentRedifyImage.src = redifyImages[i];

} 


// ====================================
// Local Hoops Modal ------------------

let localHoopsModal = () => {
    let modal = document.getElementById("hoopsModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let hoopsImages = [];
let n = 0;

hoopsImages[0] = './assets/hoops-photos/home.png';
hoopsImages[1] = './assets/hoops-photos/login.png';
hoopsImages[2] = './assets/hoops-photos/register.png';
hoopsImages[3] = './assets/hoops-photos/new.png';
hoopsImages[4] = './assets/hoops-photos/view.png';

let currentHoopsImage = document.getElementById('hoopsGallery');


function localHoopsImages(direction) {
    currentHoopsImage.src = hoopsImages[n];

    if (direction == 'right') {
        currentHoopsImage.src = hoopsImages[n++];
        
        if (n == hoopsImages.length) {
            n = 0;
            currentHoopsImage.src = hoopsImages[n]
        }
    }

    if (direction == 'left') {
        currentHoopsImage.src = hoopsImages[n--];

        if (n == -1) {
            n = hoopsImages.length - 1;
            currentHoopsImage.src = hoopsImages[n];
        }
    }

    console.log(n);
    currentHoopsImage.src = hoopsImages[n];

} 


// ====================================
// Dojoneer Modal ------------------

let dojoneerModal = () => {
    let modal = document.getElementById("dojoneerModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let dojoneerImages = [];
let y = 0;

dojoneerImages[0] = './assets/dojoneer-photos/dojoneer.png';

let currentDojoneerImage = document.getElementById('dojoneerGallery');


function localDojoneerImages(direction) {
    currentDojoneerImage.src = dojoneerImages[y];

    if (direction == 'right') {
        currentDojoneerImage.src = dojoneerImages[y++];
        
        if (y == dojoneerImages.length) {
            y = 0;
            currentDojoneerImage.src = dojoneerImages[y]
        }
    }

    if (direction == 'left') {
        currentDojoneerImage.src = dojoneerImages[y--];

        if (y == -1) {
            y = dojoneerImages.length - 1;
            currentDojoneerImage.src = dojoneerImages[y];
        }
    }

    console.log(y);
    currentDojoneerImage.src = dojoneerImages[y];

} 


// ====================================
// urCheatSheet Modal ------------------

let cheatSheetModal = () => {
    let modal = document.getElementById("cheatSheetModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let cheatSheetImages = [];
let c = 0;

cheatSheetImages[0] = './assets/cheatsheet-photos/home.png';
cheatSheetImages[1] = './assets/cheatsheet-photos/topic.png';
cheatSheetImages[2] = './assets/cheatsheet-photos/subtopic.png';
cheatSheetImages[3] = './assets/cheatsheet-photos/topic_table.png';
cheatSheetImages[4] = './assets/cheatsheet-photos/view_example.png';

let currentCheatSheetImage = document.getElementById('cheatSheetGallery');


function cheatSheetImagesGallery(direction) {
    currentCheatSheetImage.src = cheatSheetImages[c];

    if (direction == 'right') {
        currentCheatSheetImage.src = cheatSheetImages[c++];
        
        if (c == cheatSheetImages.length) {
            c = 0;
            currentCheatSheetImage.src = cheatSheetImages[c]
        }
    }

    if (direction == 'left') {
        currentCheatSheetImage.src = cheatSheetImages[c--];

        if (c == -1) {
            c = cheatSheetImages.length - 1;
            currentCheatSheetImage.src = cheatSheetImages[c];
        }
    }

    console.log(c);
    currentCheatSheetImage.src = cheatSheetImages[c];

} 


// ====================================
// Email one Modal ------------------

let emailOneModal = () => {
    let modal = document.getElementById("emailOneModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let emailOneImages = [];
let q = 0;

emailOneImages[0] = './assets/email-photos/email-one/top.png';
emailOneImages[1] = './assets/email-photos/email-one/bottom.png';
emailOneImages[2] = './assets/email-photos/email-one/top.png';
emailOneImages[3] = './assets/email-photos/email-one/bottom.png';


let currentEmailOneImage = document.getElementById('emailOneGallery');


function emailOneImageGallery(direction) {
    currentEmailOneImage.src = emailOneImages[q];

    if (direction == 'right') {
        currentEmailOneImage.src = emailOneImages[q++];
        
        if (q == emailOneImages.length) {
            q = 0;
            currentEmailOneImage.src = emailOneImages[q]
        }
    }

    if (direction == 'left') {
        currentEmailOneImage.src = emailOneImages[q--];

        if (q == -1) {
            q = emailOneImages.length - 1;
            currentEmailOneImage.src = emailOneImages[q];
        }
    }

    console.log(q);
    currentEmailOneImage.src = emailOneImages[q];

} 


// ====================================
// Game one Modal ------------------

let gameOneModal = () => {
    let modal = document.getElementById("gameOneModal");
    modal.style.display = "flex";
    console.log("open modal");
}

let gameOneImages = [];
let k = 0;

gameOneImages[0] = './assets/';
gameOneImages[1] = './assets/';
gameOneImages[2] = './assets/';
gameOneImages[3] = './assets/';


let currentGameOneImage = document.getElementById('gameOneGallery');


function egameOneImageGallery(direction) {
    currentGameOneImage.src = gameOneImages[k];

    if (direction == 'right') {
        currentGameOneImage.src = gameOneImages[k++];
        
        if (k == gameOneImages.length) {
            k = 0;
            currentGameOneImage.src = gameOneImages[k]
        }
    }

    if (direction == 'left') {
        currentGameOneImage.src = gameOneImages[k--];

        if (k == -1) {
            k = gameOneImages.length - 1;
            currentGameOneImage.src = gameOneImages[k];
        }
    }

    console.log(k);
    currentGameOneImage.src = gameOneImages[k];

} 



// =================================================
// EDU

function DojoCard() {
    var x = document.getElementById("dojoDrop");

    if (x.style.display !== "block") {
        x.style.display = "block";
        x.style.width = "100%";
        x.style.transition = "display ease-in 2s";
    } else {
        x.style.display = "none";
    }
}

function ctuCard() {
    var x = document.getElementById("ctuDrop");

    if (x.style.display !== "block") {
        x.style.display = "block";
        x.style.width = "100%";
        x.style.transition = "display ease-in 2s";
    } else {
        x.style.display = "none";
    }
}

function caCard() {
    var x = document.getElementById("caDrop");

    if (x.style.display !== "block") {
        x.style.display = "block";
        x.style.width = "100%";
        x.style.transition = "display ease-in 2s";
    } else {
        x.style.display = "none";
    }
}



 
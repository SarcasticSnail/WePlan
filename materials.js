let whichOne = 0
const changed = [1, 1, 1, 1, 1, 1];
//showing pop up box
document.getElementById("pop_box").style.display = "none";
function showBox(which){
    whichOne = which;
    if(changed[whichOne-1] == 1){
        document.getElementById("pop_box").style.display = "block";
    }
    changed[whichOne-1] = 0;
}

//getting the whitch BOO
function getWhichOne(){
    if (whichOne == 1){
        return 'first';
    }
    if (whichOne == 2){
        return 'second';
    }
    if (whichOne == 3){
        return 'third';
    }
    if (whichOne == 4){
        return 'fourth';
    }
    if (whichOne == 5){
        return 'fifth';
    }
    if (whichOne == 6){
        return 'sixth';
    }
}
function getWhichHeader(){
    if (whichOne == 1){
        return 'one';
    }
    if (whichOne == 2){
        return 'two';
    }
    if (whichOne == 3){
        return 'three';
    }
    if (whichOne == 4){
        return 'four';
    }
    if (whichOne == 5){
        return 'five';
    }
    if (whichOne == 6){
        return 'six';
    }
}

function getWhichLink(){
    if (whichOne == 1){
        return 'firstOne';
    }
    if (whichOne == 2){
        return 'secondTwo';
    }
    if (whichOne == 3){
        return 'thirdThree';
    }
    if (whichOne == 4){
        return 'fourthFour';
    }
    if (whichOne == 5){
        return 'fifthFive';
    }
    if (whichOne == 6){
        return 'sixthSix';
    }
}

//changing the picture
function changePic(){
    //setting new pic
    if(document.getElementById('doc_check').checked){
        document.getElementById(getWhichOne()).src = "docsLogo.png";
    }
    if(document.getElementById('slide_check').checked){
        document.getElementById(getWhichOne()).src = "slidesLogo.png";
    }
    if(document.getElementById('link_check').checked){
        document.getElementById(getWhichOne()).src = "linkIcon.png";
    }
    document.getElementById(getWhichOne()).style.width = "9rem";
    //setting new link
    document.getElementById(getWhichLink()).href = document.getElementById('link_href').value;
    //setting new header
    document.getElementById(getWhichHeader()).textContent = document.getElementById('link_name').value;
    //hiding da box :(
    document.getElementById("pop_box").style.display = "none";
}


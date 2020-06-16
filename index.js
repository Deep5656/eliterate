//this is index.js....
console.log('this is index.js');
let exambarhead = document.getElementsByClassName('exambarhead');
let exambar = document.getElementsByClassName('exambar');
// console.log(parentGrid,grid,exambar.length);
Array.from(exambar).forEach(e => {
    console.log(e);

    e.addEventListener('click',(elem)=>{
        // console.log('Deepanshu Katiyar');
        // let id = document.getElementById(e.target.id);
        // console.log(elem.target.id);
        // let targetedElem = document.getElementById(elem.target.id);
        // console.log(targetedElem);

        let upcomingHtml = `
        <div class="grid">
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>SBI</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>SBI</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>SBI</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            
           
        </div>
        `

        let bankingHtml = `
        <div class="grid">
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Bank</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Bank</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Bank</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
            <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Bank</h1>
                    <p>Clerk</p>
                </div>
            </div>
           
        </div>
        `
        let sscHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>SSC</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let teachingHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Teaching</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let jeeHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>JEE</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let gateHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>GATE</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let medicalHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Medical</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let upscHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>UPSC</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let defenceHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>Defance</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        let netHtml =`<div class="grid">
                <div class="gridchild">
                <div class="logo">
                    <img src="SBI.png" alt="SBI" id="image3">
                </div>
                <div class="logotitle">
                    <h1>NET</h1>
                    <p>Clerk</p>
                </div>
            </div>
            </div>`
            
        // console.log(html);
        let parentGrid = document.getElementById('parentGrid');
        // let grid = document.getElementsByClassName('grid');
        // console.log(parentGrid,grid);

        if(elem.target.id == 1){
            parentGrid.innerHTML = upcomingHtml;
        
        }else if(elem.target.id ==2){
            parentGrid.innerHTML = bankingHtml;

        } else if (elem.target.id == 3) {
            parentGrid.innerHTML = sscHtml;

        } else if (elem.target.id == 4) {
            parentGrid.innerHTML = teachingHtml;

        } else if (elem.target.id == 5) {
            parentGrid.innerHTML = jeeHtml;

        } else if (elem.target.id == 6) {
            parentGrid.innerHTML = gateHtml;

        } else if (elem.target.id == 7) {
            parentGrid.innerHTML = medicalHtml;

        } else if (elem.target.id == 8) {
            parentGrid.innerHTML = upscHtml;

        } else if (elem.target.id == 9) {
            parentGrid.innerHTML = defenceHtml;

        } else if (elem.target.id == 10) {
            
            parentGrid.innerHTML = netHtml;

        }

        // switch(elem.target.id){
        //     case 1:
        //         parentGrid.innerHTML = html;

        // }
        
       
    })
    
});
// for(let i =0; i<exambarhead.length; i++){
//     console.log(exambarhead[i]);
    
// }
//for menu bar..
let menubar = document.getElementById('smallnavbar');
let navbar = document.getElementById('navbar');
let cross = document.getElementById('cross');


menubar.addEventListener('click',()=>{
// console.log('deepanshu katiyar');
if(window.innerWidth<=768){
navbar.style='display:block;position:absolute;left:50%;padding:0px';
//  console.log(navbar);
//  navbar.className.remove('navbar');
 menubar.style='display:none';
    cross.style = 'display:block;position:absolute;left:30%;padding:0px';
    
}
})
cross.addEventListener('click',()=>{
    if(window.innerWidth<=768){
        navbar.style = 'display:none';
        menubar.style = 'display:block';
        cross.style = 'display:none';


    }
})
// console.log(cross);



// for notice box..

let deletNoticeBox = document.getElementById('deletNoticeBox');
console.log(deletNoticeBox);
deletNoticeBox.addEventListener('click', () => {
    let noticeContainer = document.getElementById('noticeContainer');
    noticeContainer.style = 'display:none';

});


// for mobile view of the our team.

let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');
let team3 = document.getElementById('team3');
if(window.innerWidth<1024){
    team1.style = 'width:90%';
    team2.style = 'width:90%';
    team3.style = 'width:90%';
}
console.log(team1,window.innerWidth);



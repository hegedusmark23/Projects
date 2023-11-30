
let posts = [
    {
        'author': 'Hegedűs Márk',
        'profilpicture': './img/profil-mark.jpg',
        'image': './img/1.jpg',
        'description': 'Fing elment fingani.',
        'location': 'Budapest, Magyarország',
        'comments': [],
        'url': './profile.html'
    },
    {
        'author': 'Hegedűs Réka',
        'profilpicture': './img/profil-reka.jpg',
        'image': './img/2.jpg',
        'description': 'Szar elment szarni.',
        'location': 'Szolnok, Magyarország',
        'comments': [],
        'url': './profile2.html'
    }

];

let profiles = [
    {
        'profilname': 'Hegedűs Márk',
        'nickname': 'hegedusmark',
        'profilpicture': './img/profil-mark.jpg',
        'followers': '6123',
        'following': '154',
        'posts': ['./posts/1.jpg','./posts/2.jpg','./posts/3.jpg','./posts/4.jpg','./posts/5.jpg','./posts/6.jpg','./posts/7.jpg'],
        'numberofposts': '7',
        
    },
    {
        'profilname': 'Hegedűs Réka',
        'nickname': 'hegedusreka',
        'profilpicture': './img/profil-reka.jpg',
        'followers': '6123',
        'following': '154',
        'posts': ['./posts/8.jpg','./posts/9.jpg','./posts/10.jpg','./posts/11.jpg','./posts/12.jpg','./posts/13.jpg','./posts/14.jpg'],
        'numberofposts': '7'
    }
];

let images = ['./posts/1.jpg','./posts/2.jpg','./posts/3.jpg','./posts/4.jpg','./posts/5.jpg','./posts/6.jpg','./posts/7.jpg'];


function show() {
    document.getElementById('postcontainer').innerHTML = '';
    document.getElementById('recommendedcontainer').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += /*html*/ `
            <div class="post-div">

                <div class="post-headline">
                    <img class="profil-img" src="${post['profilpicture']}" alt="">
                    <div>
                        <a class="profile-link" href="${profiles['url']}"><h3>${post['author']}</h3></a>
                        <p>${post['location']}</p>
                    </div>
                </div>

                <img class="post-image" src="${post['image']}">

                <div class="post-nav">
                    <a onclick="like(${i})"><img id="like" class="post-icon" src="./img/heart-empty.png" alt=""></a>
                    <a onclick="openComment(${i})"><img class="post-icon" src="./img/chat.png" alt=""></a>
                    <a><img class="post-icon" src="./img/send.png" alt=""></a>
                </div>

                <div class="description-div">${post['description']}</div>
                <div class="comments"><p>${post['comments']}</p></div>

                <div id="commentDiv${i}" class="comment-div d-none">
                    <input id="input${i}" type="text" placeholder="Type something ..">
                    <button class="send-button" onclick="addComment(${i})">Send</button>
                    <button class="close-button" onclick="closeComment(${i})">close</button>
                </div>
            </div>
        `;

    }

    for (let i = 0; i < profiles.length; i++) {
        const profile = profiles[i];

        document.getElementById('recommendedcontainer').innerHTML +=/*html*/ `

            
            <div class="recommended-profiles">
                <img class="profil-img" src="${profile['profilpicture']}" alt="">
                     <div class="recommended-user">
                        <p><b>${profile['profilname']}</b></p>
                        <p class="followers-text">Followers: ${profile['profilname']}</p>
                    </div>
                <a class="follow-link" href="">follow</a>
            </div>
        `;
    }
}

function renderProfile() {
    for (let i = 0; i < 1; i++) {
        const profile = profiles[0];
        document.getElementById('profilsection').innerHTML +=/*html*/ `

        <div class="profiledescription">
           <img class="profil-img-big" src="${profile['profilpicture']}" alt="">
           <div>
                 <p><b>${profile['nickname']}</b></p>
                 <div class="user-data">
                    <p><b>${profile['numberofposts']}</b> Posts</p>
                    <p><b>${profile['followers']}</b> Followers</p>
                    <p><b>${profile['following']}</b> Following</p>
                 </div>
                <p><b>${profile['profilname']}</b></p>
            </div>
        </div>

        <div class="line"></div>
        `;
       }

       renderPosts();
}

function renderPosts(){

    for (let i = 0; i < images.length; i++) {
        document.getElementById('posts').innerHTML += /*html*/`
        <div>
        <img onclick="showPhoto(${i})" class="posted-images" src="${images[i]}" alt="">
        </div>
        `;
    }
    
}

function showPhoto(i){
    document.getElementById('body').innerHTML =/*html*/`
        <div class="opened-photo">
            <img class="opened-image" src="${images[i]}" alt="">
            <a class="closer-div" href="profile.html"><img class="opened-image-closer" src="./img/delete.png" alt=""></a>
        </div>
    `;
}

function like(index) {
    if ( document.getElementById(`like${index}`).src  == "./img/heart-empty.png") {
         document.getElementById(`like${index}`).src  = "./img/heart-red.png";
    } else {
        document.getElementById(`like${index}`).src = "./img/heart-empty.png";
    }
}


function openComment(index) {
    document.getElementById(`commentDiv${index}`).classList.remove('d-none');
    document.getElementById(`commentDiv${index}`).classList.add('d-flex');

}


function closeComment(index) {
    document.getElementById(`commentDiv${index}`).classList.add('d-none');
    document.getElementById(`commentDiv${index}`).classList.remove('d-flex');
}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    let comment = input.value;

    posts[index]['comments'].push(comment);

    input.value = '';
    show();

    openComment();
}
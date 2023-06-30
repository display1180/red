const artistWrap = document.querySelector('.sect8 .row');

let tags = '';

fetch('./DB/artists.json').then((res)=> {
    return res.json();
})
.then((data) => {
    console.log(data);
    const memberData = data.artists;
    memberData.map((data)=> {
        tags += `
        <dl>
                        <dt><img src="${data.pic}" alt="${data.name}"></dt>
                        <dd>
                        ${data.quote}<br>
                            <span>${data.name}</span></dd>
                    </dl>
        `
    })
    console.log(artistWrap);
    console.log(tags);
    artistWrap.innerHTML = tags;
})

const navOpen = document.querySelector('.hamburger');
const navPop = document.querySelector('.navPop');
const close = document.querySelector('.close');
navOpen.addEventListener('click', ()=> {
    navPop.style.display = 'block';
})
close.addEventListener('click', ()=> {
    navPop.style.display = 'none';
})
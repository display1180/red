const wrap = document.querySelector('.vision .wrap');
const loading = document.querySelector('.vision .loading');
const input = document.querySelector('.vision #search');
const btnSearch = document.querySelector('.vision .btnSearch');
const btnInterest = document.querySelector('.vision .btnInterest');
const btnMine = document.querySelector('.vision .btnMine');
const api_key = 'ae5dbef0587895ed38171fcda4afb648';
const num = 50;
const myId = '198560836@N08';
const baseURL = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${api_key}&per_page=${num}&method=`;
const method_interest = 'flickr.interestingness.getList';
const method_user = 'flickr.people.getPhotos';
const method_search = 'flickr.photos.search';
const url_interest = `${baseURL}${method_search}&tags=davidbowie`;
const url_mine = `${baseURL}${method_user}&user_id=${myId}`;

fecthData(url_interest);

//미션1 - my gallery, interest gallery버튼 클릭시 갤러리 전환
//미션2 - 프로필영역에서 사용자 아이디 클릭시 해당 사용자 갤러리 전환

btnSearch.addEventListener('click', () => {
	const value = input.value.trim();
	input.value = '';
	if (value === '') return alert('검색어를 입력해주세요.');
	const url_search = `${baseURL}${method_search}&tags=${value}`;
	fecthData(url_search);
});
btnInterest.addEventListener('click', () => fecthData(url_interest));
btnMine.addEventListener('click', () => fecthData(url_mine));

async function fecthData(url) {
	loading.classList.remove('off');
	wrap.classList.remove('on');

	const res = await fetch(url);
	const json = await res.json();
	const items = json.photos.photo;
	console.log(items);
	createList(items);
}

function createList(arr) {
	let tags = '';

	arr.forEach((item) => {
		tags += `
        <li class='item'>
          <div>
            <a href='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg'>
              <img class='thumb' src='https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg' />
            </a>
            <p>${item.title === '' ? 'Have a good day!!' : item.title}</p>

						<article class='profile'>	
							<img src='http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg' />				
							<span>${item.owner}</span>
						</article>
          </div>
        </li>
      `;
	});
	wrap.innerHTML = tags;

	setLoading();
}

function setLoading() {
	const imgs = wrap.querySelectorAll('img');
	let count = 0;

	for (const el of imgs) {
		//만약 이미지에 엑박이 뜨면 onerror이벤트로 잡아서 디폴트 이미지로 대체
		el.onerror = () => {
			el.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif');
		};
		//디폴트로 변경된 이미지까지 포함해서 카운트 (무한로딩에 빠지지 않음)
		el.onload = () => {
			count++;
			count === imgs.length && isoLayout();
		};
	}
}

function isoLayout() {
	new Isotope(wrap, {
		itemSelector: '.item',
		transitionDuration: '0.5s',
	});
	wrap.classList.add('on');
	loading.classList.add('off');
}
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Orbitron, Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
//복수개의 클래스를 편하게 적용.(변수, 조건문)

//해당 폰트를 사용하고자 하는 부모요소에 해당 객체의 클래스명을 등록하는 자식 //컴포넌트에서는 자유롭게 해당 폰트 사용 가능.
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });
// const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300'], preload: true });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300'], preload: true });

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;
	console.log('current', currentPath);
	return (
		// 하나의 엘리먼트 요소에 클래스명 복수 적용
		// 하나의 복수개의 클래스명을 적용 가능하나
		// 구글 웹폰트 클ㄹ스는 복수개 적용 불가능
		<header id={styles.header} className={clsx(orbitron.className, notoSans.className)}>
			<h1>
				<Link href='/'>LOGO</Link>
			</h1>
			<ul id={styles.gnb}>
				<li>
					<Link href='/csr' className={currentPath === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? 'on' : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/post' className={currentPath === '/post' ? 'on' : ''}>
						POST
					</Link>
				</li>
				<li>
					<Link href='/redirect' className={currentPath === '/redirect' ? 'on' : ''}>
						REDIRECT
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;

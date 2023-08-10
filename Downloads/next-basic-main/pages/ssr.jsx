import SubLayout from '@/components/SubLayout';

function Ssr(props) {
	return (
		<SubLayout name={'SSR'}>
			<p>SSR 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getServerSideProps() {
	//getServerSideProps
	console.log('ssr');
	return {
		props: { now: performance.now() },
	};
}

export default Ssr;

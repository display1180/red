import SubLayout from '@/components/SubLayout';
import data from '@/public/members.json';

function ssg(props) {
	return (
		<SubLayout name={'SSG'}>
			<p>SSG 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>

			{props.members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}

			{props.members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
			{props.members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</SubLayout>
	);
}
{
	/* <SubLayout name={'SSG'}>
			<p>SSG 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>

			{props.members.map((member, idx) => {
				return (
					<article key={idx}>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</SubLayout> */
}
export async function getStaticProps() {
	//getStaticProps : ssg
	//해당 프로젝트를 빌드시에, 한 번만 호출.
	console.log('ssg');
	return {
		props: { now: performance.now(), members: data.members },
	};
}

export default ssg;

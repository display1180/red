import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return (
		<SubLayout>
			<p>{id}번째 포스트 상세페이지입니다.</p>
		</SubLayout>
	);
}

export default Detail;

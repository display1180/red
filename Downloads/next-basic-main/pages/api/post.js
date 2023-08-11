import { connectMongoDB } from '@/libs/MongoConnect';
import { Community } from '@/model/CommunitySchema';
import { Counter } from '@/model/CounterSchema';

//안쪽에서 await로 동기화 처리할 예정이므로 wrapping함수에 async지정
export default async function handler(req, res) {
	//전달된 요청 방식이 POST일 때 처리(글 저장)
	if (req.method === 'GET') {
		try {
			await connectMongoDB();
			const community = await Community.find();
			res.status(200).send(community);
		} catch (err) {
			res.status(400).send({ err });
		}
	}
	if (req.method === 'POST') {
		//클라이언트로부터 전달받은 데이터 정보 {title, content}
		const temp = req.body;
		try {
			//요청 성공시 실행될 구문
			await connectMongoDB();
			Counter.findOne({ name: 'counter' })
				.exec()
				.then((doc) => {
					//카운터 모델에서 가져온 고유번호를 클라이언트에서 넘어온 데이터에 추가.
					temp.communityNum = doc.communityNum;
					//위에서 결합된 객체를 Community Model 객체로 DB에 저장
					const CommunityModel = new Community(temp);
					CommunityModel.save().then(() => {
						//글 저장이 완료되면, Counter모델의 communityNum 값을 1 증가시킨다.
						Counter.updateOne({ name: 'counter' }, { $inc: { communityNum: 1 } })
							.exec()
							.then(() => {
								//카운터 정보값도 갱신완료되면, 클라이언트쪽에 저장 성공 응답 전달.
								res.json({ success: true });
							})
							.catch((err) => res.json({ success: false, err: err }));
					});
				});
		} catch (err) {
			//요청 실패시 실행될 구문
			res.status(400).send({ err });
		}
	}
	//await로 동기화하므로 then,catch문을 쓸수 없으니 try, catch문으로 예외처리
}
//데이터 저장 작업 순서
// 1. 저장할 데이터의 구조에 맞게, 스키마 생성
// 2. api router에서 스키마가 적용된 모델 객체에 클라이언트로부터 전달받은 데이터를 바인딩 후 DB에 저장한 뒤,
//응답 성공 클라이언트로 전송.
// 2-1 : 클라이언트에서 포스트 요청을 받음
// 2-2 : 카운터 모델에서 communityNum 가져온 뒤 클라이언트로부터 전달받은 객체와 결합.
// 2-3 : 결합된 객체를 Post 모델로 저장
// 2-4 : 저장이 완료되면 다시 Counter 값을 1 증가

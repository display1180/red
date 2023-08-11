import mongoose from 'mongoose';

//mongoose의 Schema생성자 함수로 글 저장 객체에 적용될 강제 틀 적용 (스키마)
const counterSchema = new mongoose.Schema(
	{
		name: String,
		communityNum: Number,
	},
	{ collection: 'Counter' }
);

//스키마를 적용한 모델생성함수를 내보냄
const Counter = mongoose.model('Counter', counterSchema);
export { Counter };
//모델 인스턴스가 한번 컴파일되면 overWrite불가하는 콜솔에러 해결
// 오류원인 : 이미 한번 생성된 컬렉션임에도 불구하고 데이터 변경 요청시에만 새로운 컬렉션 생성시도 문제
// 해결 : 해당 컬렉션이 없을 때만 생성하고, 이미 있으면 기존의 컬렉션 호출.

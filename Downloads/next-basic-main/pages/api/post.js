//안쪽에서 await 로 동기화 처리할 예정이므로 wrapping 함수에 async 지정
export default async function handler(req, res) {
	// await로 동기화하므로, then, catch문을 쓸 수 없으니, 트라이 캣치문으로 예외처리.
	try {
		// 요청 성공 시 실행될 구문
	} catch (err) {
		// 요청 실패 시 실행될 구문
	}
}

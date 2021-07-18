import React from "react";
import styled from "styled-components";

const MenuBar = () => {
	return (
		<Wrapper>
			<div className="job-category">
				<a href="/">
					<h2 className="more-btn">영업</h2>
				</a>
				<a href="/">
					<h3>기업영업</h3>
				</a>
				<a href="/">
					<h3>외부영업</h3>
				</a>
				<a href="/">
					<h3>영업 관리자</h3>
				</a>
				<a href="/">
					<h3>기술영업</h3>
				</a>
				<a href="/">
					<h3>주요고객사 담당자</h3>
				</a>
				<a href="/">
					<h3>솔루션 컨설턴트</h3>
				</a>
				<a href="/">
					<h3>해외영업</h3>
				</a>
				<a href="/">
					<h3 className="more-btn">더보기</h3>
				</a>
			</div>
			<div className="job-category">
				<a href="/">
					<h2 className="more-btn">미디어</h2>
				</a>
				<a href="/">
					<h3>콘텐츠 크리에이터</h3>
				</a>
				<a href="/">
					<h3>PD</h3>
				</a>
				<a href="/">
					<h3>영상 편집가</h3>
				</a>
				<a href="/">
					<h3>에디터</h3>
				</a>
				<a href="/">
					<h3>비디오 제작</h3>
				</a>
				<a href="/">
					<h3>작가</h3>
				</a>
				<a href="/">
					<h3>출판 기획자</h3>
				</a>
				<a href="/">
					<h3 className="more-btn">더보기</h3>
				</a>
			</div>
			<div className="job-category">
				<a href="/">
					<h2 className="more-btn">인사</h2>
				</a>
				<a href="/">
					<h3>인사담당</h3>
				</a>
				<a href="/">
					<h3>리크루터</h3>
				</a>
				<a href="/">
					<h3>조직문화</h3>
				</a>
				<a href="/">
					<h3>평가·보상</h3>
				</a>
				<a href="/">
					<h3>헤드헌터</h3>
				</a>
				<a href="/">
					<h3>HRD</h3>
				</a>
				<a href="/">
					<h3>HRBP</h3>
				</a>
				<a href="/">
					<h3 className="more-btn">더보기</h3>
				</a>
			</div>
			<div className="job-category">
				<a href="/">
					<h2 className="more-btn">게임 제작</h2>
				</a>
				<a href="/">
					<h3>게임 기획자</h3>
				</a>
				<a href="/">
					<h3>게임 그래픽 디자이너</h3>
				</a>
				<a href="/">
					<h3>모바일 게임 개발자</h3>
				</a>
				<a href="/">
					<h3>게임 클라이언트 개발자</h3>
				</a>
				<a href="/">
					<h3>게임 아티스트</h3>
				</a>
				<a href="/">
					<h3>유니티 개발자</h3>
				</a>
				<a href="/">
					<h3>게임 서버 개발자</h3>
				</a>
				<a href="/">
					<h3 className="more-btn">더보기</h3>
				</a>
			</div>
			<div className="job-category">
				<a href="/">
					<h2 className="more-btn">금융</h2>
				</a>
				<a href="/">
					<h3>회계담당</h3>
				</a>
				<a href="/">
					<h3>재무 담당자</h3>
				</a>
				<a href="/">
					<h3>IR</h3>
				</a>
				<a href="/">
					<h3>투자·증권</h3>
				</a>
				<a href="/">
					<h3>재무 분석가</h3>
				</a>
				<a href="/">
					<h3>애널리스트</h3>
				</a>
				<a href="/">
					<h3>내부통제 담당자</h3>
				</a>
				<a href="/">
					<h3 className="more-btn">더보기</h3>
				</a>
			</div>
			<div className="etc-wrapper">
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">엔지니어링·설계</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">물류·무역</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">제조·생산</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">의료·제약·바이오</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">교육</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">법률·법집행기관</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">식·음료</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">건설·시설</h2>
					</a>
				</div>
				<div className="job-category">
					<a href="/">
						<h2 className="more-btn">공공·복지</h2>
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border: 1px solid red;
	padding: 15px;
	max-width: 1060px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	.job-category {
		width: 160px;
	}
	.job-category a {
		display: block;
		position: relative;
	}
	.job-category a + a {
		margin-top: 10px;
	}
	.job-category h2 {
		font-size: 20px;
		margin-right: 30px;
	}
	.job-category h3 {
		color: #999;
	}
	.more-btn::before {
		position: absolute;
		right: 0;
		content: ">";
		font-size: 16px;
		color: black;
	}
	.etc-wrapper {
		border: 1px solid green;
		.job-category + .job-category {
			margin-top: 10px;
		}
	}
`;
export default MenuBar;

import React from "react";
import styled from "styled-components";

import logo2 from "../../assets/img-logo2.png";
import close from "../../assets/icon-close.svg";
import profile from "../../assets/img-profile.png";

const MobileList = ({ onCloseHamburger }) => {
	return (
		<Wrapper>
			<div className="buttons">
				<h1 className="logo">
					<a href="/">
						<img src={logo2} alt="원티드" />
					</a>
				</h1>
				<button type="button" className="close-btn" onClick={onCloseHamburger}>
					<img src={close} alt="메뉴 닫기 버튼" className="icon" />
				</button>
			</div>
			<ul className="gnb-mobile-list">
				<li>
					<a href="/" className="gnb-mobile-item my-wanted">
						<span>MY 원티드</span>
						<button type="button">
							<div className="profile-wrapper">
								<img
									src={profile}
									alt="마이 프로필 열기 버튼"
									className="profile"
								/>
							</div>
						</button>
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						프로필
					</a>
				</li>
				<li className="section">
					<a href="/" className="gnb-mobile-item">
						이력서
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						매치업
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						추천
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						지원 현황
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						프리랜서
					</a>
				</li>
				<li className="section">
					<a href="/" className="gnb-mobile-item">
						직군별 연봉
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item">
						커리어 성장
					</a>
				</li>
				<li className="section">
					<a href="/" className="gnb-mobile-item">
						기업 서비스
					</a>
				</li>
				<li>
					<a href="/" className="gnb-mobile-item log-out">
						로그아웃
					</a>
				</li>
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 20px;
	font-size: 20px;

	.buttons {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo img {
			width: 60px;
		}
		.close-btn {
			width: 25px;
			img {
				width: 17px;
			}
		}
	}

	.gnb-mobile-list {
		margin: 45px 0 15px;
		li {
			&:nth-child(2) {
				margin-top: 15px;
			}
		}
		li + li {
			margin-top: 30px;
		}
		.section {
			padding-top: 15px;
			border-top: 1px solid #eee;
			margin-top: 15px;
		}

		.my-wanted {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.gnb-mobile-item {
			button {
				.profile-wrapper {
					display: block;
					width: 42px;
					height: 42px;
					border: 1px solid #36f;
					border-radius: 50%;

					.profile {
						width: 40px;
						height: 40px;
					}
				}
			}
		}
		.log-out {
			color: #999;
		}
	}
`;

export default MobileList;

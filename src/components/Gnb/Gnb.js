import React, { useState } from "react";
import styled from "styled-components";

import NavList from "./NavList";
import MenuBar from "./MenuBar";
import HamburgerBtn from "./HamburgerBtn";

import logo from "../../assets/img-logo.png";
import profile from "../../assets/img-profile.png";
import search from "../../assets/icon-search.svg";
import notification from "../../assets/icon-notification.svg";

const Gnb = () => {
	const [menuBar, setMenuBar] = useState(false);
	const showMenu = (e) => {
		e.preventDefault();
		setMenuBar((menuBar) => !menuBar);
	};

	return (
		<Wrapper>
			<div className="gnb-wrapper">
				<div className="gnb-left">
					<h1 className="logo">
						<a href="/">
							<img src={logo} alt="원티드" />
						</a>
					</h1>
				</div>

				<nav className="gnb-nav">
					<h2 className="visually-hidden">메뉴</h2>
					<NavList onMouseEnter={showMenu} />
					<div className={menuBar ? "open-menu" : "close-menu"}>
						<MenuBar />
					</div>
				</nav>

				<ul className="gnb-right">
					<li className="gnb-right-item">
						<button type="button">
							<img src={search} alt="검색창 열기 버튼" className="icon" />
						</button>
					</li>
					<li className="gnb-right-item">
						<button type="button">
							<img src={notification} alt="알림 보기 버튼" className="icon" />
						</button>
					</li>
					<HamburgerBtn />
					<li className="gnb-right-item">
						<button type="button">
							<div className="profile-wrapper">
								<img
									src={profile}
									alt="마이 프로필 열기 버튼"
									className="profile"
								/>
							</div>
						</button>
					</li>
					<li className="gnb-right-item division">
						<a href="/" className="corp-service">
							기업 서비스
						</a>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

// styled-component 영역
const Wrapper = styled.div`
	border-bottom: 1px solid #e1e2e3;
	box-sizing: border-box;

	.gnb-wrapper {
		max-width: 1060px;
		margin: 0 auto;
		height: 50px;
		font-size: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;
	}

	.gnb-left {
		@media screen and (max-width: 768px) {
			display: none;
		}
		.logo img {
			width: 75px;
		}
	}
	.gnb-nav {
		.visually-hidden {
			position: absolute;
			width: 1px;
			height: 1px;
			margin: -1px;
			overflow: hidden;
			clip-path: polygon(0 0, 0 0, 0 0);
		}

		.open-menu {
			position: absolute;
			width: 100%;
			left: 0;
			margin-top: 20px;
			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		.close-menu {
			display: none;
		}
	}

	.gnb-right {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.profile-wrapper {
			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		.division::before {
			display: block;
			content: "";
			width: 1px;
			height: 10px;
			background-color: #e1e2e3;
			margin: auto 10px;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		.corp-service {
			margin-left: 10px;
			color: #666;
			line-height: 30px;
			height: 30px;
			border-radius: 15px;
			border: 1px solid #e1e2e3;
			padding: 0 10px;
			font-size: 14px;
			font-weight: 400;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		.gnb-right-item {
			height: 32px;
			margin: 0 10px;
			display: flex;
			align-items: center;

			.icon {
				width: 18px;
				height: 18px;
			}
			.profile-wrapper {
				width: 30px;
				height: 30px;
				border: 1px solid #e1e2e3;
				border-radius: 50%;

				.profile {
					width: 28px;
					height: 28px;
				}
			}
		}
		.division {
			margin: auto 0;
		}
	}
`;

export default Gnb;

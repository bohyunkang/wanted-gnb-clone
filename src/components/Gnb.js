import React from "react";
import styled from "styled-components";

import { MenuItems } from "./MenuItems";

import logo from "../assets/img-logo.png";
import profile from "../assets/img-profile.png";
import search from "../assets/icon-search.svg";
import notification from "../assets/icon-notification.svg";

const Gnb = () => {
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
					<ul className="gnb-nav-list">
						{MenuItems.map((item, index) => (
							<li key={index}>
								<a href={item.url} className={item.cName}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
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

		.gnb-nav-list {
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.gnb-nav-item {
				padding: 14px;
				font-weight: 600;
			}
			.gnb-nav-item:hover {
				border-bottom: 2px solid #e1e2e3;
			}
			.gnb-nav-item:active {
				border-bottom: 2px solid #3366ff;
			}
		}
	}

	.gnb-right {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.division::before {
			display: block;
			content: "";
			width: 1px;
			height: 10px;
			background-color: #e1e2e3;
			margin: auto 10px;
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
			margin-left: 0;
		}
	}
`;

export default Gnb;

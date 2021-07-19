import React from "react";
import styled from "styled-components";

const NavList = ({ onMouseEnter }) => {
	return (
		<Wrapper>
			<ul className="gnb-nav-list">
				<li className="mobile-only">
					<a href="/" className="gnb-nav-item">
						홈
					</a>
				</li>
				<li onMouseEnter={onMouseEnter}>
					<a href="/" className="gnb-nav-item">
						탐색
					</a>
				</li>
				<li>
					<a href="/" className="gnb-nav-item">
						커리어 성장
					</a>
				</li>
				<li className="web-only">
					<a href="/" className="gnb-nav-item">
						직군별 연봉
					</a>
				</li>
				<li className="web-only">
					<a href="/" className="gnb-nav-item">
						이력서
					</a>
				</li>
				<li className="web-only">
					<a href="/" className="gnb-nav-item">
						매치업
					</a>
				</li>
				<li className="web-only">
					<a href="/" className="gnb-nav-item">
						프리랜서
					</a>
				</li>
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.gnb-nav-list {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.gnb-nav-item {
			padding: 14px;
			font-weight: 600;
		}
		.mobile-only {
			@media screen and (max-width: 768px) {
				display: inline-block;
			}
		}
		.web-only {
			@media screen and (max-width: 768px) {
				display: none;
			}
		}
		.gnb-nav-item:hover {
			border-bottom: 2px solid #e1e2e3;
		}
		.gnb-nav-item:active {
			border-bottom: 2px solid #3366ff;
		}
	}
`;

export default NavList;

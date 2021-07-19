import React from "react";
import styled from "styled-components";
import hamburgerBtn from "../assets/icon-hamburgerBtn.svg";

const HamburgerBtn = () => {
	return (
		<Wrapper>
			<li className="gnb-right-item">
				<button type="button">
					<img src={hamburgerBtn} alt="메뉴 보기 버튼" className="icon" />
				</button>
			</li>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export default HamburgerBtn;

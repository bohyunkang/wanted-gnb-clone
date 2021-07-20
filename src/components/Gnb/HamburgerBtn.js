import React, { useState } from "react";
import styled from "styled-components";

import MobileList from "./MobileList";

import hamburgerBtn from "../../assets/icon-hamburgerBtn.svg";

const HamburgerBtn = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const openHamburger = (e) => {
		e.preventDefault();
		setHamburgerOpen((hamburgerOpen) => !hamburgerOpen);
	};

	return (
		<Wrapper>
			<li className="gnb-right-item" onClick={openHamburger}>
				<button type="button">
					<img src={hamburgerBtn} alt="메뉴 보기 버튼" className="icon" />
				</button>
			</li>
			<div className={hamburgerOpen ? "open-hamburger" : "close-hamburger"}>
				<MobileList onCloseHamburger={openHamburger} />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
	}

	.open-hamburger {
		position: absolute;
		background-color: white;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.close-hamburger {
		display: none;
	}
`;

export default HamburgerBtn;

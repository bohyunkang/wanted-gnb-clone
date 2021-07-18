import Main from "./pages/Main";
import styled from "styled-components";

function App() {
	return (
		<Wrapper>
			<Main />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* button 태그 기본값 초기화 */
	button {
		background: inherit;
		border: none;
		box-shadow: none;
		border-radius: 0;
		padding: 0;
		overflow: visible;
		cursor: pointer;
	}
	/* a 태그 기본값 초기화 */
	a {
		text-decoration: none;
		color: black;
	}
`;

export default App;

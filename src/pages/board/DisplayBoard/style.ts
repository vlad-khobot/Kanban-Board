import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
	
	@media(max-width: 1200px){
		flex-wrap: wrap;
	}
`;
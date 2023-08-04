import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;
  margin: 10px
`;
const style={
  nav:{
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    fontSize:'20px'
  }
}
function Navbar() {
    return (
      <div>
        <ul style={style.nav}>
          <li><StyledLink to='/'>Home</StyledLink></li>
          <li><StyledLink to='/favourite'>Favourite</StyledLink></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
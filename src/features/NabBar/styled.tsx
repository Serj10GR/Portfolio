import styled from 'styled-components/macro';
import { Link } from 'gatsby';

export const NavWrapper = styled.nav`
 margin: 40px auto;
 display: flex;
 justify-content: space-between;
`;

export const Logo = styled.h2`
  color: red;
`;

export const NavLinksWrapper = styled.ul`
`;

export const NavLink = styled(Link)`
 margin-left: 15px;
`;
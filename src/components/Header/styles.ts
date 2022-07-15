import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: centre;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s ease;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      /* A classe 'active' é inserida pelo react-router-dom */
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

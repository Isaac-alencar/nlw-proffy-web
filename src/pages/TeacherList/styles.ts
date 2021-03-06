import styled from "styled-components";

export const PageTeacherList = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const SearchTeacher = styled.form`
  margin-top: 3.2rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.2rem;
    width: 100%;
    height: 5.6rem;
    border: none;
    border-radius: 0.8rem;
    background-color: var(--color-secundary);
    color: var(--color-button-text);
    font: 700 1.6rem Archivo;
    text-decoration: none;
    cursor: pointer;

    transition: background-color 0.2s;
    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;

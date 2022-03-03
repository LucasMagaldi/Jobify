import styled from "styled-components";

const WrapperError = styled.main `
    .pageError {
        align-items: center;
        justify-content: center;
    }

    .containerError {
        display: flex;
        justify-content: center;
    }

    .notFound {
        width: 600px;
        margin-top: 15vh;
    }

    .NotFoundMessage {
        display: flex;
        justify-content: center;
        text-transform:none;
    }

  @media (max-width: 950px) {
    .notFound {
        width: 400px;
        margin-top: 50%;
    }
  }
`

export  default WrapperError;
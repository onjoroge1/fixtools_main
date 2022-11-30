import styled from "styled-components";
import { footerFonts } from "../GlobalsStyles/GlobalsStyles";

const StyledConversionTool = styled.div`
  margin-top: 10px;
  margin-bottom: 60px;
  min-height: 500px;
  .conversion-tools-container {
    /* background-color: orange; */
    min-height: 500px;
    form {
      /* background-color: green; */
      padding: 50px;
      /* border: 2px solid gray; */
      .text {
        /* background-color: magenta; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .main-heading {
          /* background-color: red; */
          padding-bottom: 40px;
          font-weight: 800;
          color: #212529;
          font-size: 4.5rem;
          /* background-color: red; */
          text-align: center;
          max-width: 800px;
          text-align: center;
          @media screen and (max-width: 500px) {
            font-size: 30px;
          }
        }
        .tag-line {
          text-align: center;
          /* background-color: green; */
          max-width: 800px;
          text-align: start;
          font-size: 2rem;
          font-weight: 400;
          @media screen and (max-width: 500px) {
            font-size: 15px;
          }
        }
      }

      .select-container {
        /* background-color: blue; */
        /* display: flex;
        flex-direction: column; */

        select,
        input {
       
          width: 90%;
          height: 50px;
          font-size: 20px;
          font-family: ${footerFonts};
          border: none;
          margin-top: 10px;
          border-radius: 3px;
          background-color: wheat;
          background-color: whitesmoke;
          width: 100%;
          
          padding:0px 15px;
        }
        .from-to {
          //  background-color: red; 
          margin: 30px 0px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 20px;
          @media screen and (max-width: 500px) {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
    .result {
      background-color: whitesmoke;
      min-height: 400px;
      width: 100%;
      margin-top: 30px;
      font-size: 40px;
      min-height: 150px;

      padding: 0.375rem 0.75rem;
      border-radius: 3px;
      font-weight: 700;
      color: #212529;
      font-size: 30px;

      h1{
        font-size:20px;
        font-family: ${footerFonts};
        color:#8e8e8e;
      }
    }
    button {
      /* background-color: royalblue; */
      border: none;
      padding: 4px 16px;
      margin-top: 30px;
      color: #0a171c;
      border: 1px solid #0a171c;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #0a171c;
        color: white;
      }
    }
    .btn-disable {
      background-color: #d3d3d3;
      border: none;
      color: gray;
      &:hover {
        background-color: #d3d3d3;
        color: gray;
      }
    }
  }
`;

export { StyledConversionTool };

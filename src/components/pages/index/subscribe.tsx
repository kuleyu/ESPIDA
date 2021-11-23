import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Wrapper = styled.div`
  margin-top: 40px;
  p {
    line-height: 9px;
    text-align: center;
    text-transform: capitalize;
    &:nth-child(1) {
      font-size: 1.125rem;
    }
    &:nth-child(3) {
      font-size: 0.875rem;
      a {
        color: var(--black);
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }
  form {
    margin: 50px auto 20px;
    text-align: center;
    input {
      --greyColor: #4a4a4a;
      --secGreyColor: #cacaca;

      font-size: 1.125rem;
      color: var(--greyColor);
      border-color: var(--greyColor);
      border-style: solid;
      border-width: 0 0 3px;
      outline: none;
      &:nth-child(1) {
        height: 50px;
        width: 585px;
        margin-right: 30px;
        padding: 0 0 0 5px;
        font-size: 1.125rem;
        ::placeholder {
          color: var(--secGreyColor);
          text-transform: uppercase;
        }
      }
      &:nth-child(2) {
        width: 110px;
        height: 50px;
        padding: 0;
        background-color: var(--greyColor);
        align-items: center;
        color: var(--white);
        cursor: pointer;
      }
    }
  }
`;

interface SubscribeProps {}

const Subscribe = ({}: SubscribeProps) => {
  const [email, setEmail] = useState("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    if (result.result === "success") return console.log(result.msg);
    return console.log("error");
  };
  return (
    <Wrapper>
      <p>
        Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun
        updates.
      </p>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email address"
          type="email"
          name="emil"
          id="mce-EMAIL"
          required
        />
        <input type="submit" value="sign up" />
      </form>
      <p>
        Note: You can opt-out at any time. See our <Link to="#">Privacy Policy</Link> and <Link to="#">Terms</Link>.
      </p>
    </Wrapper>
  );
};

export default Subscribe;

import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SubHeading>+ More than you'd ever imagine</SubHeading>
          <SignUp>GET STARTED</SignUp>
          <Description>
            Get 12 months for the price of 10 when you sign up for an annual
            Disney+ subscription, compared to paying monthly.
          </Description>
          <More>
            <em>Extraordinary</em> streaming January 25.
          </More>
          <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 100px;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

const SubHeading = styled.h2`
  margin: 20px auto;
  color: #f9f9f9;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 90%;
  letter-spacing: 1.5px;
  font-size: 1.2rem;
  padding: 1rem 0;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0;
  width: 95%;
`;

const More = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  margin: 24px;
  font-size: 0.8rem;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  max-width: 600px;
`;

export default Login;

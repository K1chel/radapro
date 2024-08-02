import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  url: string;
}

export const BASE_URL = process.env.HOST_NAME;

export const MagicLinkEmail = ({ url }: Props) => (
  <Html>
    <Head />
    <Preview>Radapro, your magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${BASE_URL}/logo.png`}
          alt="Radapro"
          width={48}
          height={48}
        />
        <Heading style={heading}>Your magic link</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <Link href={url} style={link}>
              👉 Click here to sign in 👈
            </Link>
          </Text>
          <Text style={paragraph}>
            If you didn&apos;t request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          <br />- Radapro
        </Text>
        <Hr style={hr} />
        <Img
          src={`${BASE_URL}/logo.png`}
          alt="Radapro"
          width={32}
          height={32}
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>Radapro</Text>
        <Text style={footer}>
          Please don&apos;t reply to this email. This email is sent from an
          unmonitored address.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#00bb2a200",
  cursor: "pointer",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};

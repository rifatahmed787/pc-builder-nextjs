import ErrorImg from "@/assets/images/404_Error_Page.png";
import Image from "next/image";
import { Button, Row, Col } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }} height>
      <Col span={24}>
        <div style={{ textAlign: "center" }}>
          <Head>
            <title>Error</title>
            <meta
              name="description"
              content="This is the news portal of programming hero made by Next.js"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/vercel.svg" />
          </Head>
          <Image
            src={ErrorImg}
            width={300}
            alt="error_image"
            style={{ display: "flex", margin: "50px auto" }}
          />
          <Link href="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default NotFoundPage;

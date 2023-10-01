import {
  HomeOutlined,
  LoginOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import DropdownMenu from "../UI/Dropdown";

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "blue",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC BUILDER
            </Link>
          </h1>
        </div>
        <Menu theme="white" mode="horizontal" className={styles.menu_items}>
          <Link href="/" style={{ color: "black" }}>
            <HomeOutlined style={{ padding: "0px 5px" }} />
            Home
          </Link>

          <Link href="/" style={{ margin: "0px 20px" }}>
            <DropdownMenu />
          </Link>

          <div>
            <Link
              href="/contact"
              style={{
                color: "white",
                backgroundColor: "blue",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              <LoginOutlined style={{ padding: "0px 5px" }} />
              LogIn
            </Link>
          </div>

          <div>
            <Link
              href="/contact"
              style={{
                color: "white",
                backgroundColor: "blue",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Build PC
            </Link>
          </div>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC Builder ©2023 Created by Md Rifat
      </Footer>
    </Layout>
  );
};
export default RootLayout;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Field from "../../field/Field";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/contextAPI";
import styled from "styled-components";
import Dropdownn from "../../dropDown/Dropdown";
import Contents from "./../../content/Content";
const { Header, Content, Footer, Sider } = Layout;
const Styled = styled.div`
  .box {
    background-color: #ccc;
    width: 100%;
  }
`;
Home.propTypes = {};
function Home(props) {
  const { data, setData, tasks, search, setSearch } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const handleOnSubmit = (value) => {
    setSearch(value);
    console.log(search);
  };
  const [isOpen, setIsOpen] = useState(false); // Set initial value to false
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider width="300px">
          <form className="form" onChange={handleSubmit(handleOnSubmit)}>
            <Field>
              <Input
                type="text"
                name="name"
                control={control}
                onClick={handleToggleDropdown}
                onBlur={handleToggleDropdown}
                placeholder="find user"
              ></Input>
              {isOpen ? <Dropdownn data={data}></Dropdownn> : ""}
            </Field>
          </form>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: "YOUR_COLOR_VARIABLE",
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Contents task={tasks}></Contents>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Test GEEK
          </Footer>
        </Layout>
      </Layout>
    </Styled>
  );
}

export default Home;

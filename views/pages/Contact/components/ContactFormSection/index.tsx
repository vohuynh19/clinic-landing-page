import { Button } from "@components";
import { Col, Form, Input, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import {
  Container,
  Content,
  LeftQuote,
  LeftQuoteWrapper,
  RightQuote,
  RightQuoteWrapper,
  Title,
  Wrapper,
} from "./styled";

const ContactFormSection = () => {
  const [form] = useForm();

  const onFinish = (params: any) => {
    console.log(form.getFieldsValue());
  };

  return (
    <Wrapper>
      <Container data-aos="flip-left">
        <LeftQuoteWrapper>
          <LeftQuote className="highlightFont">“</LeftQuote>
          <Title className="highlightFont">Let's get connected</Title>
        </LeftQuoteWrapper>

        <Content>
          <Form form={form} onFinish={onFinish}>
            <Row>
              <Col span={24}>
                <Form.Item name="name">
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item name="phoneNumber">
                  <Input placeholder="Phone number" />
                </Form.Item>
              </Col>

              <Col span={12} className="left">
                <Form.Item name="email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>

              <Col span={12} className="right">
                <Form.Item name="subject">
                  <Input placeholder="Subject line" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item name="desc">
                  <TextArea placeholder="Write your question here!" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item>
                  <div className="btn-row">
                    <Button type="primary" htmlType="submit">
                      Submit form
                    </Button>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Content>

        <RightQuoteWrapper>
          <RightQuote className="highlightFont">“</RightQuote>
        </RightQuoteWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactFormSection;

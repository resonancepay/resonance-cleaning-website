import { Col, Row } from "antd";
import React, { ReactNode } from "react";

export const GeneralWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Row justify={"center"} className=" w-full">
      <Col xs={22}>{children}</Col>
    </Row>
  );
};

import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";

const Converter = () => {
  const [file, setFile] = useState(null);

  const convertImage = (values) => {
    try {

      if(!file){
        message.error("Please Select an Image")
        return;
      }
      const url = URL.createObjectURL(file);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        const oriWidth = image.width;
        const oriHeight = image.height;
        const canvas = document.createElement("canvas");
        canvas.width = oriWidth;
        canvas.height = oriHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        const finalImage = canvas.toDataURL(values.format);
        const a = document.createElement("a");
        a.href = finalImage;
        a.download = `sample.${values.format.split("/").pop()}`;
        a.click();
      };
    } catch (err) {
      message.error(err.message);
    }
  };

  const options = [
    {
      label: "JPEG",
      value: "image/jpeg",
    },

    {
      label: "PNG",
      value: "image/png",
    },

    {
      label: "WEBP",
      value: "image/webp",
    },
    {
      label: "GIF",
      value: "image/gif",
    },
  ];
  return (
    <div>
      <Form onFinish={convertImage}>
        <Form.Item name="image" rules={[{ required: true }]}>
          <Input
            type="file"
            size="large"
            accept="image/*"
            placeholder="Choose file from the disk"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Item>

        <Form.Item name="format" rules={[{ required: true }]}>
          <Select size="large" placeholder="choose format" options={options} />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" danger htmlType="submit">
            Convert
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Converter;

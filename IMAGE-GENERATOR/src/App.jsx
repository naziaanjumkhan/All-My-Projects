import { Card, Tabs } from "antd";
import "animate.css";
import Converter from "./component/Converter";

const App = () => {
  const items = [
    {
      key: 1,
      label: "Converter",
      children:<Converter/>
    },
  ];
  return (
    <div className="bg-gray-400 min-h-screen py-12">
      <div className="w-7/12 mx-auto">
        <Card title={<h1 className="font-bold text-2xl">Image Application</h1>}>
          Select Image
          <Tabs items={items} />
        </Card>
      </div>
    </div>
  );
};

export default App;

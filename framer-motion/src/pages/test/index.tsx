import Rectangle from "@/components/Rectangle";
import Circle from "@/components/Circle";

export default function Test() {
  return (
    <>
      <Rectangle x={100} bgColor="red" />
      <Rectangle x={150} bgColor="blue" />
      <Rectangle x={50} bgColor="green" />
      <Circle x={50} bgColor="red" />
      <Circle x={100} bgColor="blue" />
      <Circle x={150} bgColor="green" />
    </>
  );
}

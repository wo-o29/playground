import { overlay } from "overlay-kit";
import Modal from "@/components/Modal";

export default function Home() {
  const handleModalOpen = () => {
    overlay.open(({ isOpen, close }) => {
      return (
        <Modal isOpen={isOpen} close={close}>
          <h2>모달</h2>
          <p>모달 내용</p>
        </Modal>
      );
    });
  };
  return <button onClick={handleModalOpen}>모달 열기</button>;
}

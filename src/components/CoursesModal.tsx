import CoursesList from "@/components/CoursesList";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";

function CoursesModal({ children }: { children: React.ReactNode }) {
  return (
    <Modal>
      {children}

      <ModalBody>
        <ModalContent className="overflow-y-auto">
          <CoursesList />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

export default CoursesModal;

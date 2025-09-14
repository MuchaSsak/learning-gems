import BodyBackground from "@/components/BodyBackground";
import CategoriesList from "@/components/CategoriesList";
import CoursesModal from "@/components/CoursesModal";
import HeaderTitle from "@/components/HeaderTitle";

function App() {
  return (
    <main className="max-sm:pl-8 sm:pl-24 h-screen bg-transparent">
      <BodyBackground />

      <HeaderTitle />

      <CoursesModal>
        <CategoriesList />
      </CoursesModal>
    </main>
  );
}

export default App;

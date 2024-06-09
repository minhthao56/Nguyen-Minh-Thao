import MainForm from "@/components/main-form";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <Nav />
      </div>
      <div className="w-full flex justify-center">
        <MainForm />
      </div>
    </>
  );
}

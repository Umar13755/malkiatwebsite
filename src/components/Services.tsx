import Card from "./ui/Card";
import { NotebookIcon } from "lucide-react";
export default function Services() {
  return (
    <>
      <section className="">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex justify-center gap-3 mb-4">
            <NotebookIcon size={38} color="#ef4444" />
            <h2 className="heading2">Services</h2>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <Card
              title="Viral Content Strategies"
              description="Fingerstache pinterest occupy wayfarers pickled semiotics everyday carry."
              linkText="Find Out"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card
              title="Viral Content Strategies"
              description="Fingerstache pinterest occupy wayfarers pickled semiotics everyday carry."
              linkText="Find Out"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card
              title="Viral Content Strategies"
              description="Fingerstache pinterest occupy wayfarers pickled semiotics everyday carry."
              linkText="Find Out"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </>
  );
}

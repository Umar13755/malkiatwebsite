import Card from "./ui/Card";
export default function Services() {
  return (
    <>
      <section>
        <div className="container py-24 mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            <h2 className="text-3xl font-extrabold text-white text-center mb-12">Services We Offer</h2>
          </div>
          <div className="lg:flex lg:flex-wrap flex-wrap -m-4 justify-center md:grid md:grid-cols-2">
            <Card
              title="Work Permits"
              description="We are currently dealing with UK, Canada, Germany, Lativa, Litheunia, & other European Countries."
              linkText="Read More"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card
              title="Study Visa"
              description="Dealing students for mainly UK,  Australia, Newzealand, USA, Italy, Germany, & many more Europe Countries."
              linkText="Read More"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card
              title="Tourist Visa & Visit Visa"
              description="Dealing tourists for Canada, United Kingdom, USA, Australia, Litheunia & many other European Countries"
              linkText="Read More"
              linkHref="#"
              imageSrc="https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </>
  );
}

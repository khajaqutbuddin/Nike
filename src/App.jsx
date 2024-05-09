import { 
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpacialOffer,
  Subscribe,
  SuperQuality} from "./Sections"

  import Nav from "./Components/Nav";

 const app =()=>(
  <main className=" relative">
    <Nav/> 
    <section className=" xl:padding-l wide:padding-r padding-b  ">
      <Hero />
    </section>
    <section className=" padding ">
      <PopularProducts />
    </section>
    <section className=" padding ">
      <SuperQuality />
    </section>
    <section className=" padding-x py-10 ">
      <Services />
    </section>
    <section className=" padding ">
      <SpacialOffer />
    </section>

    <section className=" bg-pale-blue w-full padding ">
      <CustomerReviews />
    </section>
    <section className=" padding-x sm: py-32 py-16 w-full ">
      <Subscribe />
    </section>
    <section className=" padding-x bg-black text-white padding-t pb-7  ">
      <Footer />
    </section>
  </main>
 );
 export default app;
import CustomerReviewCard from "../Components/CustomerReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" items-center text-center font-palanquin text-4xl font-semibold">
        What Our <span className=" text-coral-red">Customer</span> Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center "> See what our customers have to say about their experiences with our products. Your feedback is invaluable to us and helps others make informed decisions! </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" >
      {
        reviews.map((review)=>(
          <CustomerReviewCard id={review.id} {...review}/>
        ))
      }
      </div>
    </section>
  )
}

export default CustomerReviews
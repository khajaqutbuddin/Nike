
const ShoeCard = ({imgURL, bigShoeImage, changeBigShoeImage}) => {

    const HandleClick = ()=>{
       if( bigShoeImage !== imgURL.bigShoe ){
        changeBigShoeImage(imgURL.bigShoe)
       }else{

       }
    }
  return (
    <div className={` border-2 rounded-xl cursor-pointer max-sm:flex-1
         ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' :'border-transparent'}
    
    `} 
    onClick={HandleClick}
    >
          <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt="shoe Collection" height={127} width={103} className=" object-contain" />
         </div>

    </div>
  )
}

export default ShoeCard
function Card({title = "default", buttonText = " check it out", imageUrl}){
    return (
      <>
        <div className="max-w-sm bg-white border border-gray-200 mt-8 rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-60 object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black" >{title}</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
             {buttonText}
            </button>
          </div>
        </div>
        
      </>
     
    );
}

export default Card;
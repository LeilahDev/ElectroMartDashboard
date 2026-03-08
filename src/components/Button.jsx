
function Button ({btnText, type}) {
   return (
      <button className="bg-orange-700 flex justify-center item-center px-12 py-2
                         text-gray-200 text-sm rounded cursor-pointer
                         " type={type}> {btnText}</button>
   )
}

export default Button
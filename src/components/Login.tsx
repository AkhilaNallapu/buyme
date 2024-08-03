import guitar from "../assets/guitar.jpeg"
import phone from "../assets/phone.jpeg"
import google from "../assets/google.jpeg"
import { auth, googleProvider } from "../firebase/setup"
import { signInWithPopup } from "firebase/auth"

type popupProp ={
    setLoginPop:any
}
const Login = (props:popupProp) => {

    const googleSignin= async() => {
        try{
           await signInWithPopup( auth,googleProvider)
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h1 onClick={ () => props?.setLoginPop(false)} className="cursor-pointer font-semibold text-3xl">X</h1>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
                <img src={guitar} className="w-20 h-20 ml-44"/>
                <p className="text-base font-medium mt-5 text-center">Want to become a member of buyme?Then buy and sell the goods now!</p>
                <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                    <img src={phone} className="w-6 h-6"/>
                    <h1 className="font-semibold ml-24">
                        Continue with phone
                    </h1>
                </div>
                <div onClick={googleSignin} className="flex border border-gray-300 p-2 rounded-md mt-6 cursor-pointer">
                    <img src={google} className="w-6 h-6"/>
                    <h1 className="font-semibold ml-24">
                        Continue with Google
                    </h1>
                </div>
                <h1 className="text-center mt-4 cursor-pointer">OR</h1>
                <h1 className="text-center mt-1 mb-20 underline cursor-pointer">Login with email</h1>
                <h1 className="text-center text-xs">All your personal details are safe with us.</h1>
                <h1 className="text-center mt-2 text-xs">If you continue, you re accepting <span className="text-blue-600">BUYME Terms and Conditions and Privacy Policy</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
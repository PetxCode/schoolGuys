import pix from "../../Assets/email logo.png";
import VerifyCode from "./VerifyCode";

const Verification = () => {
  return (
    <div className="w-full h-[100vh] bg-blue-400">
      <div className="flex items-center justify-around pt-[100px]">
        <div className="w-[35%] h-[550px] bg-white flex items-center justify-center rounded-[20px]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="h-[150px] w-[150px]">
              <img src={pix} />
            </div>
            <div className="font-bold text-[20px]">Verify Your Email</div>
            <div className="">
              Please Enter the 4 digit sent <br /> to yourname@gmail.com
            </div>
            <div className="flex">
              <VerifyCode />
            </div>

            <div className="text-[blue] cursor-pointer">Resend Code</div>
            <div className="w-[240px] h-[55px] rounded-[5px] bg-blue-600 flex items-center justify-center text-[white] cursor-pointer">
              Continue
            </div>
            <div className="text-decoration: underline text-[blue] cursor-pointer">
              change your email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;

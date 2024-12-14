import { Link } from "react-router-dom";
import { useAuth } from "../Helpers/AuthHelper";
import ErrorDialog from "../Dialogs/ErrorDialog";
import { useState } from "react";
import { ResetPasswordType } from "../Models/ResetPasswordType";
import SuccessDialog from "../Dialogs/SuccessDialog";
async function resetPassword(
  event: any,
  auth: any,
  setShowErrorDialog: any,
  setErrMessage: any,
  setShowSuccessDialog: any,
  setSuccessMessage: any
) {
  event.preventDefault();
  var resetPasswordInfo: ResetPasswordType = {
    email: event.target[0].value.includes("@") ? event.target[0].value:undefined,
    username:!event.target[0].value.includes("@") ? event.target[0].value:undefined,
  };
  var response = await auth.resetPassword(resetPasswordInfo);
  if (response.status === 200) {
    setShowSuccessDialog(true);
  } else {
    setShowErrorDialog(true);
    setErrMessage(response.data.message);
  }
}

export default function ForgotPassword() {
  const auth = useAuth();
  const [showErrorDialog, setShowErrorDialog] = useState(true);
  const [errMessage, setErrMessage] = useState(
    "Kullanıcı adınız veya email adresiniz sistemimizde kayıtlı değildir! Üye olarak devam edebilirsiniz."
  );
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Şifre sıfırlama e-postası sistemde kayıtlı e-mail adresinize gönderilmiştir. Link üzerinden şifrenizi sıfırladıktan sonra giriş yapabilirsiniz!"
  );
  return (
    <>
      <ErrorDialog
        header="Giriş Bilgilerinize Ulaşamadık!"
        message={errMessage}
        buttonMessage="tamam"
        open={showErrorDialog}
        setOpen={setShowErrorDialog}
      />
      <SuccessDialog
        header="Giriş Bilgilerinize Ulaştık!"
        message={successMessage}
        buttonMessage="Tamam"
        open={showSuccessDialog}
        setOpen={setShowSuccessDialog}
        navigateTo={"/giris"}

      />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p-20 bg-white m-20 shadow-xl rounded-2xl">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Şifreni Sıfırla
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={(event) => {
              resetPassword(event, auth, setShowErrorDialog, setErrMessage,setShowSuccessDialog,setSuccessMessage);
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Kullanıcı Adı veya Email Adresi
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  tabIndex={1}
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                tabIndex={2}
              >
                Şifreni Sıfırla
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Üye değil misiniz?{" "}
            <Link
              to={"/Kayit"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              tabIndex={3}
            >
              Üye ol
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}


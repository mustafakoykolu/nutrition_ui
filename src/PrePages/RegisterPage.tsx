import { Link } from "react-router";
import { useAuth } from "../Helpers/AuthHelper";
import { RegisterType } from "../Models/RegisterType";
import SuccessDialog from "../Dialogs/SuccessDialog";
import { useState } from "react";
import ErrorDialog from "../Dialogs/ErrorDialog";
import { LoadingCarousel } from "../Layouts/LoadingCarousel";
import logo from "../assets/Logos/logo.png"

function registerValidation(pwd: string, repeatPwd: string) {
  if (pwd === repeatPwd) {
    return true;
  } else return false;
}
async function registerUser(
  event: any,
  auth: any,
  setShowSuccessDialog: any,
  setShowErrorDialog: any,
  setErrMessage: any
) {
  event.preventDefault();
  if (!registerValidation(event.target[2].value, event.target[3].value)) {
    setShowErrorDialog(true);
    setErrMessage("Şifre ve tekrar girdiğiniz şifre eşleşmemektedir!");
    return;
  }
  var registerUser: RegisterType = {
    username: event.target[0].value,
    email: event.target[1].value,
    password: event.target[2].value,
  };
  var response = await auth.register(registerUser);
  if (response.status === 200) {
    setShowSuccessDialog(true);
  } else {
    setShowErrorDialog(true);
    setErrMessage(response.data.message);
  }
}

function RegisterPage() {
  const auth = useAuth();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errMessage, setErrMessage] = useState(
    "Kayıt işlemi sırasında bir hata meydana gelmiştir."
  );
  const [loading,setLoading] = useState(false)

  return (
    <>
      <SuccessDialog
        header="Kayıt işlemi başarıyla tamamlanmıştır."
        message="Lütfen giriş yapın!"
        buttonMessage="tamam"
        open={showSuccessDialog}
        setOpen={setShowSuccessDialog}
        navigateTo={"/Giris"}
      />
      <ErrorDialog
        header="Kayıt işlemi sırasında bir hata meydana gelmiştir."
        message={errMessage}
        buttonMessage="tamam"
        open={showErrorDialog}
        setOpen={setShowErrorDialog}
      />
      {loading && <LoadingCarousel />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p-20 bg-white m-5 md:m-20 shadow-xl rounded-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-40 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Beslenme Dünyasına Kayıt Ol
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={async (event) => {
              setLoading(true)
              registerUser(
                event,
                auth,
                setShowSuccessDialog,
                setShowErrorDialog,
                setErrMessage
              );
              setLoading(false)
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Kullanıcı adı
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email adresi
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Şifre
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Şifre Tekrarı
              </label>
              <div className="mt-2">
                <input
                  id="password-repeat"
                  name="password-repeat"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kayıt ol
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Üye misiniz?{" "}
            <Link
              to={"/Giris"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Giriş yap
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;

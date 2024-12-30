import { Link } from "react-router-dom";
import { LoginType } from "../Models/LoginType";
import { useAuth } from "../Helpers/AuthHelper";
import ErrorDialog from "../Dialogs/ErrorDialog";
import { useState } from "react";
import { LoadingCarousel } from "../Layouts/LoadingCarousel";

import logo from "../assets/Logos/logo.png"
async function loginUser(
  event: any,
  auth: any,
  setShowErrorDialog: any,
  setErrMessage: any
) {
  event.preventDefault();
  var loginInfo: LoginType = {
    email: event.target[0].value.includes("@")
      ? event.target[0].value
      : undefined,
    username: !event.target[0].value.includes("@")
      ? event.target[0].value
      : undefined,
    password: event.target[1].value,
  };
  var response = await auth.login(loginInfo);
  if (response.status === 200) {
    auth.authorizeLoginUser(response.data);
  } else {
    setShowErrorDialog(true);
    setErrMessage(response.data.message);
  }
}

function LoginPage() {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errMessage, setErrMessage] = useState(
    "Lütfen daha sonra tekrar deneyiniz."
  );
  return (
    <>
      <ErrorDialog
        header="Giriş yapılamadı!"
        message={errMessage}
        buttonMessage="tamam"
        open={showErrorDialog}
        setOpen={setShowErrorDialog}
      />
      {loading && <LoadingCarousel />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p-20 bg-white m-5 md:m-20  shadow-xl rounded-2xl">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-40 w-auto"
        />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Beslenme Dünyasına Giriş Yap
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={async (event) => {
              setLoading(true);
              await loginUser(event, auth, setShowErrorDialog, setErrMessage);
              setLoading(false);
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Şifre
                </label>
                <div className="text-sm">
                  <Link
                    to={"/sifre-sifirla"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Şifrenizi mi unuttunuz?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  tabIndex={2}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                tabIndex={3}
              >
                Giriş yap
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Üye değil misiniz?{" "}
            <Link
              to={"/Kayit"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              tabIndex={4}
            >
              Üye ol
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

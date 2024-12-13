import { Link } from "react-router-dom";
import { LoginType } from "../Models/LoginType";
import { useAuth } from "../Helpers/AuthHelper";
import ErrorDialog from "../Dialogs/ErrorDialog";
import { useState } from "react";
async function loginUser(
  event: any,
  auth: any,
  setShowErrorDialog: any,
  setErrMessage: any
) {
  event.preventDefault();
  var registerUser: LoginType = {
    email: event.target[0].value,
    password: event.target[1].value,
  };
  debugger;

  var response = await auth.login(registerUser);
  debugger;

  if (response.status === 200) {
    auth.authorizeLoginUser(response.data);
  } else {
    setShowErrorDialog(true);
    setErrMessage(response.data.message);
  }
}

function LoginPage() {
  const auth = useAuth();
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 p-20 bg-white m-20 shadow-xl rounded-2xl">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Beslenme Dünyasına Giriş Yap
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={(event) => {
              loginUser(event, auth, setShowErrorDialog, setErrMessage);
            }}
            className="space-y-6"
          >
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Şifre
                </label>
                <div className="text-sm">
                  <Link
                    to={"#"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Şifrenizimi unuttunuz?
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
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

import { useState } from "react";
// Icons
import { Icons } from "../../../assets/Icons/Icons";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

// Showing Authentication row
import { updateProfile } from "firebase/auth";

function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const first = firstname.trim();
    const last = lastname.trim();
    const userEmail = email.trim();

    if (!first || !last || !userEmail || !password) {
      setErrorMessage("Please complete every field before creating an account.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password,
      );

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstname: first,
        lastname: last,
        email: userEmail,
        photoURL: "",
        isOnline: true,
        createdAt: serverTimestamp(),
      });

      await updateProfile(user, {
        displayName: `${first} ${last}`,
      });

      clearForm();
      // SignOut After Registration Complate
      await signOut(auth);
      alert("Registration Success. Please Login");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered. Please log in instead.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage("Please choose a stronger password.");
      } else {
        console.log("Register:", error.message);
        setErrorMessage("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-8 flex items-center justify-center relative overflow-hidden">
      <h1 className="absolute text-[14vw] leading-none opacity-10 font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent select-none">
        NexChat
      </h1>

      <section className="relative w-full max-w-[470px] rounded-lg border-4 border-white bg-white/70 p-6 shadow-xl backdrop-blur-lg sm:p-8">
        <div className="mb-7 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-purple-500">
            Start chatting
          </p>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900">
            Create account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join NexChat and keep your conversations in sync.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="relative block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">
                First name
              </span>
              <Icons.name className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-500" />
              <input
                className="h-12 w-full rounded-lg border border-transparent bg-indigo-100 p-2 ps-10 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                value={firstname}
                type="text"
                id="first-name"
                autoComplete="given-name"
                placeholder="John"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>

            <label className="relative block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">
                Last name
              </span>
              <Icons.name className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-500" />
              <input
                className="h-12 w-full rounded-lg border border-transparent bg-indigo-100 p-2 ps-10 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                value={lastname}
                type="text"
                id="last-name"
                autoComplete="family-name"
                placeholder="Doe"
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
          </div>

          <label className="relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Email
            </span>
            <Icons.user className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-500" />
            <input
              className="h-12 w-full rounded-lg border border-transparent bg-indigo-100 p-2 ps-10 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
              value={email}
              type="email"
              id="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Password
            </span>
            <Icons.passowrd className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-500" />
            <input
              className="h-12 w-full rounded-lg border border-transparent bg-indigo-100 p-2 ps-10 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
              value={password}
              type="password"
              id="password"
              autoComplete="new-password"
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {errorMessage && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            className="h-12 w-full rounded-lg bg-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-purple-300 disabled:hover:translate-y-0"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="pt-5 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            className="ms-1 font-extrabold text-purple-600 hover:text-purple-700"
            to="/"
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;

import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const onCaptchaChange = (value) => {
    if (value) setCaptchaVerified(true);
  };

  const onSubmit = async (data) => {
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA");
      return;
    }

    setIsSubmitting(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        createdAt: new Date(),
      });

      alert("🎉 Registration Successful!");
      reset();
      setCaptchaVerified(false);

      // Redirect to profile page
      navigate(`/profile?email=${data.email}`);
    } catch (error) {
      alert("❌ Registration Failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-blue-900 via-blue-600 to-blue-400 p-6">
      <div className="w-full mt-32 max-w-3xl backdrop-blur-3xl bg-white/20 rounded-3xl shadow-2xl border border-white/30 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-5 text-center rounded-xl shadow-md mb-6">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-blue-600 p-3 rounded-full shadow-lg">
              <User size={28} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">Register</h2>
          <p className="text-blue-100 text-sm">Be part of ICAISDA 2025 🔐</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-sm font-medium">First Name</label>
              <input
                {...register("firstName", { required: true })}
                className="w-full p-3 bg-white/70 rounded-xl"
                placeholder="firstname"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs">First name is required</p>
              )}
            </div>

            <div>
              <label className="text-white text-sm font-medium">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                className="w-full p-3 bg-white/70 rounded-xl"
                placeholder="lastname"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs">Last name is required</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-blue-500" size={18} />
              <input
                type="text"
                {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
                className="w-full pl-10 p-3 bg-white/70 rounded-xl"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs">Valid phone number required</p>
            )}
          </div>

          <div>
            <label className="text-white text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-blue-500" size={18} />
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full pl-10 p-3 bg-white/70 rounded-xl"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs">Email is required</p>}
          </div>

          <div>
            <label className="text-white text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-blue-500" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                className="w-full pl-10 pr-10 p-3 bg-white/70 rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-xs">Min 6 characters</p>}
          </div>

          <div>
            <label className="text-white text-sm font-medium">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-blue-500" size={18} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password || "Passwords do not match",
                })}
                className="w-full pl-10 pr-10 p-3 bg-white/70 rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LehcEIrAAAAAKaeg156Lh6C--NgRhrNVqRr1sl4"
              onChange={onCaptchaChange}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-xl transition-all ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-blue-800 hover:to-blue-600"
            }`}
          >
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="text-center mt-6 text-white text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-blue-200">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import terminal from "../../assets/terminal.png";
import arrowup from "../../assets/arrow-up.png";

const MySwal = withReactContent(Swal);

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      MySwal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "error",
        background: "#2f2f2f",
        color: "#fff",
        confirmButtonColor: "#3085d6",
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_fsue47a",
        "template_uab6fvw",
        formRef.current,
        "0FnHRP6EW5pTVPjBx"
      )
      .then(
        () => {
          setLoading(false);
          MySwal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success",
            background: "#2f2f2f",
            color: "#fff",
            confirmButtonColor: "#3085d6",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          MySwal.fire({
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            icon: "error",
            background: "#2f2f2f",
            color: "#fff",
            confirmButtonColor: "#d33",
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="c-space bg-slate-900" id="contact">
      <div className="relative min-h-screen h-full flex items-center justify-center flex-col">
        {/* Background Image with Responsive Handling */}
        <img
          src={terminal}
          alt="terminal"
          className="absolute inset-0 h-full w-full  z-0  min-h-full"
        />

        {/* Contact Container with Responsive Padding */}
        <div className="contact-container py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 mt-12 relative z-10 w-full max-w-xl">
          {/* Responsive Heading */}
          <h3 className="head-text text-2xl sm:text-3xl md:text-4xl text-center">
            Contact me
          </h3>

          {/* Responsive Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-12 md:mt-16 flex flex-col space-y-4 sm:space-y-5 md:space-y-6"
          >
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label block text-sm sm:text-base">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
                placeholder="Liam Oliver"
              />
            </label>
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label block text-sm sm:text-base">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
                placeholder="Liam@gmail.com"
              />
            </label>
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label block text-sm sm:text-base">
                Your message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <button
              className="field-btn flex items-center justify-center space-x-2 sm:space-x-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <img
                  src={arrowup}
                  alt="arrow-up"
                  className="field-btn_arrow w-4 h-4 sm:w-5 sm:h-5"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

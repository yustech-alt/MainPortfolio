import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

// ─── EmailJS credentials ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_rucexmn'
const EMAILJS_TEMPLATE_ID = 'template_r938og8'
const EMAILJS_PUBLIC_KEY  = '02dTx3DlruXUqBhsy'

const socials = [
  {
    Icon: FaGithub,
    label: 'GitHub',
    handle: '@yustech-alt',
    href: 'https://github.com/yustech-alt',
    color: 'hover:text-white',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    handle: '@yuslabi',
    href: 'https://linkedin.com/in/yuslabi',
    color: 'hover:text-[#0a66c2]',
  },
  {
    Icon: FaTwitter,
    label: 'Twitter',
    handle: '@yusufbalogun',
    href: 'https://twitter.com/yusufbalogun',
    color: 'hover:text-[#1da1f2]',
  },
  {
    Icon: FaEnvelope,
    label: 'Email',
    handle: 'yuslabibalogun2705@gmail.com',
    href: 'mailto:yuslabibalogun2705@gmail.com',
    color: 'hover:text-[#8b5cf6]',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // These match the {{variables}} in your EmailJS template
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `New message from ${formData.name}`,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setError('')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="min-h-screen py-24 md:py-32 px-8 md:px-12 relative flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 w-full"
        >
          <p className="text-[#8b5cf6] text-xs font-semibold tracking-[0.3em] uppercase mb-5">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] mx-auto rounded-full" />
          <p className="text-[#94a3b8] mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open.
            I&apos;ll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-stretch w-full max-w-5xl">

          {/* Left - Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] h-full">
              <div className="bg-[#0f0f17] rounded-3xl p-8 md:p-10 flex flex-col gap-4 h-full min-h-0">
                <h3 className="text-lg font-bold text-white mb-3">Let&apos;s Connect 🤝</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  I&apos;m currently available for freelance work and internship
                  opportunities. If you have a project that needs some creative
                  work, I&apos;d love to hear about it.
                </p>

                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className={`flex items-center gap-4 p-5 rounded-2xl bg-[#1a1a2e] hover:bg-[#8b5cf6]/10 border border-transparent hover:border-[#8b5cf6]/30 text-[#94a3b8] ${social.color} transition-colors duration-300 group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 group-hover:bg-[#8b5cf6]/20 flex items-center justify-center transition-colors duration-300">
                      <social.Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-[#64748b] font-medium">{social.label}</p>
                      <p className="text-sm font-semibold text-[#f1f5f9]">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-[#8b5cf6]/40 to-[#6d28d9]/40 h-full">
              <div className="bg-[#0f0f17] rounded-3xl p-8 md:p-10 h-full min-h-0 flex flex-col">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center gap-4 py-12"
                  >
                    <div className="text-6xl">🎉</div>
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-[#94a3b8]">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible!
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-8 py-4 bg-[#8b5cf6] hover:bg-[#6d28d9] text-white text-sm font-semibold rounded-full transition-colors duration-300 min-h-[48px]"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                    <h3 className="text-lg font-bold text-white mb-3">Send a Message 📨</h3>

                    {/* Name */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="name" className="text-xs font-semibold text-[#94a3b8] tracking-wider uppercase">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-[#1a1a2e] border border-[#8b5cf6]/20 focus:border-[#8b5cf6] outline-none text-[#f1f5f9] placeholder:text-[#64748b] text-sm px-5 py-3.5 rounded-xl transition-colors duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-[#94a3b8] tracking-wider uppercase">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-[#1a1a2e] border border-[#8b5cf6]/20 focus:border-[#8b5cf6] outline-none text-[#f1f5f9] placeholder:text-[#64748b] text-sm px-5 py-3.5 rounded-xl transition-colors duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-[#94a3b8] tracking-wider uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Hey Yusuf, I'd love to work with you on..."
                        className="bg-[#1a1a2e] border border-[#8b5cf6]/20 focus:border-[#8b5cf6] outline-none text-[#f1f5f9] placeholder:text-[#64748b] text-sm px-5 py-3.5 rounded-xl transition-colors duration-300 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <p className="text-red-400 text-xs text-center">{error}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] hover:opacity-90 disabled:opacity-60 text-white font-semibold text-sm rounded-full transition-opacity duration-300 shadow-lg shadow-[#8b5cf6]/30 mt-4 min-h-[48px]"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
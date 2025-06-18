"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Swal from 'sweetalert2'

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")
  const [lang, setLang] = useState("fr")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async () => {
    if (!email || !mobile) {
      setMessage(lang === "fr" ? "Merci de remplir tous les champs correctement." : "يرجى ملء جميع الحقول بشكل صحيح.")
      return
    }

    setIsLoading(true)
    console.log("Inscription:", { email, mobile })

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      router.push("/thank-you")
    }, 1000)
  }

  const handleButton1Click = () => {
    Swal.fire({
      title: 'Button 1',
      text: 'is working1',
      icon: 'success'
    })
  }



  const handleButton3Click = () => {
    Swal.fire({
      title: 'Button 3',
      text: 'use client',
      icon: 'success'
    })
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-white rounded-md border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
        >
          {lang === "fr" ? "🇸🇦 العربية" : "🇫🇷 Français"}
        </button>
      </div>

      {lang === "fr" ? (
        <>
          {/* French Content */}
          <section className="relative px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                📚{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Résumés audio
                </span>{" "}
                de livres en quelques minutes
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Découvrez des idées puissantes extraites des meilleurs livres en développement personnel, business, et
                bien plus... en format audio résumé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleButton1Click}
                >
                  🎧 Écouter un extrait gratuit
                </Button>
                {/* <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  onClick={handleButton2Click}
                >
                  Button 2
                </Button>
                <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                  onClick={handleButton3Click}
                >
                  Button 3
                </Button> */}
              </div>
              <p className="text-sm text-gray-500 mt-4">Composez *789*1# pour activer votre accès Premium</p>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-6 py-20 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Pourquoi choisir BookEcho ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gagnez du temps</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque résumé dure entre 5 et 15 minutes pour une efficacité maximale.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Voix naturelles IA</h3>
                  <p className="text-gray-600 leading-relaxed">Une écoute fluide et agréable, disponible partout.</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Écoute offline</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Téléchargez vos résumés préférés et écoutez-les sans connexion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="px-6 py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Ils en parlent mieux que nous</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">L</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Leila</p>
                      <p className="text-sm text-gray-500">Étudiante en droit</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "J'écoute un résumé chaque matin en me préparant, c'est devenu mon rituel !"
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">S</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Sami</p>
                      <p className="text-sm text-gray-500">Entrepreneur</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "Une super alternative à la lecture longue. J'apprends tout en conduisant."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">🎧 Essayez maintenant gratuitement !</h2>
              <p className="text-xl mb-8 opacity-90">
                Envie de découvrir ? Profitez de 3 jours d'accès offerts à tous les résumés audio.
              </p>
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border-white text-lg px-8 py-4 font-bold shadow-lg"
              onClick={handleButton3Click} >
                Commencer l'écoute
              </Button>
              <p className="text-sm mt-4 opacity-75">Activez avec *789*1# depuis votre mobile</p>
            </div>
          </section>

          {/* Signup Section */}
          <section className="px-6 py-20 bg-white">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📍 Inscrivez-vous pour recevoir nos nouveautés</h2>
              <p className="text-gray-600 mb-8">
                Recevez chaque semaine un résumé gratuit directement dans votre boîte mail.
              </p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Votre numéro de mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? "Inscription en cours..." : "S'inscrire"}
                </Button>
              </div>
              {message && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-4">Pas de spam. Désinscription possible à Occupation possible à tout moment.</p>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Arabic Content */}
          <section className="relative px-6 py-20 text-center" dir="rtl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                📚{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ملخصات صوتية
                </span>{" "}
                للكتب في دقائق
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                اكتشف أفكاراً قوية مستخرجة من أفضل الكتب في التطوير الشخصي والأعمال وأكثر... بصيغة ملخص صوتي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleButton1Click}
                >
                  🎧 استمع لعينة مجانية
                </Button>
                {/* <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                  onClick={handleButton2Click}
                >
                  زر 2
                </Button>
                <Button 
                  className="text-lg px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                  onClick={handleButton3Click}
                >
                  زر 3
                </Button> */}
              </div>
              <p className="text-sm text-gray-500 mt-4">اطلب *789*1# لتفعيل الوصول المميز</p>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-6 py-20 bg-white" dir="rtl">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">لماذا تختار BookEcho؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">وفر وقتك</h3>
                  <p className="text-gray-600 leading-relaxed">كل ملخص يستغرق بين 5 و15 دقيقة لأقصى فعالية.</p>
                </div>
                <div className="text-center group">
                  <div

 className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">أصوات ذكية طبيعية</h3>
                  <p className="text-gray-600 leading-relaxed">استماع سلس وممتع، متاح في كل مكان.</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">استماع بدون اتصال</h3>
                  <p className="text-gray-600 leading-relaxed">حمّل ملخصاتك المفضلة واستمع إليها بدون إنترنت.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="px-6 py-20 bg-gray-50" dir="rtl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">يتحدثون عنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">ل</span>
                    </div>
                    <div className="mr-4">
                      <p className="font-semibold text-gray-900">ليلى</p>
                      <p className="text-sm text-gray-500">طالبة حقوق</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "أستمع لملخص كل صباح أثناء الاستعداد، أصبح طقسي اليومي!"
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">س</span>
                    </div>
                    <div className="mr-4">
                      <p className="font-semibold text-gray-900">سامي</p>
                      <p className="text-sm text-gray-500">رائد أعمال</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"بديل رائع للقراءة الطويلة. أتعلم أثناء القيادة."</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" dir="rtl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">🎧 جرب الآن مجاناً!</h2>
              <p className="text-xl mb-8 opacity-90">
                تريد الاكتشاف؟ استفد من 3 أيام وصول مجاني لجميع الملخصات الصوتية.
              </p>
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border-white text-lg px-8 py-4 font-bold shadow-lg"
              >
                ابدأ الاستماع
              </Button>
              <p className="text-sm mt-4 opacity-75">فعّل بـ *789*1# من هاتفك المحمول</p>
            </div>
          </section>

          {/* Signup Section */}
          <section className="px-6 py-20 bg-white" dir="rtl">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">📍 سجل لتلقي جديدنا</h2>
              <p className="text-gray-600 mb-8">احصل كل أسبوع على ملخص مجاني مباشرة في بريدك الإلكتروني.</p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="عنوان بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="رقم هاتفك المحمول"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? "جاري التسجيل..." : "سجل الآن"}
                </Button>
              </div>
              {message && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-4">لا توجد رسائل مزعجة. يمكن إلغاء الاشتراك في أي وقت.</p>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            {lang === "fr" ? "© 2025 BookEcho. Tous droits réservés." : "© 2025 BookEcho. جميع الحقوق محفوظة."}
          </p>
        </div>
      </footer>
    </div>
  )
}
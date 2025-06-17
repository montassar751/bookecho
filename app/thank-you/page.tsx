"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎉</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Merci Pour votre inscription !</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Vous recevrez bientôt nos résumés audio exclusifs par email.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Prochaine étape :</strong> Vérifiez votre boîte email pour confirmer votre inscription.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-800">
                <strong>Accès Premium :</strong> Composez *789*1# pour activer votre essai gratuit de 3 jours.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            ⬅ Retour à l'accueil
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">Vous pouvez fermer cette page en toute sécurité.</p>
      </div>
    </div>
  )
}

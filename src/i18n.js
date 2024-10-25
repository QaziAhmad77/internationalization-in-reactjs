import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"

i18next.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    lng: "en",
    // resources: {
    //     en: {
    //         translation: {
    //             greeting: "Hello, Welcome",
    //             description: {
    //                 line1: "Hello this is me Qazi Ahmad from Peshawar Pakistan. <1>{{channel}}</1>",
    //                 line2: "I'm learning Internationalisation",
    //             }
    //         }
    //     },
    //     fr: {
    //         translation: {
    //             greeting: "Bonjour, Bienvenue",
    //             description: {
    //                 line1: "Bonjour, c'est moi Qazi Ahmad de Peshawar, Pakistan. <1>{{channel}}</1>",
    //                 line2: "J'apprends l'internationalisation"
    //             }
    //         }
    //     },
    //     hi: {
    //         translation: {
    //             greeting: "नमस्ते, स्वागत है",
    //             description: {
    //                 line1: "नमस्ते, यह मैं हूँ, काज़ी अहमद, पेशावर, पाकिस्तान से. <1>{{channel}}</1>",
    //                 line2: "मैं अंतर्राष्ट्रीयकरण सीख रहा हूँ"
    //             }
    //         }
    //     },
    //     ar: {
    //         translation: {
    //             greeting: "مرحبًا، أهلاً وسهلاً",
    //             description: {
    //                 line1: "مرحبًا، أنا قاضي أحمد من بيشاور، باكستان <1>{{channel}}</1>",
    //                 line2: "أنا أتعلم التدويل"
    //             }
    //         }
    //     }
    // }
})

export default i18next;